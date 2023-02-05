import Link from "next/link"
import Image from "next/image"


function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
        <div className="flex items-center space-x-2">
            <Link 
                href="/"
                className="flex items-center space-x-2 pr-4"
            >
                <Image 
                    className="rounded-full"
                    src="https://i.ibb.co/8YqBLyd/a-logo-for-a-blog-tech-minimal-coding.png"
                    alt="logo"
                    width={50}
                    height={50}
                    >
                </Image>
            </Link>
            <h1>A Really Cool Blog</h1>
        </div>

        <div className="">
            <Link
                href="https://github.com/PKFireBarry"
                className="px-4 py-3 text-sm md:text-base bg-blue-900 text-slate-800 flex items-center
                rounded-full text-center"
            >
                Github
            </Link>

        </div>
    </header>
  )
}

export default Header