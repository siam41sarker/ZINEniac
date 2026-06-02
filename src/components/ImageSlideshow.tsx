import { useEffect, useState } from "react";

interface Props {
  images: string[];
  alt: string;
  className?: string;
  interval?: number;
  imgClassName?: string;
}

const ImageSlideshow = ({ images, alt, className = "", interval = 4500, imgClassName = "" }: Props) => {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % images.length), interval);
    return () => clearInterval(t);
  }, [images.length, interval]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={alt}
          loading={i === 0 ? "eager" : "lazy"}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === idx ? "opacity-100" : "opacity-0"
          } ${imgClassName}`}
        />
      ))}
      {/* spacer to maintain box height when used absolutely */}
      <div className="invisible">
        <img src={images[0]} alt="" className="w-full h-auto" />
      </div>
      {/* dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            aria-label={`Slide ${i + 1}`}
            onClick={() => setIdx(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === idx ? "w-6 bg-white" : "w-1.5 bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlideshow;
