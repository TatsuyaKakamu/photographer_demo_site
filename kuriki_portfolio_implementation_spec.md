# 車写真ポートフォリオサイト 実装指示書

## 0. 文書の目的

本ドキュメントは、**車写真を主軸とした高級感あるポートフォリオサイト**を実装するための、統合仕様書である。  
対象読者は Claude Code および実装担当者であり、サイトの方向性、情報設計、UI/UX、アニメーション、デザイントークン、見積もり機能、運用設計までを一貫して定義する。

この文書は、これまでの要件整理と設計検討を網羅し、**そのまま実装開始できる粒度**でまとめたものである。

---

## 1. プロジェクト概要

### 1.1 サイトの目的
本サイトの最優先目的は以下の通り。

1. 撮影依頼を増やす
2. メディア・メーカー向けに刺さる見せ方をする
3. 将来的には実績紹介による信頼補強を行う

### 1.2 想定クライアント
主な依頼主は以下。

- メディア
- メーカー

### 1.3 撮影領域
現時点で主に想定する依頼内容は以下。

- SNS投稿用撮影
- 雑誌風撮影
- かっこよく見せる車両撮影

### 1.4 サイトの位置づけ
本サイトは、親しみやすい予約サイトではなく、**高級感ある営業用ポートフォリオサイト**として設計する。  
第一印象で「この人は車をかっこよく撮れる」と伝え、そのまま概算見積もり・依頼送信へ導く。

---

## 2. ブランド・世界観

### 2.1 仮ブランド名
正式名称は未確定だが、現時点の推奨仮設定は以下。

**KURIKI AUTOMOTIVE PHOTOGRAPHY**

### 2.2 ブランド表現の方向性
- 高級・ラグジュアリー
- 黒白中心
- 静かで重厚
- 写真主役
- 雑誌広告や高級ブランドのような空気感
- ポップ、カラフル、情報過多は避ける

### 2.3 ヒーローコピー仮設定
英字と日本語補足の組み合わせを推奨する。

- **Cars, framed with presence.**
- **車を、存在感ごと写す。**

### 2.4 サイト全体のコンセプト
**高級感のある黒基調の車写真ポートフォリオサイト。  
メディア・メーカー向けに、SNS投稿用・雑誌風撮影の依頼を受ける。**

---

## 3. サイト全体方針

### 3.1 基本方針
- 写真を主役にする
- 装飾ではなく、余白・階調・タイポグラフィで高級感を出す
- モバイルでも成立するミニマルなUIにする
- ただ見せるだけでなく、依頼導線を明確にする
- 初期版は「依頼受付まで」。オンライン決済は実装しない

### 3.2 初期版で優先すること
- 第一印象の強さ
- 作例の見せ方
- 概算見積もり体験
- 依頼送信フロー
- 自動返信メール
- 管理DB保存
- 後から写真・料金を管理画面で更新できる構造

### 3.3 避けること
- 説明過多
- ブログ的な雑多さ
- 派手すぎるアニメーション
- 安っぽい予約フォーム風UI
- 初期から過剰な機能追加

---

## 4. ページ構成

初期版の必須ページ構成は以下。

1. Home
2. Portfolio
3. Estimate / Request
4. About
5. Notes / Terms
6. Thanks

### 4.1 ページ遷移構造

```text
TOP
 ├─ Portfolioを見る → Portfolio
 └─ 概算見積もりを試す → Estimate

Portfolio
 └─ このテイストで依頼する → Estimate

Estimate
 ├─ 注意事項を見る → Notes
 └─ 送信完了 → Thanks
```

---

## 5. 各ページの目的と構成

# 5.1 Home

### 目的
- サイト訪問直後に世界観を伝える
- 誰向けの撮影かを明確にする
- 作例ページと見積もりページへ送客する

### 必須セクション
1. Header
2. Hero
3. Intro / Positioning
4. Featured Works
5. Why This Style / Value Proposition
6. Estimate CTA
7. About teaser
8. Footer

### ワイヤー概要

