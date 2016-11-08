# 1. Basic Express Setting



We can set up web server by using Express

```javascript

import Express from 'express'

let app = new Express()

app.get('*', (req, res)=>{

})

app.listen(3000, ()=> console.log('Running App on http://localhost:3000'))
```


In order to enable ES6 compile, we need to include and run babel-cli.

[babel](http://babeljs.io/)



[Express API](http://expressjs.com/en/4x/api.html)

