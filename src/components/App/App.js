import './App.scss';
import { Switch, Route } from 'react-router';
import AdminPage from '../AdminPage';
import Header from '../Header';
import PreviewPage from '../PreviewPage';
import React from 'react';

const App = () => {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route exact path='/' component={PreviewPage} />
                <Route path='/admin' component={AdminPage} />
            </Switch>
        </div>
    );
};

export default App;
