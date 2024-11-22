import { weOffer } from "../../api";
import Container from "../../components/shares/Container/Container";

const WeOffer = () => {
    return (
        <section className="py-10 md:py-16 lg:py-32">
            <Container>
                <h1 className="lg:mb-16 mb-10 text-2xl md:text-3xl lg:text-[40px] leading-[30px] md:leading-[57px] text-center text-white font-bold">What do we offer?</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 lg:gap-8 space-y-8 md:space-y-0">
                    {
                        weOffer?.map(({offerImg, title, description}, offerIdx) => (
                            <div className="flex flex-row md:flex-col lg:flex-row gap-4 md:gap-5 lg:gap-6" key={offerIdx}>
                                <img className="size-16" src={offerImg} alt="" />
                                <div>
                                    <h3 className="font-medium text-white lg:text-2xl text-lg mb-2">{title}</h3>
                                    <p className="font-normal lg:text-base text-sm text-[#ADB2B1] lg:w-[280px]">{description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </Container>
        </section>
    );
};

export default WeOffer;