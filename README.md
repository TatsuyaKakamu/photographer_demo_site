# BRAND AUTOMOTIVE PHOTOGRAPHY

車写真を主軸とした高級感あるポートフォリオサイトです。**デモサイト**として公開されており、フォーム送信は擬似的に動作します（実際のメール送信は行いません）。

## ローカル起動

```bash
npm run dev
```

http://localhost:3000

## GitHub Pages 公開

`main` ブランチへ push すると `.github/workflows/pages.yml` が `public/` を GitHub Pages にデプロイします。初回のみリポジトリの **Settings → Pages → Build and deployment → Source** を **GitHub Actions** に切り替えてください。

公開URL（リポジトリ配信の場合）:
`https://<owner>.github.io/photographer_demo_site/`

## 実装内容
- Home / Portfolio / Estimate / About / Notes / Thanks
- シーン別フィルタ付きポートフォリオ（20枚）
- 概算見積もりシミュレーター（税計算・内訳）
- フォーム送信時のデモモーダル（GitHub Pages 上ではこのフローのみ動作）
- ローカル開発時のみ有効な依頼送信API（`/api/request`）と保存先 `data/requests.json` / `data/mail.log`
