import Accordion from "../../components/Accordion/Accordion";
import Container from "../../components/shares/Container/Container";


const Faqs = () => {
    return (
        <section>
            <Container className="max-w-5xl">
                <div className="py-10 md:py-16 lg:py-20">
                    <h1 className="mb-10 text-2xl md:text-3xl lg:text-[40px] leading-[30px] md:leading-[57px] text-center text-white font-bold mt-10 md:mt-0">FAQs</h1>

                    <Accordion />
                </div>
            </Container>
        </section>
    );
};

export default Faqs;