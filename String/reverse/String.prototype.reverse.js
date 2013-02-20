String.prototype.reverse = function() {
   var o = '',
       i = this.length;
   while (i--) {
      o += this.charAt(i);
   }
   return o;
};