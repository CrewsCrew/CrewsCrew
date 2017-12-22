import React, { Component } from 'react';

import Footer from './Footer';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <main role="main">
          <div className="jumbotron">
            <div className="container">
              <h1 className="display-3">Welcome!</h1>
              <p>This is the future home of the Terry Crews Notification System. Stay tuned for further updates.</p>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h2>Feature 1</h2>
                <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                <p><a className="btn btn-primary" href="/" role="button">View details &raquo;</a></p>
              </div>
              <div className="col-md-4">
                <h2>Feature 2</h2>
                <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                <p><a className="btn btn-secondary" href="/" role="button">View details &raquo;</a></p>
              </div>
              <div className="col-md-4">
                <h2>Feature 3</h2>
                <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                <p><a className="btn btn-success" href="/" role="button">View details &raquo;</a></p>
              </div>
            </div>

            <hr />
          </div>
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
