import { NavLink, useParams} from "react-router-dom";
import { BsXLg } from "react-icons/bs";
import './ConbanProject.css'

const ConbanProject = (props) => {

const { id } = useParams();
const taskId = String(id);

const project = Object.values(props.columns)     
  .flatMap(column => column.items)           
  .find(item => item.id === taskId)

    return (
        <div className='main'>
            <div className='main__list'>
                <div className='main__titles'>
                    {/* <h3 className='main__h3'>{project.title}</h3> */}
                    <NavLink to='/' className='header__title-hom'>
                        <BsXLg  className='main__del'/>
                    </NavLink>
                </div>
                <p className='main__description'>
                {project.content}
                </p>
            </div>
        </div>
    );
}
 
export default ConbanProject;