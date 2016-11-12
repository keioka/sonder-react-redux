# Stack
- Express
- React
- Redux
- (Ruby on Rails API) 

# Dev Stack
- Webpack

# Test
- [Karma](https://karma-runner.github.io/1.0/index.html)
Karma is a test runner that allows you to execute JavaScript code in multiple real browsers.
- [Mocha](https://mochajs.org/)
Mocha is a feature-rich JavaScript test framework running on Node.js.

- [Chai](http://chaijs.com/)
Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.

- [Enzyme](https://github.com/airbnb/enzyme)
Enzyme is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output.

# Host
EC2
Nginx

# Todo
## Set up
1. Set up Express
2. Set up redux router
3. Set up React component

## Logic
- User register
- Update Profile
- Friend request
- Message (Chat)

## API
- google map



# Purpose
I started re-writing my Rails App and implement React.js on front-end. However, it is kind of tricky and complexed especially in the case of the purpose for server side rendering. 

It is OK to use react for Single web applicationon rails. For example, create src directory and put all front end code in the directory and bundle them and place the file to rails assets pipeline.

Put simply, SPA has side effect such as 

- bad practice for SEO
Since SAP is buit by javascript, google search engine can not parse HTML tag which means critical for SEO. To keep optimize SEO, we need to write HTML tags properly and HTML tags have to be parsed.

- Slow Rendering
SAP application requires huge amount of javascript file at the beginning. It could be slow rendering problem.

### Server side rendering

- Server side rendering from Rails controller

- Server side rendering from Express and Business logic on rails

- Server side rendering from 



# Dependencies

#### React 

- [react-router]()

- [React Helmet](https://github.com/nfl/react-helmet)

- [cssnano](https://github.com/ben-eb/cssnano)

#### Redux

- [redux-async-connect]()

- [redux-thunk]()

- [react-redux]()

- [Redux Dev Tool](https://github.com/zalmoxisus/redux-devtools-extension#usage)

#### Dev

- [Webpack dashboard]()

#### Util
- [Babel]()

- [better-npm-run]()

- [eslint]()

- [compression](https://github.com/expressjs/compression)

- [serve-favicon]()

- [serialize-javascript](https://github.com/yahoo/serialize-javascript)

- [concurrently](https://github.com/kimmobrunfeldt/concurrently)


#### Debug

- [Debug](https://github.com/visionmedia/debug)

- [pretty-error](https://github.com/AriaMinaei/pretty-error)

# Learned from

- [react-redux-universal-hot-example](https://github.com/erikras/react-redux-universal-hot-example/tree/master/src)
- [react-redux-starter-kit](https://github.com/davezuko/react-redux-starter-kit)
- [react-redux-isomorphic-example](https://github.com/coodoo/react-redux-isomorphic-example)


# Reference


