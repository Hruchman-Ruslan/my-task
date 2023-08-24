import imageMobWebp1x from "../../assets/mob.webp";
import imageMobWebp2x from "../../assets/mob_@2x.webp";
import imageMobJpg1x from "../../assets/mob.jpg";
import imageMobJpg2x from "../../assets/mob_@2x.jpg";

import imageTabWebp1x from "../../assets/tab.webp";
import imageTabWebp2x from "../../assets/tab_@2x.webp";
import imageTabJpg1x from "../../assets/tab.jpg";
import imageTabJpg2x from "../../assets/tab_@2x.jpg";

import imageDesWebp1x from "../../assets/des.webp";
import imageDesWebp2x from "../../assets/des_@2x.webp";
import imageDesJpg1x from "../../assets/des.jpg";
import imageDesJpg2x from "../../assets/des_@2x.jpg";
import { ImageContainer } from "./WelcomeImage.styled";

const WelcomeImage = () => {
  return (
    <ImageContainer>
      <picture>
        <source
          media="(min-width: 1280px)"
          srcSet={`${imageDesWebp1x} 1x, ${imageDesWebp2x} 2x`}
          type="image/webp"
        />
        <source
          media="(min-width: 1280px)"
          srcSet={`${imageDesJpg1x} 1x, ${imageDesJpg2x} 2x`}
          type="image/jpg"
        />
        <source
          media="(min-width: 768px)"
          srcSet={`${imageTabWebp1x} 1x, ${imageTabWebp2x} 2x`}
          type="image/webp"
        />
        <source
          media="(min-width: 768px)"
          srcSet={`${imageTabJpg1x} 1x, ${imageTabJpg2x} 2x`}
          type="image/jpg"
        />
        <source
          media="(max-width: 767.98px)"
          srcSet={`${imageMobWebp1x} 1x, ${imageMobWebp2x} 2x`}
          type="image/webp"
        />
        <source
          media="(max-width: 767.98px)"
          srcSet={`${imageMobJpg1x} 1x, ${imageMobJpg2x} 2x`}
          type="image/jpg"
        />
        <img
          src={imageMobJpg1x}
          alt="cocktail"
          width="703"
          height="770"
          loading="lazy"
        />
      </picture>
    </ImageContainer>
  );
};

export default WelcomeImage;
