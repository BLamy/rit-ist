# rit-ist
This is a redesign of ist.rit.edu for 340 - Client Programming.

The goal of this project is to come up with a sane architecture for consuming `www.ist.rit.edu/api/`. The only requirement is the Project must use jQuery and 3 plugins.

For my plugins I have chosen to use:
- [RxJS-JQuery](https://github.com/Reactive-Extensions/rxjs-jquery) - Adds reactive bindings to jquery. Allow me to wrap jQueries HTTP request and get back an Observable rather than a promise.
- [jQuery Tables](https://datatables.net/) - Used in coop/professional tables
- [Materializecss](http://materializecss.com/icons.html) - jQuery based CSS framework for Material Design.

Aside from that I have optionally selected:
- [Require.js]() - Adds sane module loading. I chose AMD vs es2015 modules since es6 modules are not supported in any browser natively. The goal is to only use es2015 features if they are supported natively in the latest browsers, and produce transpiled code which is easily mapped to the source (only use features which are light syntactic sugar).
- [Gulp]() - Build process. Will optimize code to run IE 9+;
- [Font Awesome]() - To reuse all the same icons as the current website.

# Build dependencies
1) [Node](http://nodejs.org)

2) [bower](http://bower.io)
`sudo npm install -g bower`

3) [gulp](http://gulpjs.com)
`sudo npm install -g gulp`

# Building Project

1) `git clone https://github.com/BLamy/rit-ist.git`

2) `cd rit-ist`

3) `npm install`

4) `bower install`

5) `gulp serve`

## ES2015
The following ES2015 features will be used:

Arrow functions:
http://caniuse.com/#search=arrow%20functions

Template Literals:
https://kangax.github.io/compat-table/es6/#test-template_strings

Const Keyword:
http://caniuse.com/#search=const

Let Keyword:
http://caniuse.com/#search=let

All of these features will work in the latest browsers without any building. For support in browsers older than IE edge you can use gulp to remove the sugar and produce pure es5 code.


## Gulp support
A gulp file is provided for building the application.
- **`gulp vulcanize`** - Will flatten AMD modules from `compatibility/*` to one `dist/app.js` file. For use in production.
- **`gulp transpile`** - Will take code from `src/**/*.js` and transpile it into `compatibility` directory for testing in old browsers.
- **`gulp build`** - Will create a distribution build.


## Known Issues
- Click handlers should not be inside inside of the observers subscribe block. event streams should be merged to be more RX-like.
- Micro optimization - Employment model should be pulled in using individual request omly loading the ones that are needed immediately.


# todo
- [ ] Toolbar
- [x] hero
- [x] About
- [x] Degrees
- [x] Minors
- [ ] Employment
- [x] Map
- [ ] Gulp Serve
- [ ] People
- [ ] Research
- [ ] Resources
- [ ] News
- [ ] Footer
- [ ] Courses
