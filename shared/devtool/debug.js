const debug = require('debug')

function setDebug(main){
  return function(sub){
    return function(descriptiton){
      return debug(main)(`[${sub}]:${description}`)
    }
  }
}
