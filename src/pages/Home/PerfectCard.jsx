import Button from "../../components/shares/Button/Button";
import Container from "../../components/shares/Container/Container";

const PerfectCard = () => {
    return (
        <section className="py-10 md:py-16 lg:py-32">
            <Container>
                <div className="flex flex-col md:flex-row-reverse justify-between items-center lg:gap-6 md:gap-5 gap-8 mt-10 md:mt-0">
                    <div>
                        <h1 className="lg:mb-4 md:mb-3 mb-4 text-2xl md:text-3xl lg:text-[40px] leading-[30px] md:leading-[35px] lg:md:leading-[57px] text-white font-bold">Find the Perfect Card for You</h1>
                        <p className="font-normal lg:text-base text-sm text-[#ADB2B1] lg:w-[520px] md:w-[400px]">Unlocking the Power of Crypto, Both Virtually and Physically
                        Manage your crypto effortlessly and spend it seamlessly with Wern. Our virtual card allows for instant and secure online transactions, while the physical Wern Card empowers you to convert and spend your crypto at millions of merchants worldwide. Experience the flexibility and convenience of both options, all within the secure and user-friendly Wern ecosystem.</p>
                        <Button label="Learn More" className=" mb-1 mt-4 font-mplus transition duration-150 text-white bg-[#772AB3] rounded-full text-base font-normal" />
                    </div>
                    <div>
                        <img src="/img/Group 16 (1).png" alt="" />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default PerfectCard;