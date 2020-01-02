import * as React from "react";

class Welcome extends React.Component<any, any> {
  render() {
    const { user } = this.props;
    return (
      <div className="text-center mt-4">
        <span className="text-secondary font-weight-bold pl-1">
          Welcome {user},
        </span>
        <a href="/" className="text-primary font-weight-bold pl-1">
          log out
        </a>
      </div>
    );
  }
}

export default Welcome;
