import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './AboutMeStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { AboutMeData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = AboutMeData.length;

const AboutMe = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  }

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / AboutMeData.length));
      
      scroll(carouselRef.current, scrollLeft);
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * AboutMeData.length);

      setActiveItem(index);
    }
  }

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Section id="about">
      <br />
      <SectionDivider />
      <SectionTitle main>About Me</SectionTitle>
      <br />
      <img src='/images/csme.jpg' height="400" width="600" />
      <SectionText>
        I'm currently exploring topics of computer science and applying skills that I've learned in college to make small projects while I search for a job to start my career in the field of computer sciences. I mainly like to make games, but I'm using this time of exploration to learn new things, such as front-end development like creating this portfolio site, or more areas of Linux. Computers have always fascinated me, and whether that means building computers, messing with laptops, tinkering with Linux, or helping others with their tech support problems, I'm always game to work with technology and computers.
      </SectionText>
      <br />
      <SectionText>
        Here's a timeline of my experience and history so far in my life!
      </SectionText>
      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <>
          {AboutMeData.map((item, index) => (
            <CarouselMobileScrollNode key={index} final={index === TOTAL_CAROUSEL_COUNT - 1}>
              <CarouselItem
                index={index}
                id={`carousel__item-${index}`}
                active={activeItem}
                onClick={(e) => handleClick(e, index)}
              >
              <CarouselItemTitle>
                {item.year}
                <CarouselItemImg
                    width="208"
                    height="6"
                    viewBox="0 0 208 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                      fill="url(#paint0_linear)"
                      fill-opacity="0.33"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="-4.30412e-10"
                        y1="0.5"
                        x2="208"
                        y2="0.500295"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop
                          offset="0.79478"
                          stop-color="white"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </CarouselItemImg>
              </CarouselItemTitle>
              <CarouselItemText>{item.text}</CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {AboutMeData.map((item, index) => (
          <CarouselButton 
            key={index}
            index={index}
            active={activeItem}
            onClick={(e) => handleClick(e, index)}
            type="button"
          >
            <CarouselButtonDot active={activeItem} />
          </CarouselButton>
        ))}
      </CarouselButtons>
      <br />
      <img src='/images/bme.jpg' height="400" width="600" />
      <SectionText>
        Outside of coding and computers, I enjoy playing instruments. While at the University of Wisconsin, I was a member and leader of my rank in the Badger Band. Going to three bowl games, being able to march and play in the Rose Bowl and Rose Parade was a fun experience of my life. Otherwise, I dabble with the trombone, guitar, and piano. Along with my game design certificate, I am a certified gamer. I enjoy playing games in my free time of all genres, with my favorite being rhythm games. One project that I'd like to do eventually is to make a rhythm game of my own, inspired by the ones I enjoy playing.
      </SectionText>
    </Section>
  );
};

export default AboutMe;