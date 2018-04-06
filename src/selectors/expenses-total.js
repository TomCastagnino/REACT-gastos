const selectExpensesTotal = expenses => {
    const reducer = (acc, cur) => acc + cur;
    return expenses.map(elem => elem.amount).reduce(reducer, 0);
};

export default selectExpensesTotal;