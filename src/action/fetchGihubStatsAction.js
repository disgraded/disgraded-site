import { FETCH_GITHUB_STATS_SUCCESS, FETCH_GITHUB_STATS_FAILED } from './actionTypes'
import GithubService from '../service/GithubService'

export default () => {

    const githubService = GithubService.getInstance()

    return dispatch => {
        githubService.getStats().then((stats) => {
            dispatch({ type: FETCH_GITHUB_STATS_SUCCESS, payload: stats })
        }).catch((error) => {
            dispatch({ type: FETCH_GITHUB_STATS_FAILED, payload: error })
        })
    };
}
