import React from 'react';



const App =({name,id,userName,email})=>{
	return (

		<div className='bg-light-blue dib ma3 pa3 br3 grow shadow-5'>

		<img src={`https://robohash.org/${id}?size=200x200`} alt ='robotspic' />
		<h1> {name} </h1>
		<h2> {id} </h2>
		<h2> {userName} </h2>
		<h3> email </h3>

		</div>


	);


}

export default App;