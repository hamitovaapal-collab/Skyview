import {useState} from 'react';import {useNavigate} from 'react-router-dom';import {useTranslation} from 'react-i18next';
export default function BookingSearch(){const {t}=useTranslation();const nav=useNavigate();const today=new Date().toISOString().slice(0,10);
const [f,setF]=useState({dest:'',in:today,out:'',guests:2});const [err,setErr]=useState('');const set=k=>e=>setF({...f,[k]:e.target.value});
const submit=e=>{e.preventDefault();if(!f.in||!f.out||f.out<=f.in){setErr(t('bk.e.dates'));return;}setErr('');nav(`/rooms?guests=${f.guests}&in=${f.in}&out=${f.out}`);};
return <form className="search" onSubmit={submit}><label>{t('hero.dest')}<input value={f.dest} onChange={set('dest')} placeholder={t('hero.destPh')}/></label>
<label>{t('hero.in')}<input type="date" min={today} value={f.in} onChange={set('in')}/></label><label>{t('hero.out')}<input type="date" min={f.in||today} value={f.out} onChange={set('out')}/></label>
<label>{t('hero.guests')}<select value={f.guests} onChange={set('guests')}>{[1,2,3,4,5,6].map(n=><option key={n}>{n}</option>)}</select></label>
<button className="btn">{t('hero.go')} →</button>{err&&<p className="err full">{err}</p>}</form>;}
