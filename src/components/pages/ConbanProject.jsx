import { NavLink, useParams} from "react-router-dom";
import { BsXLg } from "react-icons/bs";
import './ConbanProject.css'

const ConbanProject = (props) => {
    
    // Почему то функция useParams не определяет id из массива
    const {id} = useParams()
    const project = props.columns[id]

    console.log(props.columns[id])
    console.log(props.columns.Backlog.items[0].content);


    return (
        <div className='main'>
            <div className='main__list'>
                <div className='main__titles'>
                    <h3 className='main__h3'>Main page – performance issues</h3>
                    <NavLink to='/' className='header__title-hom'>
                        <BsXLg  className='main__del'/>
                    </NavLink>
                </div>
                <p className='main__description'>
                Это был темный лес, издали казавшийся непроходимым. Там Пахапиль охотился, глушил рыбу, спал на еловых ветках. Короче – жил, пока русские не выгнали оккупантов. А когда немцы ушли, Пахапиль вернулся. Он появился в Раквере, где советский капитан наградил его медалью. Медаль была украшена четырьмя непонятными словами, фигурой и восклицательным знаком.
                </p>
            </div>
        </div>
    );
}
 
export default ConbanProject;