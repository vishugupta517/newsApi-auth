// import React from "react";
import HeroStyle from "./Hero.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Navbar } from "./Navbar";

const Hero = ({ cat, userInput }) => {
  console.log("cat", cat);
  console.log("userIn", userInput);
  // const [userInput, setQuery] = useState("");
  const [Data, setData] = useState([]);
  const fetchData = async (e) => {
    await axios
      .get(
        cat
          ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=0a8a5d31847c4707976840c411099b3e`
          : userInput
          ? `https://newsapi.org/v2/everything?q=${userInput}&from=2023-01-30&sortoBy=ppularity&apiKey=0a8a5d31847c4707976840c411099b3e`
          : "https://newsapi.org/v2/top-headlines?country=in&apiKey=0a8a5d31847c4707976840c411099b3e"
      )
      .then((res) => setData(res.data.articles));
  };

  useEffect(() => {
    fetchData();
  }, [cat, userInput]);

  function search(items) {
    return Data.filter((item) => {
      /*
 // in here we check if our region is equal to our c state
 // if it's equal to then only return the items that match
 // if not return All the countries
 */
      // if (item.region == filterParam) {
      //     return searchParam.some((newItem) => {
      //       return (
      //         item[newItem]
      //             .toString()
      //             .toLowerCase()
      //             .indexOf(q.toLowerCase()) > -1
      //                  );
      //              });
      //          } else if (filterParam == "All") {
      //              return searchParam.some((newItem) => {
      //                  return (
      //                      item[newItem]
      //                          .toString()
      //                          .toLowerCase()
      //                          .indexOf(q.toLowerCase()) > -1
      //                  );
      //              });
      //          }
    });
  }

  // useEffect = (() => {}, []);

  const newsRender1 = Data.slice(0, 1).map((news) => {
    const { urlToImage } = news;
    return (
      <div key={news.url}>
        <img className={HeroStyle.mainNewsImage} src={urlToImage} alt="image" />
        <p className={`${HeroStyle.mainDate} ${HeroStyle.date}`}>
          {news.publishedAt}
        </p>
        <h3 className={HeroStyle.mainTitle}>{news.title}</h3>
        <p className={`${HeroStyle.mainDescription} ${HeroStyle.description}`}>
          {news.description}
        </p>
      </div>
    );
  });

  const newsRender2 = Data.slice(1, 4).map((news) => (
    <div key={news.url} className={HeroStyle.newsRender2Container}>
      <div className={HeroStyle.asideNewsImageContainer}>
        <img
          className={HeroStyle.asideNewsImage}
          src={news.urlToImage}
          alt="image"
        />
      </div>
      <div className={HeroStyle.asideNewsInfo}>
        <p className={`${HeroStyle.asideDate} ${HeroStyle.date}`}>
          {news.publishedAt}
        </p>
        <h6 className={`${HeroStyle.asideTitle} ${HeroStyle.title}`}>
          {news.title}
        </h6>
        <p className={`${HeroStyle.asideDescription} ${HeroStyle.description}`}>
          {news.description}
        </p>
        <a className={HeroStyle.newsLink} href={news.url}>
          read now..
        </a>
      </div>
    </div>
  ));
  const newsRender3 = Data.slice(4).map((news) => (
    <div key={news.url} className={HeroStyle.newsRender3Container}>
      <div className={HeroStyle.sectionImageContainer}>
        <img
          className={HeroStyle.sectionNewsImage}
          src={news.urlToImage}
          alt="image"
        />
      </div>

      <div className={HeroStyle.sectionNewsInfo}>
        <p className={`${HeroStyle.sectionDate} ${HeroStyle.date}`}>
          {news.publishedAt}
        </p>
        <h6 className={`${HeroStyle.sectionTitle} ${HeroStyle.title}`}>
          {news.title}
        </h6>
        <p
          className={`${HeroStyle.sectionDescription} ${HeroStyle.description}`}
        >
          {news.description}
        </p>
        <a className={HeroStyle.newsLink} href={news.url}>
          read now..
        </a>
      </div>
    </div>
  ));

  return (
    <>
      <div className="container">
        <h3 className={HeroStyle.topHeadlines}>Top stories</h3>
        <div className={HeroStyle.main}>
          <div className={HeroStyle.mainNewsPost}>{newsRender1}</div>
          <div className={HeroStyle.asideNewsPost}>{newsRender2}</div>
        </div>
        <h3 className={HeroStyle.topHeadlines}>Know what's happening</h3>
        {/* <div className={HeroStyle.section}> */}
        <div className={HeroStyle.sectionCards}>{newsRender3}</div>
        {/* </div> */}
      </div>
    </>
  );
};

export default Hero;
