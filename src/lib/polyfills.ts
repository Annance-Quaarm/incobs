if (typeof BigInt !== 'undefined' && !BigInt.prototype.toJSON) {
    BigInt.prototype.toJSON = function () {
        return this.toString();
    };
}
