import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = props => (
    <div>
        <p>
            <Link 
                to={`/edit/${props.expense.id}`} 
            >
                {props.expense.description}
            </Link>, amount: {numeral(props.expense.amount / 100).format('$0,0.00')}, created: {moment(props.expense.createdAt).format('Do MMMM, YYYY')}.
        </p>
    </div>
);

export default ExpenseListItem;