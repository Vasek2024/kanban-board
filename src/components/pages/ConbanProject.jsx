import './ConbanProject.css'

const  ConbanProject = (props) => {
    return ( 
        
        <div key={props.items.id} className='main__ready-good'
                                draggable onDragStart={() => props.handleDragStart(props.columnId, props.items)}>
                                <span>{props.items.content}</span>
                                
                                <button className='main__ready-delite' onClick={() => props.removeTask(props.columnId, props.items.id)}>
                                    <span>x</span>
                                </button>
                            </div>
     );
}
 
export default ConbanProject;