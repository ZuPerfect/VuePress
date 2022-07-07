## 如何计算两根线是否有重叠？
这里提供一个思路，将两根线分别`线段化`,即，将一根完整的线拆分成一个线段数组，然后使用暴力枚举的方式遍历这两根线的所有线段之间是否存在重叠即可。

## 如何判断两个线段之间是不是重叠
分两种情况
1. 两根线互相包含，如下图
![lineOverlap1](/img/lineOverlap1.png 'lineOverlap1')

2. 两根线分别重叠一部分，如下图
![lineOverlap2](/img/lineOverlap2.png 'lineOverlap2')

