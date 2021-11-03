import React from 'react';
import style from './Section.module.css';

const Section = ({ title, children }) => (
    <section className={style.section}>
        {title && <h2>{title}</h2>}
        {children}
    </section>
);

export default Section;
