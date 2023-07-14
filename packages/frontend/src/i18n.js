import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: ['en', 'ln'],  
  });
  
export default i18n;

 // {
    //     filter: "salary",
    //     options : ["Below 3 lakh","3 lakh +", "6 lakh +", "9 lakh +", "15 lakh +", "25 lakh +"]
    // },