```text
[Header]
 Logo / Brand
 Portfolio
 Estimate
 About
 Contact

[Hero]
 Fullscreen hero image(s)
 Brand statement
 Short subcopy
 CTA 1: Portfolioを見る
 CTA 2: 概算見積もりを試す

[Intro]
 SNS投稿用 / 雑誌風 / プロモーション向け
 撮影のスタンスを短く説明

[Featured Works]
 厳選6〜8枚
 作例への導線

[Why / Value]
 強み3点

[Estimate CTA]
 見積もりページ導線

[About teaser]
 写真家紹介の短文

[Footer]
 Contact / Instagram / Terms / Copyright
```

### 実装上の注意
- ファーストビューに情報を詰め込みすぎない
- CTAは原則2つだけ
- スクロール後に固定見積もりCTAを表示してよい
- Topでは作品の全量を見せない。厳選カットに絞る

---

# 5.2 Portfolio

### 目的
- 作例一覧を見せる
- シーン別に絞り込ませる
- 各作例から見積もりページへ自然に流す

### 条件
- 詳細ページは持たせない
- 作例数は現時点で20枚前後
- 分類はシーン別

### 仮カテゴリ
- All
- Night
- Urban
- Coastal
- Mountain
- Detail
- Motion

### 構成
1. ページタイトル
2. サブコピー
3. フィルタバー
4. 作例グリッド
5. 中間CTA
6. 下部CTA

### ワイヤー概要

```text
[Page Title]
 Portfolio
 Scenes shaped for editorial and SNS.

[Filter]
 All / Night / Urban / Coastal / Mountain / Detail / Motion

[Gallery Grid]
 20枚前後の写真
 2〜4列のレスポンシブグリッド

[Mid CTA]
 このテイストで依頼する → Estimate

[Bottom CTA]
 概算見積もりを試す → Estimate
```

### 実装上の注意
- 詳細ページがない分、グリッド体験の質が重要
- カテゴリは増やしすぎない
- 20枚という枚数を考慮し、シーン分類は最大6個程度に抑える
- Topからの重複感が出ないよう、Topは厳選表示にする

---

# 5.3 Estimate / Request

### 目的
- ベースプラン選択
- オプション選択
- 概算見積もりの内訳・税込表示
- 依頼内容入力
- 送信
- 自動返信メール
- 管理DB保存

### 基本方針
このページは単なるフォームではなく、**営業ページ兼シミュレーター**として設計する。  
無機質な業務フォームに見せず、サイト全体の高級感を維持すること。

### 構成
1. ページイントロ
2. ベースプラン
3. オプション
4. 撮影条件
5. お客様情報
6. 依頼内容
7. 同意チェック
8. 送信ボタン
9. 右側サマリー（PC時）
10. 注意事項リンク

### ワイヤー概要

```text
[Intro]
 概算見積もりである旨
 注意事項へのリンク

[2-column]
 Left:
   ベースプラン
   オプション
   撮影条件
   お客様情報
   依頼内容
   同意チェック
   送信ボタン

 Right:
   見積もり内訳
   小計
   消費税
   税込概算
   注意書き
```

### 実装上の注意
- PCでは右サマリーを軽いstickyにしてよい
- モバイルではサマリーを適切な位置に折りたたむ／下部表示
- 合計金額と内訳を明確にする
- 「概算」であることを繰り返し明示する

---

# 5.4 About

### 目的
- 写真家のスタンスを簡潔に伝える
- 長すぎる自己語りにはしない
- 信頼感だけ補う

### 実装上の注意
- 感傷的に長くしない
- 「どういう画作りができるか」を簡潔に書く
- 将来的な実績追加は想定してよいが初期版では簡潔でよい

---

# 5.5 Notes / Terms

### 目的
- 見積もり・撮影条件・権利・納品条件などの明示
- リスク回避
- 依頼前の認識齟齬防止

### 記載項目
- 概算見積もりについて
- 正式見積もりは条件確認後に確定すること
- 交通費
- 天候延期
- キャンセルポリシー
- 撮影場所許可の扱い
- 著作権・使用許諾
- 納品枚数
- 納品形式
- 修正対応範囲
- 納期
- 個人情報の扱い

---

# 5.6 Thanks

### 目的
- 送信完了を静かに伝える
- 自動返信や後続連絡の期待値を伝える

