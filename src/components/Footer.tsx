const Footer = () => {
  return (
    <footer className='flex flex-wrap items-center justify-center space-x-4 text-black dark:text-white'>
      <div>ver 1.2.0</div>
      <div>
        <a
          href='https://github.com/kage1020'
          target='_blank'
          rel='noopener noreferrer'
          className='p-2 underline'
        >
          &copy; kage1020
        </a>
      </div>
      <div>
        <a
          href='https://docs.google.com/forms/d/e/1FAIpQLSc_t3XtTd7dpoIcgaWoMOemFguE_BGj2px5sQ77ww0HkhKqYg/viewform?usp=pp_url&entry.1199509574=%E7%89%B9%E3%81%AB%E3%81%AA%E3%81%97'
          target='_blank'
          rel='noopener noreferrer'
          className='p-2 underline'
        >
          フィードバック
        </a>
      </div>
    </footer>
  )
}

export default Footer
