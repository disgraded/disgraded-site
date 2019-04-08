import { CHANGE_ROUTE } from '../action/actionTypes'

const defaultState = {
    
}

export default (state = defaultState, { type, payload }) => {
    state = { ...state };
    
    if (type === CHANGE_ROUTE) {
        console.log(payload)
    }

    return state;
}
