<h1 align="center" style="display:flex;justify-content:center;align-items:center">
    <img src="public/mpp.svg" width="30" />
    <span style="margin-left:0.5rem">Minesweeper++</span>
</h1>

* 日本語
* [English](README.en.md)

---

## どんなゲーム？

<p style="border:1px solid;padding:1rem;border-radius:1rem">
このマインスイーパーの決着は神が握っている
<br />
<br />
なぜまわりの地雷の数が正確にわかるのだろう？<br />
見つけた地雷の数が実際の半分・・・なんてときもあるだろう<br />
そんな不確定要素を掛け合わせたゲーム<br />
</p>

* 普通のマインスイーパーです。
* だけど普通のマインスイーパーよりも **運** が必要です。
* そう簡単にクリアはさせません。

1つ例を示しましょう。

Oを安全なマス、Xを地雷マスとすると、マスを開いたときに表示される数字は下のようになります。2と書かれているマスは本来 **3** が表示されなければいけませんが、そうはなっていません。この例では地雷は" **2つしか見つからなかった**" のです。安全だと思って開いたら地雷が隠れていた、といったことが起こりうるわけですね。

ただ、これでは余りにも難しすぎるので、周りに地雷が1個しかない場合には **必ず1が表示される** ようになっています。

<div style="display:grid;place-items:center;text-align:center;font-size:2rem;margin-bottom:1rem">
<div style="display:grid;grid-template-columns:repeat(4,1fr);width:240px;border-bottom:1px solid">
    <div style="height:60px;width:60px;display:grid;place-items:center;border-right:1px solid">O</div>
    <div style="height:60px;width:60px;display:grid;place-items:center;border-right:1px solid">O</div>
    <div style="height:60px;width:60px;display:grid;place-items:center;border-right:1px solid">X</div>
    <div style="height:60px;width:60px;display:grid;place-items:center">O</div>
</div>
<div style="display:grid;grid-template-columns:repeat(4,1fr);width:240px;border-bottom:1px solid">
    <div style="height:60px;width:60px;display:grid;place-items:center;border-right:1px solid">O</div>
    <div style="height:60px;width:60px;display:grid;place-items:center;border-right:1px solid">1</div>
    <div style="height:60px;width:60px;display:grid;place-items:center;border-right:1px solid">2</div>
    <div style="height:60px;width:60px;display:grid;place-items:center">X</div>
</div>
<div style="display:grid;grid-template-columns:repeat(4,1fr);width:240px">
    <div style="height:60px;width:60px;display:grid;place-items:center;border-right:1px solid">O</div>
    <div style="height:60px;width:60px;display:grid;place-items:center;border-right:1px solid">O</div>
    <div style="height:60px;width:60px;display:grid;place-items:center;border-right:1px solid">O</div>
    <div style="height:60px;width:60px;display:grid;place-items:center">X</div>
</div>
</div>

## どうやって遊ぶ？

[このページ](https://minesweeper-plus-plus.vercel.app/)にアクセスして画面の指示に従って遊んでください。

操作したいマスを触ると、<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><desc></desc><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M17 4l3 3"></path><path d="M18.5 5.5l-8 8"></path><path d="M8.276 11.284l4.44 4.44a0.968 .968 0 0 1 0 1.369l-2.704 2.704a4.108 4.108 0 0 1 -5.809 -5.81l2.704 -2.703a0.968 .968 0 0 1 1.37 0z"></path></svg> と <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" ariaHidden="true" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 2.25a.75.75 0 01.75.75v.54l1.838-.46a9.75 9.75 0 016.725.738l.108.054a8.25 8.25 0 005.58.652l3.109-.732a.75.75 0 01.917.81 47.784 47.784 0 00.005 10.337.75.75 0 01-.574.812l-3.114.733a9.75 9.75 0 01-6.594-.77l-.108-.054a8.25 8.25 0 00-5.69-.625l-2.202.55V21a.75.75 0 01-1.5 0V3A.75.75 0 013 2.25z" clip-rule="evenodd"></path></svg> が表示されます。それぞれ「マスを開く」・「旗を立てる」の操作ですので、どちらかを選択してゲームをクリアしてください。

<p align="center" style="font-size:1.5rem">ゲームのクリア画面を見れるよう頑張ってください。</p>

---

<p align="center">Created by kage1020</p>