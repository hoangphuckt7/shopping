import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useEffect, useState } from "react";
import styles from "./Slide.module.css";
import { sliderItems } from "../../data";

function Slide() {
  const [slideIndex, setSlideIndex] = useState(0);
  const sliderItemsLength = sliderItems.length - 1;

  const handleLeft = () => {
    if (slideIndex !== 0) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 0) {
      setSlideIndex(sliderItemsLength);
    }
  };
  const handleRight = () => {
    if (slideIndex === sliderItemsLength) {
      setSlideIndex(0);
    } else if (slideIndex !== sliderItemsLength) {
      setSlideIndex(slideIndex + 1);
    }
  };

  //slide automatic
  useEffect(() => {
    const autoSlide = setInterval(() => {
      setSlideIndex(slideIndex === sliderItemsLength ? 0 : slideIndex + 1);
    }, 5000);

    return () => clearInterval(autoSlide);
  }, [slideIndex, sliderItemsLength]);

  return (
    <div className={styles.container}>
      <div
        className={[styles.arrow, styles.arrowLeft].join(" ")}
        onClick={handleLeft}
      >
        <ArrowLeftOutlined />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${slideIndex * -100}vw)` }}
      >
        {sliderItems.map((item) => (
          <div
            className={styles.slide}
            key={item.id}
            style={{ backgroundColor: `#${item.bg}` }}
          >
            <div className={styles.imgContainer}>
              <img src={item.img} alt="demo" />
            </div>
            <div className={styles.inforContainer}>
              <h1 className={styles.title}>{item.title}</h1>
              <div className={styles.desc}>{item.desc}</div>
              <button className={styles.btn}>SHOW NOW</button>
            </div>
          </div>
        ))}
      </div>
      <div
        className={[styles.arrow, styles.arrowRight].join(" ")}
        onClick={handleRight}
      >
        <ArrowRightOutlined />
      </div>
    </div>
  );
}

export default Slide;
