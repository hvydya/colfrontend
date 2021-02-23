import React from 'react';
import FlashList from './FlashList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Navbar() {
    return (
        <Router>
            <div>
                <nav>
                    <div className="navbar">
                        <div id="titleLogo">
                            <Link to="/">Collector</Link>
                        </div>
                        <div className="navLinks">
                            <div>
                                <Link to="/add">+</Link>
                            </div>
                            <div>
                                <Link to="/users">Users</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="App">
                <Switch>
                    <Route path="/col/:colId" component={FlashList} />
                    <Route path="/col">
                        <h3>Please select a col.</h3>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}