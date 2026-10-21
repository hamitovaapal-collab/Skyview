import {useState,useEffect} from 'react';import {useTranslation} from 'react-i18next';
const list=[{n:'Sarah Mitchell',c:'United States',k:'text'},{n:'Aigerim Sadykova',c:'Kyrgyzstan',k:'text2'},{n:'Dmitry Orlov',c:'Russia',k:'text3'}];
export default function TestimonialSlider(){const {t}=useTranslation();const [i,setI]=useState(0);const [hold,setHold]=useState(false);
useEffect(()=>{if(hold)return;const id=setInterval(()=>setI(v=>(v+1)%list.length),6000);return()=>clearInterval(id);},[hold]);
const r=list[i];const mv=d=>setI((i+d+list.length)%list.length);
return <div className="card testi" onMouseEnter={()=>setHold(true)} onMouseLeave={()=>setHold(false)} onKeyDown={e=>{if(e.key==='ArrowLeft')mv(-1);if(e.key==='ArrowRight')mv(1);}} tabIndex={0}>
<p className="q">“{t(`rev.${r.k}`)}”</p><div className="who"><span className="av">{r.n[0]}</span><div><b>{r.n}</b><br/><small>{r.c}</small><br/><span className="stars">★★★★★</span></div></div>
<div className="row"><button className="ic" onClick={()=>mv(-1)} aria-label="←">←</button><button className="ic" onClick={()=>mv(1)} aria-label="→">→</button><small>{i+1}/{list.length}</small></div></div>;}
