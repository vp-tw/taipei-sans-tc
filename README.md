# 台北黑體 Taipei Sans TC

> 讓每一個字，有自己的現場。

Taipei Sans TC 的非官方 webfont package 與試寫頁。套件將字型拆分為
`unicode-range` WOFF2 subsets，讓網站只下載實際使用的字元。

**Unofficial:** 字型設計、名稱、授權與原始檔案均以
[翰字鑄造 JT Foundry](https://sites.google.com/view/jtfoundry/zh-tw) 的官方資訊為準；
本 repository 只負責 webfont 封裝、文件與示範網站。

## 使用方式

### npm / pnpm

```sh
pnpm add @vp-tw/taipei-sans-tc
```

```ts
import '@vp-tw/taipei-sans-tc/dist/Regular/TaipeiSansTCBeta-Regular.css';
```

依需求選擇字重：

```ts
import '@vp-tw/taipei-sans-tc/dist/Light/TaipeiSansTCBeta-Light.css';
import '@vp-tw/taipei-sans-tc/dist/Regular/TaipeiSansTCBeta-Regular.css';
import '@vp-tw/taipei-sans-tc/dist/Bold/TaipeiSansTCBeta-Bold.css';
```

### jsDelivr

適合不使用 bundler 的靜態網站、原型或文件頁。請固定精確版本，不要使用
`@latest`，以維持可重現的字型輸出與長效快取。

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@vp-tw/taipei-sans-tc@0.2.0/dist/Regular/TaipeiSansTCBeta-Regular.css"
/>
```

0.2.0 發布後，上述 URL 會由 jsDelivr 從 npm package 提供；CSS 內的相對
WOFF2 URL 會自動指向同一個固定版本。

## 線上試寫

在 [台北黑體 playground](https://vp-tw.github.io/taipei-sans-tc/) 直接輸入文字，
即時調整字級與字重。

## 授權與歸屬

- `packages/core/src` 與 `packages/core/dist` 的字型檔：遵循原作者的
  [SIL Open Font License 1.1](https://openfontlicense.org/open-font-license-official-text/)。
  官方說明指出台北黑體以思源黑體為基礎改作，並以 OFL 1.1 免費公開。
- 此 repository 的封裝程式、文件、網站與自製素材：MIT License。

完整邊界見 [packages/core/LICENSE](packages/core/LICENSE) 與
[NOTICE.md](NOTICE.md)。

## 開發

```sh
pnpm install
pnpm dev
pnpm build
pnpm check
```

字型 subsets 以 Python `font-splitter` 建置；靜態網站使用 Astro、Vite+、Oxc
與 TypeScript。

## 發布

變更 npm package 時新增 Changeset，並由 GitHub Actions 建立 release PR 或發布：

```sh
pnpm changeset
pnpm release
```

發布 workflow 會在 npm publish 後 smoke-test 對應版本的 jsDelivr CSS。
