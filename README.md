# Investment Platform Project

This TypeScript project simulates an investment platform on the command line, enabling users to manage their finances, make stock investments, and track portfolio performance. The project features basic account operations (like deposits, withdrawals, and transfers) and investment calculations based on capital gains and dividends.

## Table of Contents

1. [Installation and Setup](#installation-and-setup)
2. [Usage Instructions](#usage-instructions)
3. [Code Structure](#code-structure)
4. [Example Workflow](#example-workflow)

---

## Installation and Setup

1. **Install Dependencies**: Install the `prompt-sync` package by running:

    ```bash
    npm install prompt-sync
    ```

2. **Run the Application**: Use Node.js to execute the application:
    ```bash
    ts-node main.ts
    ```

---

## Usage Instructions

1. **Create a New User**: Start by entering user information (name, last name, date of birth, and initial balance).
2. **Choose an Option**: Select an operation from the menu:
    - Deposit, Withdraw, Transfer, or Make an Investment
    - View Total Amount Spent or the Total Return of a Stock
    - View Detailed Information (User and Portfolio)

---

## Code Structure

### `main.ts`

This file initializes the user interface and handles user input through the command line using `prompt-sync`.

-   **`createUser()`**: Creates a new user by asking for details such as name, last name, date of birth, and initial balance.
-   **`main()`**: Main function that displays a menu and calls respective functions based on user choice.

### `user.ts`

Defines the `User` class, which represents a user in the system, allowing them to manage their balance and interact with their portfolio.

-   **`deposit(value: number)`**: Adds funds to the user's balance.
-   **`withdraw(value: number)`**: Withdraws funds from the balance if sufficient funds are available.
-   **`transfer(user: User, value: number)`**: Transfers funds to another user, verifying the user’s identity and balance.
-   **`makeAnInvestment(...)`**: Creates a new investment in the portfolio, checking that there are enough funds.
-   **`totalValueSpent()`**: Displays the total amount spent on investments.
-   **`totalReturnInXStock(company: string)`**: Calculates and displays the total return on a specific stock.
-   **`showMe()`**: Shows the user profile, portfolio, and owned shares.

### `portfolio.ts`

Defines the `Portfolio` class, which stores and manages multiple investments.

-   **`addInvestment(...)`**: Adds a new investment (currently limited to stocks) to the portfolio.
-   **`totalValueSpent()`**: Calculates the total amount spent on all owned stocks.
-   **`totalReturn(company: string)`**: Finds a specific stock and calculates its total return.

### `stock.ts`

Defines the `Stock` class, which represents individual stock investments and includes methods for simulating returns.

-   **`simulateSharePriceVariation()`**: Simulates a random current share price to calculate capital gains.
-   **`simulateTotalDividendsReturn()`**: Calculates the total return from dividends.
-   **`simulateCapitalGain()`**: Calculates capital gain or loss based on current and purchase price.
-   **`simulateTotalReturn()`**: Returns the combined dividends and capital gains.

---

## Example Workflow

Here is an example of how to interact with the application, illustrating key features.

```plaintext
Welcome to the Investment Platform!
Enter your first name: John
Enter your last name: Doe
Enter your date of birth (YYYY-MM-DD): 1990-01-01
Enter your initial balance: 10000

User created successfully!

Select an option:
1 - Deposit funds
2 - Withdraw funds
3 - Transfer funds to another user
4 - Make an investment
5 - View total spent on investments
6 - View total return on a specific stock
7 - Show user and portfolio details
0 - Exit
Your choice: 1

Enter deposit amount: 2000
Deposited $2000

Select an option:
4 - Make an investment

Enter investment type (e.g., 'stock'): stock
Enter company name: ExampleCorp
Enter dividend per share: 1.5
Enter number of dividend payments: 4
Enter purchase price per share: 50
Enter number of shares: 100

Investment made successfully!

Select an option:
5 - View total spent on investments
Total value spent on investments:
5000

Select an option:
6 - View total return on a specific stock
Enter company name to calculate total return: ExampleCorp
Total return: 800.00

Select an option:
7 - Show user and portfolio details
Your profile
┌─────────────┬───────────────┬─────────────────────┬─────────┐
│ (index)     │ Value         │                     │         │
├─────────────┼───────────────┼─────────────────────┼─────────┤
│ Name        │ John          │                     │         │
│ Lastname    │ Doe           │                     │         │
│ DateOfBirth │ 1990-01-01    │                     │         │
│ Balance     │ 7000          │                     │         │
└─────────────┴───────────────┴─────────────────────┴─────────┘

Your portfolio
Total value spent on investments: 5000
Shares owned:
┌─────────────┬─────────────────────┬─────────────────────┬─────────┐
│ Company     │ Dividend per Share  │ Dividends Payments  │ Shares  │
├─────────────┼─────────────────────┼─────────────────────┼─────────┤
│ ExampleCorp │ 1.5                 │ 4                   │ 100     │
└─────────────┴─────────────────────┴─────────────────────┴─────────┘
```

---

## Error Handling

1. **Insufficient Funds**: Methods like `withdraw` and `makeAnInvestment` check that the user has enough balance to proceed.
2. **Invalid Transfers**: The `transfer` method verifies that the target user is different and that the user has entered their birth date correctly.
3. **Missing Stock**: If a stock is not found in the portfolio, `totalReturn` logs an error message.

---

This documentation should serve as a comprehensive guide to the features and functionality of the investment platform project.
