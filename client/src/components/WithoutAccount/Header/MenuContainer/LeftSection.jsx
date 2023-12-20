import { ProductDetails } from '../Details/ProductDetails.jsx'
import { ResourcesDetails } from '../Details/ResourcesDetails.jsx'
import { SolutionsDetails } from '../Details/SolutionsDetails.jsx'
import { DownloadDetails } from '../Details/DownloadDetails.jsx'
export function LeftSection () {
  return (
    <div className='left-section'>
      <ProductDetails />

      <SolutionsDetails />

      <ResourcesDetails />

      <DownloadDetails />

      <span className='special-span pricing'>
        Pricing
      </span>
    </div>
  )
}
