import { Row } from "antd";
import bannerImage from "../../../assets/dummy-banner.jpg";
function Banner() {
  return (
    <Row className="max-h-[400px] w-full">
      <img
        src={bannerImage}
        loading="lazy"
        style={{
          objectFit: "fill",
          height: "100%",
        }}
      />
    </Row>
  );
}

export default Banner;
