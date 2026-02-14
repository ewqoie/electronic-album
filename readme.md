# 1.部署

## 1.1 链接外网

ssrdog net


## 1.2 github

### 1.2.1 创建 github 仓库 并且获取 仓库地址
- https://github.com/ -> `create new respository` -> 填写仓库名 -> 复制地址 `https://github.com/ewqoi/electronic-album.git`

### 1.2.2 git 初始化
git 初始化
```bash
## 初始化 git 仓库
git init

## 添加远程仓库
git remote add origin https://github.com/ewqoi/electronic-album.git

## 添加到暂存区
git add .

## 提交到本地仓库
git commit -m "init"

## 推送到远程仓库 git push remote名字 代码分支的名字
git push origin master
```

### 1.2.3 配置本地 和 远程 github 的连接
- 生成ssh 密钥，https://github.com/settings/keys 粘贴进去
- ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIO9Rh/62ZgKh6jG6eu+lY64PIdYMXeWnVY/6slN8KcmZ 540630149@qq.com


## 1.3 vercel
注册 平台，导入 github仓库

默认的域名由于有墙，因此可以去 买一个 域名然后做域名解析(域名模板审核中)


## 1.4 github pages

setting->  pages -> deploy from branch -> save


