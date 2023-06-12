import React from "react";
import "./Footer.css";

function Footer(props) {
  return (
    <section id="footer">
      <div className="footer">
        <div className="footer-top">
          <div className="footer-top-name">
            <h2>Shop Mai Thùy Linh</h2>
          </div>
          <div className="footer-top-about">
            <h2>About us</h2>
            <ul>
              <li>
                <a href="/">Về Chúng Tôi</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">Cơ Hội Nghề Nghiệp</a>
              </li>
              <li>
                <a href="/" >Cửa Hàng</a>
              </li>
              <li>
                <a href="/">
                  <img
                    src="https://theme.hstatic.net/1000075078/1000610097/14/gov.png?v=664"
                    alt=""
                  ></img>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-top-sp">
            <h2>Support</h2>
            <p>Hỗ trợ 0398780397 (07:00-22:00)</p>
            <p>Vận chuyển 1800 9999 (07:00-22:00)</p>
          </div>
          <div className="footer-top-delivery">
            <h2>Deliver</h2>
            <ul>
              <li>
                <a href="/">Phương thức giao hàng</a>
              </li>
              <li>
                <a href="/">Chuyển khoản</a>
              </li>
              <li>
                <a href="/">Tiền mặt</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bot">
          <p>Công ty nhiều thành viên :v</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
