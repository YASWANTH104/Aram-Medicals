"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import Slider from "react-slick";
import "./TestimonialContainer.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/**
 * Robust reactive settings:
 * - compute slidesToShow / centerMode / centerPadding on layout (first paint)
 * - listen to resize and update
 * - force Slider re-mount via `key` when slidesToShow changes (ensures proper recalculation)
 * - call slickGoTo(0) and small reflow to help react-slick recalc widths on some browsers/devtools
 */

const baseSettings = {
  slidesToScroll: 1,
  infinite: true,
  swipeToSlide: true,
  speed: 400,
  cssEase: "ease-in-out",
  touchThreshold: 500,
  arrows: false,
};

const TestimonialContainer = ({ testimonials = [], sliderSettings = {} }) => {
  const sliderRef = useRef(null);

  const [slidesToShow, setSlidesToShow] = useState(2);
  const [centerMode, setCenterMode] = useState(true);
  const [centerPadding, setCenterPadding] = useState("40px");
  const [initialized, setInitialized] = useState(false);

  // Compute initial layout before paint to avoid "initial wrong layout" in mobile emulation
  useLayoutEffect(() => {
    const w = typeof window !== "undefined" ? window.innerWidth : 1024;
    if (w < 768) {
      setSlidesToShow(1);
      setCenterMode(false);
      setCenterPadding("0px");
    } else {
      setSlidesToShow(2);
      setCenterMode(true);
      setCenterPadding("40px");
    }
    setInitialized(true);
  }, []);

  // Listen to resize and update
  useEffect(() => {
    if (!initialized) return;
    const handler = () => {
      const w = window.innerWidth;
      if (w < 768) {
        setSlidesToShow(1);
        setCenterMode(false);
        setCenterPadding("0px");
      } else {
        setSlidesToShow(2);
        setCenterMode(true);
        setCenterPadding("40px");
      }
    };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, [initialized]);

  // When slidesToShow changes, try to nudge react-slick to recalc properly
  useEffect(() => {
    if (!sliderRef.current) return;
    try {
      // go to first slide
      sliderRef.current.slickGoTo(0, true);
      // small reflow trick to force recalculation (helps in some browsers/devtools)
      setTimeout(() => {
        const inner = sliderRef.current?.innerSlider;
        if (inner && inner.list) {
          inner.list.style.display = "none";
          // trigger reflow
          // eslint-disable-next-line no-unused-expressions
          inner.list.offsetHeight;
          inner.list.style.display = "";
        }
      }, 20);
    } catch (e) {
      // fail silently if internals differ
    }
  }, [slidesToShow]);

  const settings = {
    ...baseSettings,
    slidesToShow,
    centerMode,
    centerPadding,
    ...sliderSettings,
    // keep a responsive fallback (still overridden by our dynamic values)
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "0px",
        },
      },
    ],
  };

  // using key forces remount when slidesToShow/centerMode changes which helps react-slick
  const sliderKey = `${slidesToShow}-${centerMode}-${centerPadding}`;

  return (
    <Slider key={sliderKey} ref={sliderRef} {...settings}>
      {testimonials.map((testimonial, index) => (
        <div className="testimonial-card" key={index}>
          <div className="content-wrapper">
            <div className="testimonial-quote-container">
              <FaQuoteLeft size="3rem" className="quote-icon" />
            </div>

            <p className="testimonial-text">{testimonial.text}</p>
          </div>

          <div className="testimonial-profile">
            <div className="img-container">
              {testimonial.image ? (
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="testimonial-image"
                />
              ) : (
                <div className="testimonial-fallback">
                  {testimonial.name?.charAt(0)?.toUpperCase()}
                </div>
              )}
            </div>
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <span className="testimonial-position">{testimonial.position}</span>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default TestimonialContainer;
