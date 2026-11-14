import { createStore, action, computed, persist } from "easy-peasy";
import { parseISO } from "date-fns";
import filterTransByBudgetCycle, { getTransInPrevCycle } from "./utils/filterTransByBudgetCycle";
import convCurrency from "./utils/convCurrency";

export default createStore({
  isCollapsed: false,
  setIsCollapsed: action((state, payload) => {
    state.isCollapsed = payload;
  }),
  activeOutlet: "Dashboard",
  setActiveOutlet: action((state, payload) => {
    state.activeOutlet = payload;
  }),
  expenses: {
    entertainment: 2,
    food: 78,
    transport: 90,
    bills: 4,
  },
  history: persist({
    transactions: [],

    setTransactions: action((state, payload) => {
      state.transactions = payload;
    }),

    addTransaction: action((state, payload) => {
      state.transactions.push(payload);
    }),

    editTransaction: action((state, payload) => {
      state.transactions = state.transactions.map(trans => trans.id === payload.id ? payload : trans)
    }),

    deleteTransaction: action((state, payload) => {
      state.transactions = state.transactions.filter(trans => trans.id !== payload)
    }),
  }, {
    storage: localStorage
  }),


  getTotalAmountInCycle: computed((state) => (type, prev) => {
    const filterFunc = prev ? getTransInPrevCycle : filterTransByBudgetCycle
    const transInCycle = filterFunc(state.history.transactions, state.settings.startDate)
    const totalInCurrency = transInCycle.reduce((accum, transaction) => {
      const targetRate = state.ratesCache.cache[transaction.date][state.settings.currency]
      const amountInCurrency = convCurrency(transaction.amount, state.settings.currency, transaction.rateToUSD, targetRate)
      return transaction.type === type ? amountInCurrency + accum : accum;
    }, 0)
    return parseFloat(totalInCurrency.toFixed(2));
  }),

  getTotalForCategoryInCycle: computed((state) => (category, prev) => {
    const filterFunc = prev ? getTransInPrevCycle : filterTransByBudgetCycle
    const transInCycle = filterFunc(state.history.transactions, state.settings.startDate)
    const totalInCurrency = transInCycle.filter((transaction) => transaction.category === category)
      .reduce((accum, transaction) => {
        const targetRate = state.ratesCache.cache[transaction.date][state.settings.currency]

        const amountInCurrency = convCurrency(transaction.amount, state.settings.currency, transaction.rateToUSD, targetRate)
        return accum + amountInCurrency
      }, 0)
    return parseFloat(totalInCurrency.toFixed(2))
  }),



  settings: persist({
    currency: "NGN",
    setCurrency: action((state, payload) => {
      state.currency = payload;
    }),
    isDark: false,
    setIsDark: action((state, payload) => {
      state.isDark = payload
    }),
    startDate: "",
    setStartDate: action((state, payload) => {
      state.startDate = payload
    }),
    defaultCategory: "food",
    setDefaultCategory: action((state, payload) => {
      state.defaultCategory = payload
    })
  }),

  getPercentExpenseInCycle: computed((state) => (category) => {
    const totalExpense = state.getTotalAmountInCycle("expense");
    if (totalExpense === 0) return 0;
    return (state.getTotalForCategoryInCycle(category) / totalExpense) * 100;
  }),

  recentTransactions: computed((state) => {
    const now = Date.now()
    return [...state.history.transactions].sort(
      (a, b) => parseISO(b.date).getTime() - parseISO(a.date).getTime(),
    ).filter(
      (transaction) => parseISO(transaction.date).getTime() <= now,
    )
      .slice(0, 4)
  },
  ),
  symbol: computed((state) =>
    state.settings.currency === "USD"
      ? "$"
      : state.settings.currency === "EUR"
        ? "€"
        : "₦",
  ),
  getTransactionById: computed(
    (state) => (id) =>
      state.history.transactions.find((transaction) => id === transaction.id),
  ),
  categoryArray: [
    { value: "food", label: "Food" },
    { value: "entertainment", label: "Entertainment" },
    { value: "bills", label: "Bills" },
    { value: "transport", label: "Transport" },
    { value: "health", label: "Health" },
    { value: "shopping", label: "Shopping" },
    { value: "income", label: "Income" }
  ],
  typeArray: [
    { value: "income", label: "income" },
    { value: "expense", label: "Expense" },
  ],

  getFilteredCategories: computed(state => type => {
    if (type === "income") return state.categoryArray.filter(cat => cat.value === "income")
    return state.categoryArray.filter(cat => cat.value !== "income")
  }),
  transactionsSortedByDate: computed((state) =>
    [...state.history.transactions].sort(
      (a, b) => parseISO(b.date).getTime() - parseISO(a.date).getTime(),
    ),
  ),

  allocations: persist({
    budgets: [],
    addBudget: action((state, payload) => {
      state.budgets.push(payload);
    }),
    deleteBudget: action((state, payload) => {
      state.budgets = state.budgets.filter(budget => budget.id !== payload)
    }),
    editBudget: action((state, payload) => {
      state.budgets = state.budgets.map(budget => {

        return budget.id === payload.id ? payload : budget
      })
    }),
    setBudgets: action((state, payload) => {
      state.budgets = payload
    })
  }, {
    storage: localStorage
  }),

  targets: persist({
    goals: [],

    addGoal: action((state, payload) => {
      state.goals.push(payload);
    }),
    deleteGoal: action((state, payload) => {
      state.goals = state.goals.filter(goal => goal.id !== payload)
    }),
    editGoal: action((state, payload) => {
      state.goals = state.goals.map(goal => goal.id === payload.id ? payload : goal)
    }),
    setGoals: action((state, payload) => {
      state.goals = payload
    })
  }, {
    storage: localStorage
  }),

  ratesCache: persist({
    cache: {},
    setRateCache: action((state, payload) => {
      state.cache = { ...state.cache, ...payload }
    })
  },
    { storage: localStorage }),
  isLoading: false,
  setIsLoading: action((state, payload) => { state.isLoading = payload }),
  fetchError: null,
  setFetchError: action((state, payload) => {
    state.fetchError = payload
  }),
  latestDate: computed(state => Object.keys(state.ratesCache.cache).sort().pop()),
  isNavOpen: false,
  setIsNavOpen: action((state, payload) => {
    state.isNavOpen = payload
  }),

  changeInBal: computed(state => {
    const thisCycleBal = state.getTotalAmountInCycle("income") - state.getTotalAmountInCycle("expense")
    const prevCycleBal = state.getTotalAmountInCycle("income", true) - state.getTotalAmountInCycle("expense", true)
    return parseFloat((thisCycleBal - prevCycleBal).toFixed(2))
  }),

  changeInExpense: computed(state => {
    const thisCycleExpense = state.getTotalAmountInCycle("expense")
    const prevCycleExpense = state.getTotalAmountInCycle("expense", true)
    return parseFloat((thisCycleExpense - prevCycleExpense).toFixed(2))
  }),

  changeInIncome: computed(state => {
    const thisCycleIncome = state.getTotalAmountInCycle("income")
    const prevCycleIncome = state.getTotalAmountInCycle("income", true)
    return parseFloat((thisCycleIncome - prevCycleIncome).toFixed(2))
  }),
}
);
