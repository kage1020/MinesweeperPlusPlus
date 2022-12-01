<h1 align="center">
    <img src="public/title-light.png" alt="Minesweeper++" width="420" />
</h1>

- 日本語
- [English](README.en.md)

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

- 普通のマインスイーパーです。
- だけど普通のマインスイーパーよりも **運** が必要です。
- そう簡単にクリアはさせません。

1 つ例を示しましょう。

O を安全なマス、X を地雷マスとすると、マスを開いたときに表示される数字は下のようになります。2 と書かれているマスは本来 **3** が表示されなければいけませんが、そうはなっていません。この例では地雷は" **2 つしか見つからなかった**" のです。安全だと思って開いたら地雷が隠れていた、といったことが起こりうるわけですね。

ただ、これでは余りにも難しすぎるので、周りに地雷が 1 個しかない場合には **必ず 1 が表示される** ようになっています。

| O   | O   | X   | O   |
| --- | --- | --- | --- |
| O   | 1   | 2   | X   |
| O   | O   | O   | X   |

## どうやって遊ぶ？

[このページ](https://minesweeper-plus-plus.vercel.app/)にアクセスして画面の指示に従って遊んでください。

操作したいマスを触ると、<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><desc></desc><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M17 4l3 3"></path><path d="M18.5 5.5l-8 8"></path><path d="M8.276 11.284l4.44 4.44a0.968 .968 0 0 1 0 1.369l-2.704 2.704a4.108 4.108 0 0 1 -5.809 -5.81l2.704 -2.703a0.968 .968 0 0 1 1.37 0z"></path></svg> と <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" ariaHidden="true" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 2.25a.75.75 0 01.75.75v.54l1.838-.46a9.75 9.75 0 016.725.738l.108.054a8.25 8.25 0 005.58.652l3.109-.732a.75.75 0 01.917.81 47.784 47.784 0 00.005 10.337.75.75 0 01-.574.812l-3.114.733a9.75 9.75 0 01-6.594-.77l-.108-.054a8.25 8.25 0 00-5.69-.625l-2.202.55V21a.75.75 0 01-1.5 0V3A.75.75 0 013 2.25z" clip-rule="evenodd"></path></svg> が表示されます。それぞれ「マスを開く」・「旗を立てる」の操作ですので、どちらかを選択してゲームをクリアしてください。

<p align="center" style="font-size:1.5rem">ゲームのクリア画面を見れるよう頑張ってください。</p>

---

<p align="center">Created by kage1020</p>
