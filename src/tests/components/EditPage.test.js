import React from 'react';
import {shallow} from 'enzyme';
import {EditPage} from '../../components/EditPage';
import expenses from '../fixtures/expenses';

let removeExpense, editExpense, history, wrapper;

beforeEach( () => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = {push: jest.fn()};
    wrapper = shallow(
        <EditPage 
            editExpense={editExpense} 
            removeExpense={removeExpense} 
            history={history}
            expense={expenses[2]}
        />
    );
});

test('Should render EditPage', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test('Should handle removeExpense', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({id: expenses[2].id});
});