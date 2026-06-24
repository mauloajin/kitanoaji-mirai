const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kitanoaji-mirai.vercel.app";

const store = {
  name: "北の味 海来(mirai)｜和食海鮮居酒屋 札幌駅",
  englishName: "Kita no Aji Mirai",
  romanizedName: "Kita no Aji Mirai",
  type: "和食海鮮居酒屋",
  area: "北海道札幌市中央区・札幌駅エリア",
  address: "〒060-0004 北海道札幌市中央区北４条西６丁目 エターナルパンセビル 2階",
  phone: "011-218-2227",
  hours: "月～金 16:30～23:00（料理L.O. 22:00／ドリンクL.O. 22:30）",
  closing: "日曜・祝日。土曜は不定休のため来店前に店舗へ確認",
  mapsUrl: "https://maps.app.goo.gl/23x8PSM8FvQCw6hU8",
  officialUrl: "https://www.hotpepper.jp/strJ003624062/",
  reservationUrl: "https://www.hotpepper.jp/strJ003624062/",
  menuUrl: "https://www.hotpepper.jp/strJ003624062/course/",
  instagramUrl: "https://www.instagram.com/kitanoajimirai/",
  tabelogUrl: "https://tabelog.com/hokkaido/A0101/A010102/1041479/",
  latitude: 43.0655668,
  longitude: 141.3469209
};

const features = [
  "Googleビジネスプロフィールで居酒屋として掲載",
  "札幌駅から徒歩圏の北4条西6丁目",
  "海鮮、刺身、日本酒、北海道料理を中心に確認",
  "Hot Pepperに公式ページ、コース、予約ページを掲載",
  "InstagramアカウントをGoogleプロフィール上の投稿で確認",
  "Googleプロフィールでイートイン利用可、テイクアウト非対応、宅配非対応を確認"
];

const menuItems = [
  "季節の刺身盛り",
  "焼き物",
  "揚げ物",
  "鍋料理",
  "飲み放題付きの組み合わせ",
  "日本酒",
  "海鮮丼",
  "寿司",
  "イカ刺し身",
  "ホタテのバター焼き"
];

const infoRows = [
  ["店舗名", store.name],
  ["英語店名", store.englishName],
  ["ローマ字店名", store.romanizedName],
  ["業態", store.type],
  ["エリア", store.area],
  ["住所", store.address],
  ["電話番号", store.phone],
  ["営業時間", store.hours],
  ["定休日", store.closing],
  ["公式サイト", store.officialUrl],
  ["予約URL", store.reservationUrl],
  ["Googleマップ", store.mapsUrl],
  ["Instagram", store.instagramUrl]
];

const jpKeywords = [
  "北の味 海来", "北の味 海来 mirai", "海来 札幌駅", "海来 札幌", "北の味 海来 札幌",
  "北の味 海来 予約", "北の味 海来 営業時間", "北の味 海来 住所", "北の味 海来 電話番号", "北の味 海来 アクセス",
  "北の味 海来 メニュー", "北の味 海来 コース", "北の味 海来 ホットペッパー", "北の味 海来 食べログ", "北の味 海来 Instagram",
  "札幌駅 居酒屋", "札幌駅 和食", "札幌駅 海鮮", "札幌駅 海鮮居酒屋", "札幌駅 北海道料理",
  "札幌駅 日本酒", "札幌駅 刺身", "札幌駅 寿司", "札幌駅 鍋料理", "札幌駅 飲み放題",
  "札幌駅 ディナー", "札幌駅 予約 居酒屋", "札幌駅 近く 居酒屋", "札幌駅 北口 居酒屋", "札幌駅 中央区 居酒屋",
  "札幌市中央区 居酒屋", "札幌市中央区 海鮮", "札幌市中央区 和食", "北4条西6丁目 居酒屋", "北4条西6丁目 海鮮",
  "エターナルパンセビル 居酒屋", "エターナルパンセビル 海来", "さっぽろ駅 居酒屋", "さっぽろ駅 海鮮", "JR札幌駅 徒歩5分 居酒屋",
  "さっぽろ駅から298m", "北海道 海鮮 居酒屋", "北海道料理 札幌駅", "和食海鮮居酒屋 札幌駅", "刺身盛り 札幌駅",
  "季節の刺身 札幌駅", "焼き物 札幌駅", "揚げ物 札幌駅", "鍋料理 札幌駅", "飲み放題 札幌駅 居酒屋",
  "日本酒 札幌駅 居酒屋", "海鮮丼 札幌駅", "寿司 札幌駅 居酒屋", "イカ刺し身 札幌駅", "ホタテ バター焼き 札幌駅",
  "札幌駅 Googleマップ 居酒屋", "札幌駅 グルメ 海鮮", "札幌駅 夕食 海鮮", "札幌駅 宴会 海鮮", "札幌駅 団体 海鮮",
  "札幌駅 飲食店 予約", "札幌駅 和食 予約", "札幌駅 海鮮 予約", "札幌駅 居酒屋 公式", "海来 ホットペッパー 予約",
  "海来 食べログ 札幌", "kitanoaji mirai", "kita no aji mirai", "mirai sapporo station", "sapporo station izakaya",
  "sapporo station seafood", "sapporo station japanese restaurant", "sapporo seafood izakaya", "sapporo japanese seafood", "sapporo station dinner",
  "sapporo station reservation", "sapporo station sake", "hokkaido seafood restaurant sapporo", "near sapporo station izakaya", "near sapporo station seafood",
  "chuo ku sapporo izakaya", "kita 4 nishi 6 restaurant", "eternal panse building restaurant", "sapporo local dining", "sapporo seafood dinner",
  "japanese dining sapporo station", "seafood and sake sapporo", "sashimi sapporo station", "sushi sapporo station", "hot pot sapporo station",
  "all you can drink sapporo station", "hokkaido cuisine sapporo station", "kita no aji mirai reservation", "kita no aji mirai google maps", "kita no aji mirai hotpepper",
  "kita no aji mirai tabelog", "kita no aji mirai instagram", "札幌駅 海鮮 日本酒", "札幌駅 刺身 日本酒", "札幌駅 居酒屋 日曜定休",
  "札幌駅 居酒屋 16時30分", "北の味 海来 日曜定休"
];