### 実装上の注意
- 派手な完了演出は不要
- 送信内容が受理されたことを明示
- 自動返信メール送信済みの案内を表示

---

## 6. 作例・コンテンツ方針

### 6.1 作例の見せ方
- 写真は大きく、UIは控えめ
- 詳細ページを持たないため、一覧そのものが作品体験になるよう設計する
- 数枚だけサイズに変化をつけてもよいが、整列グリッド寄りを優先する

### 6.2 依頼導線
- 各ページに強すぎないが明確な導線を置く
- Portfolioでは「このテイストで依頼する」を複数箇所で自然に提示する

### 6.3 文言トーン
- 高級感
- 短文
- 説明は簡潔
- 日本語主体、必要に応じて英字補助
- 営業臭くしすぎない

---

## 7. 見積もり機能仕様

### 7.1 ベースプラン
現時点の初期版は以下。

- **1台撮影プラン**

### 7.2 料金方針
- 最終確定金額ではなく**概算見積もり**
- 後日正式見積もりで調整される前提
- 画面上では概算であることを明示する

### 7.3 仮料金ロジック
実装用の仮設定として以下を採用する。

#### ベース
- 1台撮影プラン: **35,000円（税別）**

#### オプション
- 追加カット: +5,000円
- 夜景撮影: +8,000円
- ロケ地追加: +10,000円
- 出張 20km超: +5,000円
- 出張 50km超: +10,000円
- 動画撮影追加: +20,000円
- レタッチ追加: +8,000円
- 納期短縮: +10,000円
- 土日祝対応: +8,000円

### 7.4 条件分岐の考え方
本番では条件分岐が増える想定だが、初期版では**拡張しやすい構造**を優先する。

#### 見積もりロジックの3層
1. ベース料金
2. 単純加算オプション
3. 条件分岐オプション

#### 条件分岐例
- 出張距離
  - 20km以内: 0
  - 20〜50km: +5,000
  - 50km超: +10,000
- レタッチ追加
- 土日祝
- 将来的に複数台割引などを追加可能にする

### 7.5 表示内容
- 小計
- 消費税
- 税込概算合計
- 注意書き

### 7.6 注意書き文例
> 本見積もりは概算です。正式な金額は、撮影条件、場所、スケジュール、天候、車両台数、使用用途等を確認後にご案内します。

---

## 8. 依頼フォーム仕様

### 8.1 取得項目

#### 基本情報
- 名前
- メールアドレス
- 電話番号
- SNSアカウント

#### 撮影情報
- 車種
- 希望日時
- 撮影場所
- 用途（SNS / 雑誌風 / プロモーション / メディア掲載 等）
- 希望する雰囲気
- 参考イメージURL
- 備考

#### 見積もり関連
- 選択ベースプラン
- 選択オプション
- 概算見積もり額
- 注意事項への同意

### 8.2 送信内容に含めるもの
送信データには、**見積もり結果の内訳をそのまま含める**。  
管理側で後から確認しやすくするため。

### 8.3 バリデーション方針
- 必須項目を明確にする
- 入力エラーは派手にせず上品に表示
- メール形式チェック
- 同意チェック必須
- 見積もり内容が空のまま送れないようにする

---

## 9. 送信後の処理

### 9.1 自動返信メール
必須。

#### 含める内容
- 依頼受付完了
- 送信内容の要約
- 概算見積もり内訳
- 概算である旨
- 返信目安

### 9.2 管理DB保存
必須。

#### 保存項目
- 受付日時
- 顧客情報
- 車種
- 希望日時
- 撮影場所
- 用途
- オプション
- 概算見積もり内訳
- 税込概算合計
- ステータス

#### ステータス例
- new
- contacted
- quoted
- closed

### 9.3 管理画面で更新したい項目
要件として、運用時に管理画面から更新できる構造を想定する。

- 写真
- シーンカテゴリ
- 料金
- オプション
- 注意事項

---

## 10. アニメーション設計コンセプト

### 10.1 動きのテーマ
**Silent Motion / 静かな動感**

狙い:
- 車の重量感
- 金属感
- 高級感
- 映像的な余韻

### 10.2 基本ルール
- 動きは遅め
- 距離は短め
- 一度に多くを動かさない
- 飛ぶより、滑る・現れる・浮く
- 写真よりUIが目立たない

