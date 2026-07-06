import type { SwiperOptions } from "swiper/types";

interface SwiperConfig<T> {
  slides: T[];
  slidesPerView?: number;
  autoPlay?: {
    delay?: number;
    pauseOnMouseEnter?: boolean;
  };
  breakpoints?: SwiperOptions["breakpoints"];
  navigation?: boolean;
  spaceBetween?: number;
}

export interface CustomSwiperProps<T> {
  swiperConfig: SwiperConfig<T>;
  renderSlide: (slide: T, key: number) => React.ReactNode;
  children?: React.ReactNode;
}