const enKeywords = [
  "Kita no Aji Mirai", "Kita no Aji Mirai Sapporo", "Kita no Aji Mirai reservation", "Kita no Aji Mirai Google Maps", "Mirai Sapporo Station",
  "Sapporo Station izakaya", "Sapporo Station seafood izakaya", "Sapporo Station Japanese restaurant", "Sapporo Station seafood restaurant", "Sapporo Station dinner",
  "Sapporo Station sake", "Sapporo Station sashimi", "Sapporo Station sushi", "Sapporo Station hot pot", "Sapporo Station seafood dinner",
  "Sapporo Station restaurant reservation", "Japanese seafood near Sapporo Station", "izakaya near Sapporo Station", "seafood near Sapporo Station", "Japanese dining near Sapporo Station",
  "Hokkaido seafood restaurant Sapporo", "Hokkaido cuisine Sapporo Station", "Sapporo Chuo Ward izakaya", "Kita 4 Nishi 6 restaurant", "Eternal Panse Building restaurant",
  "Sapporo local dining", "Sapporo seafood and sake", "Sapporo izakaya reservation", "Sapporo Japanese seafood", "Sapporo seafood izakaya reservation",
  "Sapporo Station dinner reservation", "Sapporo Station Japanese dining", "Sapporo Station seafood and sake", "sashimi near Sapporo Station", "sushi near Sapporo Station",
  "sake near Sapporo Station", "hot pot near Sapporo Station", "seafood bowl Sapporo Station", "grilled seafood Sapporo", "fried seafood Sapporo",
  "seasonal sashimi Sapporo", "all you can drink Sapporo Station", "JR Sapporo Station restaurant", "restaurant near JR Sapporo Station", "Sapporo Station restaurant map",
  "Sapporo Station restaurant phone", "Kita no Aji Mirai address", "Kita no Aji Mirai hours", "Kita no Aji Mirai menu", "Kita no Aji Mirai Hot Pepper",
  "Kita no Aji Mirai Tabelog", "Kita no Aji Mirai Instagram", "Sapporo seafood restaurant for dinner", "Sapporo izakaya for groups", "Hokkaido izakaya Sapporo Station",
  "seafood pub Sapporo Station", "Japanese pub Sapporo Station", "local seafood Sapporo", "Sapporo station area restaurant", "Sapporo station area izakaya"
];

