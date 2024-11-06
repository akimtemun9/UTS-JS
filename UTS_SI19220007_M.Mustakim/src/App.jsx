import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Tombol from './komponen/atoms/tombol';
import Navbar from './komponen/Navbar';
import Hero from './komponen/Hero';
import Section1 from './komponen/Section';
import Footer from './komponen/Footer';

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Navbar />
      <Hero title="MONAS JAKARTA" desc="Menomen ini terletak persis di Pusat Kota Jakarta. Tugu Monas merupakan tugu kebanggaan bangsa Indonesia, selain itu monas juga menjadi salah satu pusat tempat wisata dan pusat pendidikan yang menarik bagi warga Indonesa baik yang dijakarta maupun di luar Jakarta. Tujuan pembangunan tugu monas adalah untuk mengenang dan mengabadikan kebesaran perjuangan Bangsa Indonesia yang dikenal dengan Revolusi 17 Agustus 1945, dan juga sebagai wahana untuk membangkitkan semangat patriotisme generasi sekarang dan akan datang." src="http://getwallpapers.com/wallpaper/full/7/5/4/232708.jpg" />
      <Section1 title="Sejarah Monas Jakarta" desc="Pesona Monas"></Section1>
      <Footer></Footer>
    </>

  );
}

export default App
