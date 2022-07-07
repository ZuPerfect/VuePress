## 多点打断线几何

![multiPointSplitLine1](/img/multiPointSplitLine1.png "multiPointSplitLine1")

如上图所示，需要将线几何 a-b-c-d-e 使用打断点 p1,p2,p3,p4 打断。形成以下线几何

- a-p1
- p1-b-p2
- p2-c-p3
- p3-d-p4
- p4-e

### 实现思路

- 首先使用断点（p1）打断线几何（a-b-c-d-e） 得到两根子线（a-p1 和 p1-b-c-d-e）
- 然后判断断点（p2）在上一步打断得到的两根子线（a-p1 和 p1-b-c-d-e）的哪一根子线上面，这里可以看到是落在了子线（p1-b-c-d-e）上
- 使用 p2 打断子线（p1-b-c-d-e）,得到两根子线（p1-b-p2 和 p2-c-d-e）
- 继续判断 p3 落在哪个子线上，以此往复...

以下是实现伪代码

```js
const _isPointOnLine = (point, line) => {
  // 实现了一个判断点是否在线上的逻辑
  // 这里可以灵活使用任何自己想用的方法，比如turf.pointToLineDistance(point,line)
};

const _lineSplit = (line, point) => {
  // 实现了一个用点打断line的逻辑
  // 这里可以灵活使用任何自己想用的方法，比如turf.lineSplit(line,point)
};

const _booleanEqual = (line1, line2) => {
  // 实现了一个判断两个几何是不是一样的逻辑
  // 这里可以灵活使用任何自己想用的方法，比如turf.booleanEqual(line1,line2)
};

const multiPointSplitLine = () => {
  // 所有断点
  const points = [p1, p2, p3, p4];
  // 待打断的线几何
  const link = [a, b, c, d, e];
  // 打断后的线几何数组（子线数组）
  const splitedLines = [link];
  // 遍历断点
  points.forEach((p) => {
    // 获取当前断点落在上面的line
    const needSplitLine = splitedLines.find((l) => _isPointOnLine(p, l));
    if (needSplitLine) {
      // 打断
      const subLines = _lineSplit(needSplitLine, p);
      // 将打断的线压入子线数组
      splitedLines.push(...subLines);
      // 删除刚才被打断的line
      const hadSplitedLineIdx = splitedLines.findIndex((l) =>
        _booleanEqual(l, needSplitLine)
      );
      splitedLines.splice(hadSplitedLineIdx, 1);
    }
  });
  return splitedLines;
};
```
