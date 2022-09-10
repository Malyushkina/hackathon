import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import CategoriesSelect from '../components/categories.js';
import Header from '../components/header';
import ChartSection from '../components/chartSection';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Тендер - сервис закупок</title>
        <meta name="description" content="Тендер - аналитический сервис закупок" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <Header />
      </header>

      <main className={styles.main}>
        <CategoriesSelect />
        <Image src="/map.png" width={900} height={530} />
        <ChartSection />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
