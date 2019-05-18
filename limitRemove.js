Array.prototype.limitRemove = function (index, limit = 1) {
    if (this.length <= limit) return;
    this.splice(index, 1);
}
