import React from 'react';
import { markdown } from 'markdown';

const BinViewer = ({bin}) => {
    const rawHTML = markdown.toHTML(bin.content)
    return (
        <div className="col-xs-4">
            <h5>Output</h5>
            <div dangerouslySetInnerHTML={{__html : rawHTML}}></div>
        </div>
    )
}

export default BinViewer
