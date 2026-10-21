import {useEffect} from 'react';import {useTranslation} from 'react-i18next';
export default function Modal({onClose,children,wide}){const {t}=useTranslation();
useEffect(()=>{const k=e=>e.key==='Escape'&&onClose();document.addEventListener('keydown',k);document.body.style.overflow='hidden';return()=>{document.removeEventListener('keydown',k);document.body.style.overflow='';};},[onClose]);
return <div className="overlay" onClick={onClose}><div className={`modal ${wide?'wide':''}`} role="dialog" aria-modal="true" onClick={e=>e.stopPropagation()}><button className="x" onClick={onClose} aria-label={t('close')}>✕</button>{children}</div></div>;}
