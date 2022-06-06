import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import SignInForm from "../components/form";
import Header from "../components/header";
import Meta from "../components/meta";
import SocialButtons from "../components/social-buttons";

export default function Home() {
  const dots = ["", ".", "..", "..."];
  const [counter, setCounter] = useState(0);
  const [screenSize, setScreenSize] = useState(0);
  useEffect(() => {
    setScreenSize(document.body.clientWidth);
    setTimeout(() => {
      if (counter < 3) {
        setCounter((prev) => prev + 1);
      } else setCounter(0);
    }, 1000);
  }, [counter]);
  return (
    <div className="home-container">
      <Header />
      <Meta />
      <Row className="body-container">
        <Col span={24} xl={12}>
          <div className="description-container">
            <div>
              <div className="title">MEGA</div>
              <div className="sub-title">IMPRESSION</div>
            </div>
            <div>
              <div className="we-are-txt">
                <i>WE ARE</i>
              </div>
              <div className="coming-soon-txt">
                <i>COMING SOON{screenSize > 600 ? dots[counter] : "..."}</i>
              </div>
            </div>
            <Row>
              <Col span={0} lg={24}>
                <SocialButtons />
              </Col>
            </Row>
          </div>
        </Col>
        <Col span={24} xl={12}>
          <div className="form-container">
            <div className="influencer-or-brand-container">
              <span style={{ color: "#EE2A7B" }}>INFLUENCER</span>{" "}
              <span className="or-txt">OR</span>{" "}
              <span style={{ color: "#51C8F7" }}>
                BRAND<span style={{ color: "#fff" }}>?</span>
              </span>
              <div className="get-in-touch-txt">GET IN TOUCH WITH US</div>
            </div>
            <SignInForm />
          </div>
          <Row justify="center">
            <Col lg={0}>
              <SocialButtons />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
