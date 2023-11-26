import { Layout } from "antd";
import AppBar from "./AppBar";
import { Content, Footer } from "antd/es/layout/layout";
import PropTypes from "prop-types";
import "./styles.scss";
function AppLayout({ children }) {
  return (
    <Layout className="min-h-screen custom-layout">
      <AppBar />
      <Content>{children}</Content>
      <Footer />
    </Layout>
  );
}
AppLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
export default AppLayout;
