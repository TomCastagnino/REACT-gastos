import React from 'react';
import {shallow} from 'enzyme';
import expenses from '../fixtures/expenses';
import ExpenseForm from '../../components/ExpenseForm';
import { wrap } from 'module';
import moment from 'moment';

test('Should render ExpenseForm', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseForm with data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should render error for invalid submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {preventDefault: () => {}});
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('Should set description on input change', ()=> {
    const value = 'New description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
        target: {value}
    });
    expect(wrapper.state('description')).toBe(value);
});

test('Should set note on textarea change', ()=> {
    const value = 'New note';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change', {
        target: {value}
    });
    expect(wrapper.state('note')).toBe(value);
});

test('Should set amount on input change', ()=> {
    const value = '22.49';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    });
    expect(wrapper.state('amount')).toBe(value);
});

test('Should not set amount on invalid input change', ()=> {
    const value = '22.490';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    });
    expect(wrapper.state('amount')).toBe('');
});

test('Should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit', {preventDefault: () => {}});
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    });
});

test('Should set new date on date change', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('Should set calendar focus on change', () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused: true});
    expect(wrapper.state('calendarFocused')).toBe(true);
});