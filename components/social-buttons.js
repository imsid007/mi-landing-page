import { Col, Row } from "antd";

export default function SocialButtons() {
  return (
    <Row align="middle">
      <Row align="middle" className="social-buttons-container">
        <a
          target="_blanke"
          href="https://instagram.com/mega.impression?igshid=YmMyMTA2M2Y="
        >
          <img
            alt="mi-social-icon"
            className="social-btn"
            src="/images/social-buttons/instagram.png"
          />
        </a>
        <a
          target="_blanke"
          href=" https://www.facebook.com/Mega-Impression-115139334503965"
        >
          <img
            alt="mi-social-icon"
            className="social-btn"
            src="/images/social-buttons/facebook.png"
          />
        </a>
        <a target="_blanke" href=" https://twitter.com/Mega_Impression">
          <img
            alt="mi-social-icon"
            className="social-btn"
            src="/images/social-buttons/twitter.png"
          />
        </a>
        <a
          target="_blanke"
          href=" https://www.linkedin.com/company/mega-impression/"
        >
          <img
            alt="mi-social-icon"
            className="social-btn"
            src="/images/social-buttons/linkedIn.png"
          />
        </a>
        <a
          target="_blanke"
          href=" https://api.whatsapp.com/send/?phone=919519782246&text&app_absent=0"
        >
          <img
            alt="mi-social-icon"
            className="social-btn"
            src="/images/social-buttons/whatsApp.png"
          />
        </a>
      </Row>
      <div className="getting-discovered-txt getting-discovered-txt-mob desktop-hide">
        <img
          alt="mi-qutoes"
          className="double-quotes-img"
          src="/images/quots.png"
        />
        Getting you Discovered
      </div>
      <a
        target="_blanke"
        href="https://znap.link/megaimpression"
        className="portfolio-btn mob-hide"
      >
        Our Portfolio
      </a>
    </Row>
  );
}
