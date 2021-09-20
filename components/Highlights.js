import { useState, useEffect, useCallback  } from 'react'
import { useEmblaCarousel } from 'embla-carousel/react'
import { DotButton, PrevButton, NextButton } from './Carrousel/Buttons';
import highlights from '../styles/highlights.module.scss'

function Highlights() {

    const slides = [
        'https://mintic.gov.co/portal/715/articles-179154_foto_marquesina.jpg',
        'https://mintic.gov.co/portal/715/articles-181711_foto_marquesina.png',
        'https://mintic.gov.co/portal/715/articles-181774_foto_marquesina.png',
        'https://mintic.gov.co/portal/715/articles-179154_foto_marquesina.jpg',
        'https://mintic.gov.co/portal/715/articles-181711_foto_marquesina.png',
        'https://mintic.gov.co/portal/715/articles-181774_foto_marquesina.png',
        'https://mintic.gov.co/portal/715/articles-179154_foto_marquesina.jpg',
        'https://mintic.gov.co/portal/715/articles-181711_foto_marquesina.png',
        'https://mintic.gov.co/portal/715/articles-181774_foto_marquesina.png',
    ]

    const [viewportRef, embla] = useEmblaCarousel({
      dragFree: true,
      containScroll: "trimSnaps"
    });

    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
    const [scrollSnaps, setScrollSnaps] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
    const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
    const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [
        embla
    ]);

    const onSelect = useCallback(() => {
      if (!embla) return;
      setSelectedIndex(embla.selectedScrollSnap());
      setPrevBtnEnabled(embla.canScrollPrev());
      setNextBtnEnabled(embla.canScrollNext());
    }, [embla, setSelectedIndex]);

    useEffect(() => {
      if (!embla) return;
      embla.on("select", onSelect);
      setScrollSnaps(embla.scrollSnapList());
      onSelect();
    }, [embla, setScrollSnaps, onSelect]);

    return (
        <div className={highlights.container}>
            <h1>Destacados</h1>
            <div className={highlights.embla}>
                <div className={highlights.embla__viewport} ref={viewportRef}>
                <div className={highlights.embla__container}>
                    {slides.map((index) => (
                    <div className={highlights.embla__slide} key={index}>
                        <div className={highlights.embla__slide__inner}>
                        <img
                            className={highlights.embla__slide__img}
                            src={index}
                            alt="A cool cat."
                        />
                        </div>
                    </div>
                    ))}
                </div>
                </div>
                <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
                <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
            </div>
            <div className={highlights.embla__dots}>
                {scrollSnaps.map((_, index) => (
                    <DotButton
                    key={index}
                    selected={index === selectedIndex}
                    onClick={() => scrollTo(index)}
                    />
                ))}
            </div>
        </div>
    )
}

export default Highlights