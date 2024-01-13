# TS在React中的应用

## 类组件中对属性和状态的约定

``` tsx
interface IProps{...} // 约定属性
interface IState{...} // 约定状态
export default class App extends Component<IProps,IState>{
    // 有了以上两个约定，或者说标准，组件内部编写代码的时候就会根据接口里面定义的标准对代码进行实时的检查，包括属性名，属性类型等...
    render(){
        return 
        <>
        ...
        </>
    }
}
```

## 方法组件中对属性和状态的约定
``` tsx
interface IProps{...}
function App(props:IProps){
    return <>...</>
}
```