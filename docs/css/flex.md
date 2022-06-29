# Flex 基础用法

## 一、Flex 布局是什么

Flex 是 Fiexible Box 的缩写，意为“弹性布局”，用来为盒子模型提供最大的灵活性。

任何一个容器都可以指定为 Flex 布局。

```css
.box {
  display: flex;
}
```

行内元素也可以使用 Flex 布局

```css
.box {
  display: inline-flex;
}
```

Webkit 内核的浏览器，必须加上`-webkit`前缀

```css
.box {
  display: -webkit-flex;
  display: flex;
}
```

## 二、基本概念

采用 flex 布局的元素，成为 flex 容器，简称“容器”。它的所有的子元素自动成为容器成员，称为 flex 项目，简称“项目”。
![flex容器](/img/flex_container.png "flex容器")

如上图所示

容器默认存在两个轴：

水平的主轴（main axis）

垂直的交叉轴（cross axis）

主轴的开始位置（与边框的交叉点）叫做`main start`，结束位置叫做`main end`;

交叉轴的开始位置叫做`cross start` ，结束位置叫做`cross end`。

项目默认沿主轴排列。单个项目占据的主轴空间叫做`main size`，占据的交叉轴的空间叫做`cross size`。

## 三、容器的属性

容器上有以下 6 个属性

- flex-direction
- flex-wrap
- flex-flow
- justify-content
- align-item
- align-content

### 3.1 flex-direction 属性

`flex-direction` 属性决定主轴的方向（即项目的排列方向）。

```css
.box {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

![flex-direction](/img/flex-direction.png "flex-direction")

它可能有 4 个值

- row(默认值)：主轴为水平方向，起点在左端；
- row-reverse：主轴为水平方向，起点在右端；
- column：主轴为垂直方向，起点在上沿；
- column-reverse：主轴为垂直方向，起点在下沿。

### 3.2 flex-wrap 属性

默认情况下，项目都排在一条线（又称轴线）上，`flex-wrap`属性定义，如果一条轴线排不下，如何换行。
![flex-wrap](/img/flex-wrap.png "flex-wrap")

```css
.box {
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

它可能取三个值.

- nowrap(默认值)：不换行

  ![nowrap](/img/nowrap.png "nowrap")

- wrap：换行，第一行在上方

  ![wrap](/img/wrap.png "wrap")

- wrap-reverse：换行，第一行在下方

  ![wrap-reverse](/img/wrap-reverse.png "wrap-reverse")

### 3.3 flex-flow 属性

`flex-flow`属性是`flex-direction`属性和`flex-wrap`属性的简写形式，默认值为`wrap nowrap`。

```css
.box {
  flex-flow: <flex-direction> || <flex-wrap>;
}
```
