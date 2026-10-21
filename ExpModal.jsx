import {useTranslation} from 'react-i18next';import Modal from './Modal.jsx';import Img from './Img.jsx';
export default function ExpModal({e,onClose}){const {t}=useTranslation();return <Modal onClose={onClose}><Img src={e.img} alt={t(`exp.${e.id}`)} className="mimg"/><h3>{t(`exp.${e.id}`)}</h3><p>{t(`exp.d_${e.id}`)}</p></Modal>;}
