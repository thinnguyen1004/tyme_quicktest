import { Col, Row, Skeleton } from "antd";
import { range } from "lodash";

function LoadingSkeleton() {
  return (
    <Row gutter={[40, 40]}>
      {range(0, 12).map((i) => (
        <Col span={6} key={i}>
          <Skeleton.Button
            size="large"
            active
            block
            style={{
              height: "235px",
              width: "100%",
            }}
          />
        </Col>
      ))}
    </Row>
  );
}

export default LoadingSkeleton;
