import React from 'react'
import './style.scss'
import TestimonialItem from './TestimonialItem';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import MoveTrigger from "../../animation/MoveTrigger";
import {Pagination, SwiperOptions} from "swiper";
import {dsnCN} from "../../hooks/helper";


const TestimonialDetails = [
    {
        name: "Sven Beerweiler",
        label: "Founder/CEO Sprinter-rentals",
        src: "assets/img/avatar/2.jpg",
        description: `For my business I needed an online shop with inventory management. I have experience in the space so I know the type of software languages i wanted to use. A responsive webapp on AWS with a React front end. From the start Tony and his team helped me with setup process. The team suggested the right road-map and keep delivering what's agreed upon on time. The webapp is now live and reliably running 24/7. I, my team, and customers love the webapp. We are excited to see new features go live and enjoy working with InSol Group`
    },
    {
        name: "Edward Luna",
        label: "Product Manager in LMS",
        src: "assets/img/avatar/1.jpg",
        description: `During our cooperation with InSol Group, we have developed a very good opinion about the company. The team pleased with a responsible and thorough approach to work, having established themselves as true professionals in their field. We wish them further growth and success in their work.`
    },
    {
        name: "Lukas Schmyrczyk",
        label: "Co-Founder at SoTrusty",
        src: "assets/img/avatar/2.jpg",
        description: `We've really enjoyed working with InSol Group team. They joined our team and took initiative to understand everything and help lead the development of our project to make it what it is today. Overall, it was a really positive experience and we will consider working together again. Thank you!! :)`
    },
    // {
    //     name: "Helen Ginsberg",
    //     label: "CEO of Treasure Island",
    //     src: "assets/img/avatar/3.jpg",
    //     description: `"The Brief team has been sincerely committed to designing great communication around our projects. Our customers love their  creative work - and so do we!"`
    // },
    // {
    //     name: "Helen Ginsberg",
    //     label: "CEO of Treasure Island",
    //     src: "assets/img/avatar/4.jpg",
    //     description: `"Stage direction, music, ballet, workshops, backstage, the GTG presents the first episode of the series “Les Indes galantes en création"`
    //},

]


function Testimonial({className, title, ...restProps}: SwiperOptions) {
    return (

        <section className={dsnCN('dsn-testimonial background-section testimonial-one', className)}>
            <div className="testimonial-inner ">
                <div className="title-box">
                    {title &&
                    <MoveTrigger from={{y: 0, opacity: 0}} to={{y: -60, opacity: 1}} mobile={false}>
                        {(ref) => <h2 className='title-section p-relative z-index-1' ref={ref}>
                            {title}
                        </h2>}
                    </MoveTrigger>
                    }

                </div>
                <div className='content-box'>
                    <Swiper
                        modules={[Pagination]}
                        pagination={{clickable: true, el: '.swiper-pagination'}}
                        slidesPerView={1}
                        {...restProps}
                    >
                        {TestimonialDetails.map(
                            (item, index) => {
                                return (
                                    <SwiperSlide key={index} className='testimonialContainer'>
                                        <TestimonialItem
                                            src={item.src} authorName={item.name} label={item.label}
                                            description={item.description}/>
                                    </SwiperSlide>

                                );
                            }
                        )}

                        <div className="swiper-pagination"/>

                    </Swiper>
                </div>

            </div>
        </section>

    )
}


export default Testimonial;