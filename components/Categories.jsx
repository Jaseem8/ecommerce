import Link from "next/link";
import React from "react";

function Categories(props) {
  return (
    <div className="categories">
      <Link href="/mobiles">
        <img src="https://cdn.sanity.io/images/l709lxgz/production/b576cdbfa3ac3fd7cbc0fdce0349308cc2f1403d-128x128.webp" />
        <p>Mobiles</p>
      </Link>
      <Link href="/fashion">
        <img src="https://cdn.sanity.io/images/l709lxgz/production/4daac1927e8890e06ad99e29727dedb3fe588418-128x128.webp" />
        <p>Fashion</p>
      </Link>
      <Link href="/electronics">
        <img src="https://cdn.sanity.io/images/l709lxgz/production/c847aa85e1ba7955cffb147fe4ea673e29ab0358-128x128.webp" />
        <p>Electronics</p>
      </Link>
      <Link href="/home">
        <img src="https://cdn.sanity.io/images/l709lxgz/production/8ac1efcb4b22e8bb55f6151fbd7c1428e1e51875-128x128.webp" />
        <p>Home Decors</p>
      </Link>
      <Link href="/appliances">
        <img src="https://cdn.sanity.io/images/l709lxgz/production/793babb7c1992f2885f249cf396fbb288195367c-128x128.webp" />
        <p>Appliances</p>
      </Link>
    </div>
  );
}

export default Categories;
