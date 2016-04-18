# rit-ist
This is a redesign of ist.rit.edu for 340 - Client Programming.

This redesign uses `www.ist.rit.edu/api/` to get data.


# Build dependencies
1) Node
2) bower
3) gulp

# Building Project

1) `git clone https://github.com/BLamy/rit-ist.git`

2) `cd rit-ist`

3) `npm install`

4) `bower install`

5) `gulp server`

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

These features where chosen because they are supported natively in evergreen browsers.

For module loading I chose to implement require.js. I chose AMD vs es2015 modules since es6 modules are not supported in any browser natively. The goal is to only use es2015 features which are supported natively and provide a light syntactic sugar for sane, predictable transpiled code.


## Gulp support
A gulp file is provided for building the application.

- **`gulp vulcanize`** - Will flatten AMD modules from `compatibility/*` to one `dist app.js` file. For use in production
- **`gulp transpile`** - Will take code from `src/**/*.js` and transpile it into `compatibility` directory for testing in old browsers.
- **`gulp build`** - Will create a distribution build.



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
