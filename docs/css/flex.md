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

### 3.4 justify-content 属性

`justify-content`属性定义了项目在主轴上的对齐方式

```css
.box {
  justify-content: flex-start | flex-end | center | space-between | space-around;
}
```

![justify-content](/img/justify-content.png "justify-content")

它可能取 5 个值，具体对齐方式与轴的方向有关。下面假设主轴为从左向右。

- flex-start(默认值)：左对齐
- flex-end：右对齐
- center：居中
- space-between：两端对齐，项目之间的间隔都相等
- space-around：每个项目两侧的间隔相等，所以，项目之间的间隔比项目与边框的间隔大一些

### 3.5 align-items 属性

`align-items`属性定义项目在交叉轴上如何对齐

```css
.box {
  align-items: flex-start | flex-end | center | baseline | stretch;
}
```

![align-items](/img/align-items.png "align-items")

他可能取 5 个值。具体的对齐方式与交叉轴有关，下面假设交叉轴从上到下。

- flex-start：交叉轴的起点对齐
- flex-end：交叉轴的终点对齐
- center：交叉轴的中点对齐
- baseline：项目的第一行文字的基线对齐
- stretch(默认值)：如果项目未设置高度或者设为 auto，将占满整个容器的高度

### 3.6 align-content 属性

`align-content`属性定义了多根轴线的对齐方式，如果项目只有一根轴线，该属性不起作用

```css
.box {
  align-content: flex-start | flex-end | center | space-between | space-around |
    stretch;
}
```

![align-content](/img/align-content.png "align-content")

该属性可能取 6 个值

- flex-start：与交叉轴的起点对齐
- flex-end：与交叉轴的终点对齐
- center：与交叉轴的中点对齐
- space-between：与交叉轴的两端对齐
- space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一些
- stretch(默认值)：轴线占满整个交叉轴

## 四、项目的属性

项目上有以下 6 个属性

- order
- flex-grow
- flex-shrink
- flex-basis
- flex
- align-self

### order 属性

`order` 属性定义项目的排列顺序，数值越小，排列越靠前，默认为 0

```css
.item {
  order: <integer>;
}
```

![order](/img/order.png "order")

### 4.2 flex-grow 属性

`flex-grow`属性定义项目的放大比例，默认为 0，即如果存在剩余空间，也不放大

```css
.item {
  flex-grow: <number>;
}
```

![flex-grow](/img/flex-grow.png "flex-grow")
如果所有项目的`flex-grow`属性都为 1，则它们将等分剩余空间（如果有的话）。如果一个项目的`flex-grow`属性为 2，其他项目都为 1，则前者占据的剩余空间将比其他项多一倍，如上图所示。

### 4.3 flex-shrink 属性

`flex-shrink` 属性定义了项目的缩小比例，默认为 1，即如果空间不足，该项目将缩小。

```js
.item{
  flex-shrink:<number>
}
```

![flex-shrink](/img/flex-shrink.png "flex-shrink")

如果所有项目的`flex-shrink`属性都为 1，当空间不足时，都将等比例缩小。如果一个项目的`flex-shrink`属性为 0，其他项目都为 1，则空间不足时，前者不缩小。

负值对改属性无效

### 4.4 flex-basis 属性

`flex-basis`属性定义了在分配多余空间之前，项目占据的主轴空间。浏览器根据这个属性，计算主轴是否有多余空间，它的默认值为`auto`，即项目的本来大小。

```css
.item {
  flex-basis: <length> | auto;
}
```

它可以设为根`width`或`height`属性一样的值（比如 350px），则项目将占据固定空间。

### 4.5 flex 属性

`flex`属性是`flex-grow`,`flex-shrink`和`flex-basis`的简写，默认值为` 0 1 auto`、后两个属性可选。

```css
.item {
  flex: none | [< "flex-grow" > < "flex-shrink" >?||< "flex-basis" >];
}
```

该属性有两个快捷值：`auto(1 1 auto)`和`none(0 0 auto)`。
建议优先使用这两个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。

### 4.6 align-self 属性

`align-self`属性允许单个项目有与其他项目不同的对齐方式，可覆盖`align-items`属性。默认值为`auto`,表示继承父元素的`align-items`属性，如果没有父元素，则等同于`stretch`

```css
.items {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```
![align-self](/img/align-self.png "align-self")
