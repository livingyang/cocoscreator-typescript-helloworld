# cocoscreator-typescript-helloworld
Typescript 版的 CocosCreator 的 HelloWorld 示例。

# 环境配置
* 操作系统：iMac (windows也适用)
* CocosCreator版本: 1.3.1 (1.3+ 应该都适用)
* 编辑器：vscode 1.8.1

# 第一步，使用CocosCreator创建HelloWorld项目
* 先运行下，可以看到熟悉的HelloWorld界面

# 第二步，创建Typescript项目
1. 将assets/Script拷贝到项目根目录下
2. 删去Script/HelloWorld.meta文件，并且将Script/HelloWorld.js重命名成Script/HelloWorld.ts
> 为了方便，Script目录用于存放typescript脚本，这些ts脚本将被编译到assets/Script目录下

3. 创建tsconfig.json，内容如下：
```
{
    "include": [
        "./creator.d.ts"
        "./Script",
    ],
    "compilerOptions": {
        "module": "commonjs",
        "target": "es5",
        "outDir": "assets",
        "experimentalDecorators": true
    }
}
```
> * 这个文件是Typescript项目的配置文件。
> * 简单来说，我们告诉Typescript编译器，把 include中的ts文件，全部编译成js文件，并且存放到assets目录下

4. 现在我们的项目结构(相关内容)是这样的：
```
assets
    Script
        HelloWorld.js
        HelloWorld.js.meta
Script
    HelloWorld.ts
creator.d.ts
tsconfig.json
```

# 第三步，编译typescript脚本
1. 首先创建vscode的编译配置，添加文件 .vscode/tasks.json，内容如下：
```
{
    // See https://go.microsoft.com/fwlink/?LinkId=733558
    // for the documentation about the tasks.json format
    "version": "0.1.0",
    "command": "tsc",
    "isShellCommand": true,
    "args": ["-p", "."],
    "showOutput": "silent",
    "problemMatcher": "$tsc"
}
```
> 这个文件也可以通过调用vscode命令自动生成，`View > Command Palette... > Tasks: Run Build Task`，执行这个命令会提示创建编译任务

2. 确认下当前的目录是这样的：
```
.vscode
    tasks.json
assets
    Script
        HelloWorld.js
        HelloWorld.js.meta
Script
    HelloWorld.ts
creator.d.ts
tsconfig.json
```

3. 因为cocoscreator自带的creator.d.ts有编译错误，我们需要拷贝这个项目：`https://github.com/toddlxt/Creator-TypeScript-Boilerplate` 的creator.d.ts文件
> 感谢toddlxt的辛勤劳动，在他的项目中修复了ts编译错误

4. 现在可以正式编译了，执行 `View > Command Palette... > Tasks: Run Build Task`，现在 assets/Script/HelloWorld.js文件就是通过 Script/HelloWorld.ts文件，编译生成的了

# 第四步：增加cc.Component支持
1. 通过上面的步骤，我们可以编译Typescript项目，但是目前ts代码，无法识别cocos的组件系统，接下来需要增加组件支持
> 可以观察，在onLoad函数中，this指针是拿不到任何类型提示的

2. 增加assets/Plugin/ts-support/ts-support.js，**并且在CocosCreator中，将这个文件设置成插件**，文件内容如下：
```
cc.RegisterComponent = function (constructor) {
    cc.Class({
        extends: constructor,
        properties: constructor.$properties
    });
    return constructor;
}

cc.Property = function (property) {
    return function (target, propertyName) {
        target.constructor.$properties = target.constructor.$properties || {};
        target.constructor.$properties[propertyName] = property;
    };
}
```

3. 增加assets/Plugin/ts-support/ts-support.d.ts，文件内容如下：
```
declare module cc {
    export function Property(any);
    export function RegisterComponent(any);
}
```

4. 修改tsconfig.ts，增加ts-support.d.ts的引用，文件内容如下：
```
{
    "include": [
        "./creator.d.ts",
        "./assets/Plugin/ts-support/ts-support.d.ts",
        "./Script"
    ],
    "compilerOptions": {
        "module": "commonjs",
        "target": "es5",
        "outDir": "./assets/Script",
        "experimentalDecorators": true
    }
}
```
> 上面的步骤，增加了组件系统的Typescript支持，这样我们就可以对HelloWorld.ts进行重构了

5. 重构 HelloWorld.ts 文件，文件内容如下：
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

6. 现在可以享受Typescript类型系统带来的真·智能提示了，尝试在onLoad函数中，用this指针查看提示内容
> * 每次更改ts脚本，记得编译生成js脚本
> * `@cc.RegisterComponent` 用于将当前类注册到cocoscreator的组件系统中
> * `@cc.Property(options)` 这个用于添加编辑器属性，options可以是类名，也可以是{default: null, type: cc.Label}这样的配置属性
> * `fromTypescript = ' From typescript!';` 这一行创建了一个类成员变量，不会在编辑器中显示

# 总结，需要在cocoscreator中增加 Typescript支持，你需要做的步骤仅仅是：
1. 更新 creator.d.ts
2. 增加 ts-support.js 和 ts-support.d.ts

> 其他的步骤都是学习Typescript过程中，通用的技术
