import { useState } from "react";
import styles from "./Rating.module.css";

const ratingList = [
  "https://fonts.gstatic.com/s/e/notoemoji/latest/1f621/512.webp",
  "https://fonts.gstatic.com/s/e/notoemoji/latest/1f610/512.webp",
  "https://fonts.gstatic.com/s/e/notoemoji/latest/1f642/512.webp",
  "https://fonts.gstatic.com/s/e/notoemoji/latest/1f929/512.webp",
];

function Rating({title}) {
  const [ratingValue, setRatingValue] = useState(0);

  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <img
        className={styles.image}
        src={ratingList[ratingValue]}
        alt="Рейтинг"
      />
      <div className={styles.buttons}>
        <button onClick={() => setRatingValue(0)}>Плохо</button>
        <button onClick={() => setRatingValue(1)}>Приемлемо</button>
        <button onClick={() => setRatingValue(2)}>Хорошо</button>
        <button onClick={() => setRatingValue(3)}>Отлично</button>
      </div>
    </div>
  );
}
export default Rating;
