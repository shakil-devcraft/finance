import { memberData } from "../../api";
import Container from "../../components/shares/Container/Container";

const Member = () => {
    return (
        <section>
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {
                        memberData?.map(({qIcon, description, memberImg, memberName, memberPro}, idx) => (
                            <div className="space-y-8 text-white" key={idx}>
                                <img src={qIcon} alt="" />
                                <p className="lg:text-base text-sm lg:w-[344px] font-normal">{`"${description}"`}</p>
                                <div className="flex gap-3">
                                    <img src={memberImg} alt="" />
                                    <div>
                                        <p className="lg:text-base text-sm font-medium">{memberName}</p>
                                        <span className="text-[#ADB2B1] text-xs font-normal">{memberPro}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </Container>
        </section>
    );
};

export default Member;