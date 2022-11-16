import React from "react";
import "./blog.css";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import { useEffect, useState } from "react";
import { carousel } from "./carousel";

const Blog = () => {
  const [mediaQuery, setMediaQuery] = useState(true);

  useEffect(() => {
    function myFunction(x) {
      if (x.matches) {
        setMediaQuery(true);
        setTimeout(() => {
          carousel();
        }, 1000);
      } else {
        setMediaQuery(false);
      }
    }

    var x = window.matchMedia("(min-width: 1150px)");
    myFunction(x);
    x.addEventListener("change", myFunction);
  }, []);

  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="carousel" data-carousel>
        {mediaQuery ? (
          <>
            <button
              className="carousel-button prev"
              data-carousel-button="prev"
            >
              &#8656;
            </button>
            <button
              className="carousel-button next"
              data-carousel-button="next"
            >
              &#8658;
            </button>
          </>
        ) : null}
        <ul data-slides>
          <li className="slide" data-left>
            <Article
              imgUrl={blog01}
              date="Sep 6, 2021"
              title="GPT-3 and Open AI is the future. Let us explore how it is?"
            />
          </li>
          <li className="slide" data-leftmiddle>
            <Article
              imgUrl={blog02}
              date="Sep 6, 2021"
              title="GPT-3 and Open AI is the future. Let us explore how it is?"
            />
          </li>
          <li className="slide" data-middle>
            <Article
              imgUrl={blog03}
              date="Sep 6, 2021"
              title="GPT-3 and Open AI is the future. Let us explore how it is?"
            />
          </li>
          <li className="slide" data-rightmiddle>
            <Article
              imgUrl={blog04}
              date="Sep 6, 2021"
              title="GPT-3 and Open AI is the future. Let us explore how it is?"
            />
          </li>
          <li className="slide" data-right>
            <Article
              imgUrl={blog05}
              date="Sep 6, 2021"
              title="GPT-3 and Open AI is the future. Let us explore how it is?"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Blog;

/*<div class="slide hi-slide">
  <div class="hi-prev"></div>
  <div class="hi-next"></div>
  <ul>
    <li>
      <Article
            imgUrl={blog05}
            date="Sep 6, 2021"
            title="GPT-3 and Open AI is the future. Let us explore how it is?"
          />
    </li>
  </ul>
</div>;*/

/*<div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imgUrl={blog01}
            date="Sep 6, 2021"
            title="GPT-3 and Open AI is the future. Let us explore how it is?"
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imgUrl={blog02}
            date="Sep 6, 2021"
            title="GPT-3 and Open AI is the future. Let us explore how it is?"
          />
          <Article
            imgUrl={blog03}
            date="Sep 6, 2021"
            title="GPT-3 and Open AI is the future. Let us explore how it is?"
          />
          <Article
            imgUrl={blog04}
            date="Sep 6, 2021"
            title="GPT-3 and Open AI is the future. Let us explore how it is?"
          />
          <Article
            imgUrl={blog05}
            date="Sep 6, 2021"
            title="GPT-3 and Open AI is the future. Let us explore how it is?"
          />
        </div>
      </div>*/
