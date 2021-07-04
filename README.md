# tiny

# @npm_ash123/tiny
![npm (scoped)](https://img.shields.io/npm/v/@npm_ash123/tiny)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@npm_ash123/tiny)

This is the tiniest package!

# P.S: This is done with the help of the below post
https://www.freecodecamp.org/news/how-to-make-a-beautiful-tiny-npm-package-and-publish-it-2881d4307f78/


# Installation
npm install @npm_ash123/tiny

# Usage
const tiny = require("@npm_ash123/tiny");

tiny("So much space!");
//=> "Somuchspace!"

tiny(1337);
//=> Uncaught TypeError: Tiny wants a string! Pease input only string data
//    at tiny (<anonymous>:2:41)
//    at <anonymous>:1:1
