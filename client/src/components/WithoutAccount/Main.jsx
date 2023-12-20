import { ArrowRight } from '../Icons'

export function Main () {
  return (
      <main className='app-main-no-user'>
        <div className='hero-content'>
          <h1>Write, plan, share.
          With AI at your side.</h1>

          <h3>Notion is the connected workspace where better, faster work happens.</h3>

          <button className='get-notion-free'>
          Get Notion free
          <ArrowRight />
          </button>
        </div>

        <img className='hero-image' src='https://www.notion.so/cdn-cgi/image/format=webp,width=2048/https://images.ctfassets.net/spoqsaf9291f/3csRrNi1u82ymVlwjfo2E6/02516e52af15501acd822d3e7a03baf9/home-hero.png' alt='Hero image'/>
      </main>
  )
}
