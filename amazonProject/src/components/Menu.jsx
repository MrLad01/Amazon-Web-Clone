import { Link } from "react-router-dom" 

const Menu = () => {
  return (
    <div>
      <div className="flex bg-gray-900 text-white justify-around h-15 items-center cursor-pointer">
        <img src="" alt="" />
        <div className="p-2 hover:border border-white">
            <img src="" alt="" />
            <h3 className="text-xs mb-0 pb-0 text-gray-300 leading-3">Hello</h3>
            <h2 className="text-2sm font-semibold mt-0 pt-0 leading-4">Select your address</h2>
        </div>
        <div className="flex">
            <select name="" id="" placeholder="All" className="text-gray-500 bg-gray-100 h-10 text-xs px-2.5 rounded-l-md border border-solid border-gray-300  cursor-pointer">
              <option value="" className="text-xs px-2.5 ">All</option>
              {/* <option value="">All Departments</option>
              <option value="">Alexa Skills</option>
              <option value="">All The Best Pets</option>
              <option value="">Amazon Devices</option>
              <option value="">Amazon Fresh</option>
              <option value="">Amazon Pharmacy</option>
              <option value="">Amazon Warehouse</option>
              <option value="">Appliances</option>
              <option value="">Apps & Games</option>
              <option value="">Arts, Crafts & Sewing</option>
              <option value="">Audible Books & Originals</option>
              <option value="">Automotive Parts & Accessories</option>
              <option value="">Baby</option>
              <option value="">Bartell Drugs</option>
              <option value="">Beauty & Personal Care</option>
              <option value="">Books</option>
              <option value="">CDs & Vinyl</option>
              <option value="">Cell Phones & Accessories</option>
              <option value="">
                Clothing, Shoes & Jewelry
                <option value="">Women</option>
                <option value="">Men</option>
                <option value="">Girls</option>
                <option value="">Boys</option>
                <option value="">Baby</option>
              </option>
              <option value="">Collectibles & Fine Art</option>
              <option value="">Computers</option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option> */}
              </select>
            <input type="text" placeholder="Search Amazon" className="h-10 w-136 indent-2 text-base text-gray-600 placeholder:text-gray-500" />
            <button className="h-10 w-11 bg-orange-300 rounded-r-md"></button>
        </div>
        <div>
            <div><img src="" alt=""  /><span className="text-base font-semibold leading-3 p-2 hover:border border-white ">EN</span></div>
        </div>
        <div className="p-2 hover:border border-white cursor-pointer">
            <h3 className="text-xs mb-0 pb-0 leading-3">Hello, sign in</h3>
            <h2 className="text-2sm font-semibold mt-0 pt-0 leading-4">Account & Lists</h2>
        </div>
        <div className="p-2 hover:border border-white cursor-pointer">
            <h3 className="text-xs mb-0 pb-0 leading-3">Returns</h3>
            <h2 className="text-2sm font-semibold mt-0 pt-0 leading-4">& Orders</h2>
        </div>
        <div className="text-2sm font-semibold mt-0 pt-0 p-2 hover:border border-white cursor-pointer"><img src="" alt="" />cart</div>
      </div>
      <div className="bg-slate-700 text-white flex px-5 text-sm h-10 content-center relative items-center">
        <div className="flex">
          <div className="font-semibold py-2 px-3 hover:border border-white cursor-pointer"><img src="" alt="" />All</div>
          <ul className="flex font-medium content-center items-center">           
              <li><Link to="" className="px-2 py-2 hover:border border-white">Clinic</Link> </li>
              <li><Link to="" className="px-2 py-2 hover:border border-white">Best Sellers</Link>  </li>
              <li><Link to="" className="px-2 py-2 hover:border border-white">Customer Service</Link>  </li>
              <li><Link to="" className="px-2 py-2 hover:border border-white">Amazon Basics</Link>  </li>
              <li><Link to="" className="px-2 py-2 hover:border border-white">New Releases</Link>  </li>
              <div className="px-2 py-2 hover:border border-white cursor-pointer">Prime</div>
              <li><Link to="" className="px-2 py-2 hover:border border-white">Music</Link> </li>
              <li><Link to="" className="px-2 py-2 hover:border border-white">Today's Deals</Link> </li>
              <li><Link to="" className="px-2 py-2 hover:border border-white">Books</Link> </li>
              <li><Link to="" className="px-2 py-2 hover:border border-white">Registry</Link> </li>
              <li><Link to="" className="px-2 py-2 hover:border border-white">Fashion</Link> </li>
              <li><Link to="" className="px-2 py-2 hover:border border-white">Amazon Home</Link> </li>
              {/* <li><Link to="" className="px-1 py-2 hover:border border-white">Pharmacy</Link> </li> */}
              {/* <li><Link to="" className="px-1 py-2 hover:border border-white"> Gift Cards</Link></li> */}
          </ul>
        </div>
        <div className="font-extrabold px-2 py-1 hover:border border-white absolute right-0 self-center mr-5 cursor-pointer">Watch 'Creed III'</div>
      </div>
    </div>
  )
}

export default Menu
