module.exports = {
  title: "香蕉，你个卟啦啦",
  description: "不积跬步无以至千里",
  head: [["link", { rel: "icon", href: "/logo/bnn.png" }]],
  themeConfig: {
    logo: "/logo/bnn.png",
    nav: [
      {
        text: "基础语言",
        ariaLabel: "前端基础语言",
        items: [{
          text: "HTML",
          items: [
            { text: "❗❗HTML基础知识学习", link: "/html/" },
            { text: "❗❗HTML编写规则和语义化写法", link: "/html/" },
            { text: "❗❗表单和验证", link: "/html/" },
            { text: "❗公约和最佳时间方法", link: "/html/" },
            { text: "SEO基础知识", link: "/html/" },
          ],
        }, {
          text: "CSS",
          ariaLabel: "层叠样式表",
          items: [
            { text: "CSS基础知识学习", link: "/css/chinese/" },
            { text: "页面切图和布局实现", link: "/css/" },
            { text: "页面响应式布局设计", link: "/css/" },
            { text: "CSS预处理语言", link: "/css/" },
            { text: "CSS相关框架", link: "/css/" },
            { text: "Flex", link: "/css/flex" },
          ],
        }, {
          text: "JavaScript",
          ariaLabel: "浏览器脚本语言",
          items: [
            {
              text: "JavaScript基础语法和知识",
              link: "/js/basis/JavaScript数组中的slice方法和aplice方法的区别",
            },
            { text: "使用Javascript操作DOM元素", link: "" },
            { text: "Ajax异步请求相关知识学习", link: "" },
            { text: "ES6以上版本的Javascript", link: "" },
            { text: "Javascript语法糖", link: "" },
          ],
        }, {
          text: "TypeScript",
          ariaLabel: "TypeScript",
          items: [
            { text: "入门", link: "" },
            { text: "在react中的使用", link: "/ts/ts在react中的使用" }
          ],
        }]
      },
      {
        text: "框架",
        ariaLabel: "浏览器脚本语言",
        items: [
          {
            text: "React.js",
            items: [
              {
                text: 'Foxglove面板扩展',
                link: "/react/foxglove.md"
              }
            ]
          },
          {
            text: "Vue.js",
            items: [{
              text: '初识vue',
              link: "/vue/初识vue"
            }]
          },
          {
            text: "Vue3.js",
            items: [{
              text: 'customRef',
              link: "/vue3/customRef"
            }]
          },
          {
            text: "Angular",
            items: [{
              text: 'Angular',
              link: ""
            }]
          },
        ],
      },
      {
        text: "GIS",
        ariaLabel: "浏览器脚本语言",
        items: [
          {
            text: "开源库",
            items: [
              {
                text: "turf",
                link: "/webgis/turf/turf之计算两个polygon的重叠部分",
              },
              { text: "leaflet", link: "/webgis/leaflet/" },
              { text: "cesium", link: "/webgis/cesium/局部坐标系使用" },
            ],
          },
          {
            text: "地图学知识",
            items: [
              {
                text: "参考系",
                link: "/webgis/",
              },
              { text: "几何运算", link: "/webgis/node/lineOverlap" },
            ],
          },
        ],
      },
      {
        text: "三维开发",
        ariaLabel: "三维开发",
        items: [
          {
            text: "三维引擎",
            items: [
              {
                text: "three.js",
                link: "https://github.com/ZuPerfect/ThreeJsDemo",
              },
              { text: "cesium.js", link: "/webgis/cesium/局部坐标系使用" },
            ],
          },
        ],
      },
      {
        text: "网络知识",
        ariaLabel: "网络知识",
        items: [
          { text: "❗❗网络工作原理", link: "" },
          { text: "❗❗什么是HTTP", link: "" },
          { text: "❗❗浏览器及工作方式", link: "" },
          { text: "❗DNS及其工作原理", link: "" },
          { text: "❗❗域名相关知识", link: "" },
          { text: "云服务相关知识", link: "" },
          { text: "网络安全", link: "" },
        ],
      },
      {
        text: "构建工具",
        ariaLabel: "构建工具",
        items: [
          {
            text: "任务执行命令",
            items: [
              { text: "npm script", link: "" },
              { text: "Gulp", link: "" },
            ],
          },
          {
            text: "打包工具",
            items: [
              { text: "Webpack", link: "" },
              { text: "vite", link: "" },
            ],
          },
          {
            text: "代码格式化工具",
            items: [
              { text: "Prettier", link: "" },
              { text: "Eslint", link: "" },
            ],
          },
        ],
      },
      {
        text: "其他",
        ariaLabel: "浏览器脚本语言",
        items: [
          {
            text: "图形化编程",
            items: [{ text: "Cocos Creator", link: "" }],
          },
          {
            text: "静态站点生成器",
            items: [
              { text: "Vuepress", link: "/staticSide/index.md" },
            ],
          },
          {
            text: "移动APP开发",
            items: [
              { text: "React Native", link: "" },
              { text: "UniApp", link: "" },
              { text: "Flutter", link: "" },
              { text: "lonic", link: "" },
            ],
          },
          {
            text: "桌面应用开发",
            items: [{ text: "Electron", link: "" }],
          },
          { text: "服务端渲染", link: "/language/" },
          {
            text: "包管理工具",
            ariaLabel: "包管理工具",
            items: [
              { text: "npm", link: "" },
              { text: "yarn", link: "" },
            ],
          },
          {
            text: "版本控制",
            items: [
              { text: "git", link: "/git/command" },
              { text: "svn", link: "" },
            ],
          },
        ],
      },
      { text: "面试", link: "/interview/js/JS基础速记" },
      { text: "VSCode", link: "/vscode/setting" },
    ],
    sidebar: {
      "/vue/": [
        "初识vue",
        "vue官网使用指南",
        "模板语法",
        "数据绑定",
        "el与data的两种写法",
        "MVVM模型",
        "数据代理",
        "事件处理",
        "事件修饰符",
        "vuex",
      ],
      "/vu3/": ["customRef"],
      "/css/": ["flex"],
      "/interview/": [
        {
          title: "JavaScript",
          children: [
            ["js/JS基础速记", "JS基础速记"],
            ["js/关于堆栈内存的几道面试题", "关于堆栈内存的几道面试题"],
            ["js/关于闭包的几道面试题", "关于闭包的几道面试题"],
            ["js/关于对象的深浅克隆", "关于对象(数组)的深浅克隆"],
            ["js/一道面向对象的面试题-阿里", "一道面向对象的面试题-阿里"],
            ["js/一道关于JS微任务和宏任务的面试题-头条", "一道关于微任务和宏任务的面试题"],
            ["js/关于==的一道面试题", "关于==的一道面试题"],
            ["js/vue的双向数据绑定", "vue的双向数据绑定"],
            ["js/JS原型链", "原型链"],
            ["js/关于JS中的继承", "关于JS中的继承"],
            ["js/关于JS防抖", "关于JS防抖"],
            ["js/JS函数柯里化面试题", "JS函数柯里化面试题"],
          ],
        },
        {
          title: "CSS",
          children: [
            ["css/掌握盒子水平垂直居中的五大方案", "掌握盒子水平垂直居中的五大方案"],
            ["css/关于css3中盒子模型的几道面试题", "关于css3中盒子模型的几道面试题"],
            ["css/掌握几大经典布局方案", "掌握几大经典布局方案"],
          ],
        },
        {
          title: "Vue",
          children: [["vue/面试题汇总", "面试题汇总"]],
        },
        {
          title: "题库",
          children: [["题库/题库", "题库"]],
        },
        {
          title: "算法",
          children: [["算法/算法", "算法"]],
        },
      ],
      "/webgis/turf/": ["turf之计算两个polygon的重叠部分", "turf之计算polygon或linestring的自交点"],
      "/webgis/node/": ["lineOverlap", "multiPointSplitLine"],
      "/webgis/cesium/": ["局部坐标系使用"],
      "/js/basis/": [
        ["JavaScript数组中的slice方法和aplice方法的区别", "JavaScript数组中的slice方法和aplice方法的区别"],
        ["javascript之继承", "javascript之继承"],
        ["javascript之break", "javascript之break"],
        ["js自定义事件", "js自定义事件"],
        ["js之四舍五入", "js之四舍五入"],
      ],
      "/vscode/": ["setting"],
      "/git/": ["command"],
    },
    lastUpdated: "Last Updated", // string | boolean
    // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
    nextLinks: true,
    // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
    prevLinks: true,
  },
};
