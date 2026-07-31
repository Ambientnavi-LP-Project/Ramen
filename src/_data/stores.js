// ============================================================================
//  店舗データ  stores.js
// ----------------------------------------------------------------------------
//  このファイルだけを編集すれば、店舗ページが自動で作られます。
//  HTML の知識は不要です。" " で囲まれた部分の文字だけを書き換えてください。
//
//  【編集するときの3つの約束】
//   1. " " （ダブルクォート）は消さない。中の文字だけを書き換える
//   2. 行の最後の , （カンマ）は消さない
//   3. 日本語の " " ではなく、半角の " " を使う（"" ←これ）
//
//  保存 → GitHub にコミットすると、数分で自動的にサイトに反映されます。
// ============================================================================
//
//  ■ 社内名称 → ページの対応表
//
//    このリポジトリ／サイトは burger.halal-food-wagyu.com です。
//    社内名称は自由記入です。社内で呼んでいる名前をそのまま入れてください。
//    （このリポジトリでは、同じ地名でフロア違いの別店舗があるため
//      たまたま全店フロア付きになっています。付けるかどうかは店舗ごとに自由です）
//
//      浅草商店街1F   →  /tokyo/asakusa-shotengai/
//      新大久保1F     →  /tokyo/shin-okubo/
//      東銀座1F       →  /tokyo/higashi-ginza/
//      お初天神1F     →  /osaka/ohatsu-tenjin/
//      京都駅前1F     →  /kyoto/kyoto-station/
//      京都河原町2F   →  /kyoto/kyoto-kawaramachi/
//      清水坂1F       →  /kyoto/kiyomizuzaka/
//      先斗町2F       →  /kyoto/pontocho/
//      嵐山2F         →  /kyoto/arashiyama/
//      錦市場3F       →  /kyoto/nishiki-market/
//
//  ■ 新しい店舗を追加する手順
//
//   1. 下の【コピペ用テンプレート】を丸ごとコピー
//   2. このファイルの一番下、いちばん最後の "};" のすぐ上に貼り付け
//   3. 値を書き換えて保存
//
//  ■【コピペ用テンプレート】ここから ↓（// を外して使ってください）
//
//   // ─────────────────────────────────────────────
//   // ○○店   →  /tokyo/○○/
//   // ─────────────────────────────────────────────
//   {
//     // --- 社内名称（社内での呼び名。ページには出ません）---
//     internal_name: "渋谷",         // 社内で呼んでいる名前をそのまま入れてください（自由記入）
//                                   //   「渋谷のLPを直して」と言えば店舗を特定できるようにするためのものです
//                                   //   同じ地名で複数ある場合だけ "渋谷1F" のように区別が付く形にしてください
//
//     // --- 店名 ---
//     name: "ここに店名（Googleマップの登録名をそのままコピー。英語＋中国語つなげたままでOK）",
//     name_short: "ここに管理用の短い名前（例: Asakusa。ページには出ません）",
//
//     // --- URL（ページのアドレスになります）---
//     region: "tokyo",              // tokyo / kyoto / osaka など。URLの前半になります
//     slug: "shibuya",              // URLの後半。半角英数字とハイフンのみ
//                                   //   → 上の例なら /tokyo/shibuya/ になります
//
//     // --- ページ内の地名表示 ---
//     area_label: "SHIBUYA · TOKYO",      // ヒーロー画像の上に出る小さな文字
//     city: "Shibuya",                    // 「We're Waiting for You in ○○」の○○
//     hero_headline_place: "Tokyo's Shibuya",  // 大見出しの1行目
//
//     // --- 住所・最寄り駅 ---
//     address_jp: "〒150-0002 東京都渋谷区渋谷１丁目１−１",   // 日本語住所（管理用）
//     address_en: "1-1 Shibuya 1-chome, Shibuya-ku, Tokyo 150-0002, Japan",  // ページに出る住所
//     station_en: "Shibuya Station",      // 最寄り駅
//     station_note: "Shibuya, Shibuya-ku",// 町名・区名
//
//     // --- 営業時間 ---
//     hours: "11:00 — 23:00",             // 深夜1時までなら "11:00 — 25:00" と書きます
//     hours_note: "Open Daily",           // 補足（例: "Open Daily · until 1:00 AM"）
//     hours_special: "",                  // 特定曜日だけ違う場合のみ記入。無ければ ""
//
//     // --- モーニング（朝食・ブランチ）---
//     morning: false,                     // モーニングがある店だけ true に変える
//     morning_hours: "",                  // 例: "8:00 — 13:00"
//     morning_note: "",                   // 例: "L.O. 12:30"
//
//     // --- 電話番号 ---
//     tel_display: "03-1234-5678",        // 画面に表示される番号（ハイフンあり）
//     tel_raw: "81312345678",             // タップ発信用。先頭の0を取り、頭に81を付ける
//                                         //   03-1234-5678 → 81312345678
//
//     // --- リンク ---
//     tablecheck_url: "",                 // TableCheckの予約URL。無ければ "" （電話予約ボタンになります）
//     maps_link: "",                      // Googleマップの共有URL（https://maps.app.goo.gl/... ）
//     maps_embed: "",                     // Googleマップ「地図を埋め込む」で出る <iframe src="..."> の
//                                         //   " " の中身のURLだけを貼る。iframeタグごとは貼らない
//     instagram_url: "",                  // 店舗アカウント。空なら公式アカウントが使われます
//
//     // --- Googleレビュー ---
//     google_rating: "",                  // 例: "4.8"。空にするとレビュー欄ごと非表示になります
//     google_count: "",                   // 例: "1,046"
//     google_rating_img: "assets/google_rating.jpg",  // レビュー画面のスクショ画像
//
//     // --- ヒーロー写真 ---
//     hero_photos: [],                    // 空なら黒背景。入れる場合は下のように書きます
//                                         //   hero_photos: [
//                                         //     "assets/hero_shibuya_1.jpg",
//                                         //     "assets/hero_shibuya_2.jpg",
//                                         //   ],
//   },
//
//  ■【コピペ用テンプレート】ここまで ↑
//
//  ■ 画像の置き場所
//    画像はこのフォルダではなく、リポジトリ直下の assets/ に入れてください。
//    ファイル名は半角英数字とハイフンのみ（日本語・スペースは使えません）。
//
// ============================================================================

