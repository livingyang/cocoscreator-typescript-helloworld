抛砖引玉，创建Typescript版的HelloWorld项目(Github示例)

## 前言
* 作为一个Cocos2d-iPhone时代的程序员。CocosCreator的出现可以说让我眼前一亮。在我看来，这是最好用的2d游戏开发引擎，而且全平台适用。
* 随着对CocosCreator的不断深入研究，目前最大的痛点就是智能提示的不友好，可以说犹如鸡肋。无论是js脚本还是coffee脚本，实际开发过程中，几乎每写一段代码都要翻阅api文档，实在太影响开发效率。
* 很早之前提过建议，采用Typescript脚本作为官方开发脚本，遭到拒绝，帖子还被锁了- -，链接在这里：http://forum.cocos.com/t/creator-typescript/37717
* 官方不采用Typescript的理由是：**没有必要，而且没有多余的资源去增加另外一种语言**，于是尝试自己去修改。
* 前几天看到了这位同学的帖子：http://forum.cocos.com/t/typescript-creator-github/42200，我靠，脑洞大开啊，因为帖子里面的实现方法有点复杂，我修改了下，变成一种非常简单的实现方式

## 实现方式
简单来说就是2步：
1. 更新 creator.d.ts
2. 增加两个文件 ts-support.js 和 ts-support.d.ts 
具体实现方法可以参考: https://github.com/livingyang/cocoscreator-typescript-helloworld

## 添加ts支持的HelloWorld文件预览：
```
@cc.RegisterComponent
class HelloWorld extends cc.Component {
    @cc.Property(cc.Label)
    label: cc.Label;

    @cc.Property('Hello, World!')
    text: string;

    fromTypescript = ' From typescript!';

    onLoad() {
        this.label.string = this.text + this.fromTypescript;
    }

    update() {
    }
}
```
> * 可以看到这种类的组织逻辑更加清晰
> * `@cc.RegisterComponent` 用于将当前类注册到cocoscreator的组件系统中
> * `@cc.Property(options)` 这个用于添加编辑器属性，options可以是类名，也可以是{default: null, type: cc.Label}这样的配置属性
> * `fromTypescript = ' From typescript!';` 这一行创建了一个类成员变量，不会在编辑器中显示

## 一些想法和疑问
* ts-support.js 和 ts-support.d.ts 这两个文件用于增加Typescript的支持，不到20行代码，且不影响原有的功能，有没有希望整合到引擎中？
* 用Typescript编译时，自带的 creator.d.ts 有很多的编译错误，将来会不会持续更新，然后修复这些Typescript的编译错误？