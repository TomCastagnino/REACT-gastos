import filtersReducers from '../../reducers/filters';
import moment from 'moment';

test('Should setup default filter values', () => {
    const state = filtersReducers(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('Should set sortBy to amount', () => {
    const state = filtersReducers(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
})

test('Should set sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }
    const state = filtersReducers(currentState, {type: 'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date');
})

test('Should set text filter', () => {
    const state = filtersReducers(undefined, {type: 'SET_TEXT_FILTER', text: 'Holaaa'});
    expect(state.text).toBe('Holaaa');
})

test('Should set start date', () => {
    const state = filtersReducers(undefined, {type: 'SET_START_DATE', startDate: 0});
    expect(state.startDate).toBe(0);
})

test('Should set end date', () => {
    const state = filtersReducers(undefined, {type: 'SET_END_DATE', endDate: 1000});
    expect(state.endDate).toBe(1000);
})