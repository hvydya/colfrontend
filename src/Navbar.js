import React from 'react';
import FlashList from './FlashList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ListCol from './ListCol';

export default function Navbar() {
    return (
        <Router>
            <div>
                <nav>
                    <div className="navbar">
                        <div id="titleLogo">
                            <Link to="/l">Collector</Link>
                        </div>
                        <div className="navLinks">
                            <div>
                                <Link to="/l">List</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="App">
                <Switch>
                    <Route path="/col/:colId" component={FlashList} />
                    <Route path="/l" component={ListCol} />
                    {/* <Route path="/add" component={Add} /> */}
                    <Route path="/col">
                        <h3>Please select a col.</h3>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}