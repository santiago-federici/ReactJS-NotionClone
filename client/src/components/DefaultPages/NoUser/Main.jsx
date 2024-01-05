import { ArrowRight } from '../../Icons'

export function Main () {
  return (
      <main className='app-main-no-user'>
        <div className='hero-content'>
          <h1>New year, new plans.</h1>

          <h3>Your workspace to write, organize, and collaborate. With AI by your side.</h3>

          <button className='get-notion-free'>
          Get Notion free
          <ArrowRight />
          </button>
        </div>

        <img className='hero-image' src='https://www.notion.so/cdn-cgi/image/format=webp,width=3840/https://images.ctfassets.net/spoqsaf9291f/3aQs9PTDRM8Rj1gIQfNGeG/a0af6bf6ad27e40abfd0c6fb35dcb825/hero_xmas-rev.png' alt='Hero image'/>
      </main>
  )
}
