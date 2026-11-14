# 💸 Spend Wise

Spend Wise is a personal finance management app built with **React**. It
helps you keep track of income and expenses, manage budgets, monitor
savings goals, and understand your financial activity.

## 🌐 Live Website

[Visit Spend Wise](https://spend-wise-nrli.onrender.com)

## ✨ Features

### 📊 Dashboard

-   View an overview of your balance, income, and expenses.
-   See recent transactions and an expense category summary.
-   Review monthly income and expense charts.
-   Get a quick view of your savings goals.

### 💳 Transaction Management

-   Add, edit, and delete transactions.
-   Search transactions by description or category.
-   Filter transactions by type, category, and date range.
-   Navigate transaction records with pagination.
-   Export transaction data as a CSV file.

### 🎯 Budget Management

-   Create, edit, and delete budgets.
-   Set spending limits for different categories.
-   Track spending progress against each budget.
-   Configure the start date of your budget cycle.

### 🏦 Savings Goals

-   Create and manage savings goals.
-   Set target amounts and target dates.
-   Record contributions and monitor progress.

### 📈 Analytics

-   View monthly income and expense trends.
-   Explore how expenses are distributed across categories.
-   Review financial summaries through charts.

### 🌍 Multi-Currency Support

-   Work with Nigerian Naira (NGN), US Dollars (USD), and Euros (EUR).
-   Convert transaction values using exchange-rate data from the
    [Frankfurter API](https://frankfurter.dev/).
-   Cache retrieved exchange rates to reduce repeated API requests.

### ⚙️ Preferences

-   Choose a preferred display currency.
-   Set a default transaction category.
-   Configure the budget cycle start date.
-   Clear locally stored app data.

## 🧰 Tech Stack

  Technology                   Purpose
  ---------------------------- --------------------------------------
  ⚛️ React                     User interface
  JavaScript                   Application logic
  Tailwind CSS                 Styling
  Easy Peasy                   State management
  React Router                 Client-side routing
  Chart.js & react-chartjs-2   Data visualizations
  Axios                        HTTP requests
  date-fns                     Date handling
  React Icons                  Icons
  Vite                         Development server and build tooling
  Frankfurter API              Exchange-rate data

## 🚀 Getting Started

To run the project locally:

1.  Clone the repository:

    ``` bash
    git clone https://github.com/deballap-webdev/spend-wise.git
    ```

2.  Move into the project directory:

    ``` bash
    cd spend-wise
    ```

3.  Install the dependencies:

    ``` bash
    npm install
    ```

4.  Start the development server:

    ``` bash
    npm run dev
    ```

5.  Open the local URL provided by Vite in your browser.

## 💾 Data Storage

Spend Wise currently stores app data in the browser using
`localStorage`. This means your transactions, budgets, goals,
preferences, and cached exchange rates are saved locally in the browser
on the device you use.

There is currently no remote database, user account system, or cloud
synchronization. Clearing browser storage or using a different browser
or device may mean your locally saved data is no longer available.

## ⚠️ Current Limitations

-   Exchange rates for future-dated transactions are currently based on
    the rate available today. This may not reflect the actual rate on
    the future transaction date.
-   Data is stored locally and is not synchronized between devices.
-   The project does not currently include an automated test suite.

## 🛠️ Planned Improvements

-   Refactor the state management store into more modular feature-based
    sections.
-   Introduce TypeScript and Zod for stronger type safety and data
    validation.
-   Improve exchange-rate handling, including synchronization for
    future-dated transactions.
-   Improve accessibility and semantic HTML.
-   Add automated tests.
-   Implement dark mode.

## 👩‍💻 About

Spend Wise is a project built to practise and apply React concepts while
developing a practical personal finance application.

-   **GitHub:** [deballap-webdev](https://github.com/deballap-webdev)
-   **Repository:**
    [spend-wise](https://github.com/deballap-webdev/spend-wise)
