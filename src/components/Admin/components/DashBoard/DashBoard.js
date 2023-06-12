import React, { useEffect } from "react";
import {
  LogoutOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  ShopOutlined,
  UserOutlined,
  MoneyCollectOutlined,
} from "@ant-design/icons";
import "./DashBoard.css";
import ChartDashBoard from "./ChartDashBoard";
import { useDispatch, useSelector } from "react-redux";
import { SignoutUser } from "../../../../actions/UserAction";
import { GetAllOrderPaid } from "../../../../actions/OrderAction";
import { getDashboardAction } from "../../../../actions/DashboardAction";
import { formatPrice } from "../../../../utils";

export default function DashBoard() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.dashboard);

  const handleSignout = () => {
    dispatch(SignoutUser());
  };

  useEffect(() => {
    dispatch(GetAllOrderPaid());
  }, []);

  useEffect(() => {
    dispatch(getDashboardAction());
  }, []);

  return (
    <section id="dashboard">
      <div className="dashboard">
        <div className="dashboard-top">
          <div className="dashboard-top-search">
            <form>
              <input placeholder="Tìm kiếm ..."></input>
              <span>
                <SearchOutlined></SearchOutlined>
              </span>
            </form>
          </div>
          <div className="dashboard-top-content">
            <div className="add-product">
              <LogoutOutlined onClick={handleSignout} />
            </div>
          </div>
        </div>

        <div className="dashboard-middle">
          <div className="dashboard-middle-statistic">
            <div className="dashboard-middle-statistic-content">
              <li style={{ display: "flex", justifyContent: "space-around" }}>
                <div className="dashboard-middle-statistic-icon">
                  <ShoppingOutlined></ShoppingOutlined>
                </div>
                <div className="dashboard-middle-statistic-title">
                  <span className="total">
                    {data.total_category && data.total_category}
                  </span>
                  <span className="title">Danh mục</span>
                </div>
              </li>
            </div>
            <div className="dashboard-middle-statistic-content">
              <li style={{ display: "flex", justifyContent: "space-around" }}>
                <div className="dashboard-middle-statistic-icon">
                  <ShopOutlined></ShopOutlined>
                </div>
                <div className="dashboard-middle-statistic-title">
                  <span className="total">
                    {data.total_product && data.total_product}
                  </span>
                  <span className="title">Sản phẩm</span>
                </div>
              </li>
            </div>
            <div className="dashboard-middle-statistic-content">
              <li style={{ display: "flex", justifyContent: "space-around" }}>
                <div className="dashboard-middle-statistic-icon">
                  <UserOutlined></UserOutlined>
                </div>
                <div className="dashboard-middle-statistic-title">
                  <span className="total">
                    {data.total_user && data.total_user - 1}
                  </span>
                  <span className="title">Khách hàng</span>
                </div>
              </li>
            </div>
            <div className="dashboard-middle-statistic-content">
              <li style={{ display: "flex", justifyContent: "space-around" }}>
                <div className="dashboard-middle-statistic-icon">
                  <ShoppingCartOutlined></ShoppingCartOutlined>
                </div>
                <div className="dashboard-middle-statistic-title">
                  <span className="total">
                    {data.total_order && data.total_order}
                  </span>
                  <span className="title">Đặt hàng</span>
                </div>
              </li>
            </div>
            <div className="dashboard-middle-statistic-content">
              <li style={{ display: "flex", justifyContent: "space-around" }}>
                <div className="dashboard-middle-statistic-icon">
                  <MoneyCollectOutlined />
                </div>
                <div className="dashboard-middle-statistic-title">
                  <span className="total">
                    {data.total_revenue && formatPrice(data.total_revenue)} đ
                  </span>
                  <span className="title">Doanh thu</span>
                </div>
              </li>
            </div>
          </div>
          <ChartDashBoard></ChartDashBoard>
        </div>

        <div className="dashboard-new">
          <div className="dashboard"></div>
          <div className="dashboard"></div>
        </div>
      </div>
    </section>
  );
}
