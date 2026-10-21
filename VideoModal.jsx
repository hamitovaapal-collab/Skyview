import {useRef,useState} from 'react';import {useTranslation} from 'react-i18next';import Modal from './Modal.jsx';import {VIDEO_URL} from '../data/rooms.js';
export default function VideoModal({onClose}){const {t}=useTranslation();const [err,setErr]=useState(false);const r=useRef();
const close=()=>{r.current&&r.current.pause();onClose();};
return <Modal onClose={close} wide>{err?<p className="err">{t('video.err')}</p>:<video ref={r} src={VIDEO_URL} controls autoPlay playsInline onError={()=>setErr(true)} className="vid"/>}</Modal>;}
