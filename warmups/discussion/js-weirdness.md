

## What will this output and why?

```javascript
(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
```

## What will this output and why?

```javascript
var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();
```


## Will these return the same thing?

```javascript
function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}
```

## What order will you see the numbers printed?

```javascript
(function() {
    console.log(1); 
    setTimeout(function(){console.log(2)}, 1000); 
    setTimeout(function(){console.log(3)}, 0); 
    console.log(4);
})();
```

## Whod that works on the following:

```javascript
console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5
```

## What is the output of the following? How would you fix it?

```javascript
for (var i = 0; i < 5; i++) {
  setTimeout(function() { console.log(i); }, i * 1000 );
}
```

## What does this output and why:

```javascript
var hero = {
    _name: 'John Doe',
    getSecretIdentity: function (){
        return this._name;
    }
};

var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());
```


