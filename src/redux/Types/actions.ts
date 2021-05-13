import { STEPINCREMENT, STEPDECREMENT } from './types';


export const stepIncrease = () => {

    return {

        type: STEPINCREMENT,

    };

};

export const stepDecrease = () => {

    return {

        type: STEPDECREMENT,

    };

};