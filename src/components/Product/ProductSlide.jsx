import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ScrollAnimation from 'react-animate-on-scroll';
import { FreeMode, Thumbs, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

const ProductSlide = ({ product }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const slides = product.imageCollection?.items || [];

  // Виносимо один раз слайди
  const renderSlides = (className) =>
    slides.map((img, id) => (
      <SwiperSlide key={id}>
        <img
          className={className}
          src={img.url}
          alt={img.title || `Фото ${id + 1}`}
        />
      </SwiperSlide>
    ));

  return (
    <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutLeft" offset={260} className="product__slide">
      <Swiper
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className="mySwiper2"
      >
        {renderSlides('product__slide-img')}
      </Swiper>

    {slides.length > 1 && (
		  <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={slides.length < 4 ? slides.length : 4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="mySwiper"
      >
        {renderSlides('product__slide-img')}
      </Swiper>
	)}

				<Swiper
				slidesPerView={1.5}
				spaceBetween={10}
				centeredSlides={true}
				pagination={{
					clickable: true,
				}}
				modules={[Pagination]}
				initialSlide={1.5}
				className="mySwiper3"
				breakpoints={{
					320: {
						slidesPerView: 1.5,
						initialSlide: 1.5
					},
					375: {
						slidesPerView: 1.5,
						initialSlide: 1.5
					},
					555: {
						slidesPerView: 1.2,
						initialSlide: 1.2
					},
					650: {
						slidesPerView: 1.5,
					},

				}}
			>
				{renderSlides('product__slide-img')}
			</Swiper>
    </ScrollAnimation>
  );
};

export default ProductSlide;