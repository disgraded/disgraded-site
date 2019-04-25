import axios from 'axios'
import { Signal } from 'signals'

class Api {

    onUnautorized = new Signal()
    token = null

    fetch(method, url, options) {
        let data = options || {}
        data['baseURL'] = process.env.REACT_APP_API || null
        data['method'] = method
        data['url'] = url
        data['headers'] = data['headers'] || {}
        if (this.token !== null) {
            data['headers']['Authorization'] = this.token
        }
        return axios(data).then((response) => {
            if (response.status < 400) {
                return response.data
            } else {
                throw response.data
            }
        }).catch((response) => {
            if (typeof response.data === 'undefined') {
                throw response.response.data
            } else {
                throw response
            }
        });
    }

    addToken(token) {
        this.token = token
    }

    removeToken() {
        this.token = null
    }
}

var instance = null;
Api.getInstance = () => {
    if (instance === null) {
        instance = new Api()
    }
    return instance;
};

export default Api;
