import Hero from "./Hero";
// import logo from "../assets/logo.png";
import download from "../assets/download.png";
import Secure from "../assets/secure.png";
import Guarantee from "../assets/guarantee.png";
import Support from "../assets/support.png";
import Products from "./Products";
import CallingForAction from "./CallingForAction";
import Selling from "./Selling";

export default function HomePage() {
  return (
    <div className="container">
        <Hero />
        <Products />
        <section>
          <div className="quote">
            <p>Find your next summer read</p>
          </div>
        </section>
        <CallingForAction />
        <Selling />
        <div className="support">
          <div className="details">
            <img src={download} alt="download" />
            <p>Instant Download</p>
          </div>
          <div className="details">
            <img src={Secure} alt="secure" />
            <p>Secure PDF</p>
          </div>
          <div className="details">
            <img src={Guarantee} alt="guarantee" />
            <p>Satisfaction Guaranteed</p>
          </div>
          <div className="details">
            <img src={Support} alt="support" />
            <p>24/7 Support</p>
          </div>
        </div>
      </div>
  )
}
