import { CHANGE_ROUTE, FETCH_GITHUB_STATS_SUCCESS, FETCH_GITHUB_STATS_FAILED } from '../action/actionTypes'

const defaultState = {
    maintainers: 0,
    projects: 0,
    contributions: 0,
    issues: 0
}

export default (state = defaultState, { type, payload }) => {
    state = { ...state };
    
    if (type === CHANGE_ROUTE) {
        console.log(payload)
    }

    if (type === FETCH_GITHUB_STATS_SUCCESS) {
        state = payload
    }

    if (type === FETCH_GITHUB_STATS_FAILED) {
        console.error('Mehh mehhh')
    }

    return state;
}
