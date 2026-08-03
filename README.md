# halal-wagyu-burger — 店舗ページ管理マニュアル

Halal Wagyu Burger の店舗ランディングページです。
**店舗の追加も、営業時間の変更も、`src/_data/stores.js` という1つのファイルを編集するだけ**でできます。
HTML やプログラミングの知識は必要ありません。

公開URL: https://burger.halal-food-wagyu.com

---

## 1. いちばんよく使う操作

### 営業時間や電話番号を直したい

1. GitHub で `src/_data/stores.js` を開く
2. 右上の **鉛筆マーク（Edit this file）** をクリック
3. 直したい店舗を探して、`" "` の中の文字を書き換える
4. ページ下の **Commit changes** を押す
5. 3〜5分待つと、サイトに反映されます

### 新しい店舗を追加したい

`src/_data/stores.js` の**冒頭にコピペ用のテンプレート**が入っています。
それを丸ごとコピーして、ファイルの一番下（`];` のすぐ上）に貼り付け、値を書き換えるだけです。

貼り付けたあと保存すると、`/tokyo/shibuya/` のようなページが自動で作られます。
**新しいファイルを作る必要はありません。**

### 編集するときの3つの約束

| | |
|---|---|
| ① | `" "`（ダブルクォート）は消さない。**中の文字だけ**を書き換える |
| ② | 行の最後の `,`（カンマ）は消さない |
| ③ | 日本語の `” ”` ではなく、**半角の** `" "` を使う |

これを守れば壊れません。もし壊れてもサイトは前の状態のままなので、
GitHub の History から元に戻せます。

---

## 2. ファイルの説明

| ファイル / フォルダ | 役割 | 触る？ |
|---|---|---|
| `src/_data/stores.js` | **店舗データ。ここだけ編集すればOK** | ◎ よく触る |
| `assets/` | 写真・動画の置き場所 | ○ 画像追加のとき |
| `src/store.njk` | 店舗ページの見た目のひな型（全店舗で共通） | △ デザイン変更のとき |
| `src/index.njk` | トップページ。浅草店へ転送するだけの1枚 | ✕ ほぼ触らない |
| `vercel.json` | 公開設定・旧URLの転送設定 | ✕ ほぼ触らない |
| `.eleventy.js` | ページ生成の設定 | ✕ 触らない |
| `package.json` | 使っているプログラムの一覧 | ✕ 触らない |
| `_site/` | 自動生成されるページ（GitHubには入りません） | ✕ 触らない |

### 仕組み（かんたんに）

```
src/_data/stores.js  （店舗データ：10店舗ぶん）
          +
src/store.njk        （見た目のひな型：1枚）
          ↓  自動生成
/tokyo/asakusa-shotengai/  /kyoto/pontocho/  /tokyo/higashi-ginza/ …
```

ひな型は1枚しかありません。**店舗が増えてもページを作る必要はなく、データを足すだけ**です。
逆に言うと、`store.njk` を1か所直すと**全店舗のページが同時に変わります**。

---

## 3. 社内名称でページを特定する

`stores.js` の各店舗に `internal_name` という項目があります（ページには表示されません）。
**社内で呼んでいる名前をそのまま入れる自由記入の項目**です。決まった書き方はありません。

このリポジトリでは、同じ地名でフロア違いの別店舗（＝別サイト・別リポジトリ）があるため、
たまたま全店フロア付きになっています。フロアを付けるかどうかは店舗ごとに自由です。

**このリポジトリ / サイト: `burger.halal-food-wagyu.com`**

| 社内名称 | ページ | モーニング |
|---|---|---|
| 浅草商店街1F | https://burger.halal-food-wagyu.com/tokyo/asakusa-shotengai/ | |
| 新大久保1F | https://burger.halal-food-wagyu.com/tokyo/shin-okubo/ | |
| 東銀座1F | https://burger.halal-food-wagyu.com/tokyo/higashi-ginza/ | あり |
| お初天神1F | https://burger.halal-food-wagyu.com/osaka/ohatsu-tenjin/ | あり |
| 京都駅前1F | https://burger.halal-food-wagyu.com/kyoto/kyoto-station/ | あり |
| 京都河原町2F | https://burger.halal-food-wagyu.com/kyoto/kyoto-kawaramachi/ | |
| 清水坂1F | https://burger.halal-food-wagyu.com/kyoto/kiyomizuzaka/ | |
| 先斗町2F | https://burger.halal-food-wagyu.com/kyoto/pontocho/ | |
| 嵐山2F | https://burger.halal-food-wagyu.com/kyoto/arashiyama/ | |
| 錦市場3F | https://burger.halal-food-wagyu.com/kyoto/nishiki-market/ | |

