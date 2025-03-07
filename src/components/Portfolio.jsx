import React from "react";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-grid">
        <div className="portfolio-item">
          <img src="/src/assets/images/portfolio1.jpg" alt="Portfolio Item 1" />
          <p>Project 1</p>
        </div>
        <div className="portfolio-item">
          <img src="/src/assets/images/portfolio2.jpg" alt="Portfolio Item 2" />
          <p>Project 2</p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
