/**
 * Extent contains method of Array
 * @param {String} item | To test for
 * @return {Boolean}
 */
if(!Array.prototype.contains) {
    Array.prototype.contains = function(item) {
        return RegExp(item).test(this);
    };
}