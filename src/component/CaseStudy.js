import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from 'react-redux';
import "swiper/css";
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import CaseStudyListList from './CaseStudyListList';

export default function App() {
  let data=useSelector(state => state.CaseStudyListList);
	return (
		<div className="caseStudyList">
			<ul>
				<CaseStudyListList propsvalue={data}/>
			</ul>
		</div>
	);
}

// export default Personal;