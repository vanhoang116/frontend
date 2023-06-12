import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import {
  getproductById,
  removeProductById,
  saveProduct,
} from "../../../../actions/ProductAction";
import { useHistory, useParams } from "react-router-dom";
import { getAllSelectList } from "../../../../actions/SelectListAction";
import { getListCategoryAction } from "../../../../actions/CategoryAction";

function AdminUpdate(props) {
  const { register, handleSubmit } = useForm();
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const [image, setImage] = useState("");
  const detailProduct = useSelector((state) => state.getProductById.product);
  const SelectList = useSelector((state) => state.selectList.List);
  const [activeTypeProduct, setActiveTypeproduct] = useState(undefined);
  const { List } = useSelector((state) => state.allTypeProduct);
  const { categoryList } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getproductById(id));

    return () => {
      dispatch(removeProductById());
    };
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(getAllSelectList());
  }, []);

  useEffect(() => {
    dispatch(getAllSelectList());
  }, []);

  useEffect(() => {
    dispatch(getListCategoryAction());
  }, [dispatch]);

  const handleFileImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const onSubmit = async (data) => {
    let formData = new FormData();

    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("amount", data.amount);
    formData.append("salePrice", data.salePrice);
    formData.append("category_id", data.category_id);
    formData.append("image", image);
    formData.append("_id", id);

    // formData.append("os", data.os);
    // formData.append("ram", data.ram);
    // formData.append("battery", data.battery);
    // formData.append("rom", data.rom);
    // formData.append("camera", data.camera);
    // formData.append("special", data.special);
    // formData.append("design", data.design);
    // formData.append("screen", data.screen);

    await dispatch(saveProduct(formData));
    history.push("/admin/product");
  };

  return (
    <div className="admin-create">
      <span>Update Product</span>
      {detailProduct ? (
        <form
          className="admin-create-product"
          onSubmit={handleSubmit(onSubmit)}
          encType="multipart/form-data"
        >
          <input
            {...register("name")}
            placeholder="Name"
            defaultValue={detailProduct.name}
          ></input>
          <input
            {...register("amount")}
            placeholder="Amount"
            type="number"
            defaultValue={detailProduct.amount}
          ></input>
          <input
            {...register("price")}
            placeholder="Price"
            type="number"
            defaultValue={detailProduct.price}
          ></input>
          <input
            {...register("salePrice")}
            placeholder="SalePrice"
            type="number"
            defaultValue={detailProduct.salePrice}
          ></input>

          {categoryList.length > 0 && (
            <div className="select-type">
              <select
                {...register("category_id")}
                defaultValue={detailProduct.category_id}
              >
                {categoryList.map((item, index) => {
                  return (
                    <option key={index} value={item._id}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>
          )}

          {/* <div className="filter-menu-firm">
            {List ? List.map((item) => MenuFirmProduct(item)) : ""}
          </div>

          {SelectList && SelectList.length > 0
            ? SelectList.map((item) => (
                <div className="select-type">
                  <select
                    {...register(`${item.property}`)}
                    defaultValue={detailProduct[`${item.property}`]}
                  >
                    {item.options.map((x) => (
                      <option value={x}>{x}</option>
                    ))}
                  </select>
                </div>
              ))
            : ""} */}

          <input
            type="file"
            {...register("image")}
            onChange={handleFileImageChange}
          ></input>
          <button type="submit">Update Product</button>
        </form>
      ) : (
        ""
      )}
    </div>
  );
}

export default AdminUpdate;
