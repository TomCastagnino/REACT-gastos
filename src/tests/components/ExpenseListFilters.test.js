import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import {filters, altFilters} from '../fixtures/filters';
import expenses from '../fixtures/expenses';
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach( () => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters 
            filters={filters}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            setTextFilter={setTextFilter}
        />
    );
});

test('Should render expenseListFilters', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should render expenseListFilters with alt data', () => {
    wrapper.setProps({filters: altFilters});
    expect(wrapper).toMatchSnapshot();
});

test('Should handle text change', () => {
    wrapper.find('input').simulate('change', {
        target: {value : 'rent'}
    });
    expect(setTextFilter).toHaveBeenLastCalledWith('rent');
});

test('Should sort by date', () => {
    wrapper.setProps({filters: altFilters});
    wrapper.find('select').simulate('change', {
        target: {value : 'date'}
    });
    expect(sortByDate).toHaveBeenCalled();
});

test('Should sort by amount', () => {
    wrapper.find('select').simulate('change', {
        target: {value : 'amount'}
    });
    expect(sortByAmount).toHaveBeenCalled();
});

test('Should handle date changes', () => {
    wrapper.find('DateRangePicker').prop('onDatesChange')({
            startDate : moment(0).add(4,'years'),
            endDate: moment(0).add(8,'years')
        });
    expect(setStartDate).toHaveBeenCalledWith(moment(0).add(4,'years'));
    expect(setEndDate).toHaveBeenCalledWith(moment(0).add(8,'years'));
});

test('Should handle date focus changes', () => {
    wrapper.find('DateRangePicker').prop('onFocusChange')('startDate');
    expect(wrapper.state('calendarFocused')).toBe('startDate');
});