const faqs = [
  {
    q: "北の味 海来(mirai)｜和食海鮮居酒屋 札幌駅はどこにありますか？",
    a: `${store.address}にあります。Googleプロフィール上ではJR札幌駅から徒歩5分、さっぽろ駅（札幌市営）から298mと確認できます。`
  },
  {
    q: "北の味 海来(mirai)｜和食海鮮居酒屋 札幌駅の営業時間は？",
    a: `${store.hours}です。土曜は不定休のため、来店前に店舗へ確認してください。`
  },
  {
    q: "北の味 海来(mirai)｜和食海鮮居酒屋 札幌駅の定休日は？",
    a: `${store.closing}です。`
  },
  {
    q: "北の味 海来(mirai)｜和食海鮮居酒屋 札幌駅の予約方法は？",
    a: "Googleプロフィール上の予約導線とHot Pepperの店舗ページから予約ページを確認できます。電話番号は011-218-2227です。"
  },
  {
    q: "北の味 海来(mirai)｜和食海鮮居酒屋 札幌駅ではどのような料理を確認できますか？",
    a: "Googleプロフィールと店舗投稿、Hot Pepperの情報から、海鮮、季節の刺身盛り、焼き物、揚げ物、鍋料理、日本酒などを確認できます。"
  },
  {
    q: "Where is Kita no Aji Mirai located?",
    a: `Kita no Aji Mirai is located at ${store.address}, in the Sapporo Station area of Chuo Ward, Sapporo.`
  },
  {
    q: "How can I make a reservation at Kita no Aji Mirai?",
    a: "Reservations can be made through the reservation link shown on Google Maps or the Hot Pepper page. Phone contact is also listed as 011-218-2227."
  },
  {
    q: "What type of restaurant is Kita no Aji Mirai?",
    a: "It is listed as an izakaya and presents itself as a Japanese seafood izakaya near Sapporo Station."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: store.name,
  alternateName: [store.englishName, store.romanizedName],
  description:
    "札幌駅エリアの和食海鮮居酒屋。Googleビジネスプロフィール、Hot Pepper、食べログ、Instagramで確認できる店舗基本情報を掲載しています。",
  url: siteUrl,
  telephone: store.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "北４条西６丁目 エターナルパンセビル 2階",
    addressLocality: "札幌市中央区",
    addressRegion: "北海道",
    postalCode: "060-0004",
    addressCountry: "JP"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: store.latitude,
    longitude: store.longitude
  },
  servesCuisine: ["和食", "海鮮", "居酒屋"],
  priceRange: "￥4,000～5,000",
  hasMap: store.mapsUrl,
  sameAs: [store.officialUrl, store.instagramUrl, store.tabelogUrl],
  menu: store.menuUrl,
  acceptsReservations: true,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "16:30",
      closes: "23:00"
    }
  ]
};

