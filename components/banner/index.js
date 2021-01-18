import { Image } from "types";

const Banner = ({ src, alt }) => <img className="banner" src={src} alt={alt} />;

Banner.propTypes = Image;

export default Banner;
