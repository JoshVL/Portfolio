import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaItchIo } from 'react-icons/fa';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Phone</LinkTitle>
          <LinkItem href="tel:414-429-9206">414-429-9206</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:jtvillanueva@wisc.edu">jtvillanueva@wisc.edu</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <LinkItem href="https://github.com/JoshVL/Portfolio"> View Source Code</LinkItem>
        </CompanyContainer>
        <SocialIcons href="https://github.com/JoshVL">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://joshvl.itch.io/">
          <FaItchIo size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://linkedin.com/in/joshvl">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
