import {useState,useMemo} from 'react';import {useSearchParams} from 'react-router-dom';import {useTranslation} from 'react-i18next';import RoomCard from '../components/RoomCard.jsx';import Modal from '../components/Modal.jsx';import Img from '../components/Img.jsx';import {rooms} from '../data/rooms.js';
export default function Rooms(){const {t,i18n}=useTranslation();const [sp]=useSearchParams();const [q,setQ]=useState('');const [max,setMax]=useState(400);const [type,setType]=useState('any');const [g,setG]=useState(Number(sp.get('guests'))||1);const [av,setAv]=useState(false);const [rm,setRm]=useState(null);
const list=useMemo(()=>rooms.filter(r=>t(`rooms.${r.id}`).toLowerCase().includes(q.toLowerCase())&&r.price<=max&&(type==='any'||r.type===type)&&r.guests>=g),[q,max,type,g,t,i18n.language]);
return <section className="sec page"><h2>{t('rooms.title')}</h2>
<div className="filters"><input value={q} onChange={e=>setQ(e.target.value)} placeholder={t('search')} aria-label={t('search')}/>
<label>{t('rooms.maxPrice')}: ${max}<input type="range" min="100" max="400" step="10" value={max} onChange={e=>setMax(+e.target.value)}/></label>
<label>{t('rooms.type')}<select value={type} onChange={e=>setType(e.target.value)}><option value="any">{t('rooms.any')}</option><option value="room">{t('rooms.room')}</option><option value="suite">{t('rooms.suite')}</option><option value="villa">{t('rooms.villaT')}</option></select></label>
<label>{t('rooms.guests')}<select value={g} onChange={e=>setG(+e.target.value)}>{[1,2,3,4,5].map(n=><option key={n}>{n}</option>)}</select></label>
<label className="chk"><input type="checkbox" checked={av} onChange={e=>setAv(e.target.checked)}/>{t('rooms.avail')}</label></div>
{list.length?<div className="grid4">{list.map(r=><RoomCard key={r.id} room={r} onDetails={setRm}/>)}</div>:<p>{t('rooms.empty')}</p>}
{rm&&<Modal onClose={()=>setRm(null)}><Img src={rm.img} alt={t(`rooms.${rm.id}`)} className="mimg"/><h3>{t(`rooms.${rm.id}`)}</h3><p>👤 {rm.guests} · 🛏 {rm.beds} · ${rm.price}</p><p>{t('rooms.amen')}</p></Modal>}</section>;}
