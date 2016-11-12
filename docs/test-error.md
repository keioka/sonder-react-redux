
# Problem

TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them 

# Solution

Add code on webpack loader. 
```
exclude: /node_modules/
```
https://github.com/chaijs/chai/issues/384
