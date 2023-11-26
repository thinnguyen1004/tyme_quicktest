import { Card as AntdCard, Col, Row, Tooltip, Typography } from "antd";
import PropTypes from "prop-types";

function Card({ data }) {
  const { image, breed, price, age, color } = data;
  return (
    <AntdCard
      hoverable
      cover={
        <div className="p-4 pb-0">
          <img
            src={image}
            className="h-[235px] w-full"
            style={{
              objectFit: "fill",
            }}
          />
        </div>
      }
      // className="w-[267px]"
    >
      <Row gutter={[8, 0]} className="flex-col">
        <Col>
          <Tooltip title={breed}>
            <Typography.Title level={4} ellipsis={{ rows: 1 }}>
              {breed}
            </Typography.Title>
          </Tooltip>
        </Col>
        <Col>
          <Row gutter={[8, 0]} className="justify-between">
            <Col>
              <Typography.Title level={5}>Age: {age}</Typography.Title>
            </Col>
            <Col>
              <Typography.Title level={5}>{price}$</Typography.Title>
            </Col>
          </Row>
        </Col>
        <Col>
          <Tooltip title={color}>
            <Typography.Title ellipsis={{ rows: 1 }} level={5}>
              color: {color}
            </Typography.Title>
          </Tooltip>
        </Col>
      </Row>
    </AntdCard>
  );
}

Card.propTypes = {
  data: PropTypes.any,
};

export default Card;
