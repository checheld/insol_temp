import React from 'react'
import './style.scss'
import 'swiper/css';
import NdaIcon from '../icons/NdaIcon';


import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination , SwiperOptions} from "swiper";



import PortfolioItem from './PortfolioItem';
import {getPortfolioData} from "../../api/portfolio/PortfolioData";



const PortfolioSwiper = ({desktop, mobile, tablet, ...restProps}:SwiperOptions) => {
    const dataPortfolio = getPortfolioData();

    return (
        <Swiper
            modules={[Pagination]}
            pagination={{clickable: true, el: '.swiper-pagination'}}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
                992: desktop,
                768: tablet,
                576: mobile
            }}
            centeredSlides={false}
            {...restProps}
        >
                {
                    dataPortfolio.map((item, index) =>
                        <SwiperSlide key={index}>
                            <PortfolioItem portoDetails={item} textButton="View Case"/>
                        </SwiperSlide>)
                }
            <div className="swiper-pagination"/>
        </Swiper>
        // <div style={{display: 'flex', flexWrap: 'wrap', marginLeft: '100px', marginRight: '100px'}}>
        //     <div style={{margin: 'auto', maxWidth: '700px'}}>
        //         <NdaIcon />
        //         <h1 style={{fontSize: '22px', fontWeight: 700, textAlign: 'center'}}>CRM-System</h1>
        //     </div>
        //     <div style={{margin: 'auto', maxWidth: '700px'}}>
        //         <NdaIcon />
        //         <h1 style={{fontSize: '22px', fontWeight: 700, textAlign: 'center'}}>Web Service</h1>
        //     </div>
        // </div>
    );
}

PortfolioSwiper.defaultProps = {
    desktop: {
        slidesPerView: 3
    },
    tablet: {
        slidesPerView: 2

    },
    mobile: {
        slidesPerView: 2
    }
}

export default PortfolioSwiper