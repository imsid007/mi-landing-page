import { Col, Row, Form, Input, Button } from "antd";
import Header from "../components/header";
import SocialButtons from "../components/social-buttons";

export default function Home() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  return (
    <div className="home-container">
      <Header />
      <Row>
        <Col span={24} lg={12}>
          <div>
            <div>
              <div className="title">MEGA</div>
              <div className="sub-title">IMPRESSION</div>
            </div>
            <div>
              <div className="we-are-txt">
                <i>WE ARE</i>
              </div>
              <div className="coming-soon-txt">
                <i>COMING SOON...</i>
              </div>
            </div>
            <Row>
              <Col span={0} lg={24}>
                <SocialButtons />
              </Col>
            </Row>
          </div>
        </Col>
        <Col span={24} lg={12}>
          <div className="form-column">
            <div className="influencer-or-brand-container">
              <span style={{ color: "#EE2A7B" }}>INFLUENCER</span>{" "}
              <span>OR</span>{" "}
              <span style={{ color: "#51C8F7" }}>
                BRAND<span style={{ color: "#fff" }}>?</span>
              </span>
              <div className="get-in-touch-txt">GET IN TOUCH WITH US</div>
            </div>
            <Form
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              autoComplete="off"
            >
              <Form.Item
                name="username"
                rules={[
                  { type: "email", message: "Please enter valid email!" },
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input placeholder="Enter your Email" />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[{ required: true, message: "Please enter details" }]}
              >
                <Input placeholder="Are you an Influencer or a Brand?" />
              </Form.Item>

              <Form.Item style={{ textAlign: "center" }}>
                <Button htmlType="submit">Join Us</Button>
              </Form.Item>
            </Form>
          </div>
          <Row>
            <Col lg={0}>
              <SocialButtons />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
