import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import {startSetExpenses} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';

const store = configureStore();

// store.dispatch(addExpense({description: 'Water bill', amount: 100, createdAt: 10}));
// store.dispatch(addExpense({description: 'Gas bill', amount: 100, createdAt: 1000}));
// store.dispatch(addExpense({description: 'Rent', amount: 109500, createdAt: 10}));


const visible = getVisibleExpenses(store.getState().expenses, store.getState().filters);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider> 
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
});