「**東銀座1FのLPを直したい**」のように社内名称で呼べば、
この表から `src/_data/stores.js` の該当店舗（`slug: "higashi-ginza"`）を特定できます。

ここに載っていないフロア（例: 東銀座2F）は、**このリポジトリではありません**。
別のリポジトリを確認してください。

---

## 4. 店名の書き方

店名は `name` という**1つの項目にまとめてあります**。英語と中国語を分けません。

```js
name: "Wagyu Steak Hamburger (Halal Vegan Gluten Free) Asakusa Restaurant 浅草 和牛 餐厅",
```

**Googleマップに登録されている店名を、そのままコピーして貼り付けてください。**
ページ上でも改行されず、この1行がそのまま表示されます。

`name_short` は管理用の短い名前です。画像の代替テキストなどに使われるだけで、
お客さまの目に見える場所には出ません。

---

## 5. 画像の追加

写真は**リポジトリ直下の `assets/` フォルダ**に入れます（`src/assets/` ではありません）。

1. GitHub で `assets/` フォルダを開く
2. **Add file → Upload files** で画像をアップロード
3. `stores.js` からファイル名で指定する

```js
hero_photos: [
  "assets/hero_shibuya_1.jpg",
  "assets/hero_shibuya_2.jpg",
],
```

- ファイル名は**半角英数字とハイフンのみ**（日本語・スペースは使えません）
- 1枚あたり **500KB以下**が目安。大きいとページが重くなります
- `hero_photos` を空 `[]` にすると、その部分は黒背景になります

---

## 6. 出したり消したりできるもの

`stores.js` の値によって、ページのセクションが自動で出たり消えたりします。

| 項目 | 空 / false のとき | 値を入れたとき |
|---|---|---|
| `google_rating` | Googleレビュー欄が**まるごと消える** | 星評価とレビュー欄が出る |
| `hero_photos` | ヒーロー中央が黒背景 | 3秒ごとに切り替わるスライドショー |
| `tablecheck_url` | 「電話で予約」ボタンになる | 「オンライン予約」ボタンになる |
| `maps_embed` | 地図が出ない | 地図が埋め込まれる |
| `instagram_url` | 公式アカウントにリンク | 店舗アカウントにリンク |
| `morning` | モーニング欄が出ない | モーニング欄が出る（下記） |

### モーニング（朝食・ブランチ）欄

朝営業のある店舗だけ、`morning` を `true` にしてください。

```js
morning: true,
morning_hours: "8:00 — 13:00",
morning_note: "L.O. 12:30",
```

現在の対象は **東銀座 / お初天神 / 京都駅前** の3店舗です。
これを `true` にすると、メニュー欄の下にモーニング専用セクションが追加され、
ページタイトルや説明文にも breakfast / brunch のキーワードが自動で入ります。

---

## 7. 地図の入れ方

Googleマップで店舗を開き、**共有 → 地図を埋め込む** を選ぶと、
`<iframe src="https://www.google.com/maps/embed?pb=..." ...></iframe>` というコードが出ます。

このうち **`src="` と `"` の間のURLだけ**をコピーして貼り付けてください。
`<iframe>` タグごと貼らないよう注意してください。

```js
maps_embed: "https://www.google.com/maps/embed?pb=!1m14!...",
```

`maps_link`（ボタンのリンク先）は、**共有 → リンクをコピー** で出る
`https://maps.app.goo.gl/...` を貼ります。

---

## 8. 電話番号

2つの項目があります。

```js
tel_display: "03-1234-5678",   // 画面に表示される番号
tel_raw: "81312345678",        // タップで発信するための番号
```

`tel_raw` は、**先頭の 0 を取って、頭に 81 を付ける**だけです。

| 表示 | tel_raw |
|---|---|
| 03-1234-5678 | 81**3**12345678 |
| 090-1234-5678 | 81**90**12345678 |
| 080-1234-5678 | 81**80**12345678 |

