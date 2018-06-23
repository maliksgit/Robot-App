import React from 'react';

const Search =({SerachField,newSearchVeriable})=>{

	return (
		<input type='search' 
		placeholder='search robots'
		onChange={newSearchVeriable}


		/>

);
}

export default Search;