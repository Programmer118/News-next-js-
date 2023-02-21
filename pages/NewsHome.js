import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import Landing from "./Landing";

const NewsHome = ({ api }) => {
  const router = useRouter();
  const [Articles, setArticles] = useState([]);
  const [Message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  var url = `https://newsapi.org/v2/top-headlines?country=in&apikey=${api}`;
  const getNews = async (url) => {
    try {
      const response = await axios.get(url);
      setArticles(response.data.articles);
      setLoading(false);
      setMessage("")
    } catch (error) {
      setMessage(error.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    getNews(url);
  }, []);

  return (
    <>
      <section className="text-gray-600 top-12 bg-slate-100 body-font">
        {loading && <Landing />}
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap  -m-4">
            {Message !== "" && <h2 className="text-center text-red-500">{Message}</h2>}
            {Articles.map((item) => {
              return (
                <div key={item.url} className="p-4 md:w-1/3">
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    {item.urlToImage&&<img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={item.urlToImage}
                      alt=""
                    />}
                    {!item.urlToImage&&<img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={'/next.svg'}
                      alt=""
                    />}
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        {item.source.name}
                      </h2>
                      <h2 className="tracking-widest text-xs title-font font-medium uppercase  text-red-400 mb-1">
                        {item.author}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        {item.title}
                      </h1>
                      <p className="leading-relaxed mb-3">{item.content}</p>
                      <div className="flex items-center flex-wrap ">
                        <Link
                          href={item.url}
                          className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                        >
                          Learn More
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsHome;
