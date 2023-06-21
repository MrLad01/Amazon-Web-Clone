import { Link } from "react-router-dom" 

const Menu = () => {
  return (
    <div>
      <div className="flex bg-gray-900 text-white">
        <img src="" alt="" />
        <div>
            <img src="" alt="" />
            <h3 className="">Hello</h3>
            <h2>Select your address</h2>
        </div>
        <div className="flex">
            <button> <select name="" id="">All</select></button>
            <input type="text" placeholder="Search Amazon" />
            <button></button>
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
      <div>
        <div><img src="" alt="" />All</div>
        <ul> 
            
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
