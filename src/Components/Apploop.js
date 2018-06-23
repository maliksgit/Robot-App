import React from 'react';
import App from './App';
// import {Robots} from '../Robots';

const Apploop=({Robots})=>{

	return (
		<div>
			{
			Robots.map((user,i)=>{
					return <App
						key={i} 
						name={Robots[i].name}
						id={Robots[i].id}
						email={Robots[i].email}
						userName={Robots[i].userName}
						
						
					/>

				})
				

			}

		</div>
	);
}

export default Apploop;