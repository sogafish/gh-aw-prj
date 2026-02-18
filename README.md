# gh-aw-prj

Cloudflare Workers上で動作するWebアプリケーションです。Honoフレームワークを使用し、Viteでビルドされています。

## 技術スタック

- **Hono** (v4.11.9) - 軽量で高速なWebフレームワーク
- **Vite** (v6.3.5) - 次世代フロントエンドビルドツール
- **Cloudflare Workers** - エッジコンピューティングプラットフォーム
- **vite-ssr-components** (v0.5.2) - SSRサポート

## セットアップ

依存パッケージのインストール:

```txt
npm install
```

開発サーバーの起動:

```txt
npm run dev
```

## デプロイ

Cloudflare Workersへのデプロイ:

```txt
npm run deploy
```

## 型生成

[Cloudflare Workersの型定義を生成](https://developers.cloudflare.com/workers/wrangler/commands/#types):

```txt
npm run cf-typegen
```

型定義を使用する場合は、Honoインスタンス化時に`CloudflareBindings`を指定:

```ts
// src/index.ts
const app = new Hono<{ Bindings: CloudflareBindings }>()
```

## エンドポイント

実装されているエンドポイントについては、[src/READMe.md](src/READMe.md)を参照してください。
