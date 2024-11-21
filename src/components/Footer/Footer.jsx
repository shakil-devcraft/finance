import { Link } from "react-router-dom";
import { footerLinks } from "../../api";
import Container from "../shares/Container/Container";

const Footer = () => {
    return (
        <section className="py-12">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-6 lg:gap-20 text-[#ADB2B1]">
                    <div className="md:col-span-2 mb-10 md:mb-0">
                        <img className="w-[131px] mb-2" src="/img/logo (1).png" alt="" />
                        <p className="font-normal text-sm leading-6 md:w-[287px]">Discover the power of our secure and rewarding credit cards</p>
                    </div>
                    {/* footer links */}
                        {
                            footerLinks?.map(({heading, links}) => (
                                <div className="mb-10 md:mb-0" key={heading}>
                                    <h3 className="text-white font-bold leading-6 mb-2">{heading}</h3>

                                    {
                                        links?.map((link, linkIdx) => (
                                            <Link key={linkIdx}>
                                                <li className="font-normal text-sm leading-6 md:w-[287px] list-none">{link}</li>
                                            </Link>
                                        ))
                                    }
                                </div>
                            ))
                        }
                    {/* <div className="flex">
                    </div> */}
                </div>
            </Container>
        </section>
    );
};

export default Footer;