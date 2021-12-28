import React, { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Book',
    amount: 148,
    date: new Date(2020, 10, 24),
  },
  {
    id: 'e2',
    title: 'Chair',
    amount: 540,
    date: new Date(2022, 5, 12),
  },
  {
    id: 'e3',
    title: 'Coffee Cup',
    amount: 120,
    date: new Date(2021, 9, 16),
  },
  {
    id: 'e4',
    title: 'Laptop Bag',
    amount: 850,
    date: new Date(2020, 11, 19),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {     // expense will recieve "expenseData" from NewExpense.js
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;