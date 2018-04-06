import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('Should return 0 if no expenses', () => {
    const emptyArray = [];
    const result = selectExpensesTotal(emptyArray);
    expect(result).toBe(0);
});

test('Should correctly add up a single expense', () => {
    const oneElement = [expenses[0]];
    const result = selectExpensesTotal(oneElement);
    expect(result).toBe(195);
});

test('Should correctly add up multiple expenses', () => {
    const result = selectExpensesTotal(expenses);
    expect(result).toBe(5000 + 200 + 195);
});