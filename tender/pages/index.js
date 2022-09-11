import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import CustomSelect from '../components/select.js';
import Header from '../components/header';
import ChartSection from '../components/chartSection';

export default function Home() {
  const [region, setRegion] = useState();
  const [category, setCategory] = useState();
  const [good, setGood] = useState();

  const updateRegion = (value) => {
    setRegion(value);
  };
  const updateCategory = (value) => {
    setCategory(value);
  };
  const updateGood = (value) => {
    setGood(value);
  };

  const res = {
    region: [{ code: 38, name: 'Иркутская область' }],
    category: [{ code: 2, name: 'Пылесос' }],
    year: [{ code: 2018, name: 2018 }]
  };

  const resMapper = (arr) => {
    arr.map((elem, index) => {
      elem.id = index;
      elem.value = elem.code;
      elem.label = elem.name;
      return elem;
    });
    return arr;
  };
  const regionList = resMapper(res.region);
  const categoryList = resMapper(res.category);
  const yearList = resMapper(res.year);
  return (
    <>
      {' '}
      <Head>
        <title>Аналитический сервис закупок</title>
        <meta name="description" content="Аналитический сервис закупок для поставщиков" />
        <link rel="icon" href="https://zakupki.mos.ru/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <Header />
      </header>
      <div className={styles.imageWrapper}>
        <Image src="/map.png" width={900} height={530} />
      </div>
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.selectWrapper}>
            <CustomSelect
              id={1}
              placeholder="Выберите регион"
              data={regionList}
              updateData={updateRegion}
            />
            <CustomSelect
              id={2}
              placeholder="Выберите категорию"
              data={categoryList}
              updateData={updateCategory}
            />
            <CustomSelect
              id={3}
              placeholder="Выберите год"
              data={yearList}
              updateData={updateGood}
            />
          </div>
          <ChartSection />
        </main>

        <footer className={styles.footer}>
         
        </footer>
      </div>
    </>
  );
}
