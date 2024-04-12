import React from 'react';
import orangeTechClothes from '../images/clothes.webp';
import style from './styles/Initial.module.css';

export default function Initial() {
    return (
        <div className={style.initialContainer}>
            <main className={style.mainSection}>
                <section className={style.initialSectionLeft}>
                    <h1>Inovação em cada confecção</h1>
                    <p>Conheça nossas roupas tecnológicas</p>
                    <button>Confira</button>
                </section>
                <section className={style.initialSectionRight}>
                    <img src={orangeTechClothes} alt="Roupas tecnológicas" />
                </section>
            </main>
        </div>
    );
}
