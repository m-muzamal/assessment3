import { useEffect, useState } from "react";
import "./App.css";
import Home from "./Components/home/Home";
import Nav from "./Components/navbar/Nav";
import {
  useGetApi1Query,
  useGetApi2Query,
  useGetApi3Query,
} from "./Redux/apiSlice/apiSlice";
import { useDispatch } from "react-redux";
import { addData } from "./Redux/dataSclice/dataSlice";
import Footer from "./Components/footer/Footer";

function App() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const api1 = useGetApi1Query();
  const api2 = useGetApi2Query();
  const api3 = useGetApi3Query();

  useEffect(() => {
    if (api1.data && api2.data && api3.data) {
      // console.log("API3", api3.data.response.results);

      const data1 = api1.data.articles.map((article) => ({
        id: article.id,
        author: article.author,
        title: article.title,
        disc: article.description,
        img: article.urlToImage,
        url: article.url,
        category: article.source.name,
        date: article.publishedAt,
        source: "1",
      }));

      const data2 = api2.data.articles.map((item) => ({
        id: item.id,
        author: item.author,
        title: item.title,
        disc: item.content,
        img: item.urlToImage,
        url: item.url,
        category: item.source.name,
        date: item.publishedAt,
        source: "2",
      }));

      const data3 = api3.data.response.results.map((item) => ({
        id: item.id,
        author: item.pillarName,
        disc: item.content,
        url: item.webUrl,
        category: item.type,
        title: item.webTitle,
        img: item.webImg,
        date: item.webPublicationDate,
        source: "3",
      }));

      // console.log("Data3", data3);

      const combinedData = [...data1, ...data2, ...data3];
      dispatch(addData(combinedData));
      setData(combinedData);
    }
  }, [api1.data, api2.data, api3.data]);

  // console.log("API1:", api1);
  // console.log("API2:", api2);
  // console.log("API3:", api3);
  // console.log("Combine:", data);
  return (
    <>
      <Nav />
      <Home />
      <Footer />
    </>
  );
}

export default App;
