import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrder } from "../../../../../actions/OrderAction";
import ListOrder from "../AdminOrderUI/ListOrder";

function AdminOrderAll() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.allOrder.order);

  useEffect(() => {
    dispatch(getAllOrder());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {orders && orders.length > 0 ? (
        <ListOrder orders={orders}></ListOrder>
      ) : (
        <h4>Không có đơn hàng</h4>
      )}
    </div>
  );
}

export default AdminOrderAll;
