import Image from 'next/image';

const BackgroundImage = ({ src, alt, children }) => (
  <div className="relative w-full h-[20rem] rounded-full shadow-2xl shadow-slate-950">
  <Image
    src={src}
    alt={alt}
    layout="fill"
    objectFit="contain"
    quality={75}
    priority
    className="z-0"
  />
  {/* <div className="absolute inset-0 bg-black bg-opacity-30 z-10" /> */}
  <div className="relative z-20 flex items-center justify-center top-24">
    {children}
  </div>
</div>
);

export default BackgroundImage;
