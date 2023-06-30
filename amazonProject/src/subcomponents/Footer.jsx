import { Link } from "react-router-dom"


const Footer = ({focusInput}) => {
  return (
   <>
    <Link to="" onClick={focusInput}>
        <button className="absolute top-1206 z-10 w-full bg-slate-700 h-12 cursor-pointer" >
            <h3 className='text-sm text-white self-center'>Back to top</h3>
        </button>
    </Link>
    <div className="absolute top-1218 z-10 w-full bg-gray-800 h-116"></div>
   </>
  )}
export default Footer
