import {useTranslation} from 'react-i18next';import {useNavigate} from 'react-router-dom';import Img from './Img.jsx';
export default function RoomCard({room,onDetails}){const {t}=useTranslation();const nav=useNavigate();const name=t(`rooms.${room.id}`);
return <article className="card room"><button className="imgbtn" onClick={()=>onDetails(room)} aria-label={`${t('rooms.details')}: ${name}`}><Img src={room.img} alt={name}/></button>
<h3>{name}</h3><p className="meta">👤 {room.guests} {t('rooms.guests')} · 🛏 {room.beds} {t('rooms.beds')}</p><p className="price"><b>${room.price}</b> {t('rooms.night')}</p>
<div className="row"><button className="btn ghost sm" onClick={()=>onDetails(room)}>{t('rooms.details')}</button><button className="btn sm" onClick={()=>nav(`/booking?room=${room.id}`)}>{t('rooms.select')}</button></div></article>;}
