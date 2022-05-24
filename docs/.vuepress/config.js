
module.exports = {
    title: '三藏',
    description: 'Just palying around',
    themeConfig: {
        nav: [
            {
                text: 'HTML',
                ariaLabel: '超文本标记语言',
                items: [
                    { text: '❗❗HTML基础知识学习是', link: '/language/chinese/' },
                    { text: '❗❗HTML编写规则和语义化写法', link: '/language/chinese/' },
                    { text: '❗❗表单和验证', link: '/language/chinese/' },
                    { text: '❗公约和最佳时间方法', link: '/language/chinese/' },
                    { text: 'SEO基础知识', link: '/language/chinese/' }
                ]
            },
            {
                text: 'Internet',
                ariaLabel: '网络知识',
                items: [
                    { text: '❗❗网络工作原理', link: '/language/chinese/' },
                    { text: '❗❗什么是HTTP', link: '/language/japanese/' },
                    { text: '❗❗浏览器及工作方式', link: '/language/japanese/' },
                    { text: '❗DNS及其工作原理', link: '/language/japanese/' },
                    { text: '❗❗域名相关知识', link: '/language/japanese/' },
                    { text: '云服务相关知识', link: '/language/japanese/' },
                    { text: '网络安全', link: '/language/japanese/' },
                ]
            },
            {
                text: 'CSS',
                ariaLabel: '层叠样式表',
                items: [
                    { text: 'CSS基础知识学习', link: '/language/chinese/' },
                    { text: '页面切图和布局实现', link: '/language/japanese/' },
                    { text: '页面响应式布局设计', link: '/language/japanese/' },
                    { text: 'CSS预处理语言', link: '/language/japanese/' },
                    { text: 'CSS相关框架', link: '/language/japanese/' },
                ]
            },
            {
                text: 'JavaScript',
                ariaLabel: '浏览器脚本语言',
                items: [
                    { text: 'JavaScript基础语法和知识', link: '/language/chinese/' },
                    { text: '使用Javascript操作DOM元素', link: '/language/japanese/' },
                    { text: 'Ajaxy异步请求相关知识学习', link: '/language/japanese/' },
                    { text: 'ES6以上版本的Javascript', link: '/language/japanese/' },
                    { text: 'Javascript语法糖', link: '/language/japanese/' },
                ]
            },
            {
                text: '框架',
                ariaLabel: '浏览器脚本语言',
                items: [
                    { text: 'React.js', link: '/language/chinese/' },
                    { text: 'Vue.js', link: '/language/japanese/' },
                    { text: 'Angular', link: '/language/japanese/' }
                ]
            },
            {
                text: 'GIS',
                ariaLabel: '浏览器脚本语言',
                items: [
                    { text: '开源库', link: '/language/chinese/' },
                    { text: '地图学知识', link: '/language/japanese/' }
                ]
            },
            {
                text: '包管理工具',
                ariaLabel: '浏览器脚本语言',
                items: [
                    { text: 'JavaScript基础语法和知识', link: '/language/chinese/' },
                    { text: '使用Javascript操作DOM元素', link: '/language/japanese/' },
                    { text: 'Ajaxy异步请求相关知识学习', link: '/language/japanese/' },
                    { text: 'ES6以上版本的Javascript', link: '/language/japanese/' },
                ]
            },
            {
                text: '构建工具',
                ariaLabel: '构建工具',
                items: [
                    { text: 'JavaScript基础语法和知识', link: '/language/chinese/' },
                    { text: '使用Javascript操作DOM元素', link: '/language/japanese/' },
                    { text: 'Ajaxy异步请求相关知识学习', link: '/language/japanese/' },
                    { text: 'ES6以上版本的Javascript', link: '/language/japanese/' },
                ]
            },
            {
                text: '其他',
                ariaLabel: '浏览器脚本语言',
                items: [
                    { text: '图形化编程', link: '/language/chinese/' },
                    { text: '静态站点生成器', link: '/language/japanese/' },
                    { text: '移动APP开发', link: '/language/japanese/' },
                    { text: '桌面应用开发', link: '/language/japanese/' },
                    { text: '服务端渲染', link: '/language/japanese/' },
                    { text: '版本控制', link: '/language/japanese/' },
                ]
            }
        ],
        sidebar: 'auto',
        lastUpdated: 'Last Updated', // string | boolean
        // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
        nextLinks: true,
        // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
        prevLinks: true
    }
}