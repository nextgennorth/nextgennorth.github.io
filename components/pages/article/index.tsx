"use client";
import Image from "next/image";
import { useParams } from "next/navigation";

import content from "@/components/pages/article/index.json";

export default function Component() {
  const { tab } = useParams<{ tab: string }>();
  console.log(tab);
  const article=content.articles.filter((article) => article.id ===  parseInt(tab))[0];
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
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
