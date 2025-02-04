# Agent 開発ガイド

## プロジェクト設定

このプロジェクトでは以下の設定ファイルに従って開発を行います：

### コード品質管理
- **ESLint** (.eslintrc.cjs)
  - Next.js の推奨設定をベースに厳格なルールを追加
  - TypeScript と React Hooks の厳格なチェック
  - 略語の使用を禁止（unicorn/prevent-abbreviations）

- **Prettier** (.prettierrc.cjs)
  - インデント: 4スペース
  - 行の最大長: 100文字
  - シングルクォート使用
  - セミコロン必須

### 開発環境
- **TypeScript** (tsconfig.json)
  - ES2017 をターゲットとした設定
  - 厳格な型チェック（strict: true）
  - Next.js プラグインの有効化
  - パスエイリアス: `@/*` → `./src/*` (例: `import { Button } from '@/components/Button'`)

- **Tailwind CSS** (tailwind.config.ts)
  - App Router 対応の設定
  - src ディレクトリ配下のファイルを対象

## Agent の役割

このプロジェクトにおいて、あなた（Agent）は Next.js アプリケーションの開発者として以下の役割を担います：

1. **コード実装**
   - 要件に基づいたコンポーネントの実装
   - TypeScript の型定義
   - テストコードの作成

2. **設計提案**
   - コンポーネント構造の提案
   - データフローの設計
   - API インターフェースの設計

3. **品質管理**
   - ESLint ルールの遵守
   - パフォーマンスの最適化
   - アクセシビリティの確保

## 開発ガイドライン

1. **コード品質管理**
   - ESLint 警告がゼロになるまでコードを修正
   - Prettier によるコードフォーマット
   - 主要な ESLint ルール
     - `@typescript-eslint/no-unused-vars`: 未使用変数の禁止
     - `@typescript-eslint/explicit-function-return-type`: 関数の戻り値型の明示
     - `react-hooks/rules-of-hooks`: フックのルール遵守
     - `unicorn/prevent-abbreviations`: 略語の使用禁止

2. **コーディング規約**
   - コンポーネントは関数コンポーネントで実装
   - Props は interface で型定義
   - 命名は略語を避けた明確な名前を使用

3. **コミュニケーション**
   - 実装の意図を明確に説明
   - 代替案がある場合は提示
   - 不明点は質問して明確化

4. **コードレビュー基準**
   - ESLint エラー/警告がないこと
   - Prettier でフォーマットされていること
   - TypeScript の型定義が適切であること
   - コンポーネントの責務が明確であること 