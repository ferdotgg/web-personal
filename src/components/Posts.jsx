import React from "react";

const Posts = () => {
  const myPosts = [
    {
      title: "Si se quiere, se puede",
      image: "/assets/images/posts/1.jpg",
      url: "https://www.fernando.gg/blog/si-se-quiere-se-puede/",
    },
    {
      title: "Mi startup, Torneos.GG",
      image: "/assets/images/posts/2.jpg",
      url: "https://www.fernando.gg/blog/torneosgg/",
    },
    {
      title: "Involúcrate, aprende y crece",
      image: "/assets/images/posts/3.jpg",
      url: "https://www.fernando.gg/blog/involucrate-aprende-crece/",
    },
  ];
  return (
    <section className="blog">
      <div className="container">
        <h1 className="section-skills-title">Blog posts</h1>
        <div className="row align-items-center">
          {myPosts.map((post) => (
            <div key={post.title} className="col-md-4 animatable fadeInUp">
              <a
                style={{ textDecoration: "none" }}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  style={{
                    backgroundImage: `url(${post.image})`,
                  }}
                  className="card-img-top card-blog-img"
                ></div>
                <div className="card-blog mb-3">
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Posts;
