import "../../styles/globals.css"
import Header from "../../components/Header"
import Banner from "../../components/Banner"


//the colors for the theme of the site are defined here
// redish orange: #f9815a
// greenish blue: #20cfb7
// dark grey: #333744
// light brown: #fcedd8
// dark brown: #eadfd6

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>


      <body className="bg-[#aca3a1]">
        {/*Header*/}
        <Header/>
        {/*banner*/}
        <Banner/>
        {/*content*/}
        
        {children}
      </body>
    </html>
  )
}
