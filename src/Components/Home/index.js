import "./index.css";
const Home = () => {
  return (
    <div className="bg-home">
      <div className="banner">
        <div className="img-sec">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSml7B9rrdqdrwc7AzvHO3GdZAMyDzNoTdqOw&usqp=CAU"
            className="pro-img"
          />
        </div>
        <div className="des-sec">
          <h1 className="name"> SARAVANA ADIRAJU</h1>
          <hr />
          <p className="head"> Full-Stack Developer </p>
          <div className="icons-con">
            <div>
              <i class="fa fa-phone"></i> <span> +91 9381322908 </span>
            </div>

            <div>
              <i class="fa fa-envelope"></i>{" "}
              <span> saravanaadiraju@gmail.com </span>
            </div>

            <div>
              <i class="fa fa-house"></i>{" "}
              <span> Rajahmundry,AndhraPradesh,India </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
