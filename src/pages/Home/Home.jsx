import CardanoHero from "../../components/CardanoHero/CardanoHero";
import DebitCard from "./DebitCard";
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
        </section>
    );
};

export default Home;