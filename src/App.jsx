import Slider from "react-slick/lib/slider";
import "./App.css";

function App() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <h2>asdasd</h2>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
          <img src="https://placehold.co/600x400" alt="" />
        </div>
        <div>
          <h3>2</h3>
          <img src="https://placehold.co/600x400" alt="" />
        </div>
        <div>
          <h3>3</h3>
          <img src="https://placehold.co/600x400" alt="" />
        </div>
        <div>
          <h3>4</h3>
          <img src="https://placehold.co/600x400" alt="" />
        </div>
        <div>
          <h3>5</h3>
          <img src="https://placehold.co/600x400" alt="" />
        </div>
        <div>
          <h3>6</h3>
          <img src="https://placehold.co/600x400" alt="" />
        </div>
      </Slider>
    </>
  );
}

export default App;
