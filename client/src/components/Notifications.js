import React, { Component } from 'react';

class Notifications extends Component {
  render() {
    return (
      <main role="main">
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-3">Notifications</h1>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="card border-dark">
                <h4 className="card-header">Email Notifications</h4>
                <div className="card-body">
                  <h4 className="card-title">Subscribed</h4>
                  <p className="card-text">
                    <form className="ml-3">
                      <div class="form-check">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" checked />
                          Some Notification 1
                        </label>
                      </div>
                      <div class="form-check">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" checked />
                          Some Notification 2
                        </label>
                      </div>
                      <div class="form-check">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" checked />
                          Some Notification 3
                        </label>
                      </div>
                    </form>
                  </p>

                  <h4 className="card-title">Unsubscribed</h4>
                  <p className="card-text">
                    <form className="ml-3">
                      <div class="form-check">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" />
                          Some Notification 4
                        </label>
                      </div>
                      <div class="form-check">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" />
                          Some Notification 5
                        </label>
                      </div>
                    </form>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="card border-dark">
                <h4 className="card-header">SMS Notifications</h4>
                <div className="card-body">
                  <h4 className="card-title">Subscribed</h4>
                  <p className="card-text">
                    <form className="ml-3">
                      <div class="form-check">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" checked />
                          Some Notification 1
                        </label>
                      </div>
                      <div class="form-check">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" checked />
                          Some Notification 3
                        </label>
                      </div>
                    </form>
                  </p>

                  <h4 className="card-title">Unsubscribed</h4>
                  <p className="card-text">
                    <form className="ml-3">
                      <div class="form-check">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" />
                          Some Notification 2
                        </label>
                      </div>
                      <div class="form-check">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" />
                          Some Notification 4
                        </label>
                      </div>
                      <div class="form-check">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" />
                          Some Notification 5
                        </label>
                      </div>
                    </form>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="card border-dark">
                <h4 className="card-header">RSS Notifications</h4>
                <div className="card-body">
                  <h4 className="card-title">Subscribed</h4>
                  <p className="card-text">
                    <form className="ml-3">
                      <div class="form-check">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" checked />
                          Some Notification 1
                        </label>
                      </div>
                    </form>
                  </p>

                  <h4 className="card-title">Unsubscribed</h4>
                  <p className="card-text">
                    <form className="ml-3">
                      <div class="form-check">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" />
                          Some Notification 2
                        </label>
                      </div>
                      <div class="form-check">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" />
                          Some Notification 3
                        </label>
                      </div>
                      <div class="form-check">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" />
                          Some Notification 4
                        </label>
                      </div>
                      <div class="form-check">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" />
                          Some Notification 5
                        </label>
                      </div>
                    </form>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Notifications;
