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
  /* totalExpenses: computed((state) => state.expenses.entertainment + state.expenses.food + state.expenses.transport + state.expenses.bills), */
  transactions: [{
    category: "entertainment",
    id: 1,
    date: "",
    type: "expense",
    note: "",
    description: "Prime videos",
    amount: 800000
  }, {
    category: "transport",
    id: 2,
    date: "",
    type: "expense",
    note: "",
    description: "Uber",
    amount: 300000
  }, {
    category: "income",
    id: 3,
    date: "",
    type: "income",
    note: "",
    description: "Freelance",
    amount: 3000000
  }, {
    category: "food",
    id: 4,
    date: "",
    type: "expense",
    note: "",
    description: "Fruits",
    amount: 200000
  },
  {
    category: "bills",
    id: 4,
    date: "",
    type: "expense",
    note: "",
    description: "electricity",
    amount: 20000
  }],
  totalAmount: computed((state) => (type) => state.transactions.reduce((accum, transaction) => { return transaction.type === type ? transaction.amount + accum : accum }, 0)),
  getTotalExpenseForCategory: computed((state) => (category) => state.transactions.filter(transaction => transaction.category === category).reduce((accum, transaction) => accum + transaction.amount, 0)),
  modifyTransac: computed((state) => (type) => (category) => (amount) => state[type][category] + amount),
  currency: 'naira',
  setCurrency: action((state, payload) => {
    state.currency = payload;
  }),
  recentTransactions: computed((state) => state.transactions.length <= 4 ? state.transactions : state.transactions.filter(transaction => state.transactions.indexOf(transaction) < 4)),
  symbol: computed(state => state.currency === 'dollar' ? '$' : state.currency === "euro" ? "€" : "₦")
});
