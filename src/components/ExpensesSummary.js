import React from 'react';
import {connect} from 'react-redux';
import selectExpensesTotal from '../selectors/expenses-total';
import getVisibleExpenses from '../selectors/expenses';
import numeral from 'numeral';

export const ExpensesSummary = ({expensesCount, expensesTotal}) => {
    return (
        <div>
            <p>Viewing {expensesCount} expense{`${expensesCount === 1 ? '' : 's'}`} totalling: {numeral(expensesTotal / 100).format('$0,0.00') }</p>
        </div>
    );
}

const mapStateToProps = state => {
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);