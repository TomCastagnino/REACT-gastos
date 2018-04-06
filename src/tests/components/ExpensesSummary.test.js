import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';

test('Should render ExpenseSummary', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={100} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should render empty ExpenseSummary', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={15} expensesTotal={100643} />);
    expect(wrapper).toMatchSnapshot();
});