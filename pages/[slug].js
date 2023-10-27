import React from "react";
import fs from "fs";
import { marked } from "marked";
import matter from "gray-matter";


const SlugPage = ({ htmlString, data }) => {
  // Render the data for the slug page
  return (
    <>
        <section className="hero text-light p-5 p-lg-3 pt-lg-5 text-center default">
            <div className="container">
                <h1 className="display-5 fw-bold text-body-emphasis text.center">{data.title}</h1>
                <p className="lead mb-4">{data.description}</p>
            </div>
        </section>
        <section className="p-5">
            <div className="container">
                <div dangerouslySetInnerHTML={{ __html: htmlString }}></div>
            </div>
        </section>
    </>

  );
};

export const getStaticPaths = async () => {
    const files = fs.readdirSync("posts");
    const paths = files.map(filename => ({
      params: {
        slug: filename.replace(".md", "")
      }
    }));  
    return {
      paths,
      fallback: false
    };
  };
  
  export const getStaticProps = async ({ params: { slug } }) => {
    const path = require('path');

    const markdownWithMetadata = fs
      .readFileSync(path.join("posts", slug + ".md"))
      .toString();
  
    const parsedMarkdown = matter(markdownWithMetadata);
  
    const htmlString = marked(parsedMarkdown.content);
  
    return {
      props: {
        htmlString,
        data: parsedMarkdown.data
      }
    };
  };

export default SlugPage;