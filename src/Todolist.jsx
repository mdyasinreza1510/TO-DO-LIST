import { useState } from 'react'
function Todolist(){

    const [tasks, settask]=useState(["eat","sleep", "code"]);
    const [newtask,setnewtask]=useState("");

    function inputchange(event){
       setnewtask( event.target.value);

    }

    function addtask(){
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
            <div className="action-btns">            <button onClick={()=>{dlttask(index)}}>Delet</button>
            <button onClick={() =>{movetaskup(index)}}>Up</button>
            <button onClick={movetaskdown}>Down</button></div>

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