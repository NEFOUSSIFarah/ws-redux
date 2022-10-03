import React from 'react'
import './Task.css'
import { Button } from 'react-bootstrap'
import { useDispatch} from 'react-redux'

const task=({task})=> {
  const dispatch = useDispatch()
  return (
    <div className='Task-countainer'>
        <p>{task.text}</p>
//on utilise props pour afficher le texte de task
        <Button>Delete</Button>
        <Button>Done</Button>
    </div>
  )
}

export default task