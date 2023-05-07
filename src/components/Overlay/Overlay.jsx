import { memo } from 'react';
import ReactDOM from 'react-dom';
import './Overlay.css';

function Overlay({ onClick, hidden }) {
  const overlayClassName = `overlay ${hidden ? 'hidden' : ''}`;

  return ReactDOM.createPortal(
    <div className={overlayClassName} onClick={onClick} />,
    document.body
  );
}

export default memo(Overlay);