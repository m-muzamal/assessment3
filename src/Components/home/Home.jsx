import React, { useCallback, useEffect, useState } from "react";
import "./home.scss";
import Articles from "../articles/Articles";
import img from "../../assets/img.jpg";
import {
  useGetApi1Query,
  useGetApi2Query,
  useGetApi3Query,
} from "../../Redux/apiSlice/apiSlice";
import { useSelector } from "react-redux";

const Home = () => {
  const { searchData } = useSelector((state) => state.data);
  // console.log(searchData);

  const [sorted, setSorted] = useState("publishedAt");
  const [data3, setData3] = useState();
  const { data: data1 } = useGetApi1Query(sorted);
  const { data: data2 } = useGetApi2Query(sorted);
  const { data: api3 } = useGetApi3Query(
    sorted === "publishedAt" ? "newest" : "oldest"
  );

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

  const handleSort = (by) => {
    setSorted(by);
  };

  return (
    <section>
      <div className="container">
        <h3 className="title">
          The <span>#1</span> source for Good News.
        </h3>
        <div className="categories">
          <div className="btns">
            <h2>Sort by: </h2>
            <button className="btn" onClick={() => handleSort("author")}>
              Author
            </button>
            <button className="btn" onClick={() => handleSort("publishedAt")}>
              Time
            </button>
          </div>
        </div>
        {searchData[0]?.length > 0 ? (
          <>
            <Articles title={"Search result"} data={searchData[0]} />
          </>
        ) : (
          <>
            <Articles title="NewsAPi" data={data1?.articles} />
            <Articles title="NewsAPI.org" data={data2?.articles} />
            <Articles title="The Guardian" data={data3} />
          </>
        )}
      </div>
    </section>
  );
};

export default Home;
