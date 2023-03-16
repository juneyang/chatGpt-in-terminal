# 与ChatGpt在命令行聊天

不会介绍如何科学上网

不会介绍如何注册账号

不会介绍如何打开终端

不会介绍如何输入文字

`node > 16` 

## NVM

### 安装nvm

推荐使用 `nvm` 管理 `node` 版本，可以通过 [最新版本](https://github.com/nvm-sh/nvm#installation) 获取 `nvm` 最新版本, 以下任意一个都可以

``` bash
# 推荐
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.38.0/install.sh | bash
```
``` bash
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.38.0/install.sh | bash
```

为了使nvm可以全局使用，把下边配置加入你的profile file(`~/.bash_profile`, `~/.zshrc`, `~/.profile`, or `~/.bashrc`).

安装成功后执行 `nvm -v` 看到版本信息就代表安装成功

安装对应的`node`版本
``` bash
# 查看已安装版本
nvm list 
# 安装16.16.0版本
nvm install v16.16.0
# 切换版本
nvm use v16.16.0
```

## 更新配置信息
修改 `index.ts` 中的配置信息，替换为你自己的 `org-id` 和 `apk-key`
``` typescript
const configuration = new Configuration({
    organization: "your-org-id-here",
    apiKey: "your-openai-api-key-here"
})
```

## 安装依赖
全局安装ts-node，以及项目依赖
``` bash
cd ChatGptInTerminal
npm install ts-node -g
npm install
# 将gpt命令添加到全局
npm link
```

## 开袋即食
```
gpt
```





