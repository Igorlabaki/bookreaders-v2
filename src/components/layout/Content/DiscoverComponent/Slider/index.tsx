import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react";
import {SwiperContainer,SliderContainer, HeaderComponent, TextContainer, OverlayContainer} from "./style";
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
                style={{width: '100%',height:'290px',zIndex:0}
            }
            >
                <SwiperSlide>
                    <SliderContainer>
                        <TextContainer>
                            <OverlayContainer/>
                            <HeaderComponent>
                                <h3>Welcome to Book Readers</h3>
                            </HeaderComponent>
                                <p>Share your readings and comments, interact with your friends and rate the books you've read.</p>
                                <p>Let’s keep the love of reading alive.</p>
                        </TextContainer>
                        <img src="/images/photos/j.jpg" alt="img"/>
                    </SliderContainer>
                </SwiperSlide>  
                <SwiperSlide>
                    <SliderContainer>
                        <img src="/images/photos/librarygirl.jpg" alt="img"/>
                    </SliderContainer>
                </SwiperSlide>
            </Swiper>    
        </SwiperContainer>
    )
}