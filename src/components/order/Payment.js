import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../actions/OrderAction";
import { useHistory } from "react-router-dom";

export default function Payment() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [choosePay, setChoosePay] = useState({
    payLater: false,
    payOnline: false,
  });

  const { order } = useSelector((state) => state.orderInfo);

  const payLater = () => {
    setChoosePay({ payOnline: false, payLater: true });
  };

  const SendOrderPayLater = async () => {
    const OrderPaid = {
      ...order,
      status: "pendding",
      paymentMethod: "payLater",
    };

    await dispatch(createOrder(OrderPaid));
    history.push("/orderSuccess");
  };
  return (
    <div className="choose-pay">
      <h4>CHỌN PHƯƠNG THỨC THANH TOÁN </h4>
      <div className="choose">
        <button
          type="submit"
          className={choosePay.payLater ? "active" : ""}
          onClick={() => payLater()}
        >
          Thanh toán khi nhận hàng
        </button>
        <button type="submit" disabled>
          Thanh toán Online
        </button>
      </div>
      {choosePay.payLater ? (
        <div className="customer-order">
          <button onClick={SendOrderPayLater}>Đặt Hàng</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
