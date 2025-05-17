if (typeof BigInt !== 'undefined' && !BigInt.prototype.toJSON) {
    console.log("🚀 ~ BigInt.prototype.toJSON:", BigInt.prototype.toJSON)
    BigInt.prototype.toJSON = function () {
        return this.toString();
    };
}
