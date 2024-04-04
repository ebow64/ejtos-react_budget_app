import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, currency, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        const newBudgetValue = event.target.value;
        if (newBudgetValue <= 20000) {
            setNewBudget(newBudgetValue);
            dispatch({ type: 'SET_BUDGET', payload: newBudgetValue });
        } else {
            alert("The budget cannot be higher than $20000.");
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
