import React from 'react';
import { hot } from 'react-hot-loader';
import styles from './App.module.scss'

class App extends React.Component {
    render () {
        return (
            <div>
                <h1 className={styles.h1}>Hello, World!</h1>
                <h2>Goodbye</h2>
            </div>
        );
    }
}

export default hot(module)(App);
