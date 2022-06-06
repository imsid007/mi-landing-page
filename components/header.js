import { Row, Col } from "antd";

export default function Header() {
  return (
    <Row align="middle" className="header">
      <Col span={5}>
        <img alt=" mi-logo" className="brand-logo" src="images/mi-logo.png" />
      </Col>
      <Col className="getting-discovered-txt" span={0} md={19}>
        <img
          alt="mi-quotes"
          className="double-quotes-img"
          src="/images/quots.png"
        />
        Getting you Discovered
      </Col>
      <Col className="getting-discovered-txt" span={19} md={0}>
        <a
          target="_blanke"
          href="https://znap.link/megaimpression"
          className="portfolio-btn"
        >
          Our Portfolio
        </a>
      </Col>
    </Row>
  );
}
