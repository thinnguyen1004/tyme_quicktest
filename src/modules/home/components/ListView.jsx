import { Col, Row } from "antd";
import Card from "../../../components/Card/Card";
import PropTypes from "prop-types";

function ListView({ data = [] }) {
  return (
    <Row gutter={[40, 40]}>
      {data?.map((i) => (
        <Col md={12} lg={8} xl={6} key={i.id}>
          <Card data={i} />
        </Col>
      ))}
    </Row>
  );
}
ListView.propTypes = {
  data: PropTypes.any,
};
export default ListView;
