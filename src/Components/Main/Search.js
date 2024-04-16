import React, {useContext, useState} from 'react'
import Items from './Items';
import { AppContext } from '../../Context/ContextApi';


function Search() {
    const { items } = useContext(AppContext)
    const [text, setText]= useState('')
    const [filter, setFilter] = useState(0)
    
    const dynamicSearch = () => {
      
        let filteredItems = items
        
        if(filter == 2)
        {
          filteredItems.sort((item1 , item2) => {return item1.itemCost - item2.itemCost});
          //console.log(filteredItems)
        }
        else if(filter == 1)
        {
          filteredItems.sort((item1 , item2) => {return item2.itemCost - item1.itemCost})
          
        }
        else if(filter == 0)
        {
          filteredItems = items
        }
        return filteredItems.filter(item => item.itemName.toLowerCase().includes(text.toLowerCase()))
    }
    const filterSearch = (event) => {
      setFilter(event.target.value)
    }

  return (
    <div style={{paddingTop : '10px'}}>
            <h1 className="text-start" style={{paddingBottom : '20px'}}>Expenses </h1>
        <form className='row'>
           <div className="col">
             <input type="text" 
               className="form-control"
               id="SearchInput" 
               value={text}
               onChange = {(event) => {setText(event.target.value)}}  
               placeholder="Type to Search" />
            </div>
            <div className='col'>
             <select className="form-select" onChange={filterSearch}>
              <option selected value='0'>Sort the List by Money</option>
              <option value="1">From Highest to Lowest</option>
              <option value="2">From Lowest to Highest</option>
             </select>
            </div>
        </form>
        <Items ResultedItems = {dynamicSearch()}/>
    </div>
  )
}

export default Search