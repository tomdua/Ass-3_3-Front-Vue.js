<template>
  <div class="about">
    <div class="about-section">
      <h1>About Us Page</h1>
      <p>
        End project of an 'Web Software Environment' course as part of a
        bachelor's degree in information systems engineering at Ben Gurion
        University of the Negev in the Faculty of Engineering. Full stack
        project, recipes website
      </p>
      <p>
        First part of project: API - we recorded the API in jason language using
        the
        <a href="https://app.swaggerhub.com/apis-docs/almogs575/Recipes/2.0.0"
          >'Swagger'</a>
        platform.
      </p>
      <p>
        Second part of project: Server side Bakend - we using node.js and
        exprees pakeges. We performed the server design and execution. Includes
        calls to privte Data Base 'Microsft azure' and extrnal api
        <a href="https://spoonacular.com/food-api/docs">'Spoonacular API'</a>
        with asynchronous(axios) calls.
      </p>
      <p>
        Third part of project: Client side Fronted - we worked with 'Vue'
      </p>
      <p><img src="../assets/ise-bgu.jpg" alt="Ise BGU" /></p>
    </div>
    <b-row class="justify-content-md-center">
      <div class="row" style="text-align:center">
        <div class="column">
          <div class="card" style="text-align:center">
            <img src="../assets/almog.jpg" alt="Almog" style="width:100%" />
            <div class="container">
              <h2>Almog Sarafian</h2>
              <p class="title">
                Bachelor Software and Information Systems Engineering
              </p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>
                <a href="https://www.linkedin.com/in/almog-sarafian-844326187/"
                  ><i class="fa fa-linkedin" id="lkdin"></i></a
                ><a href="https://www.facebook.com/almog.sarafian"
                  ><i class="fa fa-facebook" id="facebook"></i></a
                ><a href="https://github.com/almogs575"
                  ><i id="github" class="fa fa-github"></i
                ></a>
              </p>
              <p>
                <a class="button" href="mailto:almogs575@gmail.com">Contact</a>
              </p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card" style="text-align:center;">
            <img src="../assets/tom.jpg" alt="Tom" style="width:100%" />
            <div class="container">
              <h2>Tom Duany</h2>
              <p class="title">
                Bachelor Software and Information Systems Engineering
              </p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>
                <a href="https://www.linkedin.com/in/tom-duany-1ab71b141/"
                  ><i class="fa fa-linkedin" id="lkdin"></i></a
                ><a href="https://www.facebook.com/tomduany/"
                  ><i class="fa fa-facebook" id="facebook"></i></a
                ><a href="https://github.com/tomdua"
                  ><i id="github" class="fa fa-github"></i
                ></a>
              </p>
              <p><button class="button">Contact</button></p>
            </div>
          </div>
        </div>
      </div>
    </b-row>
  </div>
</template>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}

html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

.column {
  float: left;
  width: 33.3%;
  margin-bottom: 16px;
  padding: 0 8px;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 8px;
}

.about-section {
  padding: 50px;
  text-align: center;
  background-color: #474e5d;
  color: white;
}

.container {
  padding: 0 16px;
}

.container::after,
.row::after {
  content: "";
  clear: both;
  display: table;
}

.title {
  color: grey;
}

.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
}

.button:hover {
  background-color: #555;
}

@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
}
</style>
