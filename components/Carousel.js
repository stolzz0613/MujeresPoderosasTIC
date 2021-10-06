import React, { useEffect, useState } from "react";
import ItemsCarousel from 'react-items-carousel';

const Carousel = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [imageNumber, setimageNumber] = useState(3);
  const chevronWidth = 40;

  useEffect(() => {
    setimageNumber(window.screen.width > 800 ? 3 : 1)
  }, [])

  return (
    <div style={{ padding: '0 40px 0 40px'}}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={imageNumber}
        gutter={0}
        leftChevron={<span style={{fontSize:'40px', color: 'white'}}>{'<'}</span>}
        rightChevron={<span style={{fontSize:'40px', color: 'white'}}>{'>'}</span>}
        chevronWidth={chevronWidth}
        infiniteLoop= {true}
        outsideChevron={false}
      >
        <img
          src='https://mintic.gov.co/portal/715/articles-179154_foto_marquesina.jpg'
          alt="First slide"
        />
        <img
          src='https://mintic.gov.co/portal/715/articles-181711_foto_marquesina.png'
          alt="First slide"
        />
        <img
          src='https://mintic.gov.co/portal/715/articles-181774_foto_marquesina.png'
          alt="First slide"
        />
        <img
          src='https://mintic.gov.co/portal/715/articles-179154_foto_marquesina.jpg'
          alt="First slide"
        />
      </ItemsCarousel>
    </div>
  );
};

export default Carousel;