import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <div className="product-image-container">
            <img src={urlFor(image && image[0])} className="product-image" />
          </div>
          <div className="product-name">{name}</div>
          <p className="product-price">Rs {price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
