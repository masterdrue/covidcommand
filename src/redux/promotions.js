import * as ActionsTypes from './ActionTypes';

export const Promotions = (state = {isLoading: true, 
                                    errMess: null,
                                    promotions: [] }, action) => {
    switch (action.type) {
        case ActionsTypes.ADD_PROMOTIONS:
            return {...state, isLoading: false, errMess: null, promotions: action.payload};
        
        case ActionsTypes.PROMOTIONS_LOADING:
            return {...state, isLoading: true, errMess: null, promotions: []}; 
        
        case ActionsTypes.PROMOTIONS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};