import React, { useEffect, useState } from "react";
import "./articles.scss";
import Item from "./Item";

const Articles = ({ data, title }) => {
  const [visible, setVisible] = useState(9);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    data ? setIsLoading(false) : setIsLoading(true);
  }, [data]);

  return (
    <article>
      <header>
        <h4>{title}</h4>
      </header>
      <div className="line"></div>
      <div className="items">
        {isLoading ? (
          <h4>Loading...</h4>
        ) : (
          <>
            {data
              .map((data, index) => (
                <div key={index}>
                  <Item
                    author={data.author}
                    title={data.title}
                    disc={data.description}
                    date={data.publishedAt}
                    url={data.url}
                    img={data.urlToImage}
                  />
                </div>
              ))
              .slice(0, visible)}
          </>
        )}
      </div>
      <div className="btn">
        <button
          className=" btn-primary"
          onClick={() => setVisible(visible + 9)}
        >
          Load more
        </button>
      </div>
    </article>
  );
};

export default Articles;
