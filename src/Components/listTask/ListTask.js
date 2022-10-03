
import React from 'react'
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import Task from '../Task/Task'

const ListTask = () => {
    const list = useSelector((state) =>state.ListReducer.ListTask);
    const [status, setStatus] =useSelector("All");
//on importe state avec useSelector 
  return (
    <div >
       <Button variant='outline-primary' onClick={() => setStatus ("All")}>
        All
       </Button>
        
       <Button variant='outline-primary' onClick={() => setStatus ("Done")}>
        Done
       </Button>

       <Button variant='outline-primary' onClick={() => setStatus ("Undone")}>
        Undone
       </Button>
       
      {status === "Done"
      ? list
             .filter((el)=> el.isDone)}
        
        {list.map(el=> <Task task={el} key={el.id}/>)}
//on mappe  :on va parcourir la liste dans des cartes   

    </div>
  )
}

export default ListTask