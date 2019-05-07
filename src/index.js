import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from 'redux';

// STATE ========================================================
import initialCards from './base.json';
// console.log(initialState);
const VISIBILITY_ALL = 'all';
const VISIBILITY_CAUGHT = 'caught';
const VISIBILITY_UNCAUGHT = 'uncaught';

const initialState = {
    ...initialCards, //this spreads the cards: [...] into this spot in the initial state
    visibilityFilter: VISIBILITY_ALL, 
}

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

const ACTION_VISIBILITY_ALL = VISIBILITY_ALL;
const ACTION_VISIBILITY_CAUGHT = VISIBILITY_CAUGHT;
const ACTION_VISIBILITY_UNCAUGHT = VISIBILITY_UNCAUGHT;

function setVisiblityAll() {
    return {
        type: ACTION_VISIBILITY_ALL,
    }
}

function setVisiblityCaught() {
    return {
        type: ACTION_VISIBILITY_CAUGHT,
    }
}

function setVisiblityUncaught() {
    return {
        type: ACTION_VISIBILITY_UNCAUGHT
    }
}

window.setVisiblityAll = setVisiblityAll;
window.setVisiblityCaught = setVisiblityCaught;
window.setVisiblityUncaught = setVisiblityUncaught;



// REDUCER ========================================================
function cards(state=initialState.cards, action={type: '',}) {
    console.log(`cards got called with: ${action.payload}`);
    switch(action.type) {
        case ACTION_CATCH: 
            // find the card set it to 'caught'
            const newState = state.map(card => {
                    if (card.id === action.payload.id) {
                        return {
                            ...card,
                            isCaught: true,
                        }
                    } else {
                        return card;
                    }
                });            
            return newState;
        break;
        default:
            return state;
        break;
    }
}

function visibility(state=initialState.visibilityFilter, action={type: '',}) {
    //switch function that will select caught cards?
    //set the filter don't do the filter
    switch(action.type) {
        case ACTION_VISIBILITY_ALL:
            //set the visiblity to all
            return VISIBILITY_ALL;           
        break;
        case ACTION_VISIBILITY_CAUGHT:
            // set the visiblity to caught
            return VISIBILITY_CAUGHT
        break;
        case ACTION_VISIBILITY_UNCAUGHT:
            // set the visibity to uncaught
            return VISIBILITY_UNCAUGHT;
        break;
        default:
            return state;
        break;
    }
}

// this is where you are assigning responsiblity 
// of one piece of state
// to one reducer
const rootReducer = combineReducers({
    cards: cards,
    visibilityFilter: visibility,
});

// STORE ========================================================
const store = createStore(rootReducer);
window.store = store;



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
