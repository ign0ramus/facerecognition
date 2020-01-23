import React from 'react'

const Error = ({ text }) =>
	!text ? null : <span className='db dark-red mb3'>{text}</span>;

export default Error;