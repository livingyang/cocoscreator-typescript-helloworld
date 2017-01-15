cc.RegisterComponent = function (constructor) {
    return cc.Class({
        extends: cc.Component,
        properties: constructor.$properties,
        mixins: [constructor]
    });
};
cc.Property = function (property) {
    return function (target, propertyName) {
        target.constructor.$properties = target.constructor.$properties || {};
        target.constructor.$properties[propertyName] = property;
    };
};
