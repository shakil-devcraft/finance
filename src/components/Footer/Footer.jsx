import Container from "../shares/Container/Container";

const Footer = () => {
    return (
        <section className="pt-12 pb-24">
            <Container>
                <div className="flex gap-5">
                    <div>
                        <img className="w-24 md:w-[110px] lg:w-[131px]" src="/img/logo (1).png" alt="" />
                        <p className="font-normal text-base">Discover the power of our secure and rewarding credit cards</p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Footer;