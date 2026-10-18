import { defineConfig } from "vitepress";

import llmstxt from "vitepress-plugin-llms";
import { copyOrDownloadAsMarkdownButtons } from "vitepress-plugin-llms";
import {
  GitChangelog,
  GitChangelogMarkdownSection,
} from "@nolebase/vitepress-plugin-git-changelog/vite";
import { BiDirectionalLinks } from "@nolebase/markdown-it-bi-directional-links";
import { InlineLinkPreviewElementTransform } from "@nolebase/vitepress-plugin-inline-link-preview/markdown-it";
import mdAutoSpacing from "markdown-it-autospace";
import locale from "./locale/index.mjs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "HyperSU",
  description: "A kernel-level ROOT solution for Android built on KernelSU, focused on stability and Non-GKI compatibility.",

  sitemap: {
    hostname: "https://HyperSU.org",
  },

  locales: locale.locales,

  head: [
    ["link", { rel: "icon", href: "/favicon.svg" }],
    ["link", { rel: "canonical", href: "https://HyperSU.org/" }],
    ["link", { rel: "alternate", hreflang: "en", href: "https://HyperSU.org/" }],
    ["link", { rel: "alternate", hreflang: "zh-CN", href: "https://HyperSU.org/zh-Hans/" }],
    ["link", { rel: "alternate", hreflang: "x-default", href: "https://HyperSU.org/" }],
    ["link", { rel: "preconnect", href: "https://cdn.jsdelivr.net/" }],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/jetbrains-mono-webfont@latest/jetbrains-mono.css",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/misans-vf-4web@latest/dist/result.css",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/remixicon@latest/fonts/remixicon.css",
      },
    ],
    [
      "meta",
      {
        name: "google-site-verification",
        content: "PFExExHEiCGSrImS-yWoSnddXHrVHFmejD_kcS1g6AY",
      },
    ],

    ["meta", { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" }],
    [
      "meta",
      {
        name: "description",
        content: "A kernel-level ROOT solution for Android built on KernelSU, focused on stability and Non-GKI compatibility.",
      },
    ],
    ["meta", { name: "theme-color", content: "#ec4899", media: "(prefers-color-scheme: light)" }],
    ["meta", { name: "theme-color", content: "#f472b6", media: "(prefers-color-scheme: dark)" }],
    ["meta", { name: "color-scheme", content: "light dark" }],

    [
      "meta",
      {
        name: "keywords",
        content: "HyperSU, SukiSU, KernelSU, Android, ROOT, Custom Kernel, GKI, Non-GKI, Android Root, KernelSU Modules",
      },
    ],
    ["meta", { name: "author", content: "HyperSU Development" }],
    ["meta", { name: "application-name", content: "HyperSU" }],
    ["meta", { name: "apple-mobile-web-app-title", content: "HyperSU" }],
    ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "default" }],

    ["meta", { property: "og:title", content: "HyperSU — Kernel-level ROOT for Android" }],
    [
      "meta",
      {
        property: "og:description",
        content: "A kernel-level ROOT solution for Android built on KernelSU, focused on stability and Non-GKI compatibility.",
      },
    ],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:site_name", content: "HyperSU" }],
    ["meta", { property: "og:url", content: "https://HyperSU.org/" }],
    ["meta", { property: "og:image", content: "https://HyperSU.org/logo.svg" }],
    ["meta", { property: "og:image:alt", content: "HyperSU Logo" }],
    ["meta", { property: "og:image:width", content: "512" }],
    ["meta", { property: "og:image:height", content: "512" }],
    ["meta", { property: "og:locale", content: "en_US" }],
    ["meta", { property: "og:locale:alternate", content: "zh_CN" }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:title", content: "HyperSU — Kernel-level ROOT for Android" }],
    [
      "meta",
      {
        name: "twitter:description",
        content: "A kernel-level ROOT solution for Android built on KernelSU, focused on stability and Non-GKI compatibility.",
      },
    ],
    ["meta", { name: "twitter:image", content: "https://HyperSU.org/logo.svg" }],
    ["meta", { name: "twitter:image:alt", content: "HyperSU Logo" }],
    [
      "script",
      { type: "application/ld+json" },
      JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            name: "HyperSU",
            url: "https://HyperSU.org/",
            logo: "https://HyperSU.org/logo.svg",
            sameAs: ["https://github.com/HyperSU-Team"],
          },
          {
            "@type": "WebSite",
            name: "HyperSU",
            url: "https://HyperSU.org/",
            inLanguage: ["en", "zh-CN"],
          },
        ],
      }),
    ],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/favicon.svg",
    search: {
      provider: "local",
      options: {
        miniSearch: {
          options: {
            tokenize: (text) => Array.from(
              new Intl.Segmenter("zh-CN", { granularity: "word" }).segment(text),
            ).filter((part) => part.isWordLike).map((part) => part.segment),
          },
        },
        locales: {
          "zh-Hans": {
            translations: {
              button: { buttonText: "搜索", buttonAriaLabel: "搜索文档" },
              modal: {
                displayDetails: "显示详细列表",
                resetButtonTitle: "清除搜索",
                backButtonTitle: "关闭搜索",
                noResultsText: "没有找到结果",
                footer: {
                  selectText: "选择",
                  selectKeyAriaLabel: "回车键",
                  navigateText: "切换",
                  navigateUpKeyAriaLabel: "上箭头",
                  navigateDownKeyAriaLabel: "下箭头",
                  closeText: "关闭",
                  closeKeyAriaLabel: "Esc",
                },
              },
            },
          },
        },
      },
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/HyperSU-Team" },
    ],
    footer: {
      message: "Documented with ❤️ by HyperSU Development",
      copyright: "Copyright © 2025-2026 HyperSU, under MIT License",
    },

    outline: {
      level: [2, 4],
    },
    externalLinkIcon: true,
  },

  markdown: {
    config: (md) => {
      md.use(BiDirectionalLinks());
      md.use(copyOrDownloadAsMarkdownButtons);
      md.use(InlineLinkPreviewElementTransform);
      md.use(mdAutoSpacing, {
        pangu: true,
        mojikumi: true,
        spacingItems: ["code_inline"],
      });
    },
  },

  vite: {
    plugins: [
      llmstxt(),
      GitChangelog({
        repoURL: () => "https://github.com/HyperSU-Team/HyperSU-Website",
      }),
      GitChangelogMarkdownSection({
        exclude: (id) => id.endsWith("index.md") || id.endsWith("sponsors.md"),
        sections: {
          disableContributors: true,
        },
      }),
    ],
    worker: {
      format: "es",
    },
    optimizeDeps: {
      exclude: [
        "@nolebase/vitepress-plugin-enhanced-readabilities/client",
        "@nolebase/vitepress-plugin-inline-link-preview/client",
        "vitepress",
        "@nolebase/ui",
      ],
    },
    ssr: {
      noExternal: [
        "@nolebase/vitepress-plugin-enhanced-readabilities",
        "@nolebase/vitepress-plugin-highlight-targeted-heading",
        "@nolebase/vitepress-plugin-inline-link-preview",
        "@nolebase/ui",
      ],
    },
  },
});
