/**
 * Extent size method of Object
 *
 * @param obj
 * @return {Number}
 */
if(!Object.prototype.size) {
    Object.prototype.size = function() {
        var size = 0;
        for(var key in this) {
            if(this.hasOwnProperty(key)) size++;
        }
        return size;
    };
}