// 全店舗の共通設定。各店舗で値を書けば、そちらが優先されます。
const defaults = {
  instagram_official: "https://www.instagram.com/5w_tokyo_official/",  // Instagram未設定店のリンク先
  google_rating: "",
  google_count: "",
  google_rating_img: "assets/google_rating.jpg",
  tripadvisor_img: "assets/tripadvisor.jpg",
  morning: false,
  morning_hours: "",
  morning_note: "",
};

const domain = "https://burger.halal-food-wagyu.com";

// ============================================================================
//  店舗一覧（ここから下に店舗を追加していきます）
// ============================================================================
const stores = [
  // ─────────────────────────────────────────────
  // 浅草商店街店   →  /tokyo/asakusa-shotengai/
  // ─────────────────────────────────────────────
  {
    // --- 社内名称（社内での呼び名。自由記入。ページには出ません） ---
    internal_name: "浅草商店街1F",

    // --- 店名 ---
    name: "Wagyu Steak Hamburger (Halal Vegan Gluten Free) Asakusa Restaurant 浅草 和牛 餐厅",
    name_short: "Asakusa Shotengai",

    // --- URL（ページのアドレスになります） ---
    region: "tokyo",
    slug: "asakusa-shotengai",

    // --- ページ内の地名表示 ---
    area_label: "ASAKUSA · TOKYO",
    city: "Asakusa",
    hero_headline_place: "Tokyo's Asakusa",

    // --- 住所・最寄り駅 ---
    address_jp: "〒111-0032 東京都台東区浅草２丁目２６−４",
    address_en: "26-4 Asakusa 2-chome, Taito-ku, Tokyo 111-0032, Japan",
    station_en: "Asakusa Station",
    station_note: "Asakusa, Taito-ku",

    // --- 営業時間 ---
    hours: "11:00 — 23:00",
    hours_note: "Open Daily",
    hours_special: "",

    // --- モーニング（朝食・ブランチ） ---
    morning: false,
    morning_hours: "",
    morning_note: "",

    // --- 電話番号 ---
    tel_display: "03-3844-8764",
    tel_raw: "81338448764",

    // --- リンク ---
    tablecheck_url: "https://www.tablecheck.com/shops/wagyu-burger-steak-teriyaki-5w-tokyo/reserve",
    maps_link: "https://maps.app.goo.gl/fXbRutAYbfwRURvb8",
    maps_embed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3041.1465698468437!2d139.7915157!3d35.7166131!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188f7f6725d0bf%3A0x39af2212744db3fa!2zV2FneXUgU3RlYWsgSGFtYnVyZ2VyIChIYWxhbCBWZWdhbiBHbHV0ZW4gRnJlZSkgQXNha3VzYSBSZXN0YXVyYW50IOa1heiNiSDlkozniZsg6aSQ5Y6F!5e1!3m2!1sja!2sjp!4v1778839909309!5m2!1sja!2sjp",
    instagram_url: "https://www.instagram.com/asakusa_5w_tokyo?igsh=MWtucGx3eHZ0b2h0aQ==",

    // --- Googleレビュー ---
    google_rating: "4.8",
    google_count: "3,461",
    google_rating_img: "assets/asakusa_review.jpg",

    // --- ヒーロー写真 ---
    hero_photos: [
      "assets/hero_asakusa-shotengai_1.jpg",
      "assets/hero_asakusa-shotengai_2.jpg",
      "assets/hero_asakusa-shotengai_3.jpg",
    ],
  },

  // ─────────────────────────────────────────────
  // 京都駅前店   →  /kyoto/kyoto-station/
  // ─────────────────────────────────────────────
  {
    // --- 社内名称（社内での呼び名。自由記入。ページには出ません） ---
    internal_name: "京都駅前1F",

    // --- 店名 ---
    name: "Wagyu Steak Hamburger (Halal Vegan Gluten Free) Kyoto Station Restaurant 京都 和牛 牛排",
    name_short: "Kyoto Ekimae",

    // --- URL（ページのアドレスになります） ---
    region: "kyoto",
    slug: "kyoto-station",

    // --- ページ内の地名表示 ---
    area_label: "KYOTO STATION · KYOTO",
    city: "Kyoto",
    hero_headline_place: "Kyoto Station",

    // --- 住所・最寄り駅 ---
    address_jp: "〒601-8017 京都府京都市南区東九条北烏丸町３−３１",
    address_en: "3-31 Higashikujo Kitakarasuma-cho, Minami-ku, Kyoto-shi, Kyoto 601-8017, Japan",
    station_en: "JR Kyoto Station",
    station_note: "Higashikujo, Minami-ku",

    // --- 営業時間 ---
    hours: "11:00 — 25:00",
    hours_note: "Open Daily · until 1:00 AM",
    hours_special: "",

    // --- モーニング（朝食・ブランチ） ---
    morning: true,
    morning_hours: "8:00 — 13:00",
    morning_note: "L.O. 12:30",

    // --- 電話番号 ---
    tel_display: "080-2983-0026",
    tel_raw: "818029830026",

    // --- リンク ---
    tablecheck_url: "https://www.tablecheck.com/shops/5wkyotostation/reserve",
    maps_link: "https://maps.app.goo.gl/FWXEbcpzn2UBsP5R9",
    maps_embed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d191.80962803300258!2d135.758567!3d34.9813969!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60010914c6123c99%3A0xce2cb01951e322a2!2zV2FneXUgU3RlYWsgSGFtYnVyZ2VyIChIYWxhbCBWZWdhbiBHbHV0ZW4gRnJlZSkgS3lvdG8gU3RhdGlvbiBSZXN0YXVyYW50IOS6rOmDvSDlkozniZsg54mb5o6S!5e1!3m2!1sja!2sjp!4v1778840662153!5m2!1sja!2sjp",
    instagram_url: "https://www.instagram.com/kyoto_beeftei?igsh=MWh0cXF3ajY3ZGZmNw==",

    // --- Googleレビュー ---
    google_rating: "4.6",
    google_count: "1,563",
    google_rating_img: "assets/kyotostation_review.jpg",

    // --- ヒーロー写真 ---
    hero_photos: [
      "assets/hero_kyoto-station_1.jpg",
      "assets/hero_kyoto-station_2.jpg",
    ],
  },

  // ─────────────────────────────────────────────
  // 京都河原町店   →  /kyoto/kyoto-kawaramachi/
  // ─────────────────────────────────────────────
  {
    // --- 社内名称（社内での呼び名。自由記入。ページには出ません） ---
    internal_name: "京都河原町2F",

    // --- 店名 ---
    name: "Kyoto Restaurant Wagyu Steak Hamburger (Halal Vegan Gluten Free) Kawaramachi 京都 和牛 牛排",
    name_short: "Kyoto Kawaramachi",

    // --- URL（ページのアドレスになります） ---
    region: "kyoto",
    slug: "kyoto-kawaramachi",

    // --- ページ内の地名表示 ---
    area_label: "KAWARAMACHI · KYOTO",
    city: "Kyoto",
    hero_headline_place: "Kyoto Kawaramachi",

    // --- 住所・最寄り駅 ---
    address_jp: "〒604-8034 京都府京都市中京区松ケ枝町４５６ ２F",
    address_en: "2F, 456 Matsugaecho, Nakagyo-ku, Kyoto-shi, Kyoto 604-8034, Japan",
    station_en: "Kyoto Kawaramachi",
    station_note: "Matsugaecho, Nakagyo-ku",

    // --- 営業時間 ---
    hours: "11:00 — 25:00",
    hours_note: "Open Daily",
    hours_special: "",

    // --- モーニング（朝食・ブランチ） ---
    morning: false,
    morning_hours: "",
    morning_note: "",

    // --- 電話番号 ---
    tel_display: "090-7262-6058",
    tel_raw: "819072626058",

    // --- リンク ---
    tablecheck_url: "https://www.tablecheck.com/shops/5wkawaramachi/reserve",
    maps_link: "https://maps.app.goo.gl/nANKvRW8xDvM6DC2A",
    maps_embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.972209755835!2d135.7679637!3d35.007585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600109eb0b6e9e0d%3A0x396abcf92231069c!2zS3lvdG8gUmVzdGF1cmFudCBXYWd5dSBTdGVhayBIYW1idXJnZXIgKEhhbGFsIFZlZ2FuIEdsdXRlbiBGcmVlKSBLYXdhcmFtYWNoaSDkuqzpg70g5ZKM54mbIOeJm-aOkg!5e1!3m2!1sja!2sjp!4v1778840775753!5m2!1sja!2sjp",
    instagram_url: "https://www.instagram.com/kyoto_beeftei?igsh=MWh0cXF3ajY3ZGZmNw==",

    // --- Googleレビュー ---
    google_rating: "4.7",
    google_count: "2,206",
    google_rating_img: "assets/kawaramachi_review.jpg",

    // --- ヒーロー写真 ---
    hero_photos: [
      "assets/hero_kyoto-kawaramachi_1.jpg",
      "assets/hero_kyoto-kawaramachi_2.jpg",
    ],
  },

  // ─────────────────────────────────────────────
  // お初天神店   →  /osaka/ohatsu-tenjin/
  // ─────────────────────────────────────────────
  {
    // --- 社内名称（社内での呼び名。自由記入。ページには出ません） ---
    internal_name: "お初天神1F",

    // --- 店名 ---
    name: "Wagyu Steak & Hamburger (Halal Gluten Free) Osaka Station Restaurant",
    name_short: "Ohatsu Tenjin",

    // --- URL（ページのアドレスになります） ---
    region: "osaka",
    slug: "ohatsu-tenjin",

    // --- ページ内の地名表示 ---
    area_label: "OHATSU TENJIN · OSAKA",
    city: "Osaka",
    hero_headline_place: "Osaka Ohatsu Tenjin",

    // --- 住所・最寄り駅 ---
    address_jp: "〒530-0057 大阪府大阪市北区曾根崎２丁目１４−５ エムケー曽根崎ビル 1F",
    address_en: "1F, MK Sonezaki Building, 2-14-5 Sonezaki, Kita-ku, Osaka-shi, Osaka 530-0057, Japan",
    station_en: "Osaka Station",
    station_note: "Sonezaki, Kita-ku",

    // --- 営業時間 ---
    hours: "11:00 — 23:00",
    hours_note: "Open Daily",
    hours_special: "",

    // --- モーニング（朝食・ブランチ） ---
    morning: true,
    morning_hours: "8:00 — 13:00",
    morning_note: "L.O. 12:30",

    // --- 電話番号 ---
    tel_display: "090-2411-0668",
    tel_raw: "819024110668",

    // --- リンク ---
    tablecheck_url: "https://www.tablecheck.com/shops/halal-wagyu-ohatsutennjin/reserve",
    maps_link: "https://maps.app.goo.gl/ycVUMzupbrTkH5K49",
    maps_embed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d208.43404903499732!2d135.50131916090282!3d34.70092857295818!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e737d3d79fad%3A0x34aa836911c15bd3!2sWagyu%20Steak%20%26%20Hamburger%20(Halal%20Gluten%20Free)%20Osaka%20Station%20Restaurant!5e1!3m2!1sja!2sjp!4v1778840872907!5m2!1sja!2sjp",
    instagram_url: "https://www.instagram.com/5w_tokyo_official/",

    // --- Googleレビュー ---
    google_rating: "4.8",
    google_count: "1,046",
    google_rating_img: "assets/ohatsutenjin_review.jpg",

    // --- ヒーロー写真 ---
    hero_photos: [
      "assets/hero_ohatsu-tenjin_1.jpg",
      "assets/hero_ohatsu-tenjin_2.jpg",
      "assets/hero_ohatsu-tenjin_3.jpg",
    ],
  },

  // ─────────────────────────────────────────────
  // 新大久保店   →  /tokyo/shin-okubo/
  // ─────────────────────────────────────────────
  {
    // --- 社内名称（社内での呼び名。自由記入。ページには出ません） ---
    internal_name: "新大久保1F",

    // --- 店名 ---
    name: "Wagyu Steak & Hamburger Pizza (Halal Vegan Gluten Free) Kabuki Shin Okubo Restaurant 新宿 和牛 拉面 餐厅",
    name_short: "Shin-Okubo",

    // --- URL（ページのアドレスになります） ---
    region: "tokyo",
    slug: "shin-okubo",

    // --- ページ内の地名表示 ---
    area_label: "SHIN-OKUBO · TOKYO",
    city: "Tokyo",
    hero_headline_place: "Tokyo Shin-Okubo",

    // --- 住所・最寄り駅 ---
    address_jp: "〒169-0073 東京都新宿区百人町１丁目１−２８ 1F",
    address_en: "1F, 1-28 Hyakunincho 1-chome, Shinjuku-ku, Tokyo 169-0073, Japan",
    station_en: "Shin-Okubo",
    station_note: "Hyakunincho, Shinjuku-ku",

    // --- 営業時間 ---
    hours: "11:00 — 25:00",
    hours_note: "Open Daily · until 1:00 AM",
    hours_special: "",

    // --- モーニング（朝食・ブランチ） ---
    morning: false,
    morning_hours: "",
    morning_note: "",

    // --- 電話番号 ---
    tel_display: "090-2265-7102",
    tel_raw: "819022657102",

    // --- リンク ---
    tablecheck_url: "https://www.tablecheck.com/shops/halal-wagyu-shinokubo-5w-tokyo/reserve",
    maps_link: "https://maps.app.goo.gl/ENuVfdJZuARJvQjn7",
    maps_embed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d760.4621575436136!2d139.7020532!3d35.698213!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d0a84c996ff%3A0xa473959440d7db81!2zV2FneXUgU3RlYWsgJiBIYW1idXJnZXIgUGl6emEgKEhhbGFsIFZlZ2FuIEdsdXRlbiBGcmVlKSBLYWJ1a2kgU2hpbiBPa3VibyBSZXN0YXVyYW50IOaWsOWuvyDlkozniZsg5ouJ6Z2iIOmkkOWOhQ!5e1!3m2!1sja!2sjp!4v1778840962512!5m2!1sja!2sjp",
    instagram_url: "https://www.instagram.com/shinjuku_5w_tokyo?igsh=MW01OGZ5YXhvaWNsZw==",

    // --- Googleレビュー ---
    google_rating: "4.9",
    google_count: "1,112",
    google_rating_img: "assets/shinokubo_review.jpg",

    // --- ヒーロー写真 ---
    hero_photos: [
      "assets/hero_shin-okubo_1.jpg",
      "assets/hero_shin-okubo_2.jpg",
    ],
  },

  // ─────────────────────────────────────────────
  // 清水坂店   →  /kyoto/kiyomizuzaka/
  // ─────────────────────────────────────────────
  {
    // --- 社内名称（社内での呼び名。自由記入。ページには出ません） ---
    internal_name: "清水坂1F",

    // --- 店名 ---
    name: "Wagyu & Vegan Hamburger (Halal Gluten Free) 和牛汉堡 Kiyomizu Temple Restaurant",
    name_short: "Kiyomizuzaka",

    // --- URL（ページのアドレスになります） ---
    region: "kyoto",
    slug: "kiyomizuzaka",

    // --- ページ内の地名表示 ---
    area_label: "KIYOMIZU TEMPLE · KYOTO",
    city: "Kyoto",
    hero_headline_place: "Kyoto Kiyomizu",

    // --- 住所・最寄り駅 ---
    address_jp: "〒605-0862 京都府京都市東山区清水４丁目１４５−１ １F",
    address_en: "1F, 145-1 Kiyomizu 4-chome, Higashiyama-ku, Kyoto-shi, Kyoto 605-0862, Japan",
    station_en: "Kiyomizu Temple",
    station_note: "Kiyomizu, Higashiyama-ku",

    // --- 営業時間 ---
    hours: "9:00 — 21:00",
    hours_note: "Open Daily",
    hours_special: "Fri 9:00 — 21:00",

    // --- モーニング（朝食・ブランチ） ---
    morning: false,
    morning_hours: "",
    morning_note: "",

    // --- 電話番号 ---
    tel_display: "070-3524-6548",
    tel_raw: "817035246548",

    // --- リンク ---
    tablecheck_url: "https://www.tablecheck.com/shops/halal-wagyu-kiyomizuzaka/reserve",
    maps_link: "https://maps.app.goo.gl/wjXaMLqBmmHEDqQH8",
    maps_embed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d191.7720639052673!2d135.7774029!3d34.9974298!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6001096c31b78bf7%3A0xa3d8830499cb8d38!2sWagyu%20%26%20Vegan%20Hamburger%20(Halal%20Gluten%20Free)%20%E5%92%8C%E7%89%9B%E6%B1%89%E5%A0%A1%20Kiyomizu%20Temple%20Restaurant!5e1!3m2!1sja!2sjp!4v1778841131814!5m2!1sja!2sjp",
    instagram_url: "https://www.instagram.com/kiyomizutemple_wagyu?igsh=dDNzZHFlYzZlZ3Zy",

    // --- Googleレビュー ---
    google_rating: "4.5",
    google_count: "638",
    google_rating_img: "assets/kiyomizu_review.jpg",

    // --- ヒーロー写真 ---
    hero_photos: [
      "assets/hero_kiyomizuzaka_1.jpg",
      "assets/hero_kiyomizuzaka_2.jpg",
    ],
  },

  // ─────────────────────────────────────────────
  // 先斗町店   →  /kyoto/pontocho/
  // ─────────────────────────────────────────────
  {
    // --- 社内名称（社内での呼び名。自由記入。ページには出ません） ---
    internal_name: "先斗町2F",

    // --- 店名 ---
    name: "Wagyu Halal Hamburger & Steak Ponto Restaurant 京都 先斗町 和牛 餐厅",
    name_short: "Pontocho",

    // --- URL（ページのアドレスになります） ---
    region: "kyoto",
    slug: "pontocho",

    // --- ページ内の地名表示 ---
    area_label: "PONTOCHO · KYOTO",
    city: "Kyoto",
    hero_headline_place: "Kyoto Pontocho",

    // --- 住所・最寄り駅 ---
    address_jp: "〒604-8016 京都府京都市中京区下樵木町１９１−９ ２F",
    address_en: "2F, 191-9 Shimokorikicho, Nakagyo-ku, Kyoto-shi, Kyoto 604-8016, Japan",
    station_en: "Pontocho",
    station_note: "Shimokorikicho, Nakagyo-ku",

    // --- 営業時間 ---
    hours: "11:00 — 23:00",
    hours_note: "Open Daily",
    hours_special: "",

    // --- モーニング（朝食・ブランチ） ---
    morning: false,
    morning_hours: "",
    morning_note: "",

    // --- 電話番号 ---
    tel_display: "080-6295-0185",
    tel_raw: "818062950185",

    // --- リンク ---
    tablecheck_url: "",
    maps_link: "https://maps.app.goo.gl/AUdW6VdgHGQYwJAf7",
    maps_embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.002921492206!2d135.7709998!3d35.00676610000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600109f8ec8e546d%3A0xb4bace007b0c3c15!2zV2FneXUgSGFsYWwgSGFtYnVyZ2VyICYgU3RlYWsgUG9udG8gUmVzdGF1cmFudCDkuqzpg70g5YWI5paX55S6IOWSjOeJmyDppJDljoU!5e1!3m2!1sja!2sjp!4v1778841232824!5m2!1sja!2sjp",
    instagram_url: "https://www.instagram.com/5w_tokyo_official/",

    // --- Googleレビュー ---
    google_rating: "4.8",
    google_count: "1,080",
    google_rating_img: "assets/pontocho_review.jpg",

    // --- ヒーロー写真 ---
    hero_photos: [
      "assets/hero_pontocho_1.jpg",
      "assets/hero_pontocho_2.jpg",
    ],
  },

  // ─────────────────────────────────────────────
  // 嵐山店   →  /kyoto/arashiyama/
  // ─────────────────────────────────────────────
  {
    // --- 社内名称（社内での呼び名。自由記入。ページには出ません） ---
    internal_name: "嵐山2F",

    // --- 店名 ---
    name: "Wagyu Steak & Hamburger (Halal Vegan Gluten free) Arashiyama 和牛牛排 汉堡 岚山",
    name_short: "Arashiyama",

    // --- URL（ページのアドレスになります） ---
    region: "kyoto",
    slug: "arashiyama",

    // --- ページ内の地名表示 ---
    area_label: "ARASHIYAMA · KYOTO",
    city: "Kyoto",
    hero_headline_place: "Kyoto Arashiyama",

    // --- 住所・最寄り駅 ---
    address_jp: "〒616-8384 京都府京都市右京区嵯峨天龍寺造路町３７−３ 嵐山まつもとビル 2階",
    address_en: "2F, Arashiyama Matsumoto Building, 37-3 Saga Tenryuji Tsukurimichi-cho, Ukyo-ku, Kyoto-shi, Kyoto 616-8384, Japan",
    station_en: "Arashiyama",
    station_note: "Saga, Ukyo-ku",

    // --- 営業時間 ---
    hours: "11:00 — 19:00",
    hours_note: "Open Daily",
    hours_special: "",

    // --- モーニング（朝食・ブランチ） ---
    morning: false,
    morning_hours: "",
    morning_note: "",

    // --- 電話番号 ---
    tel_display: "090-1180-7623",
    tel_raw: "819011807623",

    // --- リンク ---
    tablecheck_url: "https://tablecheck.com/halal-wagyu-kyoto-arashiyama-annex/reserve",
    maps_link: "https://maps.app.goo.gl/a631nd44vdsBEFZu6",
    maps_embed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d244.65173791376475!2d135.6776938!3d35.0143079!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6001a99212dffc35%3A0xf645c30a9a0b98e8!2zV2FneXUgU3RlYWsgJiBIYW1idXJnZXIgKEhhbGFsIFZlZ2FuIEdsdXRlbiBmcmVlKSBBcmFzaGl5YW1hIOWSjOeJm-eJm-aOkiDmsYnloKEg5bKa5bGx!5e1!3m2!1sja!2sjp!4v1782899640237!5m2!1sja!2sjp",
    instagram_url: "https://www.instagram.com/5w_tokyo_official/",

    // --- Googleレビュー ---
    google_rating: "",
    google_count: "",
    google_rating_img: "assets/google_rating.jpg",

    // --- ヒーロー写真 ---
    hero_photos: [],
  },

  // ─────────────────────────────────────────────
  // 錦市場店   →  /kyoto/nishiki-market/
  // ─────────────────────────────────────────────
  {
    // --- 社内名称（社内での呼び名。自由記入。ページには出ません） ---
    internal_name: "錦市場3F",

    // --- 店名 ---
    name: "Wagyu Hamburger Halal Kobe Beef Vegan Food Nishiki Market Restaurant 锦市场和牛餐厅",
    name_short: "Nishiki Market",

    // --- URL（ページのアドレスになります） ---
    region: "kyoto",
    slug: "nishiki-market",

    // --- ページ内の地名表示 ---
    area_label: "NISHIKI MARKET · KYOTO",
    city: "Kyoto",
    hero_headline_place: "Kyoto Nishiki Market",

    // --- 住所・最寄り駅 ---
    address_jp: "〒604-8057 京都府京都市中京区麩屋町通錦小路上る梅屋町５０１ 3F",
    address_en: "3F, 501 Umeyacho, Nakagyo-ku, Kyoto-shi, Kyoto 604-8057, Japan",
    station_en: "Nishiki Market",
    station_note: "Umeyacho, Nakagyo-ku",

    // --- 営業時間 ---
    hours: "11:00 — 23:00",
    hours_note: "Open Daily",
    hours_special: "",

    // --- モーニング（朝食・ブランチ） ---
    morning: false,
    morning_hours: "",
    morning_note: "",

    // --- 電話番号 ---
    tel_display: "070-4430-2059",
    tel_raw: "817044302059",

    // --- リンク ---
    tablecheck_url: "",
    maps_link: "",
    maps_embed: "",
    instagram_url: "https://www.instagram.com/5w_tokyo_official/",

    // --- Googleレビュー ---
    google_rating: "",
    google_count: "",
    google_rating_img: "assets/google_rating.jpg",

    // --- ヒーロー写真 ---
    hero_photos: [],
  },

  // ─────────────────────────────────────────────
  // 東銀座店   →  /tokyo/higashi-ginza/
  // ─────────────────────────────────────────────
  {
    // --- 社内名称（社内での呼び名。自由記入。ページには出ません） ---
    internal_name: "東銀座1F",

    // --- 店名 ---
    name: "Japanese Food Wagyu Beef (Halal) Ramen Hamburger Ginza Restaurant 5W-Tokyo (东京和牛拉麺)",
    name_short: "Ginza",

    // --- URL（ページのアドレスになります） ---
    region: "tokyo",
    slug: "higashi-ginza",

    // --- ページ内の地名表示 ---
    area_label: "GINZA · TOKYO",
    city: "Ginza",
    hero_headline_place: "Tokyo's Ginza",

    // --- 住所・最寄り駅 ---
    address_jp: "〒104-0061 東京都中央区銀座３丁目１２−１６",
    address_en: "12-16 Ginza 3-chome, Chuo-ku, Tokyo 104-0061, Japan",
    station_en: "Higashi-Ginza Station",
    station_note: "Ginza, Chuo-ku",

    // --- 営業時間 ---
    hours: "8:00 — 25:00",
    hours_note: "Open Daily · until 1:00 AM",
    hours_special: "",

    // --- モーニング（朝食・ブランチ） ---
    morning: true,
    morning_hours: "8:00 — 13:00",
    morning_note: "L.O. 12:30",

    // --- 電話番号 ---
    tel_display: "03-6278-7139",
    tel_raw: "81362787139",

    // --- リンク ---
    tablecheck_url: "https://www.tablecheck.com/shops/halal-wagyu-ginza-5w-tokyo/reserve",
    maps_link: "https://maps.app.goo.gl/DyQunnGLgQuuQmcY8",
    maps_embed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7478.453910310958!2d139.768631!3d35.671435!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b8a1b1f7ca7%3A0x8d81bba28006abf!2zSmFwYW5lc2UgRm9vZCBXYWd5dSBCZWVmIChIYWxhbCkgUmFtZW4gSGFtYnVyZ2VyIEdpbnphIFJlc3RhdXJhbnQgNVctVG9reW8gKOS4nOS6rOWSjOeJm-aLiem6uik!5e1!3m2!1sja!2sjp!4v1785475907515!5m2!1sja!2sjp",
    instagram_url: "https://www.instagram.com/5w_tokyo_official/",

    // --- Googleレビュー ---
    google_rating: "",
    google_count: "",
    google_rating_img: "assets/google_rating.jpg",

    // --- ヒーロー写真 ---
    hero_photos: [],
  },
];

// ============================================================================
//  ここから下はプログラムです。編集しないでください。
// ============================================================================
const merged = stores.map((store) => {
  const m = { ...defaults, ...store };
  if (!m.instagram_url) m.instagram_url = m.instagram_official;
  return m;
});

export default {
  domain,
  defaults,
  stores: merged,
};
