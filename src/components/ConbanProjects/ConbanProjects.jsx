import { NavLink } from "react-router-dom";
import './ConbanProjects.css'

const  ConbanProjects = (props) => {
    
    return ( 
        <div key={props.items.id} className='main__ready-good'
        draggable onDragStart={() => props.handleDragStart(props.columnId, props.items)}>
            <NavLink to= {`ConbanProject/${props.items.id}`} className='header__title-article' key = {props.items.id} >
                <span>{props.items.content}</span>
            </NavLink>
                                
                <button className='main__ready-delite' onClick={() => props.removeTask(props.columnId, props.items.id)}>
                    <span>x</span>
                </button>
        </div>
     );
}
 
export default ConbanProjects;