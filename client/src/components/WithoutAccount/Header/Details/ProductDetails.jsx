import { BookWiki, DocsDocs, DropdownRight, Sparkles, TargetProjects } from '../../../Icons.jsx'

export function ProductDetails () {
  return (
    <details className='product-details'>
      <summary>
        Product
        <DropdownRight />
      </summary>
      <div className='dropdown-info-container product-dropdown'>
        <div className='product-left'>
          <div>
            <BookWiki />
            <div>
              <p className='product-title'>Wikis</p>
              <span className='product-extra-content'>Centralize your knowledge</span>
            </div>
          </div>

          <div>
            <TargetProjects/>
            <div>
              <p className='product-title'>Projects</p>
              <span className='product-extra-content'>For every team or size</span>
            </div>
          </div>

          <div>
            <DocsDocs/>
            <div>
              <p>Docs</p>
              <span className='product-extra-content'>Simple & powerful</span>
            </div>
          </div>

          <div>
            <Sparkles/>
            <div>
              <p className='product-title'>Notion AI</p>
              <span className='product-extra-content'>Integrated AI assistant</span>
            </div>
          </div>
        </div>

        <div className='product-right'>
          <div>
            <p>Template Gallery</p>
            <span className='product-extra-content'>Setups to get you started</span>
          </div>
          <div>
            <p>Customer stories</p>
            <span className='product-extra-content'>See how teams use Notion</span>
          </div>
          <div>
            <p>Connections</p>
            <span className='product-extra-content'>Connect your tools to Notion</span>
          </div>
        </div>
      </div>
    </details>
  )
}
