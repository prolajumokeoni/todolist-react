import { useState } from "react"

const Tasks = () => {
	const [tasks, setTasks] = useState([ 
		
	{
		id: 1,
		text: 'hello nnnn',
		day: 'dec 5',
		reminder: true,
	},
	{
		id: 2,
		text: 'hello gfddd',
		day: 'may 5',
		reminder: true,
	},
	{
		id: 3,
		text: 'hell oojbo',
		day: 'aug 5',
		reminder: false,
	},
	])
	return (
		<>
		{tasks.map((task) => (
			<h3 key={task.id}>{task.text}</h3>
		))}
		</>
	)
}

export default Tasks
