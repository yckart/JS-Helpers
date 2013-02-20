/*!
 @name: repeat
 @desc: Repeat a character n times

 @param: {Number} n | How often to repeat the character

 @return: {String} | Some characters
**/
String.prototype.repeat = function(n) {
    n = n || 1;
    return Array(n + 1).join(this);
};