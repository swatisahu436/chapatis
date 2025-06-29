import React, { useEffect, useRef } from "react";

const Productview = () => {
  const carouselRef = useRef(null);
  const nextRef = useRef(null);
  const prevRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    const next = nextRef.current;
    const prev = prevRef.current;
    const items = carousel.querySelectorAll(".item");
    const countItem = items.length;

    let active = 1;
    let other_1 = null;
    let other_2 = null;

    const changeSlider = () => {
      let itemOldActive = carousel.querySelector(".item.active");
      if (itemOldActive) itemOldActive.classList.remove("active");

      let itemOldOther_1 = carousel.querySelector(".item.other_1");
      if (itemOldOther_1) itemOldOther_1.classList.remove("other_1");

      let itemOldOther_2 = carousel.querySelector(".item.other_2");
      if (itemOldOther_2) itemOldOther_2.classList.remove("other_2");

      items.forEach(e => {
        e.querySelector(".image img").style.animation = "none";
        e.querySelector(".image figcaption").style.animation = "none";
        void e.offsetWidth; // trigger reflow
        e.querySelector(".image img").style.animation = "";
        e.querySelector(".image figcaption").style.animation = "";
      });

      items[active].classList.add("active");
      items[other_1].classList.add("other_1");
      items[other_2].classList.add("other_2");

      clearInterval(autoPlay);
      autoPlay = setInterval(() => {
        next.click();
      }, 5000);
    };

    next.onclick = () => {
      carousel.classList.remove("prev");
      carousel.classList.add("next");
      active = active + 1 >= countItem ? 0 : active + 1;
      other_1 = active - 1 < 0 ? countItem - 1 : active - 1;
      other_2 = active + 1 >= countItem ? 0 : active + 1;
      changeSlider();
    };

    prev.onclick = () => {
      carousel.classList.remove("next");
      carousel.classList.add("prev");
      active = active - 1 < 0 ? countItem - 1 : active - 1;
      other_1 = active + 1 >= countItem ? 0 : active + 1;
      other_2 = other_1 + 1 >= countItem ? 0 : other_1 + 1;
      changeSlider();
    };

    let autoPlay = setInterval(() => {
      next.click();
    }, 5000);

    return () => clearInterval(autoPlay);
  }, []);

  return (
    <div className="productview-offer">
      <div id="productview-heading">
        <h2>We Offer You</h2>
      </div>
      <div>
        <section className="carousel next" ref={carouselRef}>
          <div className="list">
            <article className="item other_1">
              <div className="main-content-caru">
                <div className="content">
                  <h2>Spinach Tortilla</h2>
                  <p className="price">$200</p>
                  <p className="description">hello mera name timtim</p>
                </div>
              </div>
              <figure className="image">
                <img src="roti.jpg" alt="Spinach Tortilla" />
                <figcaption>Spinach Tortilla</figcaption>
              </figure>
            </article>

            <article className="item active">
              <div className="main-content-caru">
                <div className="content">
                  <h2>Regular Tortilla</h2>
                  <p className="price">$200</p>
                  <p className="description">hello mera name timtim</p>
                </div>
              </div>
              <figure className="image">
                <img src="breakfast-wraps-8.jpg" alt="Regular Tortilla" />
                <figcaption>Regular Tortilla</figcaption>
              </figure>
            </article>

            <article className="item other_2">
              <div className="main-content-caru">
                <div className="content">
                  <h2>Fruit Tortilla</h2>
                  <p className="price">$200</p>
                  <p className="description">hello mera name timtim</p>
                </div>
              </div>
              <figure className="image">
                <img src="download.png" alt="Fruit Tortilla" />
                <figcaption>Fruit Tortilla</figcaption>
              </figure>
            </article>

            <article className="item">
              <div className="main-content-caru">
                <div className="content">
                  <h2>Apple Tortilla</h2>
                  <p className="price">$200</p>
                  <p className="description">hello mera name timtim</p>
                </div>
              </div>
              <figure className="image">
                <img src="leafWrap.jpg" alt="Apple Tortilla" />
                <figcaption>Apple Tortilla</figcaption>
              </figure>
            </article>
          </div>

          <div className="arrows">
            <button id="prev" ref={prevRef}>&lt;</button>
            <button id="next" ref={nextRef}>&gt;</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Productview;
