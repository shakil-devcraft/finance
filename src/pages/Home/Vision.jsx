import Container from "../../components/shares/Container/Container";
import GradientText from "../../components/shares/GradientText/GradientText";

const Vision = () => {
    return (
        <section>
            <Container>
                <div className="flex flex-col justify-center items-center text-center gap-4 bg-[#3D3D543D] / 24 rounded-[32px] md:px-5 lg:px-16 py-6 mt-10 md:mt-0">
                    <h1 className="text-2xl md:text-[30px] leading-10 text-white font-bold">Wern’s Vision</h1>
                    <GradientText className="lg:w-[1000px]" text="Building a financial future where everyone has 
                    access to secure and effortless digital money." />
                </div>
            </Container>
        </section>
    );
};

export default Vision;