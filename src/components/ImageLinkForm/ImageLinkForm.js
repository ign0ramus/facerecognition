import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onChange, onClick }) => (
	<div>
		<p className='f3'>This Magic Brain will detect faces in your pictures.</p>
		<div className='flex justify-center'>
			<div className='form center pa3 pa4-ns br3 shadow-5 flex items-center'>
				<input onChange={onChange} className='f4 pa2 w-70 center' type='text' />
				<button
					onClick={onClick}
					className='w-30 flex justify-center grow f4 h-100 br2 link pv2 dib white bg-light-purple ba b--purple'
				>
					Detect
				</button>
			</div>
		</div>
	</div>
);

export default ImageLinkForm;
