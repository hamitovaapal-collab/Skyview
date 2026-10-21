import {useState,useMemo} from 'react';import {useSearchParams} from 'react-router-dom';import {useTranslation} from 'react-i18next';import {rooms} from '../data/rooms.js';
const load=()=>{try{return JSON.parse(localStorage.getItem('bookings'))||[];}catch{return[];}};
export default function Booking(){const {t}=useTranslation();const [sp]=useSearchParams();const today=new Date().toISOString().slice(0,10);
const [f,setF]=useState({room:sp.get('room')||'deluxe',in:sp.get('in')||today,out:sp.get('out')||'',guests:Number(sp.get('guests'))||2,name:'',email:'',phone:'',notes:''});
const [er,setEr]=useState({});const [done,setDone]=useState(false);const [all,setAll]=useState(load);const set=k=>e=>setF({...f,[k]:e.target.value});
const room=rooms.find(r=>r.id===f.room)||rooms[0];const nights=useMemo(()=>f.in&&f.out?Math.round((new Date(f.out)-new Date(f.in))/864e5):0,[f.in,f.out]);
const submit=e=>{e.preventDefault();const x={};
if(!f.name.trim())x.name=t('bk.e.name');if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email))x.email=t('bk.e.email');if(!/^\+?[\d\s()-]{7,16}$/.test(f.phone))x.phone=t('bk.e.phone');
if(nights<=0)x.dates=t('bk.e.dates');if(+f.guests>room.guests)x.cap=t('bk.e.cap');setEr(x);if(Object.keys(x).length){setDone(false);return;}
const n=[...all,{id:Date.now(),room:f.room,in:f.in,out:f.out,guests:f.guests,name:f.name,total:nights*room.price}];localStorage.setItem('bookings',JSON.stringify(n));setAll(n);setDone(true);};
const E=k=>er[k]&&<span className="err">{er[k]}</span>;
return <section className="sec page narrow"><h2>{t('bk.title')}</h2><p className="demo">{t('bk.demo')}</p>
<form onSubmit={submit} noValidate className="form"><label>{t('bk.room')}<select value={f.room} onChange={set('room')}>{rooms.map(r=><option key={r.id} value={r.id}>{t(`rooms.${r.id}`)} — ${r.price}</option>)}</select></label>
<label>{t('hero.in')}<input type="date" min={today} value={f.in} onChange={set('in')}/></label><label>{t('hero.out')}<input type="date" min={f.in} value={f.out} onChange={set('out')}/></label>{E('dates')}
<label>{t('hero.guests')}<select value={f.guests} onChange={set('guests')}>{[1,2,3,4,5].map(n=><option key={n}>{n}</option>)}</select></label>{E('cap')}
<label>{t('bk.name')}<input value={f.name} onChange={set('name')}/></label>{E('name')}<label>{t('bk.email')}<input type="email" value={f.email} onChange={set('email')}/></label>{E('email')}
<label>{t('bk.phone')}<input value={f.phone} onChange={set('phone')}/></label>{E('phone')}<label>{t('bk.notes')}<textarea value={f.notes} onChange={set('notes')}/></label>
<p><b>{t('bk.nights')}: {Math.max(nights,0)} · {t('bk.total')}: ${Math.max(nights,0)*room.price}</b></p><button className="btn">{t('bk.submit')}</button></form>
{done&&<p className="ok">✔ {t('bk.ok')} (Demo Booking)</p>}
{all.length>0&&<><h3>{t('bk.list')}</h3>{all.map(b=><p key={b.id} className="card pad">{t(`rooms.${b.room}`)} · {b.in} → {b.out} · ${b.total} · {b.name}</p>)}</>}</section>;}
