import React, { useEffect, useState } from "react";
import axios from "axios";
import ListProduct from "../ListProduct";
import { handlePercentDiscount } from "../../../utils/index";

function FamilyDevice(props) {
  const [hotFamilyDevice, setHotFamilyDevice] = useState([]);
  useEffect(() => {
    async function FetchApi() {
      try {
        const { data } = await axios.get(
          `http://localhost:4000/category/6394333141ce8d28cdb6f4d2`
        );
        setHotFamilyDevice(data);
      } catch (error) {}
    }
    FetchApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="hotsale FamilyDevice">
      <div className="hotsale">
        <h2>Giày phụ nữ</h2>
        {hotFamilyDevice ? (
          <ListProduct
            HotSaleProducts={handlePercentDiscount(hotFamilyDevice)}
          ></ListProduct>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}

export default FamilyDevice;
