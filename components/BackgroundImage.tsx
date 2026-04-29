'use client';

interface BackgroundImageProps {
  imgName: string;
}

export default function BackgroundImage({ imgName }: BackgroundImageProps) {
  if (!imgName) return null;

  return (
    <style jsx global>{`
      .bg-img {
        background-image: url(/img/webp/${imgName}.webp);
      }
      @media only screen and (max-width: 576px) {
        .bg-img {
          background-image: url(/img/webp/${imgName}_xs.webp);
        }
      }
      @media only screen and (max-width: 992px) {
        .bg-img {
          background-image: url(/img/webp/${imgName}_xs.webp);
        }
      }
      @media only screen and (max-width: 1440px) {
        .bg-img {
          background-image: url(/img/webp/${imgName}_md.webp);
        }
      }
      @media only screen and (min-width: 1441px) {
        .bg-img {
          background-image: url(/img/webp/${imgName}_xl.webp);
        }
      }
    `}</style>
  );
}
