import React, { useEffect, useState } from "react";
import axios from "axios";
import ListProduct from "../ListProduct";
import { handlePercentDiscount } from "../../../utils/index";

function Cooker(props) {
  const [hotCooker, setHotCooker] = useState([]);
  useEffect(() => {
    async function FetchApi() {
      try {
        const { data } = await axios.get(
          `http://localhost:4000/category/6394333141ce8d28cdb6f4d4`
        );
        setHotCooker(data);
      } catch (error) {}
    }
    FetchApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="hotsale Cooker">
      <div className="hotsale">
        <h2>Giày thể thao</h2>
        {hotCooker ? (
          <ListProduct
            HotSaleProducts={handlePercentDiscount(hotCooker)}
          ></ListProduct>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}

export default Cooker;
