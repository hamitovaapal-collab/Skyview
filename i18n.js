import i18n from 'i18next';import {initReactI18next} from 'react-i18next';
import kg from './locales/kg.json';import ru from './locales/ru.json';import en from './locales/en.json';
const saved=localStorage.getItem('lang');
i18n.use(initReactI18next).init({resources:{kg:{translation:kg},ru:{translation:ru},en:{translation:en}},lng:['kg','ru','en'].includes(saved)?saved:'en',fallbackLng:'en',interpolation:{escapeValue:false}});
i18n.on('languageChanged',l=>{localStorage.setItem('lang',l);document.documentElement.lang=l==='kg'?'ky':l;});
export default i18n;
