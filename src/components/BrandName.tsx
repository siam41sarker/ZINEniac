import logo from "@/assets/logo.png";

interface BrandNameProps {
  className?: string;
  imgClassName?: string;
}

// Renders the ZINEniac logo image in place of the styled brand text.
// `className` controls the height (e.g. "text-4xl" -> ~h-10). We map common
// text sizes to a sensible height; callers can also pass `imgClassName` to
// fully override the rendered image classes.
const sizeFromClass = (cls: string): string => {
  if (/text-7xl/.test(cls)) return "h-16 md:h-20";
  if (/text-6xl/.test(cls)) return "h-14 md:h-16";
  if (/text-5xl/.test(cls)) return "h-12 md:h-14";
  if (/text-4xl/.test(cls)) return "h-10 md:h-12";
  if (/text-3xl/.test(cls)) return "h-9 md:h-10";
  if (/text-2xl/.test(cls)) return "h-8";
  if (/text-xl/.test(cls)) return "h-7";
  return "h-6";
};

const BrandName = ({ className = "", imgClassName }: BrandNameProps) => {
  const sized = imgClassName ?? `${sizeFromClass(className)} w-auto`;
  return (
    <img
      src={logo}
      alt="ZINEniac"
      className={`inline-block align-middle ${sized}`}
    />
  );
};

export default BrandName;
