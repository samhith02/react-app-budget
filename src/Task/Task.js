import React, {useContext} from 'react'
import Display from '../Components/Main/display'
import {AppContext} from './../Context/ContextApi.js'

function Task(props) 
{
  const {budget, items} = useContext(AppContext);
  let spent = items.reduce((total, item) => {return (total + item.itemCost)}, 0);
  //console.log(budget, spent);
  
  return (
    <React.Fragment>
      <div className='row mt-3'>
					<div className='col-sm'>
						<Display className = 'info' money = {budget} text ={'Budget'} HandleBudget = {props.HandleBudget}>
            <i className='fa fa-pencil-square-o '></i>
            </Display>
					</div>
					<div className='col-sm'>
						<Display className = 'danger' money = {budget - spent} text={'Remaining'}>
            </Display>
					</div>
					<div className='col-sm'>
						<Display className = 'success' money = {spent} text={'Spent'}>
            </Display>
					</div>
				</div>
    </React.Fragment>
  )
}

export default React.memo(Task)