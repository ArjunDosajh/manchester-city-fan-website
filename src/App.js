import React from 'react'
import './App.css'
import { Typewriter } from 'react-simple-typewriter'
import Navbar from './components/Navbar'
import { Typography, Button } from '@mui/material'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

import logo from './images/logo.png'
import man_united_logo from './images/man_united_logo.png'
import trophy1 from './images/trophy1.jpeg'
import pep1 from './images/pep1.jpeg'
import pep2 from './images/pep2.jpeg'
import pep3 from './images/pep3.jpeg'
import pep4 from './images/pep4.jpeg'
import pep5 from './images/pep5.jpeg'

function App() {
	const pep_images = [pep1, pep2, pep3, pep4, pep5]

	return (
		<div>
			<Navbar />
			<div className='app-content'>
				<div className='manchester-is-blue'>
					<Typography variant='h1'>
						<Typewriter
							words={['MANCHESTER IS BLUE']}
							loop={1}
						/>
					</Typography>
				</div>

				<div className='titles-section'>
					<img src={trophy1} />
					<div className='img-overlay'></div>
					<div className='titles-section-content'>
						<div className='titles-section-content-text'>
							<Typography variant='h3'>Premier League Winners</Typography>
						</div>
						<div className='titles-section-content-text'>
							<Typography variant='h3'>Champions League Winners</Typography>
						</div>
						<div className='titles-section-content-text'>
							<Typography variant='h3'>League Cup Winners</Typography>
						</div>
					</div>
				</div>

				<div className='pep-quote'>
					<Swiper
						effect={'coverflow'}
						grabCursor={true}
						centeredSlides={true}
						slidesPerView={'auto'}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						coverflowEffect={{
							rotate: 50,
							stretch: 0,
							depth: 100,
							modifier: 1,
							slideShadows: true,
						}}
						pagination={true}
						modules={[EffectCoverflow, Pagination, Autoplay]}
						className="mySwiper"
					>
						{pep_images.map((image, idx) => {
							return (
								<SwiperSlide key={idx}>
									<img src={image} />
								</SwiperSlide>
							)
						})}
					</Swiper>

					<div className='pep-quote-content'>
						<div className='pep-quote-content-text'>
							<Typography variant='h4' className='navy-text'>“I enjoy every day in Manchester. I am confident we can make a step forward to make people proud of us.”</Typography>
							<Typography variant='h5' textAlign='right' className='navy-text small'>- Pep Guardiola</Typography>
						</div>
					</div>
				</div>

				<div className='upcoming-match'>
					<Typography className='upcoming-match-title' ml={3} variant='h3' fontWeight={900}>Upcoming Match</Typography>
					<div className='upcoming-match-teams'>
						<img className='logo' src={logo} />
						<Typography variant='h3'>vs.</Typography>
						<img className='logo' src={man_united_logo} />
					</div>
					<div className='upcoming-match-details'>
						<Typography className='upcoming-match-stadium' variant='h5' textAlign='center'>Etihad Stadium</Typography>
						<Typography className='upcoming-match-date' variant='h5' textAlign='center'>30 July, 2023</Typography>
					</div>
					<div className='upcoming-match-btns'>
						<Button className='app-btn' variant='contained'>Buy Tickets</Button>
						<Button className='app-btn' variant='contained'>Stream Online</Button>
					</div>
				</div>

			</div>
		</div>
	)
}

export default App