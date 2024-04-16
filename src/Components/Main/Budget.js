import React, { useContext, useState } from 'react'
import { AppContext } from '../../Context/ContextApi'

function Budget() {
    const {dispatch} = useContext(AppContext);
    const [budget, setBudget] = useState('');

    const handleBudget = (event) => {
        event.preventDefault();
        dispatch({
            type : 'EDIT BUDGET',
            value : budget}
        )
        setBudget('');
    }

  return (
    <div className='container d-flex justify-content-center'>
        <form onSubmit={handleBudget}>
            <div className='row g-2'>
              <div className="col-auto">
                <input type="text" className="form-control" id="inputBudget" value={budget}  onChange = {(event) => setBudget(event.target.value)} placeholder="Enter the Budget Amount" />
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3">Submit</button>
              </div>
            </div>
        </form>
    </div>
  )
}

export default Budget