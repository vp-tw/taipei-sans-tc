# taipei-sans-tc

> 讓每一個字，有自己的現場。

Taipei Sans TC 的非官方 webfont package。它提供 Light、Regular、Bold 三個字重，
並以 `unicode-range` 分割為 WOFF2 subsets。

**Unofficial:** 字型設計、名稱、授權與原始檔案均以
[翰字鑄造 JT Foundry](https://sites.google.com/view/jtfoundry/zh-tw) 的官方資訊為準；
本 package 只負責 webfont 封裝與 CDN-friendly 輸出。

## Install

```sh
pnpm add @vp-tw/taipei-sans-tc
```

```ts
import '@vp-tw/taipei-sans-tc/dist/Regular/TaipeiSansTCBeta-Regular.css';
```

## jsDelivr

跟隨相容 0.x 更新的 CDN 入口：

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@vp-tw/taipei-sans-tc@0/dist/Regular/TaipeiSansTCBeta-Regular.css"
/>
```

`@0` 會跟隨相容的 0.x release；CSS 會以相對路徑載入同一個 release 所需的
WOFF2 subsets。需要完全可重現的部署時，可改為精確版本。

## License

字型檔採原作者的 SIL Open Font License 1.1；封裝程式與文件採 MIT License。
詳見 [LICENSE](LICENSE) 與 [NOTICE.md](NOTICE.md)。

## Build

```sh
pnpm build:fonts
```

Python `font-splitter` 與 FontTools 會產生 `dist` 中的 WOFF2 subsets 與 CSS。
