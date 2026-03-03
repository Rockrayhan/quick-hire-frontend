import brand_1 from "../../assets/images/brands/amd-logo-1.png" ;
import brand_2 from "../../assets/images/brands/intel-3.png" ;
import brand_3 from "../../assets/images/brands/talkit 1.png" ;
import brand_4 from "../../assets/images/brands/tesla-9 1.png" ;
import brand_5 from "../../assets/images/brands/vodafone-2017-logo.png" ;


const OurClients = () => {
    return (
        <section className="pt-10 md:pt-20 container">
            <p className='text-muted pb-8 text-lg'>
                Companies we helped grow
            </p>


            <div className="grid grid-cols-2 md:grid-cols-5 gap-2.5 items-center">

            <img src={brand_1} alt="" />
            <img src={brand_2} alt="" />
            <img src={brand_3} alt="" />
            <img src={brand_4} alt="" />
            <img src={brand_5} alt="" />
            </div>
        </section>
    );
};

export default OurClients;