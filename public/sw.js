if (!self.define) {
  let e,
    a = {};
  const i = (i, s) => (
    (i = new URL(i + ".js", s).href),
    a[i] ||
      new Promise((a) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = i), (e.onload = a), document.head.appendChild(e);
        } else (e = i), importScripts(i), a();
      }).then(() => {
        let e = a[i];
        if (!e) throw new Error(`Module ${i} didn’t register its module`);
        return e;
      })
  );
  self.define = (s, n) => {
    const r =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (a[r]) return;
    let o = {};
    const d = (e) => i(e, r),
      t = { module: { uri: r }, exports: o, require: d };
    a[r] = Promise.all(s.map((e) => t[e] || d(e))).then((e) => (n(...e), o));
  };
}
define(["./workbox-4d767a27"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/app-build-manifest.json",
          revision: "6c24c7832bc9c27fbcad2a7e2c2f6d61",
        },
        {
          url: "/_next/static/RCtGpwGwG_CsjyEl6Blat/_buildManifest.js",
          revision: "2ec694eb52ae4f523f265a46bae4d768",
        },
        {
          url: "/_next/static/RCtGpwGwG_CsjyEl6Blat/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/118-2d9e49d1c4271b64.js",
          revision: "RCtGpwGwG_CsjyEl6Blat",
        },
        {
          url: "/_next/static/chunks/138-086b740e053a910b.js",
          revision: "RCtGpwGwG_CsjyEl6Blat",
        },
        {
          url: "/_next/static/chunks/23-641f19c1ac50cb79.js",
          revision: "RCtGpwGwG_CsjyEl6Blat",
        },
        {
          url: "/_next/static/chunks/49-f45b3127fec99247.js",
          revision: "RCtGpwGwG_CsjyEl6Blat",
        },
        {
          url: "/_next/static/chunks/562-dcd404c4e75d7493.js",
          revision: "RCtGpwGwG_CsjyEl6Blat",
        },
        {
          url: "/_next/static/chunks/726-5492e23c2596cf53.js",
          revision: "RCtGpwGwG_CsjyEl6Blat",
        },
        {
          url: "/_next/static/chunks/8e1d74a4-cb8bed11cd3d6e45.js",
          revision: "RCtGpwGwG_CsjyEl6Blat",
        },
        {
          url: "/_next/static/chunks/app/_not-found/page-204ae098e9f8bb88.js",
          revision: "RCtGpwGwG_CsjyEl6Blat",
        },
        {
          url: "/_next/static/chunks/app/cart/page-3ed4ed7ebc78c65b.js",
          revision: "RCtGpwGwG_CsjyEl6Blat",
        },
        {
          url: "/_next/static/chunks/app/checkout/page-0518d3178a1c8047.js",
          revision: "RCtGpwGwG_CsjyEl6Blat",
        },
        {
          url: "/_next/static/chunks/app/layout-dddad9215e5d2654.js",
          revision: "RCtGpwGwG_CsjyEl6Blat",
        },
        {
          url: "/_next/static/chunks/app/loading-3dd07b82734a1737.js",
          revision: "RCtGpwGwG_CsjyEl6Blat",
        },
        {
          url: "/_next/static/chunks/app/page-cb41e82f142d249e.js",
          revision: "RCtGpwGwG_CsjyEl6Blat",
        },
        {
          url: "/_next/static/chunks/app/products/%5Bid%5D/page-7eb637976e038107.js",
          revision: "RCtGpwGwG_CsjyEl6Blat",
        },
        {
          url: "/_next/static/chunks/app/profile/page-40e4085fd4f99e14.js",
          revision: "RCtGpwGwG_CsjyEl6Blat",
        },
        {
          url: "/_next/static/chunks/fd9d1056-78e5f27b69484e13.js",
          revision: "RCtGpwGwG_CsjyEl6Blat",
        },
        {
          url: "/_next/static/chunks/framework-f66176bb897dc684.js",
          revision: "RCtGpwGwG_CsjyEl6Blat",
        },
        {
          url: "/_next/static/chunks/main-75d7188130c2d91c.js",
          revision: "RCtGpwGwG_CsjyEl6Blat",
        },
        {
          url: "/_next/static/chunks/main-app-7eef1abb20a53f94.js",
          revision: "RCtGpwGwG_CsjyEl6Blat",
        },
        {
          url: "/_next/static/chunks/pages/_app-6a626577ffa902a4.js",
          revision: "RCtGpwGwG_CsjyEl6Blat",
        },
        {
          url: "/_next/static/chunks/pages/_error-1be831200e60c5c0.js",
          revision: "RCtGpwGwG_CsjyEl6Blat",
        },
        {
          url: "/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",
          revision: "79330112775102f91e1010318bae2bd3",
        },
        {
          url: "/_next/static/chunks/webpack-91b2d14d0f678b80.js",
          revision: "RCtGpwGwG_CsjyEl6Blat",
        },
        {
          url: "/_next/static/css/d0bdb08e6d1a4e88.css",
          revision: "d0bdb08e6d1a4e88",
        },
        {
          url: "/_next/static/media/cart.e55d9029.svg",
          revision: "3be436862911ed754e5221751410de35",
        },
        {
          url: "/_next/static/media/dashboard.cdddfc01.svg",
          revision: "e5fc6b394082673b3e3d96f63ecc5f00",
        },
        {
          url: "/_next/static/media/favorite.adf7e1b1.svg",
          revision: "f49f903e48a51a256697e6f7652a7036",
        },
        {
          url: "/_next/static/media/meat.14eb80a7.jpg",
          revision: "8cf9391ed1e2762f1b8891fe5008531c",
        },
        {
          url: "/_next/static/media/menu-4.ac8f7bfe.svg",
          revision: "c8468af0962d4fefb5172b171a016b4a",
        },
        {
          url: "/_next/static/media/search.24420773.svg",
          revision: "c05d928f0047463267db96ead9733e02",
        },
        {
          url: "/_next/static/media/turn-back2.49ddb37c.png",
          revision: "0303e4940c7a52c6f693c9fa509321b2",
        },
        {
          url: "/_next/static/media/veg&fruits.5c40dfcf.jpg",
          revision: "b1a286fdf7b92a85e2e92023f3c386d7",
        },
        {
          url: "/android/android-launchericon-144-144.png",
          revision: "720fbdecf25113c936c912a7985399f5",
        },
        {
          url: "/android/android-launchericon-192-192.png",
          revision: "5c81a92a0d5bc408bc02ed828dad3b3b",
        },
        {
          url: "/android/android-launchericon-48-48.png",
          revision: "8a550095cf71b5f53f1f0f6ea2ea5646",
        },
        {
          url: "/android/android-launchericon-512-512.png",
          revision: "31bf81469fb36638373b9ec298f46fb1",
        },
        {
          url: "/android/android-launchericon-72-72.png",
          revision: "8cd4ebeea571f1a91c6b409ab3864ca5",
        },
        {
          url: "/android/android-launchericon-96-96.png",
          revision: "993b3c9ff40e64e7535c74d1bd9fcfb8",
        },
        { url: "/icons.json", revision: "5dbbc3fe59816e65ba28e355a58ea45c" },
        { url: "/ios/100.png", revision: "58fbe18c1ee22f203c194a3af0b31022" },
        { url: "/ios/1024.png", revision: "09f8e8c8140cfe5a3af67c2f7bb64eb0" },
        { url: "/ios/114.png", revision: "ba54b77e61ae7277167e3cf042232f61" },
        { url: "/ios/120.png", revision: "5dd56345db9adbde2502a22bd6baaaa0" },
        { url: "/ios/128.png", revision: "be600b4dc9205b820d664363d5b62ad2" },
        { url: "/ios/144.png", revision: "720fbdecf25113c936c912a7985399f5" },
        { url: "/ios/152.png", revision: "6f3970a1807f550d123bad2dbd51b661" },
        { url: "/ios/16.png", revision: "76db689cdeee5042abfe9eea13a1a256" },
        { url: "/ios/167.png", revision: "dc1067b5c633d2404c29e1c82781aa99" },
        { url: "/ios/180.png", revision: "1afa63744109f77cfe0fe1c3df1b41c3" },
        { url: "/ios/192.png", revision: "5c81a92a0d5bc408bc02ed828dad3b3b" },
        { url: "/ios/20.png", revision: "05c7985a0884ebb7d98ce6cfcba65560" },
        { url: "/ios/256.png", revision: "e2f3590f3d290233b2318b047c2bb05f" },
        { url: "/ios/29.png", revision: "03fb55fa12f4e62509c446f2868d9318" },
        { url: "/ios/32.png", revision: "697696789ee55ffd08fcc41d52875d86" },
        { url: "/ios/40.png", revision: "5234e0d1f35289d042ed3c5ff30dd080" },
        { url: "/ios/50.png", revision: "77126dc5e095ab4b48141c627e2aa0f9" },
        { url: "/ios/512.png", revision: "31bf81469fb36638373b9ec298f46fb1" },
        { url: "/ios/57.png", revision: "aae8c77a7fe26a3157e8ac9e2e79b3d5" },
        { url: "/ios/58.png", revision: "78a39c0288bd3c0285bee9ae94edbfd5" },
        { url: "/ios/60.png", revision: "82c55b687b0cd6dfd0007652b3bb036c" },
        { url: "/ios/64.png", revision: "ec22e9c7f2606633381936c10b750e1a" },
        { url: "/ios/72.png", revision: "8cd4ebeea571f1a91c6b409ab3864ca5" },
        { url: "/ios/76.png", revision: "072c2ce216610b8f9f00341619da2a82" },
        { url: "/ios/80.png", revision: "c713947c359e89b68339b5b9c5f6a5e3" },
        { url: "/ios/87.png", revision: "95f213aa2d49a89b26cb0b2da107832f" },
        { url: "/manifest.json", revision: "1da62c16fdc386d80d038bc7ca1f68bb" },
        {
          url: "/windows11/LargeTile.scale-100.png",
          revision: "a37f20ec5e750f1121667a3b4a69bd44",
        },
        {
          url: "/windows11/LargeTile.scale-125.png",
          revision: "291e6360d45358fc47bab8abd9f06501",
        },
        {
          url: "/windows11/LargeTile.scale-150.png",
          revision: "d205e21299ddecf8e452056e51b60807",
        },
        {
          url: "/windows11/LargeTile.scale-200.png",
          revision: "7306f6ec725cba688ca49c60b78084b6",
        },
        {
          url: "/windows11/LargeTile.scale-400.png",
          revision: "511e94363aae7c05578e8e0116f5b2f4",
        },
        {
          url: "/windows11/SmallTile.scale-100.png",
          revision: "ce46b236dffa877038f3f65a78d02b42",
        },
        {
          url: "/windows11/SmallTile.scale-125.png",
          revision: "e78725a64370fd0f380060806cb4a629",
        },
        {
          url: "/windows11/SmallTile.scale-150.png",
          revision: "43a009d7b47472de5a0c6a2f8f911fff",
        },
        {
          url: "/windows11/SmallTile.scale-200.png",
          revision: "604805d0957235b360da891bba00c6a8",
        },
        {
          url: "/windows11/SmallTile.scale-400.png",
          revision: "da4cb39074fce7b34fe00c3ba69f99f6",
        },
        {
          url: "/windows11/SplashScreen.scale-100.png",
          revision: "e745fea7d3f0730782efd2bd491a9e5e",
        },
        {
          url: "/windows11/SplashScreen.scale-125.png",
          revision: "edd397ef98e27ebb4469e432bd2c2c02",
        },
        {
          url: "/windows11/SplashScreen.scale-150.png",
          revision: "d87d4f70a6c1342aea56ac1b53dc3671",
        },
        {
          url: "/windows11/SplashScreen.scale-200.png",
          revision: "d2eb7faef35b182203a81a68e554eab9",
        },
        {
          url: "/windows11/SplashScreen.scale-400.png",
          revision: "61708f523fe2c333f627f4072dbfe640",
        },
        {
          url: "/windows11/Square150x150Logo.scale-100.png",
          revision: "651620b0c581cbb6219d213c28ca9ac6",
        },
        {
          url: "/windows11/Square150x150Logo.scale-125.png",
          revision: "ddd8a6249f23eae7215e97f7738a7de1",
        },
        {
          url: "/windows11/Square150x150Logo.scale-150.png",
          revision: "673ee52d2e9c09b3971c739613146ab9",
        },
        {
          url: "/windows11/Square150x150Logo.scale-200.png",
          revision: "78ed3f75de3a2dadead06c0bae15d3cd",
        },
        {
          url: "/windows11/Square150x150Logo.scale-400.png",
          revision: "f1cc3ec6f7c8920297d96f067894ad0d",
        },
        {
          url: "/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",
          revision: "dafc380b21747e3046bbda1ad2a0b734",
        },
        {
          url: "/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",
          revision: "74f2d49fbae7ad7be76bf448eac6e011",
        },
        {
          url: "/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",
          revision: "edc601b3126333ab3e6a39eaeed72196",
        },
        {
          url: "/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",
          revision: "b35e287bd4db43193529423920a220e0",
        },
        {
          url: "/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",
          revision: "bf0a4ed46174c73c7296d1f027c5012f",
        },
        {
          url: "/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",
          revision: "6bcda944b54a1886dbb0a67ffffe8269",
        },
        {
          url: "/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",
          revision: "1d130d202a73dbc50401d13b97d95389",
        },
        {
          url: "/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",
          revision: "c9067977ba8cce7e0c286f1e411f9f05",
        },
        {
          url: "/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",
          revision: "87ce0062f78a96b252a8a70a30b01a11",
        },
        {
          url: "/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",
          revision: "1be994487a94d94e6bed0369b52afb41",
        },
        {
          url: "/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",
          revision: "0f201ff1bef1ad1df047948cd1bd6654",
        },
        {
          url: "/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",
          revision: "e56b59f430515c3936dfd5cb5e479ea2",
        },
        {
          url: "/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",
          revision: "bf976f2f422b6248cdbb98f0d0293752",
        },
        {
          url: "/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",
          revision: "fd15319d559e3630a32b523c715d26e4",
        },
        {
          url: "/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",
          revision: "b2e707d0a8351c37f05644024123c624",
        },
        {
          url: "/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",
          revision: "dafc380b21747e3046bbda1ad2a0b734",
        },
        {
          url: "/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",
          revision: "74f2d49fbae7ad7be76bf448eac6e011",
        },
        {
          url: "/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",
          revision: "edc601b3126333ab3e6a39eaeed72196",
        },
        {
          url: "/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",
          revision: "b35e287bd4db43193529423920a220e0",
        },
        {
          url: "/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",
          revision: "bf0a4ed46174c73c7296d1f027c5012f",
        },
        {
          url: "/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",
          revision: "6bcda944b54a1886dbb0a67ffffe8269",
        },
        {
          url: "/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",
          revision: "1d130d202a73dbc50401d13b97d95389",
        },
        {
          url: "/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",
          revision: "c9067977ba8cce7e0c286f1e411f9f05",
        },
        {
          url: "/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",
          revision: "87ce0062f78a96b252a8a70a30b01a11",
        },
        {
          url: "/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",
          revision: "1be994487a94d94e6bed0369b52afb41",
        },
        {
          url: "/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",
          revision: "0f201ff1bef1ad1df047948cd1bd6654",
        },
        {
          url: "/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",
          revision: "e56b59f430515c3936dfd5cb5e479ea2",
        },
        {
          url: "/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",
          revision: "bf976f2f422b6248cdbb98f0d0293752",
        },
        {
          url: "/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",
          revision: "fd15319d559e3630a32b523c715d26e4",
        },
        {
          url: "/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",
          revision: "b2e707d0a8351c37f05644024123c624",
        },
        {
          url: "/windows11/Square44x44Logo.scale-100.png",
          revision: "87ce0062f78a96b252a8a70a30b01a11",
        },
        {
          url: "/windows11/Square44x44Logo.scale-125.png",
          revision: "195616d30d9f6bdf36a5cf916c720a06",
        },
        {
          url: "/windows11/Square44x44Logo.scale-150.png",
          revision: "b8f0ae04fca507fe6b45aa059a9bb746",
        },
        {
          url: "/windows11/Square44x44Logo.scale-200.png",
          revision: "99ae1ab16d160b7657bc18d8389602fa",
        },
        {
          url: "/windows11/Square44x44Logo.scale-400.png",
          revision: "be8a2f715eacda7315422352b7a0ca8c",
        },
        {
          url: "/windows11/Square44x44Logo.targetsize-16.png",
          revision: "dafc380b21747e3046bbda1ad2a0b734",
        },
        {
          url: "/windows11/Square44x44Logo.targetsize-20.png",
          revision: "74f2d49fbae7ad7be76bf448eac6e011",
        },
        {
          url: "/windows11/Square44x44Logo.targetsize-24.png",
          revision: "edc601b3126333ab3e6a39eaeed72196",
        },
        {
          url: "/windows11/Square44x44Logo.targetsize-256.png",
          revision: "b35e287bd4db43193529423920a220e0",
        },
        {
          url: "/windows11/Square44x44Logo.targetsize-30.png",
          revision: "bf0a4ed46174c73c7296d1f027c5012f",
        },
        {
          url: "/windows11/Square44x44Logo.targetsize-32.png",
          revision: "6bcda944b54a1886dbb0a67ffffe8269",
        },
        {
          url: "/windows11/Square44x44Logo.targetsize-36.png",
          revision: "1d130d202a73dbc50401d13b97d95389",
        },
        {
          url: "/windows11/Square44x44Logo.targetsize-40.png",
          revision: "c9067977ba8cce7e0c286f1e411f9f05",
        },
        {
          url: "/windows11/Square44x44Logo.targetsize-44.png",
          revision: "87ce0062f78a96b252a8a70a30b01a11",
        },
        {
          url: "/windows11/Square44x44Logo.targetsize-48.png",
          revision: "1be994487a94d94e6bed0369b52afb41",
        },
        {
          url: "/windows11/Square44x44Logo.targetsize-60.png",
          revision: "0f201ff1bef1ad1df047948cd1bd6654",
        },
        {
          url: "/windows11/Square44x44Logo.targetsize-64.png",
          revision: "e56b59f430515c3936dfd5cb5e479ea2",
        },
        {
          url: "/windows11/Square44x44Logo.targetsize-72.png",
          revision: "bf976f2f422b6248cdbb98f0d0293752",
        },
        {
          url: "/windows11/Square44x44Logo.targetsize-80.png",
          revision: "fd15319d559e3630a32b523c715d26e4",
        },
        {
          url: "/windows11/Square44x44Logo.targetsize-96.png",
          revision: "b2e707d0a8351c37f05644024123c624",
        },
        {
          url: "/windows11/StoreLogo.scale-100.png",
          revision: "77126dc5e095ab4b48141c627e2aa0f9",
        },
        {
          url: "/windows11/StoreLogo.scale-125.png",
          revision: "c56b5abecc102397a7ef228f63d1d9d2",
        },
        {
          url: "/windows11/StoreLogo.scale-150.png",
          revision: "22079f97fb4dcc63f9e2f395b7fd67a0",
        },
        {
          url: "/windows11/StoreLogo.scale-200.png",
          revision: "58fbe18c1ee22f203c194a3af0b31022",
        },
        {
          url: "/windows11/StoreLogo.scale-400.png",
          revision: "7677c38f594c5bdc7a7e4b5a169d2abf",
        },
        {
          url: "/windows11/Wide310x150Logo.scale-100.png",
          revision: "65052a155d897ecfe09b8e1c18fa6533",
        },
        {
          url: "/windows11/Wide310x150Logo.scale-125.png",
          revision: "d1a6964dd9fd6a596416e783a3dc7124",
        },
        {
          url: "/windows11/Wide310x150Logo.scale-150.png",
          revision: "fdfa4279e21e8f36a791a4fa62dc7cd1",
        },
        {
          url: "/windows11/Wide310x150Logo.scale-200.png",
          revision: "e745fea7d3f0730782efd2bd491a9e5e",
        },
        {
          url: "/windows11/Wide310x150Logo.scale-400.png",
          revision: "d2eb7faef35b182203a81a68e554eab9",
        },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: a,
              event: i,
              state: s,
            }) =>
              a && "opaqueredirect" === a.type
                ? new Response(a.body, {
                    status: 200,
                    statusText: "OK",
                    headers: a.headers,
                  })
                : a,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const a = e.pathname;
        return !a.startsWith("/api/auth/") && !!a.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET"
    );
});
