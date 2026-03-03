import { Button } from "../ui/button";
import dashboard_desktop_img from "../../assets/images/Dashboard_img_desktop.png";
import dashboard_mobile_img from "../../assets/images/Dashboard_img_mobile.png";

const Subscription = () => {
  return (
    <section className="container pt-10 md:pt-20 ">
      <div className="bg-primary grid grid-cols-1 md:grid-cols-2 p-10 md:p-20 gap-6">
        <div className="flex flex-col justify-center items-start gap-6">
          <h2 className=" text-3xl md:text-5xl text-white w-4/6">
            Start posting jobs today
          </h2>
          <p className="text-white">Start posting jobs for only $10.</p>

          <Button className="bg-white text-primary hover:bg-white">
            Sign Up For Free
          </Button>
        </div>

        {/* Desktop Image */}
        <img
          src={dashboard_desktop_img}
          alt="Dashboard Desktop"
          className="hidden md:block w-full"
        />

        {/* Mobile Image */}
        <img
          src={dashboard_mobile_img}
          alt="Dashboard Mobile"
          className="block md:hidden w-full"
        />
      </div>
    </section>
  );
};

export default Subscription;
