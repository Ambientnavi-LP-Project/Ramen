# 修正ファイル一式

## 含まれるファイル

- **store.njk** — ページテンプレート（東心斎橋店向けの電話案内モーダル追加）
- **stores.js** — 店舗データ（東心斎橋店の maps_embed を "TBD" に修正）

## 今回の変更内容

1. 東心斎橋店の地図埋め込み・マップリンクを完全非表示（住所テキストは残す）
2. SOCIAL PROOF セクション（TripAdvisor / Google Reviews / Muslim-Friendly の3カード）を全店から削除
3. TableCheck URL がない店舗（"TBD"）では、予約ボタンを押すと電話案内モーダルが開く
   - HEROの「RESERVE YOUR SEAT」
   - ヘッダーの「RESERVE」
   - スティッキーCTAの「RESERVE」
   - 予約セクションの「RESERVE YOUR SEAT」
   - フッターのカレンダーアイコン
   - すべてゴールド枠モーダル → 電話ボタン（tel:リンク）

## 差し替え方法

1. プロジェクト内の元ファイル（同名）を上書き保存
2. Eleventy でビルド（例: `npx @11ty/eleventy`）
3. ビルド結果をデプロイ
