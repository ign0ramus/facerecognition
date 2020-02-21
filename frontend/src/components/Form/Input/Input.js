import React from 'react';
import './Input.css';

const Input = props => {
	const { name, label, type, onChange, ...options } = props;
	return (
		<div className='mt3'>
			<label className='db fw6 lh-copy f6' htmlFor={name}>
				{label}
			</label>
			<input
				className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 hover-black'
				name={name}
				type={type}
				onChange={onChange}
				{...options}
			/>
		</div>
	);
};

export default Input;
