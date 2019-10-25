import React from 'react';
import { Navbar, Nav, NavItem, NavLink } from 'shards-react';
// import styles from './Appbar.module.scss';

class Appbar extends React.Component {
    render () {
        return (
            <div>
                <Navbar type="dark" theme="primary" expand="md" style={{ backgroundColor: 'red' }}>
                    <Nav navbar>
                        <NavItem>
                            <NavLink active href="#">
                                Hello
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default Appbar;
