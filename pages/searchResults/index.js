import Link from "next/link";
import React, { useEffect, useState } from "react";
import { urlFor } from "../../lib/client";
import { useRouter } from "next/router";
function searchResults(props) {
  const [results, setResults] = useState();
  const router = useRouter();
  useEffect(() => {
    async function fetchdata() {
      const response = await fetch("/api/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(router.query.keyword),
      });
      setResults([...(await response.json())]);
    }
    fetchdata();
  }, [results]);

  return (
    <div className="results-container">
      {results &&
        results.map((item) => {
          return (
            <div className="results-card" key={item.slug.current}>
              <Link href={`/product/${item.slug.current}`}>
                <div className="results-image-container">
                  <img
                    src={urlFor(item.image && item.image[0])}
                    className="results-image"
                  />
                </div>
                <div className="results-name">{item.name}</div>
                <div className="results-price">Rs {item.price}</div>
              </Link>
            </div>
          );
        })}
    </div>
  );
}

export default searchResults;
