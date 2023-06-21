import { Link } from "react-router-dom" 

const Menu = () => {
  return (
    <div>
      <div className="flex bg-gray-900 text-white justify-around h-15">
        <img src="" alt="" />
        <div>
            <img src="" alt="" />
            <h3 className="">Hello</h3>
            <h2>Select your address</h2>
        </div>
        <div className="flex">
            <select name="" id="" placeholder="All" className="text-gray-900 bg-gray-100 h-10 w-12 "><option value="" >All</option></select>
            <input type="text" placeholder="Search Amazon" className="h-10 w-136" />
            <button className="h-10 w-11 bg-orange-300"></button>
        </div>
        <div>
            <div><img src="" alt="" />EN</div>
        </div>
        <div>
            <h3>Hello,sign in</h3>
            <h2>Account & Lists</h2>
        </div>
        <div>
            <span>Returns</span>
            <span>& Orders</span>
        </div>
        <div><img src="" alt="" />cart</div>
      </div>
      <div className="bg-slate-700 text-white flex">
        <div><img src="" alt="" />All</div>
        <ul className="flex"> 
            
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
            <div>Watch Creed III</div>
        </ul>
      </div>
    </div>
  )
}

export default Menu