### 10.3 禁止事項
- バネの強い動作
- 過剰なパララックス
- 3D回転多用
- 文字がバラバラに飛ぶ演出
- 長いローディング演出
- すべての要素が毎回動く設計

### 10.4 演出強度
- 弱: 基本
- 中: 見せ場のみ
- 強: 原則使わない

---

## 11. ページごとの動き仕様

# 11.1 共通UI

## ヘッダー
- 初回表示で薄くフェードイン
- スクロールで背景がわずかに濃くなる
- 大きな縮小アニメはしない

## 主CTAボタン
- ホバー時に背景と文字色がゆっくり反転
- 矢印アイコンが2〜4px右へ移動
- 押下時にわずかに沈む

## テキストリンク
- 下線が左から右へ伸びる
- 文字色変化は最小限

## 固定見積もりCTA
- 初期は非表示
- 1画面分スクロール後に右下へフェード＋少し浮いて出現
- ホバー時は境界線反転程度

---

# 11.2 Top page

## Hero
- 背景写真を3枚程度で自動切替
- 5秒前後ごとにクロスフェード
- 写真にごく微細なscale変化（例: 1.00→1.04）
- テキストは少し遅れてフェード表示
- CTAは最後に表示

## Intro
- セクション全体をフェードアップ
- 見出し → 本文 → 補助情報の順に表示

## Featured Works
- 写真カードを軽いスタガーで表示
- hoverでscale 1→1.03程度
- 薄いオーバーレイ＋ラベル表示

## フォトストリップ
- 横長写真帯が右→左へ非常にゆっくり流れる
- 無限ループ
- hover/touchで減速
- 高速にしない

## Value / Why
- 3つの訴求カードを順に出す
- 強いアイコンアニメは不要

## Estimate CTA
- セクション自体がフェードアップ
- 主CTA仕様を適用

---

# 11.3 Portfolio page

## ページ冒頭
- タイトルとサブコピーがフェード表示

## カテゴリフィルタ
- hoverで下線や背景が穏やかに変化
- アクティブ切替は滑らかに
- パチパチ切り替えない

## フィルタ適用時
- グリッドが一瞬薄くなり、該当写真が順次表示
- レイアウトジャンプを抑える

## 写真グリッド
- 初回表示で軽いスタガー
- hoverで微ズーム
- 薄いオーバーレイ
- “Request this style” など小さな導線表示

## CTA
- 写真の流れを邪魔しない程度のフェードアップ

---

# 11.4 Estimate page

## ページ冒頭
- 見出しと概算説明を穏やかに表示

## プラン選択
- 選択時にカード枠や背景が静かに変化
- チェック表示もなめらか

## オプション選択
- ON時に行背景が少し変わる
- チェックアイコンがフェードイン

## サマリー
- 項目追加時に行が軽く現れる
- 項目削除時に短くフェードアウト
- 数字変更は軽いフェード更新
- PCでは軽いsticky可

## 入力欄
- フォーカスで枠線が静かに明るくなる
- エラー表示は上品に
- テキストエリア伸縮は滑らかに

## 送信
- 送信中は軽いローディング
- 成功時は静かな成功表示
- Thanksページへの遷移は短く上品に

---

# 11.5 About / Notes / Thanks

## About
- テキストと画像をフェードアップ
- それ以上の凝った演出は不要

## Notes / Terms
- 見出しの表示のみ
- アコーディオンを使うなら滑らかな開閉

## Thanks
- メッセージと補助文をフェード表示
- 次行動ボタンが少し遅れて出る
- 祝祭感のある派手演出は不要

---

## 12. ページ遷移仕様

### 基本方針
- 全ページ共通
- 速く、短く、滑らかに
- ユーザーを待たせない

### 仕様
- 現ページが短くフェードアウト
- 次ページが少し下から上がりつつフェードイン
- 移動量は12〜20px程度
- 時間は0.45〜0.65秒程度

### 特定遷移
- Top → Portfolio: 少しだけ印象的でもよい
- Portfolio → Estimate: できるだけ短く
- Estimate → Thanks: やや丁寧でもよい

