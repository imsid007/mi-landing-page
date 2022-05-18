import { Row, Col } from "antd";

export default function Header() {
  return (
    <Row align="middle" style={{ padding: "30px 0px" }}>
      <Col span={5}>
        <img className="brand-logo" src="images/mi-logo.png" />
      </Col>
      <Col
        className="getting-discovered-txt"
        span={19}
        style={{ textAlign: "end" }}
      >
        <div></div>
        <span style={{ color: "#fff", fontSize: "30px" }}>{'"'}</span>Getting
        you Discovered
      </Col>
    </Row>
  );
}
