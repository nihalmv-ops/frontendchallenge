import "./Hero.css";

function Hero() {
  return (
    <header className="hero">

      <div className="container">
<img src="/images/logo.svg" alt="Clipboard Logo" />

        <h1>A history of everything you copy</h1>

        <p>
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>

        <div className="buttons">

          <button className="ios-btn">
            Download for iOS
          </button>

          <button className="mac-btn">
            Download for Mac
          </button>

        </div>

      </div>

    </header>
  );
}

export default Hero;