### 禁止事項
- 強い暗転
- ワイプ
- 長いトランジション
- 毎回異なる演出

---

## 13. フォント設計

### 13.1 採用フォント
- **Cormorant Garamond**: 英字見出し・ブランド用
- **Noto Sans JP**: 日本語本文・日本語見出し・フォーム・注意事項
- **Inter**: UI、英数字、価格、ボタン、ナビゲーション

### 13.2 使い分けルール

#### Cormorant Garamond を使う場所
- ブランド名の英字
- ヒーローの短い英字コピー
- 短い英字見出し
- 大きな英数字の演出要素

#### Cormorant Garamond を使わない場所
- 長文本文
- ボタン本文
- フォーム
- 見積もり内訳
- 日本語本文

#### Noto Sans JP を使う場所
- 日本語本文
- 日本語見出し
- フォームラベル
- 注意事項
- 料金説明

#### Inter を使う場所
- UI英数字
- 価格
- ナビゲーション
- ボタン
- ラベル
- フィルタ名

### 13.3 タイポグラフィ方針
- 英字はややラグジュアリー
- 和文は可読性優先
- ボタンやUIは少し広めの字間
- 本文は行間を広めに取る

---

## 14. 配色設計

### 14.1 基本方針
- 黒白中心
- 真っ黒・真っ白のベタ使いを避ける
- 黒白の間に階調を持たせる
- 高級感はアクセント色ではなく階調整理で出す
- アクセント色は節度を持って限定使用する

### 14.2 推奨パレット
- Background: `#0A0A0A`
- Elevated background: `#111111`
- Surface: `#171717`
- Primary text: `#F5F5F2`
- Secondary text: `#C7C7C2`
- Muted text: `#8D8D88`
- Border subtle: `#2A2A2A`
- Border strong: `#3A3A3A`
- Accent: `#B39A6B`

### 14.3 アクセントの使い方
使ってよい場所:
- 小さなライン
- 強調ラベル
- 選択状態の補助
- 極少量の装飾

使いすぎてはいけない場所:
- 大面積塗り
- 常用の主ボタン塗り
- 全体の基調色化

---

## 15. デザイントークン

以下は推奨提案ベースの統一トークン定義。

