import React from "react";
import "./form.css";

const Form = () => {
  return (
    <div className="form_1">
      <img
        className="nyork"
        src="data:image/jpeg;base64,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"
        alt="img"
      />
      <div className="form_2">
        <h5 className="let">Lets Talk</h5>
        <p className="par1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta libero
          nam aperiam excepturi ex, magni animi rerum, minima ullam distinctio
          neque officia.
        </p>
      </div>

      <div className="form_3">
        {" "}
        <h5 className="dream"> I would like to dream</h5>{" "}
        <select className="nam_1">
          <option value="Web Developer">Web Developer</option>
          <option value="Andriod Developer">Andriod Developer</option>
          <option value="Web Design">Web Design</option>
          <option value="Web Developer">Web Developer</option>
        </select>
      </div>
      <div>
        <input
          className="nam_2"
          type="Text"
          name="Name"
          placeholder="Enter Name"
        />
      </div>
      <div>
        <input
          className="nam_3"
          type="number"
          name="Number"
          placeholder="Enter Number"
        />
      </div>
      <input className="nam_4" type="submit" value="submit" />
    </div>
  );
};

export default Form;
