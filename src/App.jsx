import { React, useState } from 'react'
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './components/reset.css'
import './App.css'

function App() {

  const [columns, setColumns] = useState({
    Backlog:{
        name: 'Backlog',
        items: [
            {id: '1', content:'Задача 1'},
            {id: '2', content:'Задача 2'}
        ]
    },
    Ready:{
        name: 'Ready',
        items: [
            {id: '3', content:'Задача 3'},
            {id: '4', content:'Задача 4'}
        ]
    },
    inProgress:{
        name: 'in Progress',
        items: [
            {id: '5', content:'Задача 5'},
            {id: '6', content:'Задача 6'},
            {id: '7', content:'Задача 7'},
            {id: '8', content:'Задача 8'}
        ]
    },
    Finished:{
        name: 'Finished',
        items: [
            {id: '3', content:'Задача 3'},
            {id: '4', content:'Задача 4'}
        ]
    }
})

    const [newTask, setNewTask] = useState('')
    
    const [draggedItem, setDraggedItem] = useState(null) // Какую задачу перетачкиваем
// Состояние для управления видимостью div  
    const [showInput, setShowInput] = useState(false);

// При клике на кнопку  
    const handleButtonClick = () => {  
        setShowInput(!showInput); // Переключить состояние видимости  
        }


    // Создание новой задачи
    const addTaskName = (titleTask) => {
        if(newTask.trim() === '') return alert ('Вы не ввели новую задачу!!!') // если строка пустая
        
        const updateColumns = {...columns}
        
        updateColumns[titleTask].items.push({
            id: Date.now().toString(),
            content: newTask
        })

        setColumns(updateColumns)
        setNewTask('')
    }

    const handleValueChange = (event) => {
        event.preventDefault();
        setNewTask(event.target.value)
    }




    // Удаление задачи
    const removeTask = (columnId, taskId) => {
        const updateColumns = {...columns}

        updateColumns[columnId].items = updateColumns[columnId].items.filter((items) => items.id !== taskId)
    
        setColumns(updateColumns)
    }

    const handleDragStart = (columnId, items) => {
        setDraggedItem({columnId, items})
    }

    // Какую именно задачу двигаем
    const handleDragOver = (e) => {
        e.preventDefault()
    }

    // 
    const handleDrop = (e, columnId) => {
        e.preventDefault()

        if(!draggedItem) return

        const {columnId: sourceColumnId, items} = draggedItem

        if(sourceColumnId === columnId) return

        const updateColumns = {...columns}

        updateColumns[sourceColumnId].items = updateColumns[sourceColumnId].items.filter((i) => i.id !=items.id)

        updateColumns[columnId].items.push(items)

        setColumns(updateColumns)
        setDraggedItem(null)
    }



  return (
    <div className="wrapper">
      <Header />
      <Main columns = {columns}
            newTask = {newTask}
            draggedItem = {draggedItem}
            showInput = {showInput}
            handleButtonClick = {handleButtonClick}
            addTaskName = {addTaskName}
            removeTask = {removeTask}
            handleDragStart = {handleDragStart}
            handleDragOver = {handleDragOver}
            handleDrop = {handleDrop}
            handleValueChange = {handleValueChange}
      />
      <Footer />
    </div>
  )
}

export default App;
