import React from 'react'
import './Subhead.css'

const Subhead = ({title,para}) => {
  return (
    <>
        <div className="subhead">
            <div className="subheading">
                <h2>{title}</h2>
            </div>
            <p>{para}</p>
        </div>
    </>
  )
}

export default Subhead