```css
:root {
  /* Colors */
  --color-bg: #0A0A0A;
  --color-bg-elevated: #111111;
  --color-surface: #171717;
  --color-surface-soft: #1D1D1D;

  --color-text-primary: #F5F5F2;
  --color-text-secondary: #C7C7C2;
  --color-text-muted: #8D8D88;
  --color-text-inverse: #0A0A0A;

  --color-border-subtle: #2A2A2A;
  --color-border-default: #323232;
  --color-border-strong: #3A3A3A;

  --color-accent: #B39A6B;
  --color-accent-hover: #C3AB7A;
  --color-accent-soft: rgba(179, 154, 107, 0.14);

  --color-success: #7E9D84;
  --color-success-soft: rgba(126, 157, 132, 0.12);
  --color-warning: #B89C6A;
  --color-warning-soft: rgba(184, 156, 106, 0.12);
  --color-error: #A56A6A;
  --color-error-soft: rgba(165, 106, 106, 0.12);

  /* Typography */
  --font-display: "Cormorant Garamond", serif;
  --font-ui: "Inter", "Noto Sans JP", sans-serif;
  --font-body: "Noto Sans JP", "Inter", sans-serif;

  --font-size-hero: clamp(3rem, 8vw, 6rem);
  --font-size-display-lg: clamp(2.25rem, 5vw, 4rem);
  --font-size-display-md: clamp(1.75rem, 3vw, 2.75rem);

  --font-size-heading-xl: 2rem;
  --font-size-heading-lg: 1.5rem;
  --font-size-heading-md: 1.25rem;
  --font-size-heading-sm: 1.125rem;

  --font-size-body-lg: 1.125rem;
  --font-size-body-md: 1rem;
  --font-size-body-sm: 0.9375rem;

  --font-size-label-lg: 0.9375rem;
  --font-size-label-md: 0.875rem;
  --font-size-label-sm: 0.8125rem;

  --font-size-price-lg: clamp(2rem, 4vw, 3rem);
  --font-size-price-md: 1.25rem;

  --font-weight-display: 500;
  --font-weight-heading: 500;
  --font-weight-body: 400;
  --font-weight-body-strong: 500;
  --font-weight-ui: 500;
  --font-weight-price: 600;

  --line-height-display: 1;
  --line-height-heading: 1.3;
  --line-height-body: 1.75;
  --line-height-ui: 1.4;

  --letter-spacing-display: 0.02em;
  --letter-spacing-heading: 0.01em;
  --letter-spacing-body: 0.01em;
  --letter-spacing-ui: 0.06em;
  --letter-spacing-button: 0.08em;

  /* Spacing */
  --space-2xs: 0.25rem;
  --space-xs: 0.5rem;
  --space-sm: 0.75rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 3rem;
  --space-3xl: 4rem;
  --space-4xl: 6rem;
  --space-5xl: 8rem;

  /* Layout */
  --container-sm: 640px;
  --container-md: 800px;
  --container-lg: 1120px;
  --container-xl: 1280px;
  --container-2xl: 1440px;

  --section-padding-y-sm: 4rem;
  --section-padding-y-md: 6rem;
  --section-padding-y-lg: 8rem;

  --section-padding-x-sm: 1rem;
  --section-padding-x-md: 1.5rem;
  --section-padding-x-lg: 2rem;

  --grid-gap-sm: 0.75rem;
  --grid-gap-md: 1rem;
  --grid-gap-lg: 1.5rem;
  --grid-gap-xl: 2rem;

  /* Radius */
  --radius-xs: 0.25rem;
  --radius-sm: 0.5rem;
  --radius-md: 0.75rem;
  --radius-lg: 1rem;
  --radius-xl: 1.5rem;
  --radius-pill: 9999px;

  /* Borders */
  --border-width-thin: 1px;
  --border-width-strong: 1.5px;

  /* Shadows */
  --shadow-soft: 0 8px 24px rgba(0, 0, 0, 0.18);
  --shadow-medium: 0 16px 40px rgba(0, 0, 0, 0.24);
  --shadow-focus: 0 0 0 3px rgba(245, 245, 242, 0.08);

  /* Motion */
  --motion-duration-fast: 180ms;
  --motion-duration-base: 280ms;
  --motion-duration-slow: 420ms;
  --motion-duration-section: 720ms;
  --motion-duration-page: 560ms;
  --motion-duration-hero: 1200ms;

  --motion-ease-standard: cubic-bezier(0.22, 1, 0.36, 1);
  --motion-ease-soft: cubic-bezier(0.16, 1, 0.3, 1);
  --motion-ease-exit: cubic-bezier(0.4, 0, 1, 1);

  --motion-distance-xs: 4px;
  --motion-distance-sm: 8px;
  --motion-distance-md: 16px;
  --motion-distance-lg: 24px;

  --motion-scale-hover-image: 1.03;
  --motion-scale-hero: 1.04;
  --motion-scale-press: 0.985;

  /* Button */
  --button-height-sm: 2.5rem;
  --button-height-md: 3rem;
  --button-height-lg: 3.5rem;

  --button-padding-x-sm: 1rem;
  --button-padding-x-md: 1.25rem;
  --button-padding-x-lg: 1.75rem;

  --button-border-color: var(--color-text-primary);
  --button-text-color: var(--color-text-primary);
  --button-bg-color: transparent;

  --button-hover-bg-color: var(--color-text-primary);
  --button-hover-text-color: var(--color-text-inverse);

  --button-secondary-border-color: var(--color-border-default);
  --button-secondary-text-color: var(--color-text-secondary);

  /* Input */
  --input-height-md: 3rem;
  --input-height-lg: 3.5rem;
  --input-bg: var(--color-bg-elevated);
  --input-border: var(--color-border-default);
  --input-border-hover: var(--color-border-strong);
  --input-border-focus: var(--color-text-secondary);
  --input-text: var(--color-text-primary);
  --input-placeholder: var(--color-text-muted);
  --input-radius: var(--radius-md);
  --input-padding-x: 1rem;
  --input-padding-y: 0.875rem;

  /* Card */
  --card-bg: rgba(255, 255, 255, 0.02);
  --card-border: var(--color-border-subtle);
  --card-radius: var(--radius-lg);
  --card-padding: var(--space-xl);

  /* Chip */
  --chip-height: 2.25rem;
  --chip-padding-x: 1rem;
  --chip-radius: var(--radius-pill);
  --chip-bg: transparent;
  --chip-text: var(--color-text-secondary);
  --chip-border: var(--color-border-default);
  --chip-active-bg: var(--color-text-primary);
  --chip-active-text: var(--color-text-inverse);
  --chip-active-border: var(--color-text-primary);

  /* Summary */
  --summary-bg: var(--color-bg-elevated);
  --summary-border: var(--color-border-subtle);
  --summary-radius: var(--radius-xl);
  --summary-padding: var(--space-xl);
}
```

