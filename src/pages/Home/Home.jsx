import CardanoHero from "../../components/CardanoHero/CardanoHero";
import DebitCard from "./DebitCard";
import Member from "./Member";
import PerfectCard from "./PerfectCard";
import Vision from "./Vision";
import WeOffer from "./WeOffer";

const Home = () => {
    return (
        <section>
            <CardanoHero />
            <Vision />
            <WeOffer />
            <DebitCard />
            <PerfectCard />
            <Member />
        </section>
    );
};

export default Home;