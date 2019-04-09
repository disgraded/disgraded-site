import React from 'react'

export default ({ steamLink = null, playStoreLink = null }) => {
    <div className="container">
        <div className="col-md-6">
            {steamLink}
            {playStoreLink}
        </div>
        <div className="col-md-6">
        </div>
    </div>
}