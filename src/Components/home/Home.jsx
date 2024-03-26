import React, { useEffect, useState } from "react";
import "./home.scss";
import Articles from "../articles/Articles";
import img from "../../assets/img.jpg";
import {
  useGetApi1Query,
  useGetApi2Query,
  useGetApi3Query,
} from "../../Redux/apiSlice/apiSlice";

const Home = () => {
  const [sorted, setSorted] = useState();
  const [data3, setData3] = useState();
  const { data: data1 } = useGetApi1Query();
  const { data: data2 } = useGetApi2Query();
  const { data: api3 } = useGetApi3Query();

  useEffect(() => {
    if (api3?.response) {
      const data3 = api3?.response.results.map((item) => ({
        author: item.pillarName,
        title: item.webTitle,
        description: item.webTitle,
        publishedAt: item.webPublicationDate,
        url: item.webUrl,
        urlToImage: img,
      }));
      setData3(data3);
    }
  }, [api3]);

  const handleSort = (by, url) => {
    setSorted(by + url);
  };

  return (
    <section>
      <div className="container">
        <h3 className="title">
          The <span>#1</span> source for Good News.
        </h3>
        {/* <div className="categories">
          <div className="btns">
            <button className="btn">Mobile</button>
            <button className="btn">Cars</button>
            <button className="btn">Apple</button>
            <button className="btn">Tesla</button>
            <button className="btn">Buisness</button>
            <button className="btn">News</button>
          </div>
        </div> */}
        <Articles
          title="NewsAPi"
          data={data1?.articles}
          sort={sorted}
          sortefunc={handleSort}
        />
        <Articles
          title="NewsAPI.org"
          data={data2?.articles}
          sort={sorted}
          sortefunc={handleSort}
        />
        <Articles
          title="The Guardian"
          data={data3}
          sort={sorted}
          sortefunc={handleSort}
        />
      </div>
    </section>
  );
};

export default Home;
