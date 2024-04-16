import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/reset.css';
import './Styles/App.css';
import Task from './Task/Task';
import 'font-awesome/css/font-awesome.min.css';
import Footer from './Components/Main/Footer';
import React, {useReducer} from 'react';

import Budget from './Components/Main/Budget';
import {Appprovider} from './Context/ContextApi';
import AddItem from './Components/Main/AddItem';
import Message from './Task/Message';
import Search from './Components/Main/Search';

const reducerFunction = (state, action) =>{
  let UpdatedItems;
  switch(action.type)
  {
    case 'ADD ITEM':
     
      return {
        ...state, items : [...state.items, action.value]
      }

    case 'DELETE ITEM':
      return {
				...state,
				items: state.items.filter(
					(expense) => expense.id !== action.value
				),
			};

      case 'EDIT BUDGET':
        return {
          ...state, budget : action.value
        }

      case 'EDIT ITEM':
        UpdatedItems = state.items.filter(item => item.id !== action.value.id);
        return {
          ...state, items : [...UpdatedItems, action.value]
        }
      default:
        return state
  }

}


function App() {
 
  const initialState = {
    budget : 20,
    items : []

  };
  const LocalState = JSON.parse(localStorage.getItem('state')) || initialState;
  //let localState = JSON.parse(localStorage.getItem('state')) || initialState;
  const [state, dispatch] = useReducer(reducerFunction, LocalState);
  localStorage.setItem('state', JSON.stringify(state));

  const EditBudget = () => {
     //console.log('Clicked the edit Button');
  }

  return (
    <div className="App">
      <div className='container'>
         <div className='front'>

         </div>
         <div className='main'>
            <header className="App-header">
              <h1 className ="text-xl-center text-capitalize">Budget App</h1>
            </header>
            <Appprovider value={{items : state.items,  budget : state.budget, dispatch}} >
              <Message/>
              <Budget/>
              <Task HandleBudget = {EditBudget}/>
              <Search/>
              <AddItem/>  
            </Appprovider>
            <Footer/>          
         </div>
      </div>
    </div>
  );
}

export default App;
