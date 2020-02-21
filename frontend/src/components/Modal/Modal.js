import { useRef, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';


const Modal = props => {
    const el = useRef(null);

    if (!el.current) {
        el.current = document.createElement('div');
    }
    
    useLayoutEffect(() => {
        const modalRoot = document.getElementById('modal-root');
        modalRoot.appendChild(el.current);

        return () => {
            el.current.remove();
        };
    }, []);

	return createPortal(props.children, el.current);
};

export default Modal;
