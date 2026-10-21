import {useState} from 'react';import {useTranslation} from 'react-i18next';
export default function Contact(){const {t}=useTranslation();const [f,setF]=useState({name:'',email:'',phone:'',msg:''});const [er,setEr]=useState({});const [ok,setOk]=useState(false);const set=k=>e=>setF({...f,[k]:e.target.value});
const submit=e=>{e.preventDefault();const x={};if(!f.name.trim())x.name=t('bk.e.name');if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email))x.email=t('bk.e.email');if(!/^\+?[\d\s()-]{7,16}$/.test(f.phone))x.phone=t('bk.e.phone');if(!f.msg.trim())x.msg=t('ct.e.msg');setEr(x);setOk(!Object.keys(x).length);};
const E=k=>er[k]&&<span className="err">{er[k]}</span>;
return <section className="sec page narrow"><h2>{t('ct.title')}</h2><p>{t('ct.addr')} · info@skyview.demo</p>
<form onSubmit={submit} noValidate className="form"><label>{t('bk.name')}<input value={f.name} onChange={set('name')}/></label>{E('name')}<label>{t('bk.email')}<input value={f.email} onChange={set('email')}/></label>{E('email')}
<label>{t('bk.phone')}<input value={f.phone} onChange={set('phone')}/></label>{E('phone')}<label>{t('ct.msg')}<textarea value={f.msg} onChange={set('msg')}/></label>{E('msg')}<button className="btn">{t('ct.submit')}</button></form>{ok&&<p className="ok">{t('ct.ok')}</p>}</section>;}
