import React, { Component } from 'react';
import { Router as ReactRouter, Route, Switch } from 'react-router-dom'
import HistoryApi from './helper/historyApi'
import reduxStore from './reduxStore'
import { Provider } from 'react-redux'

import LandingPage from './page/LandingPage'

export default class Router extends Component {

    history = HistoryApi.getInstance()

    render() {
        const store = reduxStore()
        return (
            <Provider store={store}>
                <ReactRouter history={this.history.api}>
                    <Switch>
                        <Route exact path="/" component={LandingPage} />
                    </Switch>
                </ReactRouter>
            </Provider>
        );
    }
};
