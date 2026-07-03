interface SwiperConfig {
  slides: any[];
  slidesPerView?: number;
  autoPlay?: {
    delay?: number;
    pauseOnMouseEnter?: boolean;
  };
  breakpoints?: any;
  navigation?: boolean;
  spaceBetween?: number;
}

export interface CustomSwiperProps {
  swiperConfig: SwiperConfig;
  renderSlide: (slide: any, key: number) => React.ReactNode;
  children?: React.ReactNode;
}
