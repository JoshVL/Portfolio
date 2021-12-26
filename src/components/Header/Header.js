import Link from 'next/link';
import React from 'react';
import { AiFillControl, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { RiGamepadFill } from 'react-icons/ri';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link passHref href="/">
        <a style={{ display: "flex", alignItems: "center", color: 'white', marginBottom: '20px'}}>
          <img src='/images/emblem.png' height="50" /><Span>JoshVL</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link passHref href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link passHref href="#tech">
          <NavLink>Skills And Knowledge</NavLink>
        </Link>
      </li>
      <li>
        <Link passHref href="#about">
          <NavLink>About Me</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/JoshVL">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://joshvl.itch.io/">
        <RiGamepadFill size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/joshua-villanueva-981411196/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
