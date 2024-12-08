// import "./style.css"
// import hljs from "highlight.js";
// import hljs from "highlight.js/lib/core";
// import javascript from "highlight.js/lib/languages/javascript";
export const home = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>PlaceHolder - Free Fake API</title>
    <style>
       @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

:root {
  --color-primary: #3B82F6;
  --color-secondary: #000;
  --color-text: #374151;
  --color-light-gray: #FFFFFF;
  --color-dark-gray: #707070;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* max-width: 1280px;
  margin: 0 auto; */
}

body {
  font-family: "Poppins", sans-serif;
  background-color: var(--color-light-gray);
  width: 100%;

}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-thumb {
  background: var(--color-text);
}

.body {
  max-width: 960px;
  margin: 0 auto;
  padding: 14px;
}

header {
  background-color: var(--color-primary);
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
}

header a {
  color: var(--color-light-gray);
  font-size: 18px;
}

header nav {
  background-color: var(--color-light-gray);
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 15px 0;
  color: var(--color-text);
}

.nav-list {
  display: flex;
  justify-content: flex-end;
  gap: 20px;
}

.nav-link a {
  text-decoration: none;
  color: var(--color-text);
  font-weight: 400;
}

#logo h1 {
  font-size: 24px;
  color: var(--color-text);
}

section {
  background-color: var(--color-light-gray);
  padding: 40px 0;
  color: var(--color-text);
  line-height: 1.6;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

section h1 {
  font-size: 56px;
  font-weight: 500;
  margin-bottom: 20px;
}

section:nth-child(1) p {
  margin-bottom: 30px;
  line-height: 1.6;
  font-size: 24px;
  max-width: 700px;
}

section a {
  color: var(--color-secondary);
  text-decoration: underline;
  font-weight: 400;
  cursor: pointer;
}

section span {
  color: var(--color-text);
  font-weight: 700;
}

section h2 {
  font-size: 36px;
  font-weight: 500;
  /* margin-bottom: 20px; */
  color: var(--color-secondary);
}

section p {
  font-size: 15px;
  color: var(--color-text);
  max-width: 100%;
  line-height: 1.7;
  font-weight: 400;
}

section img {
  max-width: 500px;
  width: 100%;
  margin-bottom: 20px;
  height: auto;
  object-fit: cover;
  border-radius: 5px;
  display: block;
  margin-top: 20px;
}

section .api-link {
  display: flex;
  align-items: center;
  gap: 70px;
}
section .api-link div {
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  gap: 10px;
}
section:nth-child(7) span a {
  color: var(--color-text);
  font-weight: 700;
}
section pre {
    max-width: 500px;
    width:100%;
    height: 125px;
    padding: 10px;
    background-color: var(--color-text);
    border: 1px solid black;
    border-radius: 6px;
    color: var(--color-light-gray);
   
  }
    </style>
</head>
<body>
    <header>
        <a href="#">
            Check my new project 💧 MistCSS write React components with 50% less code
        </a>
    </header>
    <div class="body">
        <header>
            <nav>
                <div id="logo">
                    <h1>PlaceHolder</h1>
                </div>
                <div class="nav-list">
                    <div class="nav-link"><a href="#">Guide</a></div>
                    <div class="nav-link"><a href="#">Sponsor this project</a></div>
                    <div class="nav-link"><a href="#">Blog</a></div>
                    <div class="nav-link"><a href="#">My Placeholder Server</a></div>
                </div>
            </nav>
        </header>
        <main>
            <!-- section 1 -->
            <section>
                <h1>{Raza} Placeholder</h1>
                <p>
                    Free fake and reliable API for testing and prototyping.
                    Powered by <a href="#">My Server</a> + <a href="#">LowDB</a>.
                </p>
                <span>Serving ~3 billion requests each month.</span>
            </section>
            <!-- section 2 -->
            <section>
                <h2>Sponsors</h2>
                <p>
                    JSONPlaceholder is supported by the following companies and <a href="#">Sponsors </a> on GitHub,
                    check them out 💖
                </p>
                <img src="../asset/img/image1.svg" alt="">
                <img src="../asset/img/image2.png" alt="">
            </section>
            <!-- section 3a -->
            <section>
                <h2>Try it</h2>
                <p>
                    Run this code here, in a console or from any site:
                </p>
                <pre><code>
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
      </code></pre>
            </section>
            <!-- section 3b -->
            <section>
                <h2>When to use</h2>
                <p>
                    JSONPlaceholder is a free online REST API that you can use whenever you need some fake data. It can
                    be in a README on GitHub, for a demo on CodeSandbox, in code examples on Stack Overflow, ...or
                    simply to test things locally.
                </p>
            </section>
            <!-- section 4 -->
            <section>
                <h2>Resources</h2>
                <p>
                    JSONPlaceholder comes with a set of 6 common resources:
                </p>
                <div class="api-link">
                    <div>
                        <p><a href="/posts">/posts</a></p>
                        <p><a href="/comments">/comments</a></p>
                        <p><a href="/albums">/albums</a></p>
                        <p><a href="/photos">/photos</a></p>
                        <p><a href="/users">/users</a></p>
                    </div>
                    <div>
                        <p>
                            100 posts
                        </p>
                        <p>
                            10 users
                        </p>
                        <p>
                            500 comments
                        </p>
                        <p>
                            100 albums
                        </p>
                        <p>
                            5000 photos
                        </p>
                    </div>
                </div>
                <p>
                    <strong>Note</strong>: resources have relations. For example: posts have many comments, albums have
                    many photos, ... see <a href="#">guide</a> for the full list.
                </p>
            </section>
            <!-- section 5 -->
            <section>
                <h2>Routes</h2>
                <p>
                    All HTTP methods are supported. You can use http or https for your requests.
                </p>
                <div class="api-link">
                    <div>
                        <p>
                            GET
                        </p>
                        <p>
                            GET
                        </p>
                        <p>
                            GET
                        </p>
                        <p>
                            GET
                        </p>
                        <p>
                            POST
                        </p>
                        <p>
                            PUT
                        </p>
                        <p>
                            PATCH
                        </p>
                        <p>
                            DELETE
                        </p>
                    </div>
                    <div>
                        <p><a href="#">/posts</a></p>
                        <p><a href="#">/posts/1</a></p>
                        <p><a href="#">/posts/1/comments</a></p>
                        <p><a href="#">/comments?postId=1</a></p>
                        <p><a href="#">/posts</a></p>
                        <p><a href="#">/posts/1</a></p>
                        <p><a href="#">/posts/1</a></p>
                        <p><a href="#">/posts/1</a></p>
                    </div>
                </div>
                <p>
                    <strong>Note</strong>: see <a href="#">guide</a> for usage examples.
                </p>
            </section>
            <!-- section 6 -->
            <section>
                <h2>Use your own data</h2>
                <p>
                    With our sponsor <a href="#">Mockend</a> and a simple GitHub repo, you can have your own fake online
                    REST server in seconds.
                </p>
            </section>
            <!-- section 7 -->
            <section>
                <span>
                    <a href="https://github.com/Raza-Ur-Rehman/Craete-API">You can sponsor this project (and others) on GitHub</a>
                </span>
                <p>
                    Coded and maintained with ❤️ by <a href="https://github.com/Raza-Ur-Rehman">Raza-ur-Rehman</a> © 2024
                </p>
            </section>

        </main>
    </div>
</body>

</html>`;
