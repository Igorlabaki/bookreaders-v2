import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react";
import {SwiperContainer,SliderContainer} from "./style";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export function SliderComponent (){
    return(
        <SwiperContainer>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={1}
                
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 2000,
                }}
                style={{width: '100%',height:'300px'}
            }
            >
                <SwiperSlide>
                    <SliderContainer>
                        <img src="/images/photos/banner.jpg" alt="img"/>
                    </SliderContainer>
                </SwiperSlide>  
                <SwiperSlide>
                    <SliderContainer>
                        <img src="/images/photos/j.jpg" alt="img"/>
                    </SliderContainer>
                </SwiperSlide>
            </Swiper>    
        </SwiperContainer>
    )
}