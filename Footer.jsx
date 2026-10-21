import {Link} from 'react-router-dom';import {useTranslation} from 'react-i18next';
export default function Footer(){const {t}=useTranslation();const k=['home','rooms','exp','gallery','about','contact'];
return <footer className="ftr"><div><Link to="/" className="logo">▲ Skyview</Link><p>{t('foot.desc')}</p></div>
<nav>{['','rooms','experiences','gallery','about','contact'].map((p,i)=><Link key={p} to={`/${p}`}>{t(`nav.${k[i]}`)}</Link>)}</nav>
<div><p>{t('ct.addr')}</p><p>info@skyview.demo · +000 000 000</p><p><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a> · <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></p>
<p><Link to="/privacy">{t('legal.privacy')}</Link> · <Link to="/terms">{t('legal.terms')}</Link></p><p>© 2026 Skyview. {t('foot.rights')}</p></div></footer>;}
