import { useState } from 'react'
function Todolist(){

    const [tasks, setatsk]=useState(["eat","sleep", "code","repeat","gaming"]);
    const [newtask,setnewtask]=useState("");

    function inputchange(event){
       setnewtask( event.target.value);

    }

    function addtask(){

    }
    function dlttask(index){
        
    }
    function movetaskup(){
        
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
            <div className="action-btns">            <button onClick={dlttask}>Delet</button>
            <button onClick={movetaskup}>Up</button>
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