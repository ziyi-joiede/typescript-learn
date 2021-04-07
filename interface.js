// inteface 概念
// 调用接口定义的函数
var say = function (word) {
    return word;
};
// interface 优先于 type
var getPersonName = function (person) {
    console.log(person.name);
    person.gender = '';
};
var setPersonName = function (person, name) {
    person.name = name;
};
var person = {
    name: 'lyw',
    age: 29,
    gender: 'male',
    sex: 'male',
    say: function () {
        return this.name;
    }
};
// 不报错
getPersonName(person);
// TS 会对对象字面量进行强校验
// 此时报错
getPersonName({
    name: 'lyw',
    age: 29,
    gender: 'male',
    sex: 'male'
});
setPersonName(person, 'LYW');
// User 必须具有 Person 中必须有的属性和方法
var User = /** @class */ (function () {
    function User() {
        this.name = 'lyw';
        this.gender = 'male';
    }
    User.prototype.say = function () {
        return 'hello';
    };
    return User;
}());
