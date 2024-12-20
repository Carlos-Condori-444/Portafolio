import "./testimonial.css";
import { Data } from "./Data.jsx";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination} from 'swiper/modules';

export const Testimonial = () => {
    return (
        <section className="testimonial container section">
            <h2 className="section__title">My clients say</h2>
            <span className="section__subtitle">Testimonial</span>

            <Swiper className="testimonial__container"
            loop={true}
            grabCursor={true}
            spaceBetween={24}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                576: {
                    slidesPerView: 1, // Muestra 1 diapositiva en pantallas pequeñas
                },
                768: {
                    slidesPerView: 2, // Muestra 2 en pantallas medianas
                    spaceBetween: 48,
                },
            }}
            modules={[Pagination]}
            >
                {Data.map(({id, image, title, description})=> {
                    return(
                        <SwiperSlide className="testimonial__card" key={id}>
                            <img src={image} alt="" className="testimonial__img" />
                            <h3 className="testimonial__name">{title}</h3>
                            <p className="testimonial__description">{description}</p>
                        </SwiperSlide>
                    )
                })}
            </Swiper>

        </section>
    )
}
