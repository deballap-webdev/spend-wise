import { createStore, action, computed } from "easy-peasy";

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
  transactions: [{
    category: "entertainment",
    id: 1,
    date: "2026-10-03",
    type: "expense",
    note: "",
    description: "Prime videos",
    amount: 15000
  }, {
    category: "transport",
    id: 2,
    date: "2026-10-07",
    type: "expense",
    note: "",
    description: "Uber",
    amount: 30000
  }, {
    category: "income",
    id: 3,
    date: "2026-11-09",
    type: "income",
    note: "",
    description: "Freelance",
    amount: 3000000
  }, {
    category: "food",
    id: 4,
    date: "2026-03-18",
    type: "expense",
    note: "",
    description: "Fruits",
    amount: 19000
  },
  {
    category: "bills",
    id: 5,
    date: "2023-12-11",
    type: "expense",
    note: "",
    description: "electricity",
    amount: 20000
  },
  {
    category: "health",
    id: 6,
    date: "2027-05-08",
    type: "expense",
    note: "",
    description: "hospital",
    amount: 5000
  },
  {
    category: "shopping",
    id: 7,
    date: "2026-11-08",
    type: "expense",
    note: "2025-09-18",
    description: "new shoes",
    amount: 10000
  },
  {
    category: "shopping",
    id: 8,
    date: "2026-11-08",
    type: "expense",
    note: "",
    description: "new shoes",
    amount: 10000
  },
  {
    category: "shopping",
    id: 9,
    date: "2026-10-07",
    type: "expense",
    note: "",
    description: "new shoes",
    amount: 10000
  },
  {
    category: "income",
    id: 10,
    date: "2026-10-12",
    type: "income",
    note: "",
    description: "birthday gift",
    amount: 50000
  },
  {
    category: "health",
    id: 11,
    date: "2026-10-07",
    type: "expense",
    note: "",
    description: "braces",
    amount: 20000
  }],
  setTransactions: action((state, payload) => {
    state.transactions = payload
  }),
  totalAmount: computed((state) => (type) => state.transactions.filter(trans => new Date(trans.date).getTime() <= Date.now()).reduce((accum, transaction) => { return transaction.type === type ? transaction.amount + accum : accum }, 0)),
  getTotalForCategory: computed((state) => (category) => state.transactions.filter(
    transaction => new Date(transaction.date).getTime() <= Date.now()
  ).filter(transaction => transaction.category === category).reduce((accum, transaction) => accum + transaction.amount, 0)),
  modifyTransac: computed((state) => (type) => (category) => (amount) => state[type][category] + amount),
  currency: 'nigerian naira',
  setCurrency: action((state, payload) => {
    state.currency = payload;
  }),
  getPercentOfTotalExpense: computed((state) => (category) => {
    const totalExpense = state.totalAmount("expense")
    if (totalExpense === 0) return 0
    return (state.getTotalForCategory(category) / totalExpense * 100)
  }),
  setCountry: action((state, payload) => state.country = payload),
  recentTransactions: computed((state) => state.transactionsSortedByDate.filter(transaction => new Date(transaction.date).getTime() <= Date.now()).slice(0, 4)),
  symbol: computed(state => state.currency === 'united states dollar' ? '$' : state.currency === "european euro" ? "€" : "₦"),
  getTransactionById: computed((state) => (id) => state.transactions.find((transaction) => id === transaction.id)),
  categoryArray: [{ value: "food", label: "Food" }, { value: "entertainment", label: "Entertainment" }, { "value": "bills", "label": "Bills" }, { value: "transport", label: "Transport" }, { value: "health", label: "Health" }, { value: "shopping", label: "Shopping" }],
  typeArray: [{ value: "income", label: "income" }, { value: "expense", label: "Expense" }],

  transactionsSortedByDate: computed((state) => [...state.transactions].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())),
  budgets: [{
    category: "",
    limit: "",
    startDate: "",
    id: ""
  }],
  goals: [{
    name: "",
    targetAmount: "",
    savedAmount: "",
    targetDate: "",
    id: ""
  }]
});
