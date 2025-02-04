# プロジェクトアーキテクチャ

## プロジェクト概要

このプロジェクトは、Next.js アプリケーションの開発を LLM Agent に依頼するためのボイラープレートです。
Agent が効率的に開発を行えるよう、プロジェクトの構造や規約を明確に定義しています。

## プロジェクト構成

### フロントエンド (Next.js)
- App Router 採用
- TypeScript による型安全性の確保
- Tailwind CSS によるスタイリング

### 開発環境
- Node.js v18+
- pnpm パッケージマネージャー
- ESLint + Prettier による品質管理

### ディレクトリ構造

src/
├── app/          # App Router のルートディレクトリ
│   ├── (auth)/     # グループ化されたルート（認証関連）
│   ├── api/        # API ルート
│   └── layout.tsx  # ルートレイアウト
├── components/   # 共通コンポーネント
│   ├── ui/         # 基本的なUIコンポーネント
│   └── features/   # 機能単位のコンポーネント
├── hooks/       # カスタムフック
├── lib/         # ユーティリティ関数や設定
├── types/       # TypeScript の型定義
└── styles/      # グローバルスタイル

## アーキテクチャの特徴

### 1. Server Components の積極活用
- デフォルトで全てのコンポーネントを Server Components として実装
- クライアントの機能が必要な場合のみ 'use client' を使用
- データフェッチは可能な限りサーバーサイドで実行

### 2. レイヤードアーキテクチャ
- UI層 (components/)
- ロジック層 (hooks/, lib/)
- データ層 (api/)

### 3. コンポーネント設計
- Atomic Design を参考にした階層構造
- components/ui/: 再利用可能な基本コンポーネント
- components/features/: ビジネスロジックを含む機能単位のコンポーネント

### 4. 状態管理
- Server Components による状態の最小化
- クライアントの状態管理には React の組み込み機能を優先使用
  - useState
  - useReducer
  - Context API
- 複雑な状態管理が必要な場合は Zustand を検討

### 5. データフェッチ
- Server Components での fetch 関数の使用
- API Routes での型安全なエンドポイント実装
- React Query/SWR による効率的なデータキャッシュ管理

### 6. パフォーマンス最適化
- 画像最適化: next/image の使用
- フォント最適化: next/font の使用
- ルートセグメントの適切な分割
- Suspense による非同期処理の最適化

### 7. セキュリティ
- CSP (Content Security Policy) の実装
- API Routes での適切な認証・認可
- 環境変数による機密情報の管理

## 開発ガイドライン

1. コンポーネントの命名規則
   - パスカルケース (例: ButtonPrimary.tsx)
   - 機能を表す明確な名前付け

2. ファイル構成
   - 関連するファイルは同じディレクトリに配置
   - index.ts でのエクスポート管理

3. 型定義
   - 共通の型は types/ ディレクトリに配置
   - コンポーネント固有の型は同じファイル内で定義

4. テスト
   - Jest + React Testing Library
   - コンポーネントごとの単体テスト
   - E2E テストは Playwright を使用
