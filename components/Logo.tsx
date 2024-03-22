import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src="/images/logo-25pct.png"
      alt="GreenFeenix Logo"
      width={250}
      height={250}
      priority={true}
    />
  );
};

export default Logo;