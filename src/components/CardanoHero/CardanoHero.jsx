import Button from "../shares/Button/Button";
import Container from "../shares/Container/Container";


const CardanoHero = () => {
    return (
        <section>
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-center gap-10 py-10 md:py-16 lg:py-32">
                    {/* content */}
                    <div>
                        <h1 className=" md:leading-[48px] lg:leading-[64px] text-white font-bold mb-7 text-3xl md:text-4xl lg:text-[56px]">Spend your Cardano anywhere, anytime.</h1>
                        <p className="mb-7 font-normal text-sm lg:text-base leading-6 md:w-[400px] lg:w-[450px] text-[#ADB2B1]">Our user-friendly platform enables businesses and individuals to seamlessly convert and spend their crypto for everyday purchases.</p>
                        <Button label="Get Started" rightIcon={<i className='bx bx-right-arrow-alt'></i>} className="font-mplus transition duration-150 text-white bg-[#772AB3] rounded-full text-base font-normal" />
                    </div>
                    {/* img */}
                    <div>
                        <img src="/img/credit-card.png" alt="" />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default CardanoHero;