import Header from '../h-and-f/header';
import Footer from '../h-and-f/footer';
function Layout({children}){
    return(
        <>
        <Header/>
          {children}
        <Footer />
        </>
    )
}
export default Layout