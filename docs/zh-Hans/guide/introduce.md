# 关于 HyperSU

## 什么是 HyperSU? {#what-is-hypersu}

HyperSU 是一个基于 KernelSU 的内核级 ROOT 方案，上游为 SukiSU，专注于稳定性与 Non-GKI 设备的兼容性。

## 特性 {#features}

- 内核级 `su` 与 root 权限管理
- App Profile：为应用单独配置 root 权限与挂载规则
- 支持 Non-GKI 与 GKI 1.0 内核；4.4+ 的旧内核可手动编译内核使用
- 管理器提供主题定制，并内置 SUSFS 配置管理工具

## 支持架构 {#architectures}

目前支持 `arm64-v8a`、`armeabi-v7a` 与部分 `x86_64`。

## 链接 {#links}

- [GitHub](https://github.com/HyperSU-Team/HyperSU)
- [Releases](https://github.com/HyperSU-Team/HyperSU/releases)