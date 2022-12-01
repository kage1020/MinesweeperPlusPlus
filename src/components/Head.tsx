import NextHead from 'next/head'

const Head = () => {
  const url = process.env.NEXT_PUBLIC_ROOT_URL ?? ''
  return (
    <NextHead>
      <title>Minesweeper++</title>
      <meta name='viewport' content='width=device-width,initial-scale=1' />
      <meta name='description' content='Minesweeper++' />
      <link rel='icon' href='favicon.ico' />
      <link rel='manifest' href='manifest.json' />
      <link rel='apple-touch-icon' href='apple-touch-icon.png' />
      <meta name='description' content='new Minesweeper game with lack' />
      <meta name='theme-color' content='#111827' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@kage1020' />
      <meta name='twitter:title' content='Minesweeper++' />
      <meta name='twitter:description' content='new Minesweeper game with lack' />
      <meta name='twitter:image' content='logo.png' />
      <meta property='og:title' content='Minesweeper++' />
      <meta property='og:description' content='new Minesweeper game with lack' />
      <meta property='og:url' content={url} />
      <meta property='og:image' content='mpp.png' />
      <meta property='og:site_name' content='Minesweeper++' />
      <meta property='og:locale' content='ja_JP' />
    </NextHead>
  )
}

export default Head
