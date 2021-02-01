import React from 'react'
import Accounts from './Accounts'
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";


const Header = props => {

    const history = useHistory()

    const onBinCLick = event => {

        event.preventDefault();
        Meteor.call('bins.insert', (error, bin ) => {
            history.push(`/bins/${bin}`);
        });
    }
    return (
        <nav className= "nav navbar-default">
            <div className="navbar-header">
                <Link to = "/" className="navbar-brand">MarkBin</Link>
            </div>
            <ul className="nav navbar-nav">
                <li>
                    <Accounts/>
                </li>
                <li>
                    <a href="#" onClick={event => onBinCLick(event)}> Create Bin </a>
                </li>
            </ul>
        </nav>
    )
}

export default Header