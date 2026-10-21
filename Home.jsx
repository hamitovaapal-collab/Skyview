import {useState,useEffect} from 'react';import {Link,useNavigate} from 'react-router-dom';import {useTranslation} from 'react-i18next';
import BookingSearch from '../components/BookingSearch.jsx';import RoomCard from '../components/RoomCard.jsx';import VideoModal from '../components/VideoModal.jsx';import Modal from '../components/Modal.jsx';
import TestimonialSlider from '../components/TestimonialSlider.jsx';import Img from '../components/Img.jsx';import ExpModal from '../components/ExpModal.jsx';import {rooms,experiences,HERO,u} from '../data/rooms.js';
const END=new Date('2026-12-31T23:59:59').getTime();
function Countdown(){const {t}=useTranslation();const [n,setN]=useState(Date.now());useEffect(()=>{const id=setInterval(()=>setN(Date.now()),1000);return()=>clearInterval(id);},[]);
const d=Math.max(0,END-n),v=[Math.floor(d/864e5),Math.floor(d/36e5)%24,Math.floor(d/6e4)%60,Math.floor(d/1e3)%60];
return <div className="cd">{['d','h','m','s'].map((k,i)=><div key={k}><b>{String(v[i]).padStart(2,'0')}</b><small>{t(`offer.${k}`)}</small></div>)}</div>;}
export default function Home(){const {t}=useTranslation();const nav=useNavigate();const [vid,setVid]=useState(false);const [ex,setEx]=useState(null);const [rm,setRm]=useState(null);
return <>
<section className="hero" style={{backgroundImage:`linear-gradient(rgba(10,30,60,.55),rgba(10,30,60,.2)),url(${HERO})`}}><p className="eyebrow">{t('hero.tag')}</p><h1>{t('hero.t')}</h1><p className="lead">{t('hero.sub')}</p><BookingSearch/></section>
<section className="feat">{t('feat',{returnObjects:true}).map((f,i)=><div key={i}><span>{['🛏','🌸','🍴','📍','🛡'][i]}</span><b>{f}</b></div>)}</section>
<section className="sec rooms"><div><p className="eyebrow dark">{t('rooms.eyebrow')}</p><h2>{t('rooms.title')}</h2><p>{t('rooms.desc')}</p><Link className="btn ghost" to="/rooms">{t('rooms.all')} →</Link></div>
<div className="grid4">{rooms.map(r=><RoomCard key={r.id} room={r} onDetails={setRm}/>)}</div></section>
<section className="split"><div className="vid-sec" style={{backgroundImage:`linear-gradient(rgba(5,20,40,.5),rgba(5,20,40,.3)),url(${u('photo-1571896349842-33c89424de2d').replace('w=900','w=1400')})`}}>
<p className="eyebrow">{t('video.eyebrow')}</p><h2>{t('video.title')}</h2><p>{t('video.sub')}</p><button className="play" onClick={()=>setVid(true)} aria-label={t('video.watch')}>▶</button><small>{t('video.watch')}</small></div>
<div className="exps"><h2>{t('exp.title')}</h2><p>{t('exp.sub')}</p><div className="grid4 sm">{experiences.map(e=><button key={e.id} className="card expc" onClick={()=>setEx(e)}><Img src={e.img} alt={t(`exp.${e.id}`)}/><b>{t(`exp.${e.id}`)}</b><small>{t('exp.more')}</small></button>)}</div></div></section>
<section className="sec adv"><div><h2>{t('adv.title')}</h2><p>{t('adv.sub')}</p><div className="grid2">{t('adv.i',{returnObjects:true}).map((a,i)=><div className="card pad" key={i}>{['⭐','🏷','📅','🎧'][i]} <b>{a}</b></div>)}</div></div>
<Img className="advimg" src={u('photo-1566073771259-6a8506099945').replace('w=900','w=1200')} alt="Skyview resort pool"/><TestimonialSlider/></section>
<section className="offer"><div><h2>{t('offer.title')}</h2><p>{t('offer.sub')}</p><button className="btn light" onClick={()=>nav('/booking')}>{t('book')} →</button></div><Countdown/></section>
{vid&&<VideoModal onClose={()=>setVid(false)}/>}{ex&&<ExpModal e={ex} onClose={()=>setEx(null)}/>}
{rm&&<Modal onClose={()=>setRm(null)}><Img src={rm.img} alt={t(`rooms.${rm.id}`)} className="mimg"/><h3>{t(`rooms.${rm.id}`)}</h3><p>👤 {rm.guests} · 🛏 {rm.beds} · ${rm.price} {t('rooms.night')}</p><p>{t('rooms.amen')}</p><button className="btn" onClick={()=>nav(`/booking?room=${rm.id}`)}>{t('rooms.select')}</button></Modal>}</>;}
