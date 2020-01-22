import React from 'react';
import './Facerecognition.css';

const Facerecognition = ({ url, boxes }) => (
	<div className='flex justify-center ma'>
		<div className='absolute mt2'>
			{url && <img src={url} alt='User input' width='500px' heigh='auto' />}
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
