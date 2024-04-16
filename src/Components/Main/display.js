import React from 'react';
import '../../Styles/display.css';  

function Display(props) 
{
  return (
    <React.Fragment>
        <div className={`alert alert-${props.className}`}>
			     <span className='text'>{props.text}</span>

           <div className='displayMoney d-flex justify-content-between align-items-center'>
              &#x20b9;{props.money}
              <div onClick={props.HandleBudget}>
               {props.children}
              </div>
            </div>
		    </div>
    </React.Fragment>
  )
}

export default React.memo(Display)