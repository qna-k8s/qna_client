import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import './chips.styles.css'
const chip =({children,...props})=>{
    const {deleteChip} = props;
     return(
         <div className="chip-container">
             <p className="chip-text">{children}</p>
             <FontAwesomeIcon icon={faTimes} 
             onClick={()=>deleteChip(children)} 
             className="chip-icon"/>
         </div>
     )
}

export default chip;