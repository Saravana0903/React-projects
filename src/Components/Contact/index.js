import "./index.css";

const Contact = () => (
  <div className="bg-contact">
    <form className="form">
      <h1 className="card-head">Contact Me</h1>
      <div className="form-ele">
        <label htmlFor="name" className="label-head">
          NAME
        </label>
        <input
          type="text"
          id="name"
          className="text-box form-control"
          placeholder="Enter your name"
        />
      </div>

      <div className="form-ele">
        <label htmlFor="mail" className="label-head">
          EMAIL
        </label>
        <input
          type="email"
          id="mail"
          className="text-box form-control"
          placeholder="e.g. name@gmail.com"
        />
      </div>

      <div className="form-ele">
        <label htmlFor="comment" className="label-head">
          COMMENT
        </label>
        <textarea
          rows="5"
          cols="50"
          placeholder="Anything Else you want to convey!"
          className="form-control"
        ></textarea>
      </div>
      <div className="footer text-center">
        <button className="btn btn-primary">Submit</button>
        <p className="greet-para"> Thanks, for submitting.</p>
      </div>
    </form>
  </div>
);
export default Contact;
