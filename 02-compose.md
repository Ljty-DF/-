## compose 函数的实现

> 总结 compose 函数的实现过程

### 大致特点

- 参数均为函数，返回值也是函数
- 第一函数接受参数，其他函数接受上一函数的返回值
- 第一个函数的参数是多元的，其他函数的一元的
- 自右向左执行

### 简单实现

1. 记录我们传入函数的所有参数

```c
    var compose = (...args)=>{
        let length = args.length;
        return function f1(){

        }
    }
```

2. 利用游标记录该运行的函数

```c
    var compose = (...fns)=>{
        let len = fns.length;
        let index = len - 1; // 游标记录函数的执行情况，也作为我们运行fns中的函数的索引
        let result;
        return function f1(...arg1){
            result = fns[index].apply(this,arg1);
            -- index;
            return f1.call(null,result) //传入null或者undefined ，浏览器返回window，其他环境返回global
        }

    }
```

3. 完成代码

```c
    var compose = function (...fns) {
        var len = fns.length // 记录我们传入所有函数的个数
        var index = len - 1 // 游标记录函数执行情况, 也作为我们运行fns中的中函数的索引
        var reslut // 结果, 每次函数执行完成后, 向下传递
        return function f1(...arg1) {
            reslut = fns[index].apply(this, arg1)
            if (index <= 0) {
            index = len - 1
            return reslut
            } else {
            --index
            return f1.call(null, reslut)
            }
        }
    }

```
