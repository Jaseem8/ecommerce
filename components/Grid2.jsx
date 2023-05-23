import React, { useState, useEffect } from "react";
import classes from "./Grid2.module.css";
import Link from "next/link";
import { urlFor } from "../lib/client";
import { client } from "../lib/client";

function Grid(props) {
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const query = `*[_type=="product" && Categories=='${props.categories}']`;
      const products = await client.fetch(query);
      const shuffled = products.sort(() => 0.5 - Math.random());
      setSelected(shuffled.slice(0, 6));
    }
    fetchData();
  }, []);

  return (
    <div style={{ margin: "1%", textAlign: "center" }}>
      <div className={classes.title}>{props.title}</div>
      <div className={classes.grid_container}>
        {selected.map((product, index) => {
          return (
            <div key={index} className={classes.box}>
              <Link href={`/product/${product.slug.current}`}>
                <div className={classes.image_container}>
                  <img
                    src={urlFor(product.image && product.image[0])}
                    className={classes.image}
                  />
                </div>
                <div className={classes.name}>{product.name}</div>

                <div className={classes.price}>Rs {product.price}</div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Grid;
