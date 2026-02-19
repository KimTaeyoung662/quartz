import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "🍇SAP Notes",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "podojem.github.io/quartz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      // quartz.config.ts 파일의 colors 섹션을 아래 내용으로 변경하세요.

      colors: {
        lightMode: {
          light: "#ffffff",      // --color-base-00
          lightgray: "#e0e0e0",  // --color-base-30 (borders)
          gray: "#bdbdbd",       // --color-base-40 (muted elements)
          darkgray: "#222222",   // --color-base-100 (body text)
          dark: "#222222",       // --color-base-100 (headings)
          secondary: "#8a5cf5",  // --accent-h: 258 (Purple accent)
          tertiary: "#8a5cf5",   // Same as secondary for consistency
          highlight: "rgba(138, 92, 245, 0.15)", // Based on secondary color
          textHighlight: "#ffd00088", // --text-highlight-bg-rgb
        },
        darkMode: {
          light: "#1e1e1e",      // --color-base-00 (Dark mode)
          lightgray: "#363636",  // --color-base-30 (Dark mode)
          gray: "#666666",       // --color-base-50 (Dark mode)
          darkgray: "#dadada",   // --color-base-100 (Dark mode)
          dark: "#dadada",       // --color-base-100 (Dark mode)
          secondary: "#a882ff",  // --color-purple (Dark mode variant)
          tertiary: "#a882ff",
          highlight: "rgba(138, 92, 245, 0.15)",
          textHighlight: "#ffd00088",
        },
      },

    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