export default function Home() {
  return (
    <div className="site-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="hero">
        <div className="wrap">
          <nav className="nav" aria-label="店舗内ナビゲーション">
            <div className="brand">{store.name}</div>
            <div className="nav-links">
              <a href="#features">特徴</a>
              <a href="#info">店舗情報</a>
              <a href="#access">アクセス</a>
              <a href="#faq">FAQ</a>
              <a href="#english">English Guide</a>
            </div>
          </nav>

          <div className="hero-grid">
            <div>
              <p className="eyebrow">{store.area} / {store.type}</p>
              <h1>{store.name}</h1>
              <p className="lead">
                札幌駅エリアで確認できる、和食と海鮮を中心にした居酒屋です。
                Googleビジネスプロフィールを基準に、住所、電話番号、営業時間、予約、アクセスを整理しています。
              </p>
              <div className="hero-actions">
                <a className="button" href={store.reservationUrl}>予約ページ</a>
                <a className="button secondary" href={store.mapsUrl}>Googleマップ</a>
              </div>
            </div>
            <aside className="quick-info" aria-label="基本情報">
              <dl>
                <dt>店舗名</dt>
                <dd>{store.name}</dd>
                <dt>業態</dt>
                <dd>{store.type}</dd>
                <dt>住所</dt>
                <dd>{store.address}</dd>
                <dt>電話番号</dt>
                <dd><a href={`tel:${store.phone.replaceAll("-", "")}`}>{store.phone}</a></dd>
                <dt>営業時間</dt>
                <dd>{store.hours}</dd>
              </dl>
            </aside>
          </div>
        </div>
      </header>

      <main className="wrap">
        <section className="section" id="features">
          <h2>特徴</h2>
          <p className="section-intro">
            北の味 海来(mirai)｜和食海鮮居酒屋 札幌駅は、Googleプロフィールと関連ページで札幌駅近くの居酒屋として確認できます。
            店舗投稿では、海鮮、刺身、焼き物、揚げ物、鍋料理、飲み放題の組み合わせについて案内されています。
          </p>
          <div className="two-col">
            <div className="panel">
              <h3>確認できるポイント</h3>
              <div className="chips">
                {features.map((feature) => (
                  <span className="chip" key={feature}>{feature}</span>
                ))}
              </div>
            </div>
            <div className="panel">
              <h3>説明文</h3>
              <p>
                札幌市中央区北4条西6丁目のエターナルパンセビル2階にある和食海鮮居酒屋です。
                札幌駅エリアで、海鮮料理、日本酒、刺身、鍋料理などを探す際に確認しやすいよう、公式性の高い情報を中心にまとめています。
              </p>
              <p>
                Kita no Aji Mirai is a Japanese seafood izakaya in the Sapporo Station area.
                This page summarizes confirmed store details for visitors searching in Japanese or English.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="menu">
          <h2>メニュー情報</h2>
          <p className="section-intro">
            Googleプロフィール、店舗投稿、Hot Pepperで確認できる範囲の料理・飲み物です。
            価格や提供状況は予約ページまたは店舗へ確認してください。
          </p>
          <ul className="menu-list">
            {menuItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="button-row">
            <a className="button light" href={store.menuUrl}>Hot Pepperのメニュー・コース</a>
          </div>
        </section>

        <section className="section" id="info">
          <h2>店舗基本情報</h2>
          <div className="panel">
            <dl className="info-list">
              {infoRows.map(([label, value]) => (
                <div key={label} style={{ display: "contents" }}>
                  <dt>{label}</dt>
                  <dd>
                    {String(value).startsWith("http") ? <a href={value}>{value}</a> : value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="section" id="access">
          <h2>アクセス</h2>
          <p className="section-intro">
            住所は{store.address}です。Googleプロフィールの店舗投稿では、JR札幌駅 徒歩5分、さっぽろ駅（札幌市営）から298mと確認できます。
          </p>
          <div className="button-row">
            <a className="button light" href={store.mapsUrl}>Googleマップで開く</a>
            <a className="button light" href={`tel:${store.phone.replaceAll("-", "")}`}>{store.phone}へ電話</a>
          </div>
        </section>

        <section className="section" id="faq">
          <h2>FAQ</h2>
          <div className="faq">
            {faqs.map((faq) => (
              <details key={faq.q}>
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="section" id="english">
          <h2>English Guide</h2>
          <div className="two-col">
            <div className="panel">
              <h3>Store Guide</h3>
              <dl className="info-list">
                <dt>Store name</dt>
                <dd>{store.englishName}</dd>
                <dt>Romanized name</dt>
                <dd>{store.romanizedName}</dd>
                <dt>Area</dt>
                <dd>Sapporo Station area, Chuo Ward, Sapporo, Hokkaido</dd>
                <dt>Cuisine</dt>
                <dd>Japanese seafood izakaya</dd>
                <dt>Address</dt>
                <dd>{store.address}</dd>
                <dt>Business hours</dt>
                <dd>Monday to Friday, 16:30-23:00</dd>
                <dt>Regular closing days</dt>
                <dd>Sunday and national holidays. Saturday schedule may vary.</dd>
                <dt>Reservation method</dt>
                <dd>Use the Google Maps reservation link, Hot Pepper page, or call {store.phone}.</dd>
              </dl>
            </div>
            <div className="panel">
              <h3>Confirmed Features</h3>
              <p>
                Confirmed sources describe Kita no Aji Mirai as a Japanese seafood izakaya near Sapporo Station.
                Available information includes seafood dishes, seasonal sashimi, grilled items, fried dishes,
                hot pot options, sake, and reservation information through Hot Pepper.
              </p>
              <a className="button light" href={store.mapsUrl}>Open in Google Maps</a>
            </div>
          </div>
        </section>

        <section className="section" id="keywords">
          <h2>関連キーワード</h2>
          <p className="section-intro">
            店舗名、札幌駅エリア、和食海鮮居酒屋、確認できる料理名、予約、アクセスに関する検索語句をまとめています。
          </p>
          <div className="keyword-grid" aria-label="日本語と英語の関連キーワード">
            {[...jpKeywords, ...enKeywords].map((keyword) => (
              <span key={keyword}>{keyword}</span>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap">
          <p>{store.name}</p>
          <p>{store.address}</p>
          <p>{store.phone}</p>
        </div>
      </footer>
    </div>
  );
}