---

## 16. コンポーネント単位の実装想定

### Top page
- Header
- HeroSection
- IntroSection
- FeaturedGallery
- ValueProposition
- EstimateCtaSection
- AboutPreview
- Footer
- FloatingEstimateCta

### Portfolio page
- PortfolioHero
- CategoryFilter
- PortfolioGrid
- PortfolioCard
- InlineEstimateCta

### Estimate page
- EstimateIntro
- BasePlanSelector
- OptionSelector
- TravelSelector
- RequestForm
- EstimateSummary
- TermsConsent

### Shared
- Button
- SectionHeading
- PageTransition
- RevealOnScroll
- MarqueePhotoStrip

---

## 17. 実装ルール

### 17.1 技術方針
- Next.js + TypeScript を前提
- Tailwind CSS を前提
- アニメーションは Framer Motion を中心に実装
- CSSで十分なホバーはCSS優先
- `prefers-reduced-motion` に対応
- 画像最適化を重視する

### 17.2 コード方針
- コンポーネントを小さく分割
- デザイントークンをベースにスタイルを統一
- 料金ロジックは拡張しやすい純粋関数で分離
- 管理画面更新を想定し、料金や作例はハードコードしすぎない
- UI文言は差し替えしやすい構造にする

### 17.3 品質方針
- セマンティックHTML
- altテキスト
- キーボード操作性
- レスポンシブ対応
- レイアウトシフト抑制
- 読み込み速度重視

---

## 18. 管理・運用設計の前提

### 18.1 初期版
- 仮公開を前提
- まずは動くこと・見せ方・導線を重視
- オンライン決済なし
- 依頼受付のみ

### 18.2 将来拡張
- 実績強化
- 管理画面からの作例・料金編集
- 条件分岐ロジックの高度化
- 追加プラン
- 英語化は現時点では不要

---

## 19. 実装時に絶対に崩してはいけないこと

1. 写真主役の原則
2. 高級感ある黒階調
3. 日本語可読性
4. 依頼導線の明確さ
5. 概算見積もりである明示
6. 動きは弱〜中で制御する
7. 見積もりページも安っぽくしない
8. 後から料金・写真を更新しやすい設計にする

---

## 20. Claude Code に渡す際の指示要約

Claude Code には次の前提を明示すること。

- 車写真向けの高級ポートフォリオサイトを作る
- メディア・メーカー向け
- 写真主役、黒白基調、ラグジュアリー
- Home / Portfolio / Estimate / About / Notes / Thanks を実装
- Portfolio は詳細ページなし、シーン別フィルタ付き
- Estimate は概算見積もり + 依頼送信 + 自動返信 + DB保存を想定
- アニメーションは Silent Motion コンセプト
- フォントは Cormorant Garamond / Noto Sans JP / Inter
- デザイントークンは本書のものを採用
- Tailwind と TypeScript で実装
- 後で料金・写真を更新しやすい構造にする

---

## 21. 最終要約

本プロジェクトの初期版は、以下を満たすことを目標とする。

- 車写真を高級感ある世界観で見せる
- メディア・メーカー向けに刺さる
- 作例一覧から自然に見積もりへ導ける
- 概算見積もりをその場で確認できる
- 依頼送信、自動返信、管理保存まで繋がる
- 動き・フォント・配色・余白まで統一された品のあるUIにする

この文書を基準に、実装時の判断ぶれを抑え、サイト全体の統一感を維持すること。
