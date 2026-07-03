import ResidenceCard from "#features/ResidenceCard"
import CustomSwiper from "#shared/ui/CustomSwiper";
import Spinner from "#shared/ui/Spinner";
import { useResidence } from "../model/useResidence"
import "../style.scss"

export function ResidenceGallery() {
    const { loading, residences } = useResidence();

    return (
        <div className="residenceGallery">
            {
                loading ? <Spinner /> :
                <CustomSwiper
                    swiperConfig={{slides: residences, spaceBetween: 0, autoPlay: {
                        delay: 2000,
                        pauseOnMouseEnter: true
                    } }}
                    renderSlide={(slide, key) => (
                        <ResidenceCard key={key} data={slide} />
                    )}
                />
            }
        </div>
    )
}