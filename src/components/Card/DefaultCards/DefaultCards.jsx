import "./DefaultCards.css";
import fiveStarsImg from "../../../assets/images/illustration-five-stars.webp";
import createPostImg from "../../../assets/images/illustration-create-post.webp";
import schedulePostsImg from "../../../assets/images/illustration-schedule-posts.webp";
import consistentScheduleImg from "../../../assets/images/illustration-consistent-schedule.webp";
import multiplePlatformImg from "../../../assets/images/illustration-multiple-platforms.webp";
import aiContentImg from "../../../assets/images/illustration-ai-content.webp";
import audienceGrowthImg from "../../../assets/images/illustration-audience-growth.webp";
import growFollowersImg from "../../../assets/images/illustration-grow-followers.webp";

export function CardOne() {
  return (
    <div className="card" id="cardOne">
      <h2 className="card__title">
        Social Media <em>10x</em>
        <br />
        <i>Faster with AI</i>
      </h2>
      <img src={fiveStarsImg} alt="five-stars-ill" className="card__image" />
      <p className="card__description">Over 4,000 5-star reviews</p>
    </div>
  );
}

export function CardTwo() {
  return (
    <div className="card" id="cardTwo">
      <h2 className="card__title">
        Create and schedule content <em>quicker.</em>
      </h2>
      <img src={createPostImg} alt="create-post-ill" className="card__image" />
    </div>
  );
}

export function CardThree() {
  return (
    <div className="card" id="cardThree">
      <h2 className="card__title">Schedule to social media.</h2>
      <img
        src={schedulePostsImg}
        alt="schedule-post-ill"
        className="card__image"
      />
      <p className="card__description">
        Optimize post timings to publish content at the perfect time for your
        audience.
      </p>
    </div>
  );
}

export function CardFour() {
  return (
    <div className="card" id="cardFour">
      <h2 className="card__title">Maintain a consistent posting schedule.</h2>
      <img
        src={consistentScheduleImg}
        alt="consistent-schedule-ill"
        className="card__image"
      />
    </div>
  );
}

export function CardFive() {
  return (
    <div className="card" id="cardFive">
      <img
        src={multiplePlatformImg}
        alt="multiple-platform-ill"
        className="card__image"
      />
      <h2 className="card__title">Manage multiple accounts and platforms.</h2>
    </div>
  );
}

export function CardSix() {
  return (
    <div className="card" id="cardSix">
      <h2 className="card__title">Write your content using AI.</h2>
      <img src={aiContentImg} alt="ai-content-ill" className="card__image" />
    </div>
  );
}

export function CardSeven() {
  return (
    <div className="card" id="cardSeven">
      <h2 className="card__title">
        <span className="card__title-greater-sign">&gt;</span>56%
      </h2>
      <p className="card__description">faster audience growth</p>
      <img
        src={audienceGrowthImg}
        alt="audience-growth-ill"
        className="card__image"
      />
    </div>
  );
}

export function CardEight() {
  return (
    <div className="card" id="cardEight">
      <img
        src={growFollowersImg}
        alt="grow-followers-ill"
        className="card__image"
      />
      <h2 className="card__title">Grow followers with non-stop content.</h2>
    </div>
  );
}
