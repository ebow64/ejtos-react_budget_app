import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, dispatch, spentSoFar } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        const newBudgetValue = event.target.value;
        if (newBudgetValue > 20000) {
            alert("The budget cannot exceed $20000.");
        } else if (newBudgetValue < spentSoFar) {
            alert("The budget cannot be set lower than the total amount spent so far.");
        } else {
            setNewBudget(newBudgetValue);
            dispatch({ type: 'SET_BUDGET', payload: newBudgetValue });
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
