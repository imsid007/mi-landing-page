import React, { useState, useEffect } from "react";
import { Form, Input, Button } from "antd";
var Airtable = require("airtable");
import ConfettiGenerator from "confetti-js";

export default function SignInForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleFormSubmit = (values) => {
    setIsLoading(true);
    //keys for abhas airtable database
    var base = new Airtable({ apiKey: "keyuwXov4nJigZhgf" }).base(
      "appp80MJ4jFLLpP88"
    );
    base("users").create(
      [
        {
          fields: {
            email: values.userEmail,
            type: values.type,
          },
        },
      ],
      function (err, records) {
        if (err) {
          setIsLoading(false);
          return;
        }
        records.forEach(function (record) {
          console.log("success");
          setIsLoading(false);
          setIsSuccess(true);
        });
      }
    );
  };

  useEffect(() => {
    const confettiSettings = { target: "my-canvas" };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
    return () => confetti.clear();
  }, []);
  return (
    <div>
      <canvas
        style={{
          position: "fixed",
          width: "100%",
          height: isSuccess ? "100%" : 0,
          transition: "2s",
          top: 0,
          left: 0,
        }}
        id="my-canvas"
      ></canvas>
      {!isSuccess ? (
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={handleFormSubmit}
          autoComplete="off"
        >
          <Form.Item
            name="userEmail"
            rules={[
              { type: "email", message: "Please enter valid email!" },
              { required: true, message: "Please input your email!" },
            ]}
          >
            <Input placeholder="Enter your Email" />
          </Form.Item>

          <Form.Item
            name="type"
            rules={[{ required: true, message: "Please enter details" }]}
          >
            <Input placeholder="Are you an Influencer or a Brand?" />
          </Form.Item>

          <Form.Item style={{ textAlign: "center" }}>
            <Button loading={isLoading} disabled={isLoading} htmlType="submit">
              Join Us
            </Button>
          </Form.Item>
        </Form>
      ) : (
        <div className="success-conteinr">
          <div className="cheers-txt">CHEERS! 🍻 </div>
          <div className="success-subtitle">Your Response is Submitted ! </div>
          <div className="success-txt">
            We appreciate your response. Our team will get back to you soon.
          </div>
        </div>
      )}
    </div>
  );
}
