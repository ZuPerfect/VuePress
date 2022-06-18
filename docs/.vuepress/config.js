module.exports = {
  title: "香蕉，你个卟啦啦",
  description: "不积跬步无以至千里",
  head: [["link", { rel: "icon", href: "/logo/bnn.png" }]],
  themeConfig: {
    logo: "/logo/bnn.png",
    nav: [
      {
        text: "HTML",
        ariaLabel: "超文本标记语言",
        items: [
          { text: "❗❗HTML基础知识学习是", link: "/language/chinese/" },
          { text: "❗❗HTML编写规则和语义化写法", link: "/language/chinese/" },
          { text: "❗❗表单和验证", link: "/language/chinese/" },
          { text: "❗公约和最佳时间方法", link: "/language/chinese/" },
          { text: "SEO基础知识", link: "/language/chinese/" },
        ],
      },
      {
        text: "CSS",
        ariaLabel: "层叠样式表",
        items: [
          { text: "CSS基础知识学习", link: "/language/chinese/" },
          { text: "页面切图和布局实现", link: "/language/japanese/" },
          { text: "页面响应式布局设计", link: "/language/japanese/" },
          { text: "CSS预处理语言", link: "/language/japanese/" },
          { text: "CSS相关框架", link: "/language/japanese/" },
        ],
      },
      {
        text: "JavaScript",
        ariaLabel: "浏览器脚本语言",
        items: [
          {
            text: "JavaScript基础语法和知识",
            link: "/js/basis/JavaScript数组中的slice方法和aplice方法的区别",
          },
          { text: "使用Javascript操作DOM元素", link: "/language/japanese/" },
          { text: "Ajax异步请求相关知识学习", link: "/language/japanese/" },
          { text: "ES6以上版本的Javascript", link: "/language/japanese/" },
          { text: "Javascript语法糖", link: "/language/japanese/" },
        ],
      },
      {
        text: "框架",
        ariaLabel: "浏览器脚本语言",
        items: [
          { text: "React.js", link: "/language/chinese/" },
          { text: "Vue.js", link: "/vue/初识vue" },
          { text: "Angular", link: "/language/japanese/" },
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
          { text: "地图学知识", link: "/webgis/japanese/" },
        ],
      },
      {
        text: "网络知识",
        ariaLabel: "网络知识",
        items: [
          { text: "❗❗网络工作原理", link: "/language/chinese/" },
          { text: "❗❗什么是HTTP", link: "/language/japanese/" },
          { text: "❗❗浏览器及工作方式", link: "/language/japanese/" },
          { text: "❗DNS及其工作原理", link: "/language/japanese/" },
          { text: "❗❗域名相关知识", link: "/language/japanese/" },
          { text: "云服务相关知识", link: "/language/japanese/" },
          { text: "网络安全", link: "/language/japanese/" },
        ],
      },
      {
        text: "包管理工具",
        ariaLabel: "包管理工具",
        items: [
          { text: "npm", link: "/language/chinese/" },
          { text: "yarn", link: "/language/japanese/" },
        ],
      },
      {
        text: "构建工具",
        ariaLabel: "构建工具",
        items: [
          {
            text: "任务执行命令",
            items: [
              { text: "npm script", link: "/language/chinese/" },
              { text: "Gulp", link: "/language/chinese/" },
            ],
          },
          {
            text: "打包工具",
            items: [
              { text: "Webpack", link: "/language/chinese/" },
              { text: "Parcel(不重要)", link: "/language/chinese/" },
            ],
          },
          {
            text: "代码格式化工具",
            items: [
              { text: "Prettier", link: "/language/chinese/" },
              { text: "Eslint", link: "/language/chinese/" },
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
            items: [
              { text: "Cocos Creator", link: "/language/chinese/" },
              { text: "Three.js", link: "/language/chinese/" },
            ],
          },
          {
            text: "静态站点生成器",
            items: [
              { text: "Next.js", link: "/language/chinese/" },
              { text: "GatsbyJS", link: "/language/chinese/" },
              { text: "Nuxt.js", link: "/language/chinese/" },
              { text: "Vuepress", link: "/language/chinese/" },
              { text: "Hugo", link: "/language/chinese/" },
              { text: "Electron", link: "/language/chinese/" },
            ],
          },
          {
            text: "移动APP开发",
            items: [
              { text: "React Native", link: "/language/chinese/" },
              { text: "UniApp", link: "/language/chinese/" },
              { text: "Flutter", link: "/language/chinese/" },
              { text: "lonic", link: "/language/chinese/" },
            ],
          },
          {
            text: "桌面应用开发",
            items: [{ text: "Electron", link: "/language/chinese/" }],
          },
          { text: "服务端渲染", link: "/language/japanese/" },
          {
            text: "版本控制",
            items: [
              { text: "git", link: "/language/chinese/" },
              { text: "svn", link: "/language/chinese/" },
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
      ],
      "/interview/": [
        {
          title: "JavaScript",
          children: [
            ["js/JS基础速记", "JS基础速记"],
            ["js/关于堆栈内存的几道面试题", "关于堆栈内存的几道面试题"],
            ["js/关于闭包的几道面试题", "关于闭包的几道面试题"],
            ["js/关于对象的深浅克隆", "关于对象(数组)的深浅克隆"],
            ["js/一道面向对象的面试题-阿里", "一道面向对象的面试题-阿里"],
            [
              "js/一道关于JS微任务和宏任务的面试题-头条",
              "一道关于微任务和宏任务的面试题",
            ],
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
            [
              "css/掌握盒子水平垂直居中的五大方案",
              "掌握盒子水平垂直居中的五大方案",
            ],
            [
              "css/关于css3中盒子模型的几道面试题",
              "关于css3中盒子模型的几道面试题",
            ],
            ["css/掌握几大经典布局方案", "掌握几大经典布局方案"],
          ],
        },
        {
          title: "题库",
          children: [["题库/题库", "题库"]],
        },
      ],
      "/webgis/turf/": [
        "turf之计算两个polygon的重叠部分",
        "turf之计算polygon或linestring的自交点",
      ],
      "/webgis/cesium/": ["局部坐标系使用"],
      "/js/basis/": [
        [
          "JavaScript数组中的slice方法和aplice方法的区别",
          "JavaScript数组中的slice方法和aplice方法的区别",
        ],
        ["javascript之继承", "javascript之继承"],
        ["javascript之break", "javascript之break"],
        ["js自定义事件", "js自定义事件"],
      ],
      "/vscode/": ["setting"],
    },
    lastUpdated: "Last Updated", // string | boolean
    // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
    // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
    nextLinks: true,
    // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
    prevLinks: true,
  },
};
