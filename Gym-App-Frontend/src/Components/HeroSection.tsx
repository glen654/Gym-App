import { Link } from 'react-router-dom';
import { MdArrowForward } from 'react-icons/md';
import heroimage from '../assets/images/hero-image.jpg'

export default function Hero(){
    return(
      <header className="hero">
      <div className="container hero__wrapper">
        <div className="hero__grid">
          <h1 className="hero__text animate-pop-in">
            JOIN THE BEST
            <span> FITNESS CLUB</span>
          </h1>
          <h3 className="animate-pop-in">
            <span>Challenge</span> your limits
          </h3>
          <p className="animate-pop-in">
            New events every week! Challenge yourself, your mind, your family and
            friends. Get to know us in the button below
          </p>
          {/* <LinkR to="/dashboard/#events"  className="btn primary animate-pop-in btn--animated">
            Events <MdArrowForward />
          </LinkR> */}
        </div>
      </div>
    </header>
  );
}