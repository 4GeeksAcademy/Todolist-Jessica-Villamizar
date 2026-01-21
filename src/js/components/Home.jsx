import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Home = () => {

	const [task, setTask]= useState("")
	const [taskList, setTaskList]= useState(["Hacer la Tarea", "Limpiar la casa", "Hacer Ejercicios","Dormir la Sieta",])
	function addTask(){
		setTaskList([...taskList,task])
	}
	
	
	
	
	return (
		<div className="text-center d-flex flex-column">
        


			<h1 className="text-center mt-5">Todo List!</h1>
			<input type="text" 
				className="form-control w-25 mx-auto" 
				placeholder="What needs to be done" 
				onChange={(event) => setTask (event.target.value)}
				onKeyUp={(event) => {
					if (event.key === "Enter") {
						setTaskList([...taskList, task]);
						setTask("");
					}
					}
				}
			/>
			{/* <button className="btn btn-primary" style={{ width: "180px", height: "45px", fontSize: "16px" }} 
			onClick={() =>addTask ()}>Agrerar Tarea
			</button> */}
			
			<p> {task} </p>
			{taskList.map((taskItem, index) => <p key={index}>{taskItem}
				<button onClick={()=>setTaskList(taskList.filter((item,ind)=> ind !== index))}
				className="btn-close"></button>
				</p>)}
		
		</div>
	);
};

export default Home;