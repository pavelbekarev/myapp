import type { SwiperOptions } from "swiper/types";

export const defaultBreakpoints: SwiperOptions["breakpoints"] = {
  320: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  480: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 30,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 40,
  },
};
