cc.RegisterComponent = function (constructor) {
    cc.Class({
        extends: constructor,
        properties: constructor.$properties
    });
    return constructor;
}

cc.Property = function (property) {
    return function (target, propertyName) {
        target.constructor.$properties = target.constructor.$properties || {};
        target.constructor.$properties[propertyName] = property;
    };
}