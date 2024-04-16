import React from 'react'

function DisplayMessage(props) {
  return (
    <div className={ `p-3 mb-2 alert alert-${props.classname} d-flex justify-content-between align-items-center` } style={{borderRadius : '6px'}} role='alert'>
        <span>{props.message}</span>
        <i className="fa fa-times" style={{fontSize : '34px', color : 'red'}} onClick={props.handleDisplay}></i>
    </div>
  )
}

export default React.memo(DisplayMessage)