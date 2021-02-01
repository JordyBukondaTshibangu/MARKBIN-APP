import React from 'react'
import { withTracker } from 'meteor/react-meteor-data';
import { Bins } from '../../../api/Collections/binsCollection'
import BinEditor from './BinEditor';
import BinViewer from './BinViewer';
import BinShare from './BinShare';


const BinMain = ({bin}) => {
    
    if(!bin) { 
        return <div> Loading ... </div>
    } 
   
    return (
        <div> 
            <BinEditor bin={bin}/>
            <BinViewer  bin={bin}/>
            <BinShare bin={bin}/>
        </div>
    )
}

export default withTracker(props => {
    const { binId } = props.match.params;
    Meteor.subscribe('bins');
    Meteor.subscribe('sharedBins');
    return  { bin : Bins.findOne(binId)};

})(BinMain)
