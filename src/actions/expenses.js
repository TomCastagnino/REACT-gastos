import uuid from 'uuid';
import database from '../firebase/firebase';

export const addExpense = expense => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = ( {description = '', note = '', amount = 0, createdAt = 0} = {} ) => {
    return dispatch => {
        const expense = {description, note, amount, createdAt}
        return database
            .ref('expenses')
            .push(expense)
            .then( ref => dispatch(addExpense({id: ref.key, ...expense})) )
    }
}

export const removeExpense = ( {id} = {} ) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export const setExpenses = expenses => ({
    type: 'SET_EXPENSES',
    expenses
});

export const startSetExpenses = () => {
    return dispatch => {
        return database
            .ref('expenses')
            .once('value').then(snapshot => {
                const expenses = [];
                snapshot.forEach(element => {
                    expenses.push({
                        id: element.key,
                        ...element.val()
                    });
                });
               dispatch(setExpenses(expenses));
            });
    }
};

