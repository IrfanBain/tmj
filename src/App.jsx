import Header from "./component/layouts/Header"
import Navbar from "./component/layouts/Navbar"
import ImageBar from "./component/layouts/ImageBar"
import BeritaBar from "./component/layouts/Berita"
import Dusun from "./component/layouts/Dusun"
import Footer from "./component/layouts/Footer"
import Aparat from "./component/layouts/Aparat"

function App() {

  return (
    <>
      <Navbar />
      <Header />
      <ImageBar />
      <Dusun />
      <BeritaBar />
      <Aparat />
      <Footer />
    </>
  )
}

export default App
