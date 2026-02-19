# gh-aw-prj

Cloudflare Workers上で動作する軽量Webアプリケーションです。Hono + Vite + TypeScriptで構築されています。

## 技術スタック

- ⚡ **Hono** (v4.11.9) - 軽量で高速なWebフレームワーク
- 🎨 **Vite** (v6.3.5) - 次世代フロントエンドビルドツール
- 🌐 **Cloudflare Workers** - エッジコンピューティングプラットフォーム
- 📦 **vite-ssr-components** (v0.5.2) - SSRサポート
- 📘 **TypeScript** - 型安全な開発環境

## セットアップ

依存関係のインストール:

```bash
npm install
```

## 開発

ローカル開発サーバーの起動:

```bash
npm run dev
```

ブラウザで `http://localhost:5173` にアクセスしてください。

## ビルド

プロダクションビルドの作成:

```bash
npm run build
```

ビルド結果のプレビュー:

```bash
npm run preview
```

## デプロイ

Cloudflare Workersへのデプロイ:

```bash
npm run deploy
```

## API エンドポイント

詳細なエンドポイント仕様は [src/READMe.md](./src/READMe.md) を参照してください。

| エンドポイント | 説明 |
|---|---|
| `GET /` | ホームページ |
| `GET /echo/:text` | テキストエコー機能 |
| `GET /num` | 素数表示機能 |
| `GET /api/health` | ヘルスチェック |

## 型生成

Cloudflare Workers の設定に基づいて型定義を生成:

```bash
npm run cf-typegen
```

生成された `CloudflareBindings` 型は以下のように使用できます:

```ts
// src/index.ts
const app = new Hono<{ Bindings: CloudflareBindings }>()
```

## プロジェクト構成

```
gh-aw-prj/
├── src/
│   ├── index.tsx       # メインアプリケーション
│   ├── renderer.tsx    # JSX レンダラー
│   ├── utils.ts        # ユーティリティ関数
│   └── style.css       # スタイルシート
├── public/             # 静的ファイル
├── .github/
│   └── workflows/      # GitHub Actions ワークフロー
└── package.json        # プロジェクト設定
```
