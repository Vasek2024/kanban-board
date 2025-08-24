import './Main.css'
import ConbanProjects from '../ConbanProjects/ConbanProjects'

function Main(props) {

    return (
        /* Общий блок под контент */
        <div className='main'>
        {Object.keys(props.columns).map((columnId) => (
            /* четыре БЛОКА С ЗАДАЧАМИ */
            <div key = {columnId}
            className='main__ready'
            onDragOver={(e) => props.handleDragOver(e, columnId)}
            onDrop={(e) => props.handleDrop(e, columnId)}
            >
                {/* заголовки */}
                <h1 className='main__ready-h1'>
                    {props.columns[columnId].name}
                </h1>
                <h3 className='main__ready-h3'>
                {/* {console.log(props.columns[columnId].name)} */}
                    {props.columns[columnId].title}
                </h3>
                <div>
                    {/* Если задач нету И если они есть */}
                    {props.columns[columnId].items.length === 0 ? (
                        <div className='main__ready-good'>Поздравляю. Все задачи кончились!</div>
                    ) : (
                        props.columns[columnId].items.map((items) => (
                            <ConbanProjects
                                key = {items.id}
                                items = {items}
                                columnId = {columnId}
                                removeTask = {props.removeTask}
                                handleDragStart = {props.handleDragStart}
                            />
                                
                        ))
                    )}
                </div>

                {props.showInput && (
                    <> {/* Фрагмент */}
                        <input className='main__ready-task'
                            type='text'
                            value = {props.newTask.value}
                            onChange={props.handleValueChange}
                            placeholder='Добавить новую задачу ...'
                        />
                        <button className='submit__btn' onClick={() => {props.addTaskName(props.columns[columnId].name)}}
                            onSubmit={(event) => event.target.reset()}>Submit</button>
                    </>
                )}

                <button className='main__btn' onClick={props.handleButtonClick}>+ Add card</button>
            </div>
        ))}
    </div>
    )
  }


export default Main