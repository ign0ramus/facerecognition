import React from 'react';
import Loader from '../Loader/Loader';
import './Facerecognition.css';

const Facerecognition = ({ url, boxes, isLoading }) => (
	<div className='flex justify-center ma'>
		<div className='absolute mt2'>
			{url && <img src={url} alt='User input' width='500px' heigh='auto' />}
			{isLoading ? <Loader color='primary'/> : null}
			{boxes?.map(el => (
				<div
					key={el.id}
					className='box'
					style={{
						top: `${el.top}%`,
						left: `${el.left}%`,
						bottom: `${el.bottom}%`,
						right: `${el.right}%`,
					}}
				/>
			))}
		</div>
	</div>
);

export default Facerecognition;
