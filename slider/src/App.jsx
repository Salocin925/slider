import { useState } from 'react'
import './App.css'
import AIRF from './assets/Air Fryer.png'
import a16 from './assets/galaxy-a16-5g.png'
import PS2 from './assets/playstation_2.png'
import Slider1 from './assets/PROMOÇÕES_EXPLOSIVAS.png'
import Slider2 from './assets/Samsung_Galaxy_Note_7.png'
import Slider3 from './assets/Hoverboard.png'
import Slider4 from './assets/Churrasqueira_Elétrica.png'
import Logo from './assets/logo.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <header>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={Slider1} alt="Slide 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider2} alt="Slide 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider3} alt="Slide 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider4} alt="Slide 4" />
            </SwiperSlide>
          </Swiper>
        </header>
        <section className="produtos">
          <a href="#" className="link-card">
            <div className="card">
              <img src={a16} alt="" className="img-card" />
              <h2 className="titulo-card">Samsung Galaxy A16 5G</h2>
              <p className="desc"></p>
              <p className="preco">R$ 1354,99</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ★</span> (83)</div>
              <div className="off">- 10%</div>
            </div>
          </a>
          <a href="#" className="link-card">
            <div className="card">
              <img src={AIRF} alt="" className="img-card" />
              <h2 className="titulo-card">Air Fryer 4,2L</h2>
              <p className="desc">1500W 220V Preto Multi - CE191.</p>
              <p className="preco">R$ 259,99</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ★</span> (451)</div>
              <div className="off">- 5%</div>
            </div>
          </a>
          <a href="#" className="link-card">
            <div className="card">
              <img src={PS2} alt="" className="img-card" />
              <h2 className="titulo-card">Playstation 2</h2>
              <p className="desc">juntamente com 30 jogos originais.</p>
              <p className="preco">R$ 430,00</p>
              <div className="avaliacao"><span>★ ★ ★ ★ ★</span> (302)</div>
              <div className="off">- 10%</div>
            </div>
          </a>
        </section>
        <footer>
          <img src={Logo} alt="" className="logo-footer" />
        </footer>
      </main>
    </>
  )
}

export default App
