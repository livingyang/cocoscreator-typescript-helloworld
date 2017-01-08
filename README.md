# cocoscreator-typescript-helloworld
Typescript 版的 CocosCreator 的 HelloWorld 示例。

# 环境配置
* 编辑器：vscode 1.8.1

# 第一步，使用CocosCreator创建HelloWorld项目，称之为Javascript版 HelloWorld
* 先运行下，可以看到熟悉的HelloWorld界面

# 第二步，创建Typescript项目
1. 将assets/Script拷贝到项目根目录下
2. 删去Script/HelloWorld.meta文件，并且将Script/HelloWorld.js重命名成Script/HelloWorld.ts
    > 为了方便，Script目录用于存放typescript脚本，这些ts脚本将被编译到assets/Script目录下
3. 创建tsconfig.json，内容如下：
```
{
    "compilerOptions": {
        "module": "commonjs",
        "target": "es5",
        "noImplicitAny": false,
        "sourceMap": false
    }
}
```

4. 这样我们的项目结构(相关内容)是这样的：
```
assets
    Script
        HelloWorld.js
        HelloWorld.js.meta
Script
    HelloWorld.ts
tsconfig.json
```

# 第三部，编译typescript脚本
