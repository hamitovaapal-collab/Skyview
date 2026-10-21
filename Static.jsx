import {useState} from 'react';import {useTranslation} from 'react-i18next';import Img from '../components/Img.jsx';import Modal from '../components/Modal.jsx';import {rooms,experiences} from '../data/rooms.js';
export const About=()=>{const {t}=useTranslation();return <section className="sec page narrow"><h2>{t('about.title')}</h2><p>{t('about.text')}</p></section>;};
export const Legal=({k})=>{const {t}=useTranslation();return <section className="sec page narrow"><h2>{t(`legal.${k}`)}</h2><p>{t('legal.text')}</p></section>;};
export function GalleryPage(){const {t}=useTranslation();const [i,setI]=useState(null);const all=[...rooms.map(r=>({s:r.img,a:t(`rooms.${r.id}`)})),...experiences.map(e=>({s:e.img,a:t(`exp.${e.id}`)}))];
const mv=d=>setI((i+d+all.length)%all.length);
return <section className="sec page"><h2>{t('gal.title')}</h2><div className="grid4">{all.map((g,k)=><button key={k} className="imgbtn card" onClick={()=>setI(k)}><Img src={g.s} alt={g.a}/></button>)}</div>
{i!==null&&<Modal onClose={()=>setI(null)} wide><Img src={all[i].s} alt={all[i].a} className="mimg"/><div className="row"><button className="ic" onClick={()=>mv(-1)}>←</button><span>{all[i].a}</span><button className="ic" onClick={()=>mv(1)}>→</button></div></Modal>}</section>;}
