# cocoscreator-typescript-helloworld
Typescript 版的 CocosCreator 的 HelloWorld 示例。

# 环境配置
* 编辑器：vscode 1.8.1

# 第一步，使用CocosCreator创建HelloWorld项目，称之为Javascript版 HelloWorld
* 先运行下，可以看到熟悉的HelloWorld界面

# 第二步，创建Typescript项目
1 将asset/Script拷贝到项目根目录下，并且删去Script/HelloWorld.meta文件

2 创建tsconfig.json，内容如下：
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

3 这样我们的项目结构(相关内容)是这样的：
```
assets
    Script
        HelloWorld.js
        HelloWorld.js.meta
Script
    HelloWorld.js
tsconfig.json
```

# 