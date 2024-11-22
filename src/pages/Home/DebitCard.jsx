import Button from "../../components/shares/Button/Button";
import Container from "../../components/shares/Container/Container";

const DebitCard = () => {
    return (
        <section>
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-center lg:gap-6 md:gap-5 gap-8">
                    <div>
                        <h1 className="lg:mb-4 md:mb-3 mb-4 text-2xl md:text-3xl lg:text-[40px] leading-[30px] md:leading-[57px] text-white font-bold">Wern Debit Card</h1>
                        <p className="font-normal lg:text-base text-sm text-[#ADB2B1] lg:w-[424px] md:w-[400px]">More than just a card, it's a bridge to a new financial experience. Embrace the simplicity and security of spending your Cardano with the Wern Card.</p>
                        <Button label="Create New Card" rightIcon={<i className='bx bx-right-arrow-alt'></i>} className=" mb-1 mt-4 font-mplus transition duration-150 text-white bg-[#772AB3] rounded-full text-base font-normal" />
                        <p className="ml-[30px] lg:text-base text-sm font-bold">Will be available soon</p>
                    </div>
                    <div>
                        <img src="/img/Group 16.png" alt="" />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default DebitCard;