Function.prototype.before = function (beforeFn) {
    const _self = this;
    return function () {
        beforeFn.apply(this, arguments);
        return _self.apply(this, arguments);
    }
};
Function.prototype.after = function (afterFn) {
    const _self = this;
    return function () {
        const ret = _self.apply(this, arguments);
        afterFn.apply(this, arguments);
        return ret;
    }
};

// 不更改原型的形式
function before(beforeFn, fn) {
    return function () {
        beforeFn.apply(this, arguments)
        return fn.apply(this, arguments)
    }
}

function after(afterFn, fn) {
    return function () {
        var rest = fn.apply(this, arguments)
        afterFn.apply(this, arguments)
        return rest
    }
}
