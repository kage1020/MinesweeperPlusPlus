<h1 align="center" style="display:flex;justify-content:center;align-items:center">
    <img src="public/mpp.svg" width="30" />
    <span style="margin-left:0.5rem">Minesweeper++</span>
</h1>

* [日本語](README.md)
* English

---

## What is this game?

<p style="border:1px solid;padding:1rem;border-radius:1rem">
God will determine the end of this minesweeper.
<br />
<br />
How can we know exactly how many mines are around us?<br />
Sometimes the number of landmines you find is half of what it really is...<br />
A game that multiplies such uncertainties.<br />
</p>

* It is an usual minesweeper.
* But it takes more **luck**.
* We will not let you clear it so easily.

Let me show you one example.

If O is a safe square and X is a mine square, the numbers displayed when the square is opened are shown below. a square written as 2 should show **3**, but this is not the case. In this example, only "**2** mines were found. So it could happen that a mine is hidden in a square that you thought was safe to open.

However, this is too difficult, so if there is only one mine around, **it will always show 1**.

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

## How to play?

Please visit [this page](https://minesweeper-plus-plus.vercel.app/).

When you touch the square you want to handle, <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><desc></desc><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M17 4l3 3"></path><path d="M18.5 5.5l-8 8"></path><path d="M8.276 11.284l4.44 4.44a0.968 .968 0 0 1 0 1.369l-2.704 2.704a4.108 4.108 0 0 1 -5.809 -5.81l2.704 -2.703a0.968 .968 0 0 1 1.37 0z"></path></svg> and <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" ariaHidden="true" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 2.25a.75.75 0 01.75.75v.54l1.838-.46a9.75 9.75 0 016.725.738l.108.054a8.25 8.25 0 005.58.652l3.109-.732a.75.75 0 01.917.81 47.784 47.784 0 00.005 10.337.75.75 0 01-.574.812l-3.114.733a9.75 9.75 0 01-6.594-.77l-.108-.054a8.25 8.25 0 00-5.69-.625l-2.202.55V21a.75.75 0 01-1.5 0V3A.75.75 0 013 2.25z" clip-rule="evenodd"></path></svg> will appear. Select either of them to clear the game.

<p align="center" style="font-size:1.5rem">Good luck to see the clear screen of the game.</p>

---

<p align="center">Created by kage1020</p>