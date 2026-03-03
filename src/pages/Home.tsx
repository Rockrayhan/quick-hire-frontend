
import Banner from "@/components/home/banner/Banner";
import ExporeByCategory from "@/components/home/ExporeByCategory";
import FeaturedJobs from "@/components/home/FeaturedJobs";
import LatestJobs from "@/components/home/LatestJobs";
import OurClients from "@/components/home/OurClients";
import Subscription from "@/components/home/Subscription";

const Home = () => {
  return (
    <div>
      <Banner/>
      <OurClients/>
      <ExporeByCategory/>
      <Subscription/>
      <FeaturedJobs/>
      <LatestJobs/>
    </div>
  );
};

export default Home;
