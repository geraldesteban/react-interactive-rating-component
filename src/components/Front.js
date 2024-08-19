import { useState } from "react";
import { Back } from "./Back";

export function Front() {
  const [rating, setRating] = useState(null);
  const [show, setShow] = useState(false);

  function handleRating(e) {
    const selectedRating = parseInt(e.target.getAttribute("value"));
    setRating(selectedRating);
  }

  function handleShow() {
    if (rating !== null) {
      setShow(true);
    }
  }

  return (
    <div>
      {show ? (
        <Back rating={rating} />
      ) : (
        <>
          <img className="logo" src="./images/icon-star.svg" alt="star" />
          <h2 className="title">How did we do?</h2>
          <p className="description">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className="rating">
            <p
              className={`ratings ${rating === 1 ? "orange" : ""}`}
              value={1}
              onClick={handleRating}
            >
              1
            </p>
            <p
              className={`ratings ${rating === 2 ? "orange" : ""}`}
              value={2}
              onClick={handleRating}
            >
              2
            </p>
            <p
              className={`ratings ${rating === 3 ? "orange" : ""}`}
              value={3}
              onClick={handleRating}
            >
              3
            </p>
            <p
              className={`ratings ${rating === 4 ? "orange" : ""}`}
              value={4}
              onClick={handleRating}
            >
              4
            </p>
            <p
              className={`ratings ${rating === 5 ? "orange" : ""}`}
              value={5}
              onClick={handleRating}
            >
              5
            </p>
          </div>
          <button className="btn-submit" onClick={handleShow}>
            SUBMIT
          </button>
        </>
      )}
    </div>
  );
}
