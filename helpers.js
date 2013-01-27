var boolean = true,
    string = "33.3px",
    number = 33.3,
    unset;

/*!
 @name: isset
 @desc: Determines if a variable has been set/initialized
 @param:
        {Var} A variable of any type
**/
var isset = function(Var) {
    return !(typeof Var == 'undefined' || Var === null || Var === "");
};
isset(unset); // false



/*!
 @name: getUnit
 @desc: Return unit value (e.g. "px", "%", "em"...)
 @param:
        {val} Target value
 @see: https://github.com/benbarnett/jQuery-Animate-Enhanced/blob/master/scripts/src/jquery.animate-enhanced.js#L272
**/
var getUnit = function(val) {
    return val.match(/\D+$/);
};
getUnit(string); // ["px"]



/*!
 @name: getValue
 @desc: Return value wihout unit
 @param:
        {val} A string with any unit

 @see: https://github.com/benbarnett/jQuery-Animate-Enhanced/blob/master/scripts/src/jquery.animate-enhanced.js#L474
**/
var getValue = function(val) {
    return parseFloat(val);
};
getValue(string); // 33.3



/*!
 @name: each
 @desc: Return each item in array
 @param:
        {array} An array to walk through
        {fn}    Callback for each item

 @see: https://github.com/tomkp/func/blob/master/func.js#L5
**/
var each = function(array, fn) {
    for (var i = 0, len = array.length; i < len; ++i) {
        fn.call(this, array[i]);
    }
    return this;
};
each([1,2,3,4,5], function(item) {
    console.log(item); // 1, 2, 3, 4, 5
});



/*!
 @name: getUrlParams
 @desc: Returns the URL paramters
 @param:
        {string} The paramter to get (if empty an object will returned)

 @see: http://www.techtricky.com/how-to-get-url-parameters-using-javascript/
**/
var getUrlParams = function (name) {
    var params = {};
    location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (str, key, value) {
        params[key] = value;
    });

    return params[name] || params;
};

// http://domain.tld/?foo=foo&bar=bar
console.log(getUrlParams('foo')); // "foo"
console.log(getUrlParams()); // {foo: "foo", bar: "bar"}