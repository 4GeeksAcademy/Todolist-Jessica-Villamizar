import React, {useState} from "react";
import "../../styles/index.css";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [task, setTask]= useState("")
	const [taskList, setTaskList]= useState(["Lavar la Ropa", "Hacer Ejercicios", "Ir al Supermercado", "Pasear al Perro", "Dormir una Siesta",])
	function addTask(){
		setTaskList([...taskList,task])
	}

	return (
		<div className="text-center d-flex flex-column">
			<div className="Todo-box mx-auto mt-5">  
			<h1 className="text-center mb-3">Todos</h1>
			<input type="text" 
				className="form-control" 
				placeholder="What needs to be done?" 
				value={task}
				onChange={event=>setTask(event.target.value)}
				onKeyUp={(e) => {
					if (e.key === "Enter") {
						setTaskList([...taskList, task]);
						setTask("");
					}
		}}
			/>
			<ul className="list-unstyled mb-0">
			{taskList.length === 0 ? (
			<li className= "empty-msg">No hay tareas, añadir tareas.</li>
			) : (
				taskList.map((task, index) => (
					<li className="todo-item" key={index}>
						<span>{task}</span>

						<span
						className="delete-btn"
						onClick={() =>
							setTaskList(taskList.filter((item, ind) => ind !== index))
						}
						>
							x
						</span>
					</li>
			)) 
		)}
			</ul>
			<p className="count">
				{taskList.length} item{taskList.length !== 1 ? "s" : ""}left 
			</p>
			</div>
		</div>
	);
};

export default Home;