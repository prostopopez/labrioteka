import '@babel/polyfill';
import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import router from './router';
import App from './App';

const history = createBrowserHistory();
window.h = history;

class Root extends React.Component {
    render() {
        return <App history={history}>
            <Router history={history}>
                <Switch>
                    {router.map(({
                                     path, exact, component: C, ...rest
                                 }) => (
                        <Route
                            key={path}
                            path={path}
                            exact={exact}
                            render={(props) => (
                                <C
                                    {...props}
                                    {...rest}
                                    store={this.store}
                                    path={path}
                                />
                            )}
                        />
                    ))}
                </Switch>
            </Router>
        </App>;
    }
}

if (!window.ssr) {
    ReactDOM.hydrate(<Root />, document.getElementById(`root`));
}
