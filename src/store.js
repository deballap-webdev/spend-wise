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
    transactions: [
      { category: "entertainment", id: 1, date: "2026-10-03", type: "expense", note: "", description: "Prime videos", amount: 15000, currency: "NGN", rateToUSD: 1548.0 },
      { category: "transport", id: 2, date: "2026-10-07", type: "expense", note: "", description: "Uber", amount: 30000, currency: "USD", rateToUSD: 1.0 },
      { category: "income", id: 3, date: "2026-11-09", type: "income", note: "", description: "Freelance", amount: 3000000, currency: "NGN", rateToUSD: 1509.0 },
      { category: "food", id: 4, date: "2026-03-18", type: "expense", note: "", description: "Fruits", amount: 19000, currency: "NGN", rateToUSD: 1406.0 },
      { category: "bills", id: 5, date: "2023-12-11", type: "expense", note: "", description: "electricity", amount: 20000, currency: "USD", rateToUSD: 1.0 },
      { category: "health", id: 6, date: "2027-05-08", type: "expense", note: "", description: "hospital", amount: 5000, currency: "NGN", rateToUSD: 1530.0 },
      { category: "shopping", id: 7, date: "2026-11-08", type: "expense", note: "2025-09-18", description: "new shoes", amount: 10000, currency: "NGN", rateToUSD: 1490.0 },
      { category: "shopping", id: 8, date: "2026-11-08", type: "expense", note: "", description: "new shoes", amount: 10000, currency: "EUR", rateToUSD: 0.92 },
      { category: "shopping", id: 9, date: "2026-10-07", type: "expense", note: "", description: "new shoes", amount: 10000, currency: "USD", rateToUSD: 1.0 },
      { category: "income", id: 10, date: "2026-10-12", type: "income", note: "", description: "birthday gift", amount: 50000, currency: "USD", rateToUSD: 1.0 },
      { category: "health", id: 11, date: "2026-10-07", type: "expense", note: "", description: "braces", amount: 20000, currency: "USD", rateToUSD: 1.0 }
    ],

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
    budgets: [
      {
        category: "transport",
        limit: 30000,
        currency: "NGN",
        rateToUSD: 1458,
        id: "",
      },
    ],
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
    goals: [
      {
        name: "Upwork Connects",
        targetAmount: 80000,
        savedAmount: 9000,
        targetDate: "2027-12-07",
        currency: "NGN",
        id: 1,
      },
      {
        name: "Laptop",
        targetAmount: 800000,
        savedAmount: 450000,
        targetDate: "2027-12-07",
        currency: "EUR",
        id: 2,
      },
      {
        name: "Health",
        targetAmount: 80000,
        savedAmount: 4500,
        targetDate: "2027-12-07",
        currency: "NGN",
        id: 3,
      },
      {
        name: "PGD",
        targetAmount: 900000,
        savedAmount: 450000,
        targetDate: "2027-12-07",
        currency: "USD",
        id: 4,
      },
    ],

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
    cache: {
      "2026-10-28": { "USD": 1.0, "EUR": 0.92, "NGN": 1500.0 },
      "2026-10-03": { "USD": 1.0, "EUR": 0.91, "NGN": 1548.0 },
      "2026-10-07": { "USD": 1.0, "EUR": 0.91, "NGN": 1547.0 },
      "2026-10-06": { "USD": 1.0, "EUR": 0.91, "NGN": 1547.0 },
      "2026-11-09": { "USD": 1.0, "EUR": 0.94, "NGN": 1509.0 },
      "2026-03-18": { "USD": 1.0, "EUR": 0.92, "NGN": 1406.0 },
      "2023-12-11": { "USD": 1.0, "EUR": 0.91, "NGN": 1520.0 },
      "2027-05-08": { "USD": 1.0, "EUR": 0.91, "NGN": 1530.0 },
      "2026-11-08": { "USD": 1.0, "EUR": 0.92, "NGN": 1490.0 },
      "2026-10-12": { "USD": 1.0, "EUR": 0.93, "NGN": 1468.0 }
    },
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
    console.log(prevCycleBal)
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
