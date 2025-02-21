import { Component } from "react";
import UserClass from "./UserClass";
import UserContext from "../../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //console.log("Parent Component Did Mount");
  }

  render() {
    //console.log("Parent Render");

    return (
      <div>
        <h1>About Class Component</h1>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>This is Namaste React Web Series</h2>
        <UserClass />
      </div>
    );
  }
}

export default About;
