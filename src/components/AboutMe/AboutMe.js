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
      <img src='/images/nwm.png' height="200" width="400" />
      <br />
      <SectionText>
        I'm currently a Software Engineer at Northwestern Mutual. I'm working to develop and optimize APIs to integrate for seamless data movement 
        across the organization, and having practices in data governance, classification, and transformation. This position leverages modern engineering tools 
        and languages, including Java, Node.js, Python, and RESTful services, to further expand my knowledge and growth as an engineer in an ever changing technology environment.
      </SectionText>
      <img src='/images/tt.png' height="205" width="400" />
      <SectionText>
        Previously, I was a Software Engineer at Target working within tech of the supply chain sector. At Target,
        I have done both frontend and backend work, learning how to implement business tasks, automate and deploy
        workflow pipelines, creating REST APIs, managing databases, doing on-call support and so-on within the supply chain area to ensure 
        the millions of products and inventories are loaded and shipped to where they needed to be across the nation.
      </SectionText>
      <img src='/images/uw.png' height="180" width="180" />
      <SectionText>
        Before starting my professional career, I was a student at the University of Wisconsin - Madison. Within my undergrad I studied 
        computer science and game design. I also worked in IT at college at both the university housing department 
        and electrical/computer engineering department. 
      </SectionText>
      <img src='/images/controller.png' height="205" width="205" />
      <SectionText>
        Outside of work, I like to tinker with computers by modifying simple games, create experiences custom suited 
        towards my preferences, or experiment with other technology. I've learned that technology is always advancing 
        and changing, so it's important to me to always keep up to date and informed.
      </SectionText>
      <br />
      <SectionText>
        Here's a timeline of my experience and history so far throughout my career:
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
      <img src='/images/music.png' height="205" width="205" />
      <SectionText>
        Beyond technology interests, I enjoy playing instruments. 
        I dabble with the trombone, euphonium, guitar, and piano.
        When I'm feeling adventerous, I'll go for a bike ride or walk around some unexplored areas around me.
        With my game design certificate, I am a certified gamer. I enjoy playing video games in my free 
        time of all genres, with my favorite being rhythm games. One project that I'd like to do eventually 
        is to make a rhythm game of my own, inspired by the ones I enjoy playing.
      </SectionText>
    </Section>
  );
};

export default AboutMe;