import React from 'react';
import {Link} from 'react-router-dom';

const ExpenseListItem = props => (
    <div>
        <p>
            <Link 
                to={`/edit/${props.expense.id}`} 
            >
                {props.expense.description}
            </Link>, amount: {props.expense.amount}, created at: {props.expense.createdAt}.
        </p>
    </div>
);

export default ExpenseListItem;