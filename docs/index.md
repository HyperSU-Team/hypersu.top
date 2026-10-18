---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "HyperSU"
  text: "Kernel-level ROOT for Android, built on KernelSU"
  tagline: "Upstream is SukiSU, focused on stability and Non-GKI compatibility."
  image:
    src: /logo.svg
    alt: HyperSU Logo
  actions:
    - theme: brand
      text: Get Started
      link: /guide/install
    - theme: alt
      text: GitHub
      link: https://github.com/HyperSU-Team/HyperSU
    - theme: alt
      text: About
      link: /guide/introduce

features:
  - title: Kernel-level root management
    details: Kernel-based `su` and root access management, so you decide which apps get root.
    icon: <i class="ri-android-fill"></i>
  - title: Non-GKI and GKI 1.0 support
    details: Beyond GKI 2.0, Non-GKI and GKI 1.0 kernels are supported; older 4.4+ kernels work with a manually built kernel.
    icon: <i class="ri-smartphone-fill"></i>
  - title: App Profile
    details: Per-app root permissions and mount rules, keeping root power scoped to what an app needs.
    icon: <i class="ri-shield-check-fill"></i>
    link: https://kernelsu.org/guide/app-profile.html
  - title: Theme and SUSFS management
    details: The manager offers theme customization and a built-in SUSFS configuration tool.
    icon: <i class="ri-palette-fill"></i>
---