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
> 这个文件是Typescript项目的配置文件。
> 简单来说，我们告诉Typescript编译器，把 include中的ts文件，全部编译成js文件，并且存放到assets目录下

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

# 

