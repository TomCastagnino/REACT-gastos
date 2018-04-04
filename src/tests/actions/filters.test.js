import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate  } from '../../actions/filters';
import moment from 'moment';

test('Should generate setTextFilter action object with default value', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
});

test('Should generate setTextFilter action object', () => {
    const action = setTextFilter('Hola');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'Hola'
    })
});

test('Should generate sortByAmount action object', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
});

test('Should generate sortByDate action object', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
});

test('Should generate setEndDate action object', () => {
    const startDate = moment(0);
    const action = setStartDate(startDate);
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate
    })
});

test('Should generate setEndDate action object', () => {
    const endDate = moment(0);
    const action = setEndDate(endDate);
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate
    })
});

