import Link from "next/link";
import React, { useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { urlFor } from "../lib/client";
import { useRouter } from "next/router";
function Search(props) {
  const inputRef = useRef();
  const [products, setProducts] = useState();
  const searchHandler = () => {
    let timer;
    clearTimeout(timer);
    timer = setTimeout(async () => {
      const response = await fetch("/api/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputRef.current.value),
      });
      setProducts([...(await response.json())]);
    }, 200);
  };

  const router = useRouter();
  const searchSubmitHandler = (event) => {
    event.preventDefault();
    router.push({
      pathname: "/searchResults",
      query: { keyword: inputRef.current.value },
    });
    inputRef.current.value = "";
  };
  return (
    <div className="search">
      <form onSubmit={searchSubmitHandler}>
        <input
          type="search"
          placeholder="Search here what you are looking for.."
          onChange={searchHandler}
          ref={inputRef}
        />
        <button type="submit">
          <AiOutlineSearch />
        </button>
      </form>

      {products && inputRef.current.value.length > 0 && (
        <div className="search-container">
          {products.map((item) => {
            return (
              <div
                key={item.slug.current}
                onClick={() => (inputRef.current.value = "")}
              >
                <Link href={`/product/${item.slug.current}`}>
                  <div className="search-card">
                    <div className="search-image-container">
                      <img
                        src={urlFor(item.image && item.image[0])}
                        className="search-image"
                      />
                    </div>
                    <div className="search-name">{item.name}</div>
                    {/* <div className="search-price">Rs {item.price}</div> */}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Search;
