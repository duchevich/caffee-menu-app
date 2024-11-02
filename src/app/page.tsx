'use client'
import { useTranslation } from 'react-i18next';
import './i18n';
import {useState} from "react";

export default function Home() {
  const [activeLanguage, setActiveLanguage] = useState('en');

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    setActiveLanguage(language);
  };

  const { t, i18n } = useTranslation();

  return (
      <div className="menu">
        <header>
          <button
              className={activeLanguage === 'en' ? 'active' : ''}
              onClick={() => changeLanguage('en')}
          >
            EN
          </button>
          <button
              className={activeLanguage === 'ru' ? 'active' : ''}
              onClick={() => changeLanguage('ru')}
          >
            RU
          </button>
        </header>
        <main>
          <h1>{t('Title')}</h1>
          <p className="established">{t('Notice')}</p>
          <hr/>
          <section>
            <h2>{t('Coffee')}</h2>
            <img src="https://cdn.freecodecamp.org/curriculum/css-cafe/coffee.jpg" alt="coffee icon"/>
            <article className="item">
              <p className="flavor">{t('Drinks.French Vanilla')}</p><p className="price">3.00</p>
            </article>
            <article className="item">
              <p className="flavor">{t('Drinks.Caramel Macchiato')}</p><p className="price">3.75</p>
            </article>
            <article className="item">
              <p className="flavor">{t('Drinks.Pumpkin Spice')}</p><p className="price">3.50</p>
            </article>
            <article className="item">
              <p className="flavor">{t('Drinks.Hazelnut')}</p><p className="price">4.00</p>
            </article>
            <article className="item">
              <p className="flavor">{t('Drinks.Mocha')}</p><p className="price">4.50</p>
            </article>
          </section>
          <section>
            <h2>{t('Desserts')}</h2>
            <img src="https://cdn.freecodecamp.org/curriculum/css-cafe/pie.jpg" alt="pie icon"/>
            <article className="item">
              <p className="dessert">{t('Food.Donut')}</p><p className="price">1.50</p>
            </article>
            <article className="item">
              <p className="dessert">{t('Food.Cherry Pie')}</p><p className="price">2.75</p>
            </article>
            <article className="item">
              <p className="dessert">{t('Food.Cheesecake')}</p><p className="price">3.00</p>
            </article>
            <article className="item">
              <p className="dessert">{t('Food.Cinnamon Roll')}</p><p className="price">2.50</p>
            </article>
          </section>
        </main>
        <hr className="bottom-line"/>
        <footer>
          <p>
            <a href="https://www.freecodecamp.org" target="_blank">{t('website')}</a>
          </p>
          <p className="address">{t('address')}</p>
        </footer>
      </div>
  );
}
