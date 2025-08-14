import React from 'react'
import Header from './header/Header';
import MyCarousel from './carousel/Carousel';
import Section2 from './homesection2/Section2';
import Section3 from './homesection3/Section3';
import Section4 from './homesection4/Section4';
import Footer from './footer/Footer';

function Home() {
  return (
    <div>
      <Header />
      <MyCarousel />
      <Section2 />
      <Section3 image="https://thfvnext.bing.com/th/id/OIP.XoVcqu2y4OQBzjLzgR5NGgHaE8?w=283&h=189&c=7&r=0&o=7&cb=thfvnext&pid=1.7&rm=3" title="Macbook Pro" width="" />
      <Section4 />
      <Section3 image="https://thfvnext.bing.com/th/id/OIP.eYvQXycgQ_Szfkdwa6mBVAHaE7?w=284&h=189&c=7&r=0&o=5&cb=thfvnext&pid=1.7" title="Trimmer" />
      <Footer />
    </div>
  )
}

export default Home