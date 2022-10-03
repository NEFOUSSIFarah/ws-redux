import React, { useState } from 'react'
import {Button,Form} from'react-bootstrap'
import {useDispatch} from 'react-redux'
import { AddTask } from '../../Js/Actions/listTask'


const AddTask = () => {
  const [text,setText] = useState("")
  const dispatch = useDispatch();
  const handeladd =(e) => {
             e.preventDefault()
             if (text)
             {dispatch(addTask({id:Math.random() ,taxt, isDone:false}))}
             else {
              alert ("can not add any text")
             }
  }
  return (
    <div>
<Button variant='primary' type='submit' onClick={handleadd}> </Button>
    ADD
    </div>
  )
}

export default AddTask