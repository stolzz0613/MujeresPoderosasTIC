import React, { useEffect, useLayoutEffect, useState } from "react";
import ItemsCarousel from 'react-items-carousel';
import CarouselCard from "./CarouselCard";
import carousel from '../styles/carousel.module.scss';
import axios from "axios";

const Carousel = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [imageNumber, setimageNumber] = useState(3);
  const [news, setnews] = useState([]);
  const chevronWidth = 80;

  useLayoutEffect(() => {
    axios.get('https://nameless-brushlands-25377.herokuapp.com/api/items/noticias')
        .then((r) => setnews(r.data[0].news.slice(0,5)))
  }, [])

  useEffect(() => {
    typeof window !== 'undefined' && setimageNumber(window.screen.width > 800 ? 3 : 1)
  }, [])

  return (
    <div id='carousel' className={carousel.container}>
            <h1>Destacados</h1>
      <div className={carousel.container_news}>
          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={imageNumber}
            gutter={20}
            leftChevron={<i style={{ fontSize:'40px', color:'white'}} class='bi bi-arrow-left-circle-fill'></i>}
            rightChevron={<i style={{ fontSize:'40px', color:'white'}} class='bi bi-arrow-right-circle-fill'></i>}
            chevronWidth={chevronWidth}
            infiniteLoop= {true}
            outsideChevron={false}
          >
            {
              news.map((n) => <CarouselCard data={n}/>)
            }
          </ItemsCarousel>
      </div>
    </div>
  );
};

export default Carousel;