import { AnyAction } from 'redux';
import { STEPINCREMENT, STEPDECREMENT } from './types';

const INITIAL_STATE = {
  step: 1,
};

const stepCounterReducer = (state = INITIAL_STATE, action: AnyAction) => {
    console.log(action, state);

    switch (action.type) {

        case STEPINCREMENT:

           return {

             ...state, step: state.step + 1,

           };

        case STEPDECREMENT:

           return {
              ...state, step: state.step - 1,

           };

         default: return state;

    }
};

export default stepCounterReducer;
