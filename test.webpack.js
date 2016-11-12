var context = require.context('./shared', true, /.*\.test\.js?$/);
context.keys().forEach(context);
