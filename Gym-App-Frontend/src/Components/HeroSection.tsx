import { Link } from 'react-router-dom';
import { MdArrowForward } from 'react-icons/md';

export default function Hero(){
    return(
        <header className="hero h-screen bg-[url('../assets/images/hero-image.jpg')] bg-center bg-cover text-white flex items-center z-10 animate-fadeIn">
        <div className="container mx-auto">
          <div className="hero__wrapper grid grid-cols-10 gap-0">
            <div className="hero__grid col-span-6 md:col-span-10 px-0 md:px-4">
              <h1 className="hero__text text-4xl mb-4 md:text-5xl animate-pop-in delay-200"> 
                JOIN THE BEST <span>FITNESS CLUB</span>
              </h1>
              <h3 className="animate-pop-in text-2xl m-0 md:text-3xl delay-300">
                <span>Challenge</span> Your Limits
              </h3>
              <p className="animate-pop-in text-base md:text-lg delay-400"> 
                New events every week! Challenge yourself, your mind, your family and
                friends. Get to know us in the button below
              </p>
              {/* <Link to="/dashboard/#events" className="btn primary animate-pop-in btn--animated bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4 delay-500 inline-block"> 
                Events <MdArrowForward className="ml-2" /> 
              </Link> */}
            </div>
          </div>
        </div>
      </header>
    )
}