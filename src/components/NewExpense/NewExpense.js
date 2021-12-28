import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    //passing data to parent component ExpenseForm
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,              // ... is spread operator and copies value recieved in enteredExpenseData to expenseData
            id: Math.random().toString()        // add id to expenseData
        };
        props.onAddExpense(expenseData);    // send 
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };
    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return (
        <div className='new-expense'>
            {!isEditing && (<button onClick={startEditingHandler}>Add New Expense</button>
            )}
            {isEditing && (<ExpenseForm onSaveExpenseData={saveExpenseDataHandler}              /* onSaveExpenseData prop will be sent to ExpenseForm.js */
                onCancel={stopEditingHandler}
            />
            )}
        </div>
    );
};

export default NewExpense;