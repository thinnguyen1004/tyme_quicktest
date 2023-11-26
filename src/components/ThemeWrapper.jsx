import { ConfigProvider } from "antd";
import PropTypes from "prop-types";

function ThemeWrapper({ children }) {
  return <ConfigProvider theme={{}}>{children}</ConfigProvider>;
}

ThemeWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeWrapper;
