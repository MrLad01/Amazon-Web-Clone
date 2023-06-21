import { Link } from "react-router-dom" 

const Menu = () => {
  return (
    <div>
      <div className="flex bg-gray-900 text-white justify-around h-15 items-center">
        <img src="" alt="" />
        <div>
            <img src="" alt="" />
            <h3 className="text-xs mb-0 pb-0 text-gray-300">Hello</h3>
            <h2 className="text-2sm font-semibold mt-0 pt-0">Select your address</h2>
        </div>
        <div className="flex">
            <select name="" id="" placeholder="All" className="text-gray-500 bg-gray-100 h-10 text-xs px-2.5 rounded-l-md border border-solid border-gray-300 "><option value="" className="text-xs px-2.5 ">All</option></select>
            <input type="text" placeholder="Search Amazon" className="h-10 w-136 indent-2 text-base text-gray-600 placeholder:text-gray-500" />
            <button className="h-10 w-11 bg-orange-300 rounded-r-md"></button>
        </div>
        <div>
            <div><img src="" alt=""  /><span className="text-base font-semibold">EN</span></div>
        </div>
        <div>
            <h3 className="text-xs mb-0 pb-0">Hello, sign in</h3>
            <h2 className="text-2sm font-semibold mt-0 pt-0">Account & Lists</h2>
        </div>
        <div>
            <h3 className="text-xs mb-0 pb-0">Returns</h3>
            <h2 className="text-2sm font-semibold mt-0 pt-0">& Orders</h2>
        </div>
        <div className="text-2sm font-semibold mt-0 pt-0"><img src="" alt="" />cart</div>
      </div>
      <div className="bg-slate-700 text-white flex justify-between px-5 text-sm h-10 items-center">
        <div className="flex">
          <div className="mr-5 font-semibold"><img src="" alt="" />All</div>
          <ul className="flex justify-around gap-4 font-medium">           
              <li><Link to="">Clinic</Link> </li>
              <li><Link to="">Best Sellers</Link>  </li>
              <li><Link to="">Customer Service</Link>  </li>
              <li><Link to="">Amazon Basics</Link>  </li>
              <li><Link to="">New Releases</Link>  </li>
              <div>Prime</div>
              <li><Link to="">Music</Link> </li>
              <li><Link to="">Today's Deals</Link> </li>
              <li><Link to="">Books</Link> </li>
              <li><Link to="">Registry</Link> </li>
              <li><Link to="">Fashion</Link> </li>
              <li><Link to="">Amazon Home</Link> </li>
              <li><Link to="">Pharmacy</Link> </li>
              <li><Link to=""> Gift Cards</Link></li>
          </ul>
        </div>
        <div className="font-semibold">Watch Creed III</div>
      </div>
    </div>
  )
}

export default Menu
