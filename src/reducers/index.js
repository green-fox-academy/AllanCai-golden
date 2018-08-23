import { combineReducers } from 'redux'
// import {
//   BUY_ONE,
//   EAT_ONE,
// } from '../action/action';

const initState = {
  number: 0,
};

const callMeMaybe = (state = initState, action) => {
  switch (action.type) {
    case 'BUY_ONE':
      return {
        number: state.number + action.number,
      };
    case 'EAT_ONE':
      if (state.number > 0) {
        return {
          number: state.number - action.number,
        };
      }
    default:
      return state;
  }
};


const AcornApp = combineReducers({
  callMeMaybe,
});

export default AcornApp;
