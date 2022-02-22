import { createStore } from 'redux';

const INITAIL_STATE = [
    {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91, 100],
    }
]

const seriesReducer = (state = INITAIL_STATE , action) => {
    switch(action.type){
        case "ADD_SERIES" :
            return [ ...action.payload , ...state ];
        default : return state;
    }
}

const store = createStore(seriesReducer);
export default store;