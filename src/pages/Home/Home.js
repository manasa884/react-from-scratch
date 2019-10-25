import React from 'react';
import styles from './Home.module';
import Appbar from '../../components/Appbar/Appbar';

class Home extends React.Component {
    render () {
        return (
            <div className={styles.root}>
                <Appbar/>
            </div>
        );
    }
}

export default Home;
