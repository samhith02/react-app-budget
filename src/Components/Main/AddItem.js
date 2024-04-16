import React, {useState, useContext} from 'react'
import { AppContext } from '../../Context/ContextApi';
import { v4 as uuidv4 } from 'uuid';

function AddItem() 
{
    const {dispatch} = useContext(AppContext);
    const [itemName, setItem] = useState('');
    const [itemCost, setCost] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log(itemName, itemCost);
        const Item = {
            id :  uuidv4(),
            itemName,
            itemCost : Number(itemCost)
        }
        dispatch({
            type : 'ADD ITEM',
            value : Item
        })
        setItem('');
        setCost('');
    }

  return (
    <div className='container' style={{paddingTop : '20px'}}>
      <h1 className="text-start" style={{paddingBottom : '15px'}}>Add Expense Item</h1>
        <form onSubmit={handleSubmit}>
			<div className='row'>
				<div className='col-sm'>
					<label>Item</label>
					<input
						required='required'
						type='text'
						className='form-control'
						id='name'
                        value={itemName}
                        onChange = {(event) => setItem(event.target.value)}
					></input>
				</div>
				<div className='col-sm'>
					<label >Cost</label>
					<input
						required='required'
						type='number'
						className='form-control'
						id='cost'
                        value={itemCost}
                        onChange = {(event) => setCost(event.target.value)}
					></input>
				</div>

            	<div className='col-sm'>
					<button type='submit' className='btn btn-primary mt-4'>
						Save
					</button>
				</div>
            </div>
		</form>
    </div>
  )
}

export default AddItem