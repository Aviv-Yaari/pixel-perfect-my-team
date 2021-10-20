import LogoImg from '../img/logo.png';
import QuoteImg from '../img/quote.png';
import OvalIcon from '../img/oval.png';
// import OvalOutlinedIcon from '../img/oval-outlined.png';
import KadyAvatar from '../img/avatar-kady.jpg';
import AiyshaAvatar from '../img/avatar-aiysha.jpg';
import ArthurAvatar from '../img/avatar-arthur.jpg';
import FacebookIcon from '../img/social-facebook.png';
import PinterestIcon from '../img/social-pinterest.png';
import TwitterIcon from '../img/social-twitter.png';

export function HomePage() {
  return (
    <main className="home-page">
      <div className="section-wrapper section-wrapper-hero">
        <section className="home-section home-section-hero">
          <nav className="home-navbar flex align-center">
            <img className="img-logo" src={LogoImg} alt="myteam" />
            <a href="/">home</a>
            <a href="/">about</a>
            <button className="btn-rounded btn-contact">contact us</button>
          </nav>
          <div className="flex hero-text space-between">
            <h1 className="grow">
              Find the best <span>talent</span>
            </h1>
            <p>
              Finding the right people and building high performing teams can be hard. Most companies aren’t tapping
              into the abundance of global talent. We’re about to change that.
            </p>
          </div>
        </section>
      </div>
      <div className="section-wrapper section-wrapper-teams">
        <section className="home-section home-section-teams flex space-between">
          <h2>Build & manage distributed teams like no one else.</h2>
          <div className="team-list flex column">
            <article className="team-details flex align-center">
              <img src={OvalIcon} alt="oval" />
              <div>
                <h4>Experienced Individuals</h4>
                <p>Our network is made up of highly experienced professionals who are passionate about what they do.</p>
              </div>
            </article>
            <article className="team-details flex align-center">
              <img src={OvalIcon} alt="oval" />
              <div>
                <h4>Easy to Implement</h4>
                <p>Our processes have been refined over years of implementation meaning our teams always deliver.</p>
              </div>
            </article>
            <article className="team-details flex align-center">
              <img src={OvalIcon} alt="oval" />
              <div>
                <h4>Enhanced Productivity</h4>
                <p>Our customized platform with in-built analytics helps you manage your distributed teams.</p>
              </div>
            </article>
          </div>
        </section>
      </div>
      <div className="section-wrapper section-wrapper-stories flex justify-center">
        <section className="home-section home-section-stories">
          <h2>
            Delivering real results for top companies.
            <br />
            Some of our <span>success stories.</span>
          </h2>
          <div className="flex story-list">
            <article className="story">
              <img className="img-quote" src={QuoteImg} alt="quote" />
              <p className="quote">
                “The team perfectly fit the specialized skill set required. They focused on the most essential features
                helping us launch the platform eight months faster than planned.”
              </p>
              <div className="story-author">
                <p>Kady Baker</p>
                <p>Product Manager at Bookmark</p>
              </div>
              <img className="img-avatar" src={KadyAvatar} alt="Kady Baker" />
            </article>
            <article className="story">
              <img className="img-quote" src={QuoteImg} alt="quote" />
              <p className="quote">
                “We needed to automate our entire onboarding process. The team came in and built out the whole journey.
                Since going live, user retention has gone through the roof!”
              </p>
              <div className="story-author">
                <p>Aiysha Reese</p>
                <p>Founder of Manage</p>
              </div>
              <img className="img-avatar" src={AiyshaAvatar} alt="Aiysha Reese" />
            </article>
            <article className="story">
              <img className="img-quote" src={QuoteImg} alt="quote" />
              <p className="quote">
                “Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The
                launch was an instant success with 100k downloads in the first month.”
              </p>
              <div className="story-author">
                <p>Arthur Clarke</p>
                <p>Co-founder of MyPhysio</p>
              </div>
              <img className="img-avatar" src={ArthurAvatar} alt="Arthur Clarke" />
            </article>
          </div>
        </section>
      </div>
      <div className="section-wrapper section-wrapper-contact">
        <section className="home-section home-section-contact flex space-between">
          <h2>Ready to get started?</h2>
          <button className="btn-rounded btn-contact">Contact Us</button>
        </section>
      </div>
      <div className="section-wrapper section-wrapper-footer">
        <footer className="home-section home-footer flex">
          <div className="logo-and-links">
            <div className="img-logo-wrapper">
              <img className="img-logo" src={LogoImg} alt="myteam" />
            </div>
            <a href="/">home</a>
            <a href="/">about</a>
          </div>
          <div className="address">
            <p>
              987 Hillcrest Lane <br />
              Irvine, CA <br />
              California 92714 <br />
              Call Us: 949-833-7432
            </p>
          </div>
          <div className="social-icons flex column">
            <div>
              <img src={FacebookIcon} alt="facebook" />
              <img src={PinterestIcon} alt="pinterest" />
              <img src={TwitterIcon} alt="twitter" />
            </div>
            <p>Copyright 2020. All Rights Reserved</p>
          </div>
        </footer>
      </div>
    </main>
  );
}
