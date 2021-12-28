import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');


    //Handler functions to store state values
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };
    const submitHandler = (event) => {
        event.preventDefault();     // prevents form to Submit

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
          };
        props.onSaveExpenseData(expenseData);    // expenseData will be sent to NewExpense.js's enteredExpenseData parameter
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense_controls">
                <div className="new-expense_control">
                    <label>Title </label>
                    <input type="text" onChange={titleChangeHandler} value={enteredTitle} />
                </div>
                <div className="new-expense_control">
                    <label>Amount </label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={enteredAmount} />
                </div>
                <div className="new-expense_control">
                    <label>Date </label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} value={enteredDate} />   {/* min and max date for filters */}
                </div>
            </div>
            <div className="new-expense_actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;