import * as React from "react";
import Navigation from "./Navigation";
import Welcome from "./Welcome";

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      user: "Narender",
      email: "narender.singh5@vodafone.com"
    };
  }

  render() {
    return (
      <div>
        {this.state.user}
        <br />
        {this.state.email}
        <Welcome user={this.state.user} />
        <Navigation user={this.state.user} />
      </div>
    );
  }
}

export default App;
