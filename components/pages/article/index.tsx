"use client";
import Image from "next/image";
import { useParams } from "next/navigation";

import content from "@/components/pages/article/index.json";

export default function Component() {
  const { tab } = useParams<{ tab: string }>();
  console.log(tab);
  const article = content.articles.filter(
    (article) => article.id === parseInt(tab)
  )[0];

  const next = content.articles.filter(
    (article) => article.id === parseInt(tab) + 1
  )[0];

  const previous = content.articles.filter(
    (article) => article.id === parseInt(tab) - 1
  )[0];

  return (
    <main>
      <div className="article-page mx-auto py-12 rounded-lg px-4 relative">
        <div className="container">
          <span className="page-title">{article.title}</span>
          <Image
            width={1169}
            height={623}
            src={article.image}
            alt={article.title}
            className="image"
          />
          <div className="article-content">
            <div className="info">
              <span>Written by</span>
              <span className="author">{article.written_by}</span>
              <span>{article.date}</span>
            </div>
            <div className="text">
              {article.text.map((section, index) => (
                <div className="item" key={index}>
                  {section.title && (
                    <span className="title">{section.title}</span>
                  )}
                  <p>{section.p}</p>
                </div>
              ))}
              <div className="article-routing">
               
                {previous ? (
                  <a href={"/article/" + previous.id}>
                    <div className="previous">
                    <p className="key"><img src="/images/previous.svg"/> <span>previous Article</span></p>
                      <Image
                        className="img"
                        width={300}
                        height={300}
                        src={previous.image_title}
                        alt="Next"
                      />
                      <p className="title">{previous.title}</p>
                      <p className="author">Written by <span>{previous.written_by}</span></p>
                      <p className="date">{previous.date}</p>
                    </div>
                  </a>
                ) : (
                  <a>
                    <div className="previous" />
                  </a>
                )}

                {next ? (
                  <a href={"/article/" + next.id}>
                    <div className="next">
                      <p className="key"><span>Next Article</span> <img src="/images/next.svg"/></p>
                      <img
                        className="img"
                        width={300}
                        height={300}
                        src={next.image_title}
                        alt="Next"
                      />
                      <p className="title">{next.title}</p>
                      <p className="author">Written by <span>{next.written_by}</span>
                      </p>
                      <p className="date">{next.date}</p>
                    </div>
                  </a>
                ) : (
                  <a>
                    <div className="next" />
                  </a>
                )}

              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
