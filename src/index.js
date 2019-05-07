import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';

// STATE ========================================================
import initialState from './base.json';
// console.log(initialState);

// the state is an object
// with cards property
// which is an array of objects
// { cards: [ {}, {}, {}, ]}

// ACTION ========================================================
// ACTIONS and ACTION creators
const ACTION_CATCH = 'catch';

function catchCard(id) {
    return {
        type: ACTION_CATCH,
        payload: {
            id,
        }
    };
}
window.catchCard = catchCard;



// REDUCER ========================================================
function cards(state=initialState, action={type: '',}) {
    console.log(`cards got called with: ${action.payload}`);
    switch(action.type) {
        case ACTION_CATCH: 
            // find the card set it to 'caught'
            const newState = {
                ...state,
                cards: state.cards.map(card => {
                    if (card.id === action.payload.id) {
                        return {
                            ...card,
                            isCaught: true,
                        }
                    } else {
                        return card;
                    }
                }),
            };
            return newState;
        break;
        defualt:
            return state;
        break;
    }
}


// STORE ========================================================
const store = createStore(cards);
window.store = store;



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
