import React, { useContext, useState} from 'react'
import { AppContext } from '../Context/ContextApi';
import DisplayMessage from '../Components/Main/DisplayMessage';
import styles from '../Styles/Message.module.css';

function Message() {

    const [display, setDisplay] = useState(true);
    //console.log(display);

    const {budget, items} = useContext(AppContext);

    let Spent = items.reduce((total, item) => {
        return (total + item.itemCost)
    },0)



    const handleDisplay = () => {
        setDisplay(!display);
        //console.log(display);
        //console.log('Clicked');
    }

  return (
    <div className='container' >
      <div className={display ? styles.show : styles.hide}>
        {
            ( (budget-Spent) < 20  && (budget-Spent) >= 0 && (<DisplayMessage message = {'The Budget Amount is less than 20 rupees'} classname = {'warning'} handleDisplay = {handleDisplay} />) )
        }
      </div>
      <div className={display ? styles.show : styles.hide}>
        {
           (budget-Spent < 0) ? (<DisplayMessage message = {'The Budget Amount is less than 0 rupees'} classname = {'danger'} handleDisplay = {handleDisplay}/>) : (<div></div>) 
        }
       </div>

    </div>
  )
}

export default React.memo(Message);