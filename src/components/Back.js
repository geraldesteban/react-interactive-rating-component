export function Back({ rating }) {
  return (
    <div>
      <img
        className="thanks-image"
        src="./images/illustration-thank-you.svg"
        alt=""
      />
      <p className="rate">You selected {rating} out of 5</p>
      <h2 className="thanks">Thank you!</h2>
      <p className="thank-description">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
}
