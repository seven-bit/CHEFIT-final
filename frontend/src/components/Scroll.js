import React from 'react';

const Scroll=(props)=>{
	return(
		<div style={{overflowY: 'scroll' , height: 500}}>
			{props.children}
		</div>
		);
}

export default Scroll;