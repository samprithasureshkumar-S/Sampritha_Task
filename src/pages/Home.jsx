import AnnouncementBar from '../components/AnnouncementBar/AnnouncementBar';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import FeaturedCategories from '../components/FeaturedCategories/FeaturedCategories';
import BestSellers from '../components/BestSellers/BestSellers';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import WellnessCollections from '../components/WellnessCollections/WellnessCollections';
import Testimonials from '../components/Testimonials/Testimonials';
import Sustainability from '../components/Sustainability/Sustainability';
import Newsletter from '../components/Newsletter/Newsletter';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <FeaturedCategories />
        <BestSellers />
        <WhyChooseUs />
        <WellnessCollections />
        <Testimonials />
        <Sustainability />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
};

export default Home;
