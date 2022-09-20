## toFixed() 方法

该方法可以实现一定程度的四舍五入，但是存在问题，如下所示：
![toFixed](/img/toFixed.png "toFixed")

详细解释可以参考[这里](https://www.jb51.net/article/225083.htm)

## round() 方法

该方法可以把一个数字舍入为最接近的整数

```js
Math.round(2.5); // 3
Math.round(2.4); // 2
```
## floor() 方法
返回小于等于x的最大整数
```js
Math.floor(1.6); // 1
```

## ceil() 方法
返回大于等于X的最小整数
```js
Math.ceil(1.2); // 2
```

## 四舍五入
以上方法都不能真正的实现四舍五入，不过目前可以使用一下方法实现四舍五入：
```js
var num =2.446242342;
num = Math.round((num + Number.EPSILON) * 100) / 100;  // 输出结果为 2.45
```