Function.prototype.getName = function(func) {
    if(Function.name || Function.prototype.name) return func.name;
    return func.toString().match(/^function\s+(\w+)\s*\(/)[1];
};