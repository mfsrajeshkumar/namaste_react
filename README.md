# Day1: React Introduction

Using plain html how we will write "Hello World" in browser
--> Emmet(It gives some template code)
--> CDN(content delievery networks) These are the website where libraries are hosted and using cdn links we are just fetching that library in our project.

Ex# Cdn link for jquery, react, sweetAlert2, leafletjs, googlemap, fontawesome
Get React into our project, as browser don't understand react code directly.
document, createElement, appendChild, getElementById .. ect these are already available in the browser.

write "cdn react"

ReactElement(Object) ==> HTML(browser understands)

Can be single child either in array of childs if an html element have more than one childeren

At the end of day ReactElement is an Object.

createElement(name_of_the_tag, attributes, childerens)

First childeren could be a normal react element
if you have given multiple childerens, then you have to pass that ReactElement using an array.


render() is replacing data when something getting render.


git branch -M main  --> To change the name of branch master to main
Setup your github ssh properly
How to setup ssh inside github on local machine


Episode2
==============================

Q. What is node, npm, npx?
Ans. Node = runtime environment, Npm = package manager, Npx = package runner

Q. browserlist
Q. Why your react app is fast and optimized?

npm install -D parcel
-D flag is used for for install dependancy as a devDependencies
bundlers(webpack, parcel, veet) --> used for optimize, minify, ignite the application

parcle version(2.8.3)
tilder(~ --> Major version (3.0.0)), carret(^ --> for minor version updates automatically (2.8.4)) sign in package.json 

Difference between package.json and package.lock.json?
package.lock.json keeps track of adject version of dependecy when that is installed on machine

node_modules --> details (Tree of dependencies)

npm --> is not stand for pacakage manager (It's just used for managing the packages) also for installing packages (npm install -D parcel)
npx --> is used for execute any package (npx parcel index.html)
========================================================
Q1. What is localhost and how this is working ?
========================================================

Q2. Why getting react in our project using cdn is not a good way?
Because it's hitting extra network call instead you can install react package using (npm install react)
npm install react
npm install react-dom or npm i react-dom (i is short form of install)


========================================================
# Parcel
Parcel is a zero configuration web application bundler which includes support for JavaScript, CSS, HTML, and assets. It requires no build configuration and provides
- Dev Build
- Local server
- Hot Module Replacement(HMR)
- File watching Algorithm - written in c++
- Caching - Faster Builds
- Image Optimization
- Minification
- Building
- Compressing
- Consistent Hashing
- Source Mapping
- Differential Bundling -- support older browsers
- Diagnostic
- Error Handling
- Https
- Tree Shaking -- remove unused code
docs --> parceljs.org
=============================================================

From package.json remove main: .....;
before creating production ready build
-------------------------------------------------
npx parcel index.html (dev build)
npx parcel build index.html (production build)
-------------------------------------------------
npm run start //  npm start
npm run build // npm build
============================================================
JSX --> HTML-like or XML-like syntax (is not html in react)


index.html
---------------------------------------------------------------
<body>
    <div id="root">
    </div>
    <script type="module" src="./App.js"></script>
    //type="module" is required 
</body>


App.js
---------------------------------------------------------------
import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
    "h1",
    { id: "heading" },
    "Namaste React!!"
)
const jsxHeading = <h1 id="heading"> Namaste React using JSX </h1>
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);

vscode-icons  --> Extension for showing icon of files and folders
--------------------------------------------------------------------


Q. What is explicit and implicit?

npx parcel index.html --> is command used for create development build 
Here npx means you're executing a npm package in this case (parcel) and you give a source file as index.html