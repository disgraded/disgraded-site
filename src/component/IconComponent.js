import React from 'react'

export default ({ icon = "face", color = "primary", hover = "disable" }) => {
     return (
        <i className={`material-icons material-color-${color} material-color-hover-${hover}`}>{icon}</i>
     )
 }