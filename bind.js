/*
 * @Author: your name
 * @Date: 2020-05-20 11:24:57
 * @LastEditTime: 2020-05-20 14:22:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /axzo-oms/Users/fgl/functional/bind.js
 */

console.log("保存自动添加注释1");

Function.prototype.call2 = (context = window, ...args) => {
  console.log(this);
  context.fn = this;
  context.fn(...args);
};

let obj = { a: 1, b: 2 };

/**
 * @description:
 * @param {type}
 * @return:
 */
function bar(name, age) {
  return {
    a: this.a,
    b: this.b,
    age,
    name,
  };
}

let res = bar.call2(obj, "fgl", 24);

console.log(res);
