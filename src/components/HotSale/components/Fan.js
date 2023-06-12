import React, { useEffect, useState } from "react";
import axios from "axios";
import ListProduct from "../ListProduct";
import { handlePercentDiscount } from "../../../utils/index";

function Fan(props) {
  const [hotFan, setHotFan] = useState([]);
  useEffect(() => {
    async function FetchApi() {
      try {
        const { data } = await axios.get(
          `http://localhost:4000/category/6394333141ce8d28cdb6f4d3`
        );
        setHotFan(data);
      } catch (error) {}
    }
    FetchApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="hotsale Fan">
      <div className="hotsale">
        <h2>Dép Croc</h2>
        {hotFan ? (
          <ListProduct
            HotSaleProducts={handlePercentDiscount(hotFan)}
          ></ListProduct>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}

export default Fan;
