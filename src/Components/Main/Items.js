import React from 'react';

import Item from './Item';

function Items(props) 
{
   
  return (
    <div  style={{paddingTop : '30px'}}>
        <ul className="list-group">
           {props.ResultedItems.map((item) => (
			  	<Item  key = {item.id}  id = {item.id} itemName={item.itemName} itemCost={item.itemCost} />
			))}
        </ul>
    </div>
  )
}

export default React.memo(Items)