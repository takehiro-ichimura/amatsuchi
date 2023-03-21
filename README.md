# amatsuchi

amatsuchi は「縦書き・横スクロール・レスポンシブWebサイト」専用のCSS・jsフレームワークです。

[Web雑誌「偏向」](https://65bunjitsu.tokyo/)のためのスタイルシートをライブラリ化しています。

- 手軽に印刷された縦書き文書のようなページを作ることができます。

- 「[CSS Writing Modes Level3](https://triple-underscore.github.io/css-writing-modes3-ja.html)」を最大限活かした上で、ブラウザごとの差異を吸収できるよう微調整しています。多数あるjavascriptを利用した縦書きライブラリよりもレンダリングが美しく、軽量です。

- スマートフォンでも美しいデザインを目指し実装しています。

## 使い方

1. CSSファイルをインストールしてください。
    
```
npm install --save amatsuchi
```
    
2. HTMLファイルのheadタグ内に、以下のようにlinkタグを追加してください。
    
```
<link rel="stylesheet" href="node_modules/amatsuchi.css/dist/amatsuchi.css">
```

ブラウザ判定(傍線などに使用)、句読点ぶら下げ機能を使う場合は、以下のjsも読み込んでください。

 ```
<script src="node_modules/amatsuchi.css/dist/main.js"/>
 ```
    
3. ページに`amatsuchi`クラスを追加してください。これにより、縦書きに最適化されたページが生成されます。
    
```
<body class="amatsuchi">
    ...
</body>
```


## CSS

amatsuchiは、基本的なタグのオーバーライドやページ用のクラスを提供しています。ページに追加することで、簡単に縦書きに最適化されたデザインを実現できます。

また、Amatsuchi.cssはSCSSで記述されています。カスタムデザインを作成する場合は、変数をオーバーライドするか、SCSSファイルを編集してください。

### .midashi-box

`.midashi-box`は、見出しを囲む要素に追加するクラスです。以下のスタイルが適用されます。

- padding: 0 0 20px 20px;

`.midashi-box`の子要素には`.midashi`と`.hissha`があります。`.midashi`は見出しのスタイルを設定し、`.hissha`は署名を右寄せにします。

### .yoko-bo

`.yoko-bo`は、横書きに最適化された要素に追加するクラスです。以下のスタイルが適用されます。

- writing-mode: horizontal-tb;

### .rinku

`.rinku`は、下線を引く要素に追加するクラスです。以下のスタイルが適用されます。

- text-decoration-skip-ink: none;
- text-decoration-line: underline;

### .migi-bo

`.migi-bo`は、右に線を引く要素に追加するクラスです。以下のスタイルが適用されます。

- text-decoration-line: overline;
- text-decoration-skip-ink: none;
- text-decoration-thickness: from-font;

### .hidari-bo

`.hidari-bo`は、左に線を引く要素に追加するクラスです。以下のスタイルが適用されます。

- text-decoration-skip-ink: none;
- text-decoration-line: underline;
- text-decoration-thickness: from-font;

### .migi-nami

`.migi-nami`は、右に波線を引く要素に追加するクラスです。以下のスタイルが適用されます。

- text-decoration-line: overline;
- text-decoration-skip-ink: none;
- text-decoration-thickness: from-font;
- text-decoration-style: wavy;

### .hidari-nami

`.hidari-nami`は、左に波線を引く要素に追加するクラスです。以下のスタイルが適用されます。

- text-decoration-skip-ink: none;
- text-decoration-line: underline;
- text-decoration-thickness: from-font;
- text-decoration-style: wavy;

### .dash

`.dash`は、文字と文字の間にダッシュを入れる要素に追加するクラスです。以下のスタイルが適用されます。

- letter-spacing: -0.2em;
- margin: 2px 0 4px 0;

### .jisage

`.jisage`は、段落の先頭に字下げを設定する要素に追加するクラスです。以下のスタイルが適用されます。

- text-indent: 1rem;

## js

### 句読点ぶら下げ

以下のように"burasage"クラスを付与してください。かつて存在した[hanging-punctuation](https://developer.mozilla.org/ja/docs/Web/CSS/hanging-punctuation)のような句読点ぶら下げをjavascriptによる処理で実現します。改行が減り、文章が読みやすくなります。

```
<body class="amatsuchi burasage">
    ...
</body>
```

### フロートボタン

amatsuchiには、フロートボタン用のスタイルも含まれています。以下のように、ボタンを実装することができます。

```
<div id="ama-float">
    <a href="#">トップへ</a>
</div>
```

## ライセンス

amatsuchiはMITライセンスのもとで公開されています。詳細については、LICENSEファイルを参照してください。

## 最後に

amatsuchi は協力者を探しています。協力いただける方は 65bunjitsu@gmail.com までご連絡お待ちしています。

本ライブラリは[npmに公開](https://www.npmjs.com/package/amatsuchi)されています。
