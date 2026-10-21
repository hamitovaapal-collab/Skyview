import {useState,useMemo} from 'react';import {NavLink,Link,useNavigate} from 'react-router-dom';import {useTranslation} from 'react-i18next';
import Modal from './Modal.jsx';import {rooms,experiences} from '../data/rooms.js';
export default function Header(){const {t,i18n}=useTranslation();const nav=useNavigate();const [open,setOpen]=useState(false);const [s,setS]=useState(false);const [q,setQ]=useState('');
const items=[['/','home'],['/rooms','rooms'],['/experiences','exp'],['/gallery','gallery'],['/about','about'],['/contact','contact']];
const res=useMemo(()=>{const k=q.trim().toLowerCase();if(!k)return[];return[...rooms.map(r=>({n:t(`rooms.${r.id}`),to:'/rooms'})),...experiences.map(e=>({n:t(`exp.${e.id}`),to:'/experiences'}))].filter(x=>x.n.toLowerCase().includes(k));},[q,t,i18n.language]);
const go=to=>{setS(false);setQ('');nav(to);};
return <header className="hdr"><Link to="/" className="logo">▲ Skyview<small>HOTELS & RESORTS</small></Link>
<nav className={open?'open':''}>{items.map(([to,k])=><NavLink key={to} to={to} end={to==='/'} onClick={()=>setOpen(false)}>{t(`nav.${k}`)}</NavLink>)}</nav>
<div className="tools"><button className="ic" onClick={()=>setS(true)} aria-label={t('search')}>🔍</button>
<div className="lang">{['kg','ru','en'].map(l=><button key={l} className={i18n.language===l?'on':''} onClick={()=>i18n.changeLanguage(l)}>{l.toUpperCase()}</button>)}</div>
<button className="btn sm hide-m" onClick={()=>nav('/booking')}>{t('book')} →</button><button className="ic burger" onClick={()=>setOpen(!open)} aria-label="Menu">☰</button></div>
{s&&<Modal onClose={()=>setS(false)}><div className="row"><input autoFocus value={q} onChange={e=>setQ(e.target.value)} placeholder={t('searchPh')} aria-label={t('search')}/><button className="btn ghost sm" onClick={()=>setQ('')}>{t('clear')}</button></div>
{q&&(res.length?res.map(x=><button className="res" key={x.to+x.n} onClick={()=>go(x.to)}>{x.n}</button>):<p>{t('none')}</p>)}</Modal>}</header>;}
