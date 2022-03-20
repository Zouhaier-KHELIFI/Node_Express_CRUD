import React from "react";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-7">
          <div class="col">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Welcome</h1>
            <p>
              There is my react-nodejs application 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;