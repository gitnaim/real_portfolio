import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';

import { useSelector } from 'react-redux';
import "swiper/css";
import OpenSourceList from './OpenSourceList';

export default function App() {
	let data=useSelector(state => state.OpenSourceList);

	return (
		<Swiper
		scrollbar={{
			hide: false,
		}}
		modules={[Scrollbar]}
		slidesPerView={1}
		spaceBetween={30}
		loop={true}
		breakpoints= {{
			560: {
				slidesPerView: 1.5
			},
			760: {
				slidesPerView: 2.5
			},
			1300: {
				slidesPerView: 3.5   
			}
		}}
		className="mySwiper"
		>
			{
				data.map((d, i) =>
					<SwiperSlide key={i}>
						<OpenSourceList propsValue={d} />
					</SwiperSlide>
				)
			}
		</Swiper>
	);
}

// export default OpenSource;