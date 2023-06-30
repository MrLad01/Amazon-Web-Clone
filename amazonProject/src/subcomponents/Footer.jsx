import { Link } from "react-router-dom"


const Footer = ({focusInput}) => {
  return (
   <>
    <Link to="" onClick={focusInput}>
        <button className="absolute top-1206 z-10 w-full bg-slate-700 h-12 cursor-pointer" >
            <h3 className='text-sm text-white self-center'>Back to top</h3>
        </button>
    </Link>
    <div className="absolute top-1218 z-10 w-full bg-gray-800 h-116 pt-12 pb-6 px-44 grid grid-cols-4 gap-x-16 text-white">
        <div className="text-sm">
            <h3 className="text-base mb-2 font-semibold">Get to Know Us</h3>
            <div className="grid gap-y-2 font-light">
                <Link to="">Careers</Link>
                <Link to="">Amazon Newsletter</Link>
                <Link to="">About Amazon</Link>
                <Link to="">Accessibility</Link>
                <Link to="">Sustainability</Link>
                <Link to="">Press Center</Link>
                <Link to="">Investor Relations</Link>
                <Link to="">Amazon Devices</Link>
                <Link to="">Amazon Science</Link>
            </div>
        </div>
        <div className=" text-sm ">
            <h3 className="text-base mb-2 font-semibold">Make Money with Us</h3>
            <div className="grid gap-y-2 font-light">
                <Link to="">Sell products on Amazon</Link>
                <Link to="">Sell apps on Amazon</Link>
                <Link to="">Supply to Amazon</Link>
                <Link to="">Protect & Build Your <br /> Brand</Link>
                <Link to="">Become an Affiliate</Link>
                <Link to="">Become a Delivery Driver</Link>
                <Link to="">Start a Package Delivery Business</Link>
                <Link to="">Advertise Your Products</Link>
                <Link to="">Self-Publish with Us</Link>
                <Link to="">Host an Amazon Hub</Link>
                <Link to="">See ore Ways to Make Money</Link>
            </div>
        </div>
        <div className="text-sm">
            <h3 className="text-base mb-2 font-semibold">Amazon Payment Products</h3>
            <div className="grid gap-y-2 font-light">
                <Link to="">Amazon Visa</Link>
                <Link to="">Amazon Store Card</Link>
                <Link to="">Amazon Secured Card</Link>
                <Link to="">Amazon Business Card</Link>
                <Link to="">Shop with Points</Link>
                <Link to="">Credit Card Marketplace</Link>
                <Link to="">Read Your Balance</Link>
                <Link to="">Amazon Currency Converter</Link>
            </div>
        </div>
        <div className="text-sm">
            <h3 className="text-base mb-2 font-semibold">Let Us Help You</h3>
            <div className="grid gap-y-2 font-light">
                <Link to="">Amazon and COVID-19</Link>
                <Link to="">Your Account</Link>
                <Link to="">Your Orders</Link>
                <Link to="">Shipping Rates & Policies</Link>
                <Link to="">Amazon Prime</Link>
                <Link to="">Returns & Replacements</Link>
                <Link to="">Manage Your Content and Devices</Link>
                <Link to="">Your Recalls and Product Safety Alerts</Link>
                <Link to="">Help</Link>
            </div>
        </div>
    </div>
   </>
  )}
export default Footer
