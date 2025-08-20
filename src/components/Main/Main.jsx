import './Main.css'
import ConbanProject from '../pages/ConbanProject'

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
                <div className='main__ready-h2'>
                    {props.columns[columnId].name}
                </div>
                <div>
                    {/* Если задач нету И если они есть */}
                    {props.columns[columnId].items.length === 0 ? (
                        <div className='main__ready-good'>Поздравляю. Все задачи кончились!</div>
                    ) : (
                        props.columns[columnId].items.map((items) => (
                            <div key={items.id} className='main__ready-good'
                                draggable onDragStart={() => props.handleDragStart(columnId, items)}>
                                <span>{items.content}</span>
                                
                                <button className='main__ready-delite' onClick={() => props.removeTask(columnId, items.id)}>
                                    <span>x</span>
                                </button>
                            </div>
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

















// import { React, useState } from 'react'
// import './Main.css'

// function Main() {

//     const [columns, setColumns] = useState({
//         Backlog:{
//             name: 'Backlog',
//             items: [
//                 {id: '1', content:'Задача 1'},
//                 {id: '2', content:'Задача 2'}
//             ]
//         },
//         Ready:{
//             name: 'Ready',
//             items: [
//                 {id: '3', content:'Задача 3'},
//                 {id: '4', content:'Задача 4'}
//             ]
//         },
//         inProgress:{
//             name: 'in Progress',
//             items: [
//                 {id: '5', content:'Задача 5'},
//                 {id: '6', content:'Задача 6'},
//                 {id: '7', content:'Задача 7'},
//                 {id: '8', content:'Задача 8'}
//             ]
//         },
//         Finished:{
//             name: 'Finished',
//             items: [
//                 {id: '3', content:'Задача 3'},
//                 {id: '4', content:'Задача 4'}
//             ]
//         }
//     })
    
//     const [newTask, setNewTask] = useState('')
    
//     const [draggedItem, setDraggedItem] = useState(null) // Какую задачу перетачкиваем
// // Состояние для управления видимостью div  
//     const [showInput, setShowInput] = useState(false);


//     const [columnsLength, setolumnsLength] = useState('')
//     // const [activeColumns, setActiveColumns] = useState('') // Сюда будут добавляться по умолчанию


//     // const [ggg, setGgg] = useState('')

//     // const del = () => {
//     //     setGgg(columns[columnId].items.length)
//     // }


// // При клике на кнопку  
// const handleButtonClick = () => {  
//     setShowInput(!showInput); // Переключить состояние видимости  
//     }

//     // Создание новой задачи
//     // const addNewTask = () => {
        
//     //     if(newTask.trim() === '') return alert ('Вы не ввели новую задачу!!!') // если строка пустая
        
//     //     const updateColumns = {...columns}
        
//     //     updateColumns[activeColumns].items.push({
//     //         id: Date.now().toString(),
//     //         content: newTask
//     //     })

//     //     setColumns(updateColumns)
//     //     setNewTask('')
//     // }


//     // Создание новой задачи
//     const addTaskName = (titleTask) => {
//         if(newTask.trim() === '') return alert ('Вы не ввели новую задачу!!!') // если строка пустая
        
//         const updateColumns = {...columns}
        
//         updateColumns[titleTask].items.push({
//             id: Date.now().toString(),
//             content: newTask
//         })

//         setColumns(updateColumns)
//         setNewTask('')
//     }


//     // Удаление задачи
//     const removeTask = (columnId, taskId) => {
//         const updateColumns = {...columns}

//         updateColumns[columnId].items = updateColumns[columnId].items.filter((items) => items.id !== taskId)
    
//         setColumns(updateColumns)
//     }

//     const handleDragStart = (columnId, items) => {
//         setDraggedItem({columnId, items})
//     }

//     // Какую именно задачу двигаем
//     const handleDragOver = (e) => {
//         e.preventDefault()
//     }

//     // 
//     const handleDrop = (e, columnId) => {
//         e.preventDefault()

//         if(!draggedItem) return

//         const {columnId: sourceColumnId, items} = draggedItem

//         if(sourceColumnId === columnId) return

//         const updateColumns = {...columns}

//         updateColumns[sourceColumnId].items = updateColumns[sourceColumnId].items.filter((i) => i.id !=items.id)

//         updateColumns[columnId].items.push(items)

//         setColumns(updateColumns)
//         setDraggedItem(null)
//     }


//     return (
//         /* Общий блок под контент */
//         <div className='main'>
//         {Object.keys(columns).map((columnId) => (
//             /* четыре БЛОКА С ЗАДАЧАМИ */
//             <div key = {columnId}
//             className='main__ready'
//             onDragOver={(e) => handleDragOver(e, columnId)}
//             onDrop={(e) => handleDrop(e, columnId)}
//             >
//                 {/* заголовки */}
//                 <div className='main__ready-h2'>
//                     {columns[columnId].name}

// {/* НАДО ПЕРЕДАТЬ В ФУТЕР */}
//                     {/* колличество задач */}
//                     <span className='main__list-lists-span'>
//                         {columns[columnId].items.length}
//                         {/* {setolumnsLength(columns[columnId].items.length)} */}
//                     </span>

//                 </div>
//                 <div>
//                     {/* Если задач нету И если они есть */}
//                     {columns[columnId].items.length === 0 ? (
//                         <div className='main__ready-good'>Поздравляю. Все задачи кончились!</div>
//                     ) : (
//                         columns[columnId].items.map((items) => (
//                             <div key={items.id} className='main__ready-good'
//                                 draggable onDragStart={() => handleDragStart(columnId, items)}>
//                                 <span>{items.content}</span>
                                
//                                 <button onClick={() => removeTask(columnId, items.id)}>
//                                     <span>x</span>
//                                 </button>
//                             </div>
//                         ))
//                     )}
//                 </div>

//                 {showInput && (
//                     <>
//                     <input className='main__ready-task'
//                     type='text'
//                     value={newTask}
//                     onChange={(e) => setNewTask(e.target.value)}
//                     placeholder='Добавить новую задачу ...'
//                 />
//                 <button className='submit__btn' onClick={() => {addTaskName(columns[columnId].name)}}>Submit</button>
//                     </>
//                 )}

//                 {/* <input className='main__ready-task'
//                     type='text'
//                     value={newTask}
//                     onChange={(e) => setNewTask(e.target.value)}
//                     placeholder='Добавить новую задачу ...'
//                 /> */}

//                 {/* {<select value={activeColumns}
//                     onChange={(e) => setActiveColumns(e.target.value)}
//                     className='main__ready-list'>
//                     {Object.keys(columns).map((columnId) => (
//                         <option value={columnId} key={columnId}>
//                             {columns[columnId].name}
//                         </option>
//                     ))}
//                 </select>} */}

//                 <button className='main__btn' onClick={handleButtonClick}>+ Add card</button>
//             </div>
//         ))}
//     </div>
//     )
//   }


// export default Main