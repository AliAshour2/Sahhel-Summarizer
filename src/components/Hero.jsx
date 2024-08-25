import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between  items-center w-full mb-10 pt-3">
        {/* <img src={logo} className="w-28 object-contain" alt="Sahhel Logo" /> */}
        <h2 className="orange_gradient head_text text-3xl">Sahhel</h2>

        <button
          type="button"
          className="black_btn"
          onClick={() => {
            window.open("https://github.com/AliAshour2");
          }}
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Your Text With <br className="max-md:hidden" />
        <span className="orange_gradient">Sahhel</span>
      </h1>
      <h2 className="desc">
        the quick, easy way to condense long texts into clear, concise
        summaries. Perfect for students, professionals, and readers alike, it
        saves you time by highlighting the key points
      </h2>
    </header>
  );
};

export default Hero;
