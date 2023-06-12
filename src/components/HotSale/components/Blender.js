import React, { useEffect, useState } from "react";
import axios from "axios";
import ListProduct from "../ListProduct";
import { handlePercentDiscount } from "../../../utils/index";

function Blender(props) {
  const [hotBlender, setHotBlender] = useState([]);
  useEffect(() => {
    async function FetchApi() {
      try {
        const { data } = await axios.get(
          `http://localhost:4000/category/6394333141ce8d28cdb6f4d1`
        );
        setHotBlender(data);
      } catch (error) {}
    }
    FetchApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="hotsale Blender">
      <div className="hotsale">
        <h2>Dép</h2>
        {hotBlender ? (
          <ListProduct
            HotSaleProducts={handlePercentDiscount(hotBlender)}
          ></ListProduct>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}

export default Blender;
