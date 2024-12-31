import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const ProfileImage = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  margin: 0 auto;
  object-fit: cover;
  border-radius: 50%; /* Optional: give this image a circular frame */
`;
