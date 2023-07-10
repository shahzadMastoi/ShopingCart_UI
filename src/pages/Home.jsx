
import Announcements from '../components/Announcements';
import Catgories from '../components/Catgories';
import Navbar from '../components/Navbar';
// import Product from '../components/Product';
import Slider from '../components/Slider';
import Products from '../components/Products';
import { popularProducts } from '../Data';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
const Home = () => {

  return (
    <div>
     <Announcements />
    <Navbar />
     <Slider />
     <Catgories />
     {/* <Product /> */}
     <Products popularProducts={popularProducts}/>
     <Newsletter />
     <Footer />
    </div>
  );
};

export default Home

