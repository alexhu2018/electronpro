# Electron Hello World

最小 Electron 入门示例。

## 运行

```bash
cd electron-hello
npm install
npm start
```

如果 `npm install` 遇到网络错误，可以先切换到镜像源：

```bash
npm config set registry https://registry.npmmirror.com
```

## 打包

```bash
npm install
npm run dist
```

打包产物会输出到 `dist/` 目录。

## 发布

本地先打 tag：

```bash
git tag v1.0.0
git push origin v1.0.0
```

GitHub Actions 会在带 `v` 前缀的 tag 推送后自动构建，并把 `dist/` 里的产物挂到 Release 上。

如果你要手动发布，也可以先执行：

```bash
npm run release
```

## 正式发布

正式对外发布前，建议再补这三项：

- 应用图标
- macOS 代码签名
- notarization

当前仓库没有现成图标资源，所以这版先保留默认 Electron 图标，等你准备好 `icon.icns`、`icon.png` 后再接入 `build.mac.icon`、`build.win.icon` 和 `build.linux.icon`。

## 文件说明

- `main.js`: 主进程，创建窗口
- `index.html`: 渲染页面
- `renderer.js`: 渲染进程控制台输出
- `preload.js`: 预加载脚本
