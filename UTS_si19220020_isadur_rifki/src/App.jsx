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
      <Hero title="asal usul sejarah ka'bah." desc="Menurut ajaran Islam, Ka'bah pertama kali dibangun oleh Nabi Ibrahim (Abraham) dan putranya, Nabi Ismail. Bangunan ini diperuntukkan sebagai tempat ibadah kepada Allah. Namun, seiring berjalannya waktu, Ka'bah mengalami beberapa kali perbaikan dan perbaikan. Sebelum kedatangan Islam, bangunan ini sempat dijadikan pusat peribadatan yang di dalamnya terdapat banyak berhala, hingga akhirnya pada masa Nabi Muhammad SAW, Ka'bah dibersihkan dari segala bentuk berhala dan dijadikan sebagai pusat ibadah umat." src="http://getwallpapers.com/wallpaper/full/7/5/4/232708.jpg" />
      <Section1 title="sejarah berdirinya ka'bah" desc="Jelaskan Deskripsi"></Section1>
      <Footer></Footer>
    </>

  );
}

export default App
