
import React, { useReducer, createContext, useContext } from 'react';
const Context = createContext();



const useAppContext = () => useContext(Context);

let randomizeIndexes = arr => {
    var len = arr.length;
    for(let i = 0; i < len; i += 1) {
        let o = Math.floor(Math.random() * len);
        [arr[i], arr[o]] = [arr[o], arr[i]];
    }
    return arr;
};


const initialState = {
    cards: {
        considered: randomizeIndexes([{
            id: 0,
            value: 1,
            revealed: false
        }, {
            id: 1,
            value: 2,
            revealed: false
        }, {
            id: 2,
            value: 3,
            revealed: false
        }, {
            id: 3,
            value: 4,
            revealed: false
        }, {
            id: 4,
            value: 5,
            revealed: false
        }, {
            id: 5,
            value: 6,
            revealed: false
        }, {
            id: 6,
            value: 7,
            revealed: false
        }, {
            id: 7,
            value: 8,
            revealed: false
        }, {
            id: 8,
            value: 9,
            revealed: false
        }]),
        unconsidered: []
    } 
};

const mainReducer = (state, action) => {
    const cards = state.cards;
    let considered;
    
    switch(action.type) {
        case 'REVEAL_TOP':
            considered = cards.considered.slice(0);
            considered[considered.length - 1].revealed = true;
            
            return {
                ...state,
                cards: {
                    ...cards,
                    considered
                }
            };
        case 'POP_CARD':
            considered = cards.considered.slice(0);
            return {
                ...state,
                cards: {
                    ...cards,
                    considered,
                    unconsidered: [...cards.unconsidered, considered.pop()]
                }
            };
        default:
            return state;
    }
};

function ContextProvider(props) {
    const [state, dispatch] = useReducer(mainReducer, initialState);

    return (
        <Context.Provider
            value={{state, dispatch}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context, useAppContext};