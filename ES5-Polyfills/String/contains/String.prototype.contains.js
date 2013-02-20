/**
 * Extent contains method of String
 * @param {String} item | To test for
 * @return {Boolean}
 */
if(!String.prototype.contains) {
    String.prototype.contains = function(item) {
        return RegExp(item).test(this);
    };
}