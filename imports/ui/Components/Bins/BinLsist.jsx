import React from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import { Bins } from '../../../api/Collections/binsCollection';
import { Link } from 'react-router-dom'

const BinLsist = props => {
    const handleRemoveBin = _id => {
        Meteor.call('bins.remove', _id);
    }
    return (
        <ul className="list-group"> {
            props.bins.map(bin => {
                const { _id } = bin
                const url = `bins/${_id}`
                return (
                    <li key={_id} className="list-group-item">
                        <Link to={url}>Bin {_id }</Link>
                        <span className="pull-right">
                            <button className="btn btn-danger" onClick={() => handleRemoveBin(_id)}> Remove </button>
                        </span>
                    </li>)
            })
        } </ul>
    )
}


export default withTracker(() => {
    Meteor.subscribe('bins');
    Meteor.subscribe('sharedBins');
    return {bins: Bins.find({}).fetch()}
})(BinLsist)
