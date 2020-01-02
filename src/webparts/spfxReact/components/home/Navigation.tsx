import * as React from "react";

class Navigation extends React.Component<any, any> {
  render() {
    const { user } = this.props;
    return (
      <nav className="site-nav family-sans navbar navbar-expand navbar-dark bg-primary higher">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            Meeting Log
          </a>
          <div className="navbar-nav ml-auto">
            {user && (
              <a className="nav-item nav-link" href="/meetings">
                meetings
              </a>
            )}
            {!user && (
              <a className="nav-item nav-link" href="/login">
                log in
              </a>
            )}
            {!user && (
              <a className="nav-item nav-link" href="/regiser">
                register
              </a>
            )}
            {user && (
              <a className="nav-item nav-link" href="/login">
                log out
              </a>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
