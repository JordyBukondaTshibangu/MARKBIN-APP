import React, { useState } from 'react'

const BinShare = ({bin}) => {
    const [ email, setEmail ] = useState("")

    const onShareClick = () => {
        Meteor.call('bins.share', bin, email, (error) => {
            if(error){
                return
            } else {
                setEmail("")
            }
        })
        
    }
    return (
        <footer className="bin-share col-xs-12 mt-5">
            <div className="input-group">
                <input className="form-control" 
                    value = { email } 
                    onChange ={ e => setEmail(e.target.value)}
                />
                <div className="input-group-btn">
                    <button 
                        className="btn btn-default" 
                        onClick={onShareClick}> 
                        Share Bin
                    </button>
                </div>
            </div>
            <div className="shared-with">
                <select className="form-select form-select-lg mb-3">
                    <option> Email shared with </option>
                    {
                        bin.sharedWith.map((email, index) => {
                            return <option key={index}>
                                        {email}
                                    </option>
                        })
                    }
                </select>
            </div>
        </footer>
    )
}

export default BinShare
