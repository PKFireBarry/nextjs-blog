import Link from "next/link"
import {ArrowUturnLeftIcon} from "@heroicons/react/24/solid"

function StudioNavbar(props: any) {
  return ( 
  <div>
    <div
    className="flex items-center justify-between p-5 bg-gray-900"
    >
        <Link 
        href="/"
        className="text-blue-600 items-center flex">
        <ArrowUturnLeftIcon 
        className="h-6 w-6 mr-2" 
        aria-hidden="true"
        />
            Back To Site
        </Link>

    </div>
    <>{props.renderDefault(props)}</>
   </div>
  );
}

export default StudioNavbar