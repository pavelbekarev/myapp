import type { Residence } from "#entities/Residence";
import ResidenceCard from "#features/ResidenceCard"
import CustomSwiper from "#shared/ui/CustomSwiper";
import Spinner from "#shared/ui/Spinner";
import { useEffect } from "react";
import { useResidence } from "../model/useResidence"
import "../style.scss"

export function ResidenceGallery() {
    const { loading, residences, error } = useResidence();

    useEffect(() => {
        if (!error) return;
        
        alert(error);
    }, [error])

    if (loading) {
        return <Spinner />
    }

    if (!residences.length) {
        return null;
    }

    return (
        <div className="residenceGallery">
            {
                <CustomSwiper<Residence>
                    swiperConfig={{slides: residences, spaceBetween: 0, autoPlay: {
                        delay: 2000,
                        pauseOnMouseEnter: true
                    } }}
                    renderSlide={(slide) => (
                        <ResidenceCard data={slide} />
                    )}
                />
            }
        </div>
    )
}