import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";

import {
  editCurrentPage,
  saveProduct,
} from "../../../../actions/ProductAction";
import { useHistory } from "react-router-dom";
import { getAllSelectList } from "../../../../actions/SelectListAction";
import { getAllTypeProduct } from "../../../../actions/ListTypeProductAction";
import { getListCategoryAction } from "../../../../actions/CategoryAction";

function AdminCreate(props) {
  const { register, handleSubmit } = useForm({ defaultValues: {} });
  const dispatch = useDispatch();
  const history = useHistory();

  const [image, setImage] = useState("");
  const { pages } = useSelector((state) => state.allProduct.product);
  const { categoryList } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getAllSelectList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllTypeProduct());
  }, [dispatch]);

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

    // formData.append("os", data.os);
    // formData.append("ram", data.ram);
    // formData.append("battery", data.battery);
    // formData.append("rom", data.rom);
    // formData.append("camera", data.camera);
    // formData.append("special", data.special);
    // formData.append("design", data.design);
    // formData.append("screen", data.screen);

    await dispatch(saveProduct(formData));
    await dispatch(editCurrentPage(pages));
    history.push("/admin/product");
  };

  return (
    <div className="admin-create">
      <span>Create Product</span>
      <form
        className="admin-create-product"
        onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"
      >
        <input {...register("name")} placeholder="Tên sản phẩm"></input>
        <input
          {...register("amount")}
          placeholder="Amount"
          type="number"
        ></input>
        <input {...register("price")} placeholder="Giá" type="number"></input>
        <input
          {...register("salePrice")}
          placeholder="Giá khuyến mãi"
          type="number"
        ></input>
        {categoryList.length > 0 && (
          <div className="select-type">
            <select {...register("category_id")}>
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

        <input
          type="file"
          {...register("image")}
          onChange={handleFileImageChange}
        ></input>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AdminCreate;
