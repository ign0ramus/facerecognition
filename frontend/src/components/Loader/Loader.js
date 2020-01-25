import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const LoaderComponent = ({color}) => (
	<div className='absoluteCenter'>
		<Loader type='Triangle' color={color === 'primary' ? '#149df2' : '#f5f542'} height={200} width={200} />
	</div>
);

export default LoaderComponent;
