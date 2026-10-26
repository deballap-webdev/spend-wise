import { createStore, action, computed, persist } from "easy-peasy";
import { parseISO } from "date-fns";

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
      {
        category: "entertainment",
        id: 1,
        date: "2026-10-03",
        type: "expense",
        note: "",
        description: "Prime videos",
        amount: 15000,
      },
      {
        category: "transport",
        id: 2,
        date: "2026-10-07",
        type: "expense",
        note: "",
        description: "Uber",
        amount: 30000,
      },
      {
        category: "income",
        id: 3,
        date: "2026-11-09",
        type: "income",
        note: "",
        description: "Freelance",
        amount: 3000000,
      },
      {
        category: "food",
        id: 4,
        date: "2026-03-18",
        type: "expense",
        note: "",
        description: "Fruits",
        amount: 19000,
      },
      {
        category: "bills",
        id: 5,
        date: "2023-12-11",
        type: "expense",
        note: "",
        description: "electricity",
        amount: 20000,
      },
      {
        category: "health",
        id: 6,
        date: "2027-05-08",
        type: "expense",
        note: "",
        description: "hospital",
        amount: 5000,
      },
      {
        category: "shopping",
        id: 7,
        date: "2026-11-08",
        type: "expense",
        note: "2025-09-18",
        description: "new shoes",
        amount: 10000,
      },
      {
        category: "shopping",
        id: 8,
        date: "2026-11-08",
        type: "expense",
        note: "",
        description: "new shoes",
        amount: 10000,
      },
      {
        category: "shopping",
        id: 9,
        date: "2026-10-07",
        type: "expense",
        note: "",
        description: "new shoes",
        amount: 10000,
      },
      {
        category: "income",
        id: 10,
        date: "2026-10-12",
        type: "income",
        note: "",
        description: "birthday gift",
        amount: 50000,
      },
      {
        category: "health",
        id: 11,
        date: "2026-10-07",
        type: "expense",
        note: "",
        description: "braces",
        amount: 20000,
      },
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


  totalAmount: computed(
    (state) => (type) =>
      state.history.transactions.reduce((accum, transaction) => {
        return transaction.type === type ? transaction.amount + accum : accum;
      }, 0),
  ),
  getTotalForCategory: computed(
    (state) => (category) =>
      state.history.transactions.filter((transaction) => transaction.category === category)
        .reduce((accum, transaction) => accum + transaction.amount, 0),
  ),


  settings: persist({
    currency: "nigerian naira",
    setCurrency: action((state, payload) => {
      state.currency = payload;
    }),
  }),

  getPercentOfTotalExpense: computed((state) => (category) => {
    const totalExpense = state.totalAmount("expense");
    if (totalExpense === 0) return 0;
    return (state.getTotalForCategory(category) / totalExpense) * 100;
  }),

  recentTransactions: computed((state) =>
    state.transactionsSortedByDate
      .filter(
        (transaction) => parseISO(transaction.date).getTime() <= Date.now(),
      )
      .slice(0, 4),
  ),
  symbol: computed((state) =>
    state.settings.currency === "united states dollar"
      ? "$"
      : state.settings.currency === "european euro"
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
        startDate: "01-01-2026",
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
      state.budgets = state.budgets.map(budget => budget.id === payload.id ? payload : budget)
    }),
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
        id: 1,
      },
      {
        name: "Laptop",
        targetAmount: 800000,
        savedAmount: 450000,
        targetDate: "2027-12-07",
        id: 2,
      },
      {
        name: "Health",
        targetAmount: 80000,
        savedAmount: 4500,
        targetDate: "2027-12-07",
        id: 3,
      },
      {
        name: "PGD",
        targetAmount: 900000,
        savedAmount: 450000,
        targetDate: "2027-12-07",
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
  }, {
    storage: localStorage
  }),
  rates: [],
  setRates: action((state, rates) => {
    state.rates = rates
  })
});
