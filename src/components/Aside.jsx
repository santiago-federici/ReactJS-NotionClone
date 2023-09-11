import { LuClock9 } from 'react-icons/lu'
import { AiOutlineSearch, AiOutlinePlus } from 'react-icons/ai'
import { FiSettings } from 'react-icons/fi'
import { FaPlusCircle } from 'react-icons/fa'
import { ImScissors } from 'react-icons/im'
import { BiTrendingUp } from 'react-icons/bi'
import { RiFocus2Line } from 'react-icons/ri'
import { LiaPortraitSolid } from 'react-icons/lia'
import { GrTemplate } from 'react-icons/gr'
import { TfiImport } from 'react-icons/tfi'
import { BsTrash2Fill, BsChevronRight } from 'react-icons/bs'

import './Aside.css'

export function Aside() {
  return (
    <aside>
      <div className="user-container">
        <img
          src="https://lh3.googleusercontent.com/a/AAcHTtc6qAUeOnXlMeW8kAEPVdkCl5UgiNSRJWoyezVHdRlP=s100"
        />
        <h3 className="aside-username">Santiago Federicis Notion</h3>
      </div>

      <section className='aside__section'>
        <p><AiOutlineSearch class="icons-size" />Search</p>
        <p><LuClock9 class="icons-size" />Updates</p>
        <p><FiSettings class="icons-size" />Settings & members</p>
        <p><FaPlusCircle class="icons-size" />New page</p>
      </section>

      <section className='aside__section'>
        <p>
          <BsChevronRight class="right-arrow" />
          <ImScissors class="icons-size" />
          Taks List
        </p>
        <p>
          <BsChevronRight class="right-arrow" />
          <BiTrendingUp class="icons-size" />
          Tasks
        </p>
        <p>
          <BsChevronRight class="right-arrow" />
          <RiFocus2Line class="icons-size" />
          Projects
        </p>
        <p><AiOutlinePlus />Add a page</p>
      </section>

      <section className='aside__section'>
        <p><LiaPortraitSolid class="icons-size" />Create a team space</p>
        <p><GrTemplate class="icons-size" />Templates</p>
        <p><TfiImport class="icons-size" />Import</p>
        <p><BsTrash2Fill class="icons-size" />Trash</p>
      </section>
    </aside>
  )
}
