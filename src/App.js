import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
class App extends React.Component {
    render () {
        return (
            <div>
                <BrowserRouter>
                    <Route exact path="/" component={Home} />
                </BrowserRouter>
            </div>
        );
    }
}

export default hot(module)(App);
