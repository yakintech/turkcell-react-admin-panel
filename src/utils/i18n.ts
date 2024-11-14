import i18n from "i18next";
import {  initReactI18next } from "react-i18next";


let language = localStorage.getItem('language')

if(!language){
  language = 'tr'
}

i18n
  .use(initReactI18next)
  .init({

    resources: {
      en: {
        translation: {
          "facibilities": "Facilities",
          "logout": "Logout",
          "adminUsers": "Admin Users",
        }
      },
      tr:{
        translation:{
          "facibilities": "Tesisler",
          "logout": "Çıkış",
          "adminUsers": "Admin Kullanıcılar",
        }
      }
    },
    lng: language, 
    fallbackLng: "tr",

    interpolation: {
      escapeValue: false
    }
  });