---

## 9. 言語切り替えについて

各店舗ページの**右下**に、EN / FR / 中文 / 한국어 の切り替えボタンがあります。
**全店舗のページに入っています。** 特別な設定は不要です。

- 選んだ言語はブラウザに保存され、次に来たときも同じ言語で表示されます
- 翻訳文は `src/store.njk` の一番下、`translations` という部分にまとまっています
- **店名・住所・営業時間・電話番号は翻訳されません**（`stores.js` の値がそのまま出ます）

翻訳文を直したいときは `store.njk` の `translations` を編集しますが、
プログラムの部分なので、不安なときはエンジニアに依頼してください。

---

## 10. 困ったとき

**サイトが更新されない**
Vercel のビルドが失敗している可能性があります。GitHub の該当コミットに
赤い ✕ が付いていないか確認してください。付いていたら、直前の編集で
`"` や `,` が消えている可能性が高いです。

**間違えて壊してしまった**
GitHub でファイルを開き、右上の **History** から前のバージョンを開いて、
その内容をコピーして貼り直せば元に戻せます。

**ページのデザインを変えたい / 新しいセクションを足したい**
`src/store.njk` の編集が必要です。全店舗に影響するので、エンジニアに依頼してください。

---

## 11. 計測イベント一覧

このLPで実際に実装しているイベントです。
計測は **GTM コンテナ `GTM-5DGT9H6L`** 1本に集約しています。

| イベント名 | 発火する場所 | 実装 |
|---|---|---|
| `reserve_click` | ナビ／ヒーロー／予約セクション／画面下スティッキーバーの TableCheck リンク（Reserve・Reserve a seat・Reserve online・Check Availability） | `data-ga-event="reserve_click"` |
| `tel_click` | ヒーローの電話番号、アクセス欄の電話番号、予約セクションの「Or call us」、および `tablecheck_url` が空の店舗で表示される電話CTA | `data-ga-event="tel_click"` |
| `map_click` | 地図の下の「↗ Directions」、予約セクション下の「Directions」（Googleマップへの外部リンク） | `data-ga-event="map_click"` |
| `outbound_click` | 予約セクション下の Instagram リンク | `data-ga-event="outbound_click"` |
| `scroll_depth` | ページのスクロール到達率 | GTM組み込みトリガー（コード実装なし） |

### 仕組み

計測方式は **1つだけ**です。計測したい要素に `data-ga-event="イベント名"` を付けると、
ページ末尾の委譲リスナー1本が `dataLayer` に push します。

```js
window.dataLayer.push({ event: el.getAttribute('data-ga-event') });
```

店舗名・エリア・チャネルなどの**パラメータはコード側で組み立てません**。
GTM 側で URL（ホスト名／パス）から解決します。
そのため `stores.json` に店舗を追加しても、計測用の設定を書き足す必要はありません。

### 実装していないもの

- **地図の埋め込み（iframe）**は計測対象外です。ブラウザの仕様上、iframe 内部のクリックは
  親ページの JavaScript では検知できません。地図の反応は「↗ Directions」リンクで見てください。
- **ページ内リンク**（「Reserve your seat →」などページ下部の予約セクションへスクロールするリンク）は
  計測していません。予約行動そのものではなく、着地先の予約ボタンで二重に数えないためです。
- **お問い合わせの mailto リンク**は、方針のイベント一覧に該当するものがないため計測していません。
- `reservation_form_submit` / `final_check_view` は自社予約フォームを使うLP用のイベントです。
  このLPは TableCheck への外部遷移のみのため、実装していません。
- `course_select` はコース選択UIがあるLP用のイベントです。このLPにはコース選択UIがありません。

---

## 12. 開発者向けメモ

- Eleventy 3 / Nunjucks。`src/store.njk` が `pagination` で全店舗ぶんを生成
- `package.json` は `"type": "module"` のため、`stores.js` は **ESM**
  （`module.exports` ではなく `export default`）
- 画像はリポジトリ直下の `assets/` を `.eleventy.js` の
  `addPassthroughCopy("assets")` で `_site/assets/` に出力
- ローカル確認: `npm install` → `npm run dev`
- 本番: Vercel が `main` への push を検知して `npm run build` → `_site/` を配信
