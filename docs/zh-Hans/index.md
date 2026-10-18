---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "HyperSU"
  text: "基于 KernelSU 的内核级 ROOT 方案"
  tagline: "上游为 SukiSU，专注稳定性与 Non-GKI 兼容。"
  image:
    src: /logo.svg
    alt: HyperSU Logo
  actions:
    - theme: brand
      text: 快速上手
      link: ./guide/install
    - theme: alt
      text: GitHub
      link: https://github.com/HyperSU-Team/HyperSU
    - theme: alt
      text: 关于项目
      link: ./guide/introduce

features:
  - title: 内核级 root 管理
    details: 基于内核的 su 与 root 权限管理，控制哪些应用可以获得 root。
    icon: <i class="ri-android-fill"></i>
  - title: Non-GKI 与 GKI 1.0 支持
    details: 除 GKI 2.0 外，也支持 Non-GKI 与 GKI 1.0 内核；更旧的 4.4+ 内核可以手动编译内核使用。
    icon: <i class="ri-smartphone-fill"></i>
  - title: App Profile
    details: 为应用单独配置 root 权限与挂载规则，把 root 能力限制在需要的范围内。
    icon: <i class="ri-shield-check-fill"></i>
    link: https://kernelsu.org/guide/app-profile.html
  - title: 主题与 SUSFS 管理
    details: 管理器提供主题定制，并内置 SUSFS 配置管理工具。
    icon: <i class="ri-palette-fill"></i>
---