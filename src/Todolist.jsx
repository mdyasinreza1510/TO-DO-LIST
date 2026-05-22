import { useState } from 'react'
import { FaTrash, FaArrowUp, FaArrowDown } from "react-icons/fa";
function Todolist(){

    const [tasks, settask]=useState([]);
    //ye hamara main task hai jo show hoga page pe
    const [newtask,setnewtask]=useState("");
    //ye hamara cretaing task hai jo input se value lekr uper wale "tasks" me add krega

    function inputchange(event){
       setnewtask( event.target.value);
/*yaha input change me hmne input k value ko acces kiya hai aur 
setnewtask k zariya jo value input se liya usko newtask ki value me add krdiya*/
    }

    function addtask(){
        /*ab newtask me jo value add hua hai usko add btn click hone pe settask settr ko use krke main 
        "tasks" jo page me show hoga waha add rdenge aur input ki vale ko empty krdenge*/
        if (newtask !==""){
        settask([...tasks, newtask]);
        setnewtask("");
        }
        else{
            alert("enter a task first");
        }


    }
    function dlttask(index){
        const dltdtask= tasks.filter((_, i) => i!== index);
        settask(dltdtask);
        
    }
    function movetaskup(index){
        if (index > 0){
                    const updatedtask=[...tasks];

        [updatedtask[index], updatedtask[index-1]] = [updatedtask[index-1], updatedtask[index]];

        settask(updatedtask);
        }

        
    }
    function movetaskdown(index){
                if (index < tasks.length -1){
                    const updatedtask=[...tasks];

        [updatedtask[index], updatedtask[index+1]] = [updatedtask[index+1], updatedtask[index]];
        
        settask(updatedtask);
        }
        
    }
    return(
<>
<div className="main-container">
    
<div className='heading'>
    <h1>TO-DO-LIST</h1>
</div>
<div className='input-box'>
    <input
    type="text" 
    placeholder='Enter new task....' 
    value={newtask}
    onChange={inputchange}/>
    <button className='adbtn'
    onClick={addtask}>Add</button>
</div>
<div className='list-box'>
    <ol>
        {tasks.map((task, index)=>
        <li key={index}>
            <div className="task-box">

            <div className="task"><p>{task}</p></div>
            
            <div className="action-btns">  

                <button onClick={()=>{dlttask(index)}}><FaTrash  className='icons' /></button>
            
            <button onClick={() =>{movetaskup(index)}}><FaArrowUp  className='icons'/></button>
            
            <button onClick={() => {movetaskdown(index)}}><FaArrowDown className='icons'/></button>
            </div>

            </div>
          

        </li>
        )}
    </ol>
</div>

</div>

</>
    );
}
export default Todolist