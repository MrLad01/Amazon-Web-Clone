import { Link } from "react-router-dom"


const Footer = ({focusInput}) => {
  return (
   <>
    <Link to="" onClick={focusInput}>
        <button className="absolute top-1206 z-10 w-full bg-slate-700 h-12 cursor-pointer" >
            <h3 className='text-sm text-white self-center'>Back to top</h3>
        </button>
    </Link>
    <div className="absolute top-1218 z-10 w-full bg-gray-800 h-116 pt-12 pb-6 px-44 grid grid-cols-4 gap-x-16 text-white border-b">
        <div className="text-sm">
            <h3 className="text-base mb-2 font-semibold">Get to Know Us</h3>
            <div className="grid gap-y-2 font-light ">
                <Link to="" className="hover:underline" >Careers</Link>
                <Link to="" className="hover:underline" >Amazon Newsletter</Link>
                <Link to="" className="hover:underline" >About Amazon</Link>
                <Link to="" className="hover:underline" >Accessibility</Link>
                <Link to="" className="hover:underline" >Sustainability</Link>
                <Link to="" className="hover:underline" >Press Center</Link>
                <Link to="" className="hover:underline" >Investor Relations</Link>
                <Link to="" className="hover:underline" >Amazon Devices</Link>
                <Link to="" className="hover:underline" >Amazon Science</Link>
            </div>
        </div>
        <div className=" text-sm ">
            <h3 className="text-base mb-2 font-semibold">Make Money with Us</h3>
            <div className="grid gap-y-2 font-light ">
                <Link to="">Sell products on Amazon</Link>
                <Link to="" className="hover:underline" >Sell apps on Amazon</Link>
                <Link to="" className="hover:underline" >Supply to Amazon</Link>
                <Link to="" className="hover:underline" >Protect & Build Your <br /> Brand</Link>
                <Link to="" className="hover:underline" >Become an Affiliate</Link>
                <Link to="" className="hover:underline" >Become a Delivery Driver</Link>
                <Link to="" className="hover:underline" >Start a Package Delivery Business</Link>
                <Link to="" className="hover:underline" >Advertise Your Products</Link>
                <Link to="" className="hover:underline" >Self-Publish with Us</Link>
                <Link to="" className="hover:underline" >Host an Amazon Hub</Link>
                <Link to="" className="hover:underline" >See ore Ways to Make Money</Link>
            </div>
        </div>
        <div className="text-sm">
            <h3 className="text-base mb-2 font-semibold -mr-2">Amazon Payment Products</h3>
            <div className="grid gap-y-2 font-light ">
                <Link to="" className="hover:underline" >Amazon Visa</Link>
                <Link to="" className="hover:underline" >Amazon Store Card</Link>
                <Link to="" className="hover:underline" >Amazon Secured Card</Link>
                <Link to="" className="hover:underline" >Amazon Business Card</Link>
                <Link to="" className="hover:underline" >Shop with Points</Link>
                <Link to="" className="hover:underline" >Credit Card Marketplace</Link>
                <Link to="" className="hover:underline" >Read Your Balance</Link>
                <Link to="" className="hover:underline" >Amazon Currency Converter</Link>
            </div>
        </div>
        <div className="text-sm">
            <h3 className="text-base mb-2 font-semibold">Let Us Help You</h3>
            <div className="grid gap-y-2 font-light ">
                <Link to="" className="hover:underline" >Amazon and COVID-19</Link>
                <Link to="" className="hover:underline" >Your Account</Link>
                <Link to="" className="hover:underline" >Your Orders</Link>
                <Link to="" className="hover:underline" >Shipping Rates & Policies</Link>
                <Link to="" className="hover:underline" >Amazon Prime</Link>
                <Link to="" className="hover:underline" >Returns & Replacements</Link>
                <Link to="" className="hover:underline" >Manage Your Content and Devices</Link>
                <Link to="" className="hover:underline" >Your Recalls and Product Safety Alerts</Link>
                <Link to="" className="hover:underline" >Help</Link>
            </div>
        </div>
    </div>
    <div className="bg-gray-800 h-48"></div>
    <div className="bg-gray-900 h-138">
        <div className="grid grid-cols-7 grid-rows-4">
            <div>
                <h3>Amazon Music</h3>
                <h4>Stream millions of songs</h4>
            </div>
            <div>
                <h3>Amazon Advertising</h3>
                <h4>Find, attract, and engage customers</h4>
            </div>
            <div>
                <h3>6pm</h3>
                <h4>Score deals on fashion brands</h4>
            </div>
             <div>
                <h3>AbeBooks</h3>
                <h4>Books, art & collectibles</h4>
            </div>
            <div>
                <h3>Sell on Amazon</h3>
                <h4>Start a Selling Account</h4>
            </div>
            <div>
                <h3>Amazon Business</h3>
                <h4>Everything For Your Business</h4>
            </div>
        </div>
    </div>
   </>
  )}
export default Footer
