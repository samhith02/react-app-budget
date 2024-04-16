import React, { useContext, useState } from 'react'
import { AppContext } from '../../Context/ContextApi';

function Item(props) {
  const {dispatch}= useContext(AppContext);
  
  const [edit, setEdit]= useState(false);
  const [editItemName, setEditItemName] = useState(props.itemName);
  const [editItemCost, setEditItemCost]= useState(props.itemCost);

  const deleteItem = () => {
    //console.log(props.id + 'This ');
    dispatch({
      type : 'DELETE ITEM',
      value : props.id
    })
  }

  const handleEdit = () => {
    setEdit(!edit);
  }

  const EditItem = () => {
    dispatch({type : 'EDIT ITEM', value : {
      itemName : editItemName,
      itemCost : Number(editItemCost),
      id : props.id
    }})
    
    setEdit(false);
  }

  return (
      <React.Fragment>
        
        {
          edit ? ( <div className='row'>
             
             <div className='col'>
               <div className="input-group">
                 <input type="text" className="form-control" value={editItemName} onChange={(event) => setEditItemName(event.target.value)}/>
                 <input type="text" className="form-control" value={editItemCost} onChange={(event) => setEditItemCost(event.target.value)}/>
               </div>
             </div>
             <div className='col-md-auto' style={{cursor : 'pointer'}}>
             <i className="fa fa-check" style={{fontSize : '34px', color : 'green'}} onClick={EditItem}></i>
             <i className="fa fa-times" style={{fontSize : '34px', color : 'red'}} onClick={handleEdit}></i>
             </div>
 
             </div>) : 
            ( 
              <li className="list-group-item  list-group-item-action " style={{cursor : 'pointer'}}>
            <div className='d-flex justify-content-between'>
                {props.itemName}
                <div className='d-lg-flex justify-content-between align-items-center ' >
                   <span className="badge bg-primary rounded-pill">{props.itemCost}</span>
                   <i className="fa fa-trash-o" onClick={deleteItem}></i>  
                   <i className='fa fa-pencil-square-o ' onClick={handleEdit}></i>
                </div>
            </div>
            </li>)
        }
        
      </React.Fragment>
    
  )
}

export default React.memo(Item);