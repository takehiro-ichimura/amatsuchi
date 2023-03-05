# Amatsuchi

Amatsuchi は「縦書き・横スクロール・レスポンシブWebサイト」専用のCSSフレームワークです。

Web雑誌「偏向」のためのフレームワークとして絶賛開発中です。

https://65bunjitsu.tokyo/

Amatsuchi.css は協力者を探しています。協力いただける方は 65bunjitsu@gmail.com までご連絡お待ちしています。


## 使い方

1. CSSファイルをインストールしてください。
    
```
npm install --save amatsuchi
```
    
2. HTMLファイルのheadタグ内に、以下のようにlinkタグを追加してください。
    
```
<link rel="stylesheet" href="node_modules/amatsuchi.css/dist/amatsuchi.css">
```
    
3. ページに`amatsuchi`クラスを追加してください。これにより、縦書きに最適化されたページが生成されます。
    
```
<body class="amatsuchi">
    ...
</body>
```

4. 句読点の「ぶら下げ」機能を利用する場合は以下のように"burasage"クラスを付与してください。

 ```
<script src="node_modules/amatsuchi.css/dist/main.js"/>
 ```

```
<body class="amatsuchi burasage">
    ...
</body>
```

## カスタマイズ

Amatsuchi.cssは、基本的なタグのオーバーライドやページ用のクラスを提供しています。ページに追加することで、簡単に縦書きに最適化されたデザインを実現できます。

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

## フロートボタン

Amatsuchi.cssには、フロートボタン用のスタイルも含まれています。以下のように、ボタンを実装することができます。

```
<div class="ama-float">
    <a href="#">^</a>
</div>
```

## ライセンス

Amatsuchi.cssはMITライセンスのもとで公開されています。詳細については、LICENSEファイルを参照してください。

## 開発用メモ

- debug用モジュールbuild

```
npm run start
```

- 公開用モジュールbuild

```
npm run build
```