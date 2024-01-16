


import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar } from "react-icons/fa";

import 'swiper/css';
import 'swiper/css/pagination';
import './index.scss'



import { Pagination } from 'swiper/modules';

export default function Slider() {
    return (
        <>
            <section id='Slider'>
                <Swiper pagination={true}
                    slidesPerView={1}
                    spaceBetween={30}
                    modules={[Pagination]} className="mySwiper">
                    <SwiperSlide>
                        <div className="SliderArea">
                            <div className="SliderTextArea">
                                <h1>Fanny Spicer</h1>
                            </div>
                            <div className="StarIcon">
                                <ul>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                </ul>
                            </div>
                            <div className="TextSlider">
                                <p>As conscious traveling Paup ers we must always be oncerned about our dear Mother Earth. If you think about it, you travel
                                    across her face </p>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="SliderArea">
                            <div className="SliderTextArea">
                                <h1>Fanny Spicer</h1>
                            </div>
                            <div className="StarIcon">
                                <ul>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                </ul>
                            </div>
                            <div className="TextSlider">
                                <p>As conscious traveling Paup ers we must always be oncerned about our dear Mother Earth. If you think about it, you travel
                                    across her face </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="SliderArea">
                            <div className="SliderTextArea">
                                <h1>Fanny Spicer</h1>
                            </div>
                            <div className="StarIcon">
                                <ul>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                </ul>
                            </div>
                            <div className="TextSlider">
                                <p>As conscious traveling Paup ers we must always be oncerned about our dear Mother Earth. If you think about it, you travel
                                    across her face </p>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="SliderArea">
                            <div className="SliderTextArea">
                                <h1>Fanny Spicer</h1>
                            </div>
                            <div className="StarIcon">
                                <ul>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                </ul>
                            </div>
                            <div className="TextSlider">
                                <p>As conscious traveling Paup ers we must always be oncerned about our dear Mother Earth. If you think about it, you travel
                                    across her face </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="SliderArea">
                            <div className="SliderTextArea">
                                <h1>Fanny Spicer</h1>
                            </div>
                            <div className="StarIcon">
                                <ul>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                </ul>
                            </div>
                            <div className="TextSlider">
                                <p>As conscious traveling Paup ers we must always be oncerned about our dear Mother Earth. If you think about it, you travel
                                    across her face </p>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </section>

        </>
    );
}
