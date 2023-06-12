import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DeleteProduct,
  paginationProduct,
} from "../../../../actions/ProductAction";
import { Link } from "react-router-dom";
import { formatPrice } from "../../../../utils/index";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

function Product(props) {
  const { product, number } = props;
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.allProduct.currentPage);

  const handleDeleteProduct = async (product) => {
    await dispatch(DeleteProduct(product._id));
    dispatch(paginationProduct(currentPage));
  };

  return (
    <tr>
      <td>{number + 1}</td>
      <td>
        <img src={product.image} alt=""></img>
      </td>
      <td>{product.name}</td>
      <td>{formatPrice(product.salePrice)}</td>
      <td>
        {product.category_id === "6394333141ce8d28cdb6f4d4"
          ? "Giày thể thao"
          : product.category_id === "6394333141ce8d28cdb6f4d2"
          ? "Giày phụ nữ"
          : product.category_id === "6394333141ce8d28cdb6f4d1"
          ? "Dép"
          : product.category_id === "6394333141ce8d28cdb6f4d3"
          ? "Dép Croc"
          : ""}
      </td>
      <td
        className="delete-product"
        onClick={(e) => handleDeleteProduct(product)}
      >
        <DeleteOutlined />
      </td>
      <td className="update-product">
        <Link to={`/admin/product/update/${product._id}`}>
          <EditOutlined></EditOutlined>
        </Link>
      </td>
    </tr>
  );
}

export default Product;
