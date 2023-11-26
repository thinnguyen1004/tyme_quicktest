import { Button, Col, Form, Input, Select, Slider, Typography } from "antd";
import PropTypes from "prop-types";
import { text } from "../../../localization/en";
import "./styles.scss";

function FilterBar({ form, handleSearch, breedOptions, colorOptions }) {
  return (
    <Form layout="vertical" form={form} onFinish={handleSearch}>
      <Form.Item name="quick_search">
        <Input
          placeholder={text.placeholder.quickSearch}
          className="bg-transparent text-white"
        />
      </Form.Item>
      <Form.Item
        label={<Typography.Text>{text.input.price}</Typography.Text>}
        name="price"
      >
        <Slider range max={500} min={100} defaultValue={[150, 400]} />
      </Form.Item>

      <Form.Item
        name="age"
        label={<Typography.Text>{text.input.age}</Typography.Text>}
      >
        <Input placeholder={text.placeholder.age} className="bg-transparent" />
      </Form.Item>

      <Form.Item
        name="breed"
        label={<Typography.Text>{text.input.breed}</Typography.Text>}
      >
        <Select
          showSearch
          options={breedOptions}
          defaultValue={breedOptions ? breedOptions[0] : null}
          className="bg-transparent"
        />
      </Form.Item>
      <Form.Item
        name="color"
        label={<Typography.Text>{text.input.color}</Typography.Text>}
      >
        <Select
          showSearch
          options={colorOptions}
          defaultValue={colorOptions ? colorOptions[0] : null}
        />
      </Form.Item>
      <Col
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Button
          classNames="flex"
          type="primary"
          htmlType="submit"
          style={{
            background: "#1677ff",
          }}
        >
          Search
        </Button>
      </Col>
    </Form>
  );
}
FilterBar.propTypes = {
  form: PropTypes.any,
  handleSearch: PropTypes.func,
  breedOptions: PropTypes.array,
  colorOptions: PropTypes.array,
};
export default FilterBar;
