import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import App from './App';
import SinglePhoto from './components/SinglePhoto';
import Favorites from './components/Favorites';
import * as serviceWorker from './serviceWorker';
import './index.css';

import { Provider } from 'react-redux'
import { store } from './store/store';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/favorites" component={Favorites} />
                <Route path="/:id" component={SinglePhoto} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();