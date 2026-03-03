import bannerPerson from "../../../assets/images/banner-person.png";
import underlineImg from "../../../assets/images/underline.png";
import BannerSearchBar from "./BannerSearchBar";


const Banner = () => {
  return (
    <section className="bg-light pb-16 pt-8 relative">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* LEFT CONTENT */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-7xl font-bold w-5/6 text-secondary">
            Discover more than
            <br />
            <span className="text-secondary-foreground">
              5000+ Jobs
              <img src={underlineImg} alt="" />
            </span>
          </h1>

          <p className="text-muted max-w-lg">
            Great platform for job seekers searching for new career
            opportunities and passionate about startups and innovation.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden md:flex justify-center">
          <img
            src={bannerPerson}
            alt="Job seeker"
            className="max-w-md w-full object-contain"
          />
        </div>
      </div>

      <BannerSearchBar />
    </section>
  );
};

export default Banner;
