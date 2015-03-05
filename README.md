# Athius
http://aerracenmedia.github.io/AthiusInteractiveMap/app/
---------------
##Building
After you have cloned this repository you can run `npm install` to fetch dependencies and initiate the gulpFile.
This will package all the code in /src into `app/lib/all.css` and `app/lib/build.min.js` (build.js for non- minified version).

Sass code can be placed in `src/sass` with the extension .scss Sass is backwards compatible with css so there's no need for regular css files

The gulp file packages all javascript files using browserify meaning various things:
 
- only `lib/build.min.js` needs to be loaded from index.html, unless there's a third party library that would be easier to use separately (like angular.js) then it can go in `app/lib` and avoid being packaged all together 
- javascript files are required using common js format (`require("./modulename");` looks for modulename.js in the same directory
- files are only ever required once, if you `require("./data.json");` then make a change to that object and then require it somewhere else it will return the cached object
- only .js files that are found when browserify scans through files looking for `require()` are included in the build
- many node.js built in modules are included (if required) in browserify; "buffer", "stream", "crypto" to name a few, they can be required without "./" ie require("stream"); this also means a lot of code on npmjs.com can be used in browser where it normally wouldn't work

I've structured the file system to start by loading main.js, from there it loads angular controller code from `src/angular-pages`

~Spencer

------------------------

#Destroying

Incase your on windows, npm has this nasty habit of creating extremely long file names that windows explorer can't proccess,
In the event that you can't fully delete node_modules try creating an empty folder and running `robocopy node_modules emptyfolder /purge`
