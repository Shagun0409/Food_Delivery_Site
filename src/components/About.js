import User from "./User.js";
import UserClass from "./UserClass.js";

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us Page</h1>
      <p>This is Namaste React Live Course Chapter 4</p>

      <div className="user-section">
        {/* <User name={"Shagun (Function Component)"} /> */}
        <UserClass name={"Shagun (Class Component)"} location={"Chandigarh"} />
      </div>
    </div>
  );
};

export default About;
