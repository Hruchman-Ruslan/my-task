import styled from '@emotion/styled';
import imageMob from '../images/mob.webp';
import imageTab from '../images/tab.webp';
import imageDes from '../images/des.webp';

export const Container = styled.div`
  max-width: 1440px;
  background-color: black;

  background: linear-gradient(
      0deg,
      rgba(10, 10, 17, 0.2) 0%,
      rgba(10, 10, 17, 0.2) 100%
    ),
    linear-gradient(2deg, #0a0a11 0%, rgba(10, 10, 17, 0) 100%),
    linear-gradient(85deg, #0a0a11 0%, rgba(10, 10, 17, 0) 100%),
    url(${imageMob}) no-repeat right / contain,
    lightgray -3px -13.319px / 100.511% 101.679% no-repeat;

  padding-left: 28px;
  padding-right: 28px;

  @media screen and (min-width: 768px) {
    background: linear-gradient(
        0deg,
        rgba(10, 10, 17, 0.2) 0%,
        rgba(10, 10, 17, 0.2) 100%
      ),
      linear-gradient(2deg, #0a0a11 0%, rgba(10, 10, 17, 0) 100%),
      linear-gradient(85deg, #0a0a11 0%, rgba(10, 10, 17, 0) 100%),
      url(${imageTab}) no-repeat right / contain,
      lightgray -3px -13.319px / 100.511% 101.679% no-repeat;

    padding-left: 64px;
    padding-right: 234px;
  }

  @media screen and (min-width: 1440px) {
    background: linear-gradient(
        0deg,
        rgba(10, 10, 17, 0.2) 0%,
        rgba(10, 10, 17, 0.2) 100%
      ),
      linear-gradient(2deg, #0a0a11 0%, rgba(10, 10, 17, 0) 100%),
      linear-gradient(85deg, #0a0a11 0%, rgba(10, 10, 17, 0) 100%),
      url(${imageDes}) no-repeat right / contain,
      lightgray -3px -13.319px / 100.511% 101.679% no-repeat;

    padding-left: 100px;
    padding-right: 855px;
  }
`;
