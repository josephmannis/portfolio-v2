import { Image } from "types";
import ImageModal from "../image-modal";

const Banner = ({ image }) => <ImageModal imageClass="banner" image={image} />;

Banner.propTypes = { image: Image };

export default Banner;
