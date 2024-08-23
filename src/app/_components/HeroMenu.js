import Image from "next/image";
import SectionHeader from './SectionHeader';

const HeroMenu = ({subHeader,mainHeader,className}) => {
  return (
    <section className={className}>
      <div className="absolute h-48 left-16 right-16 overflow-x-hidden">
        <div className="h-48 w-48 absolute">
          <Image
            src={`/sallad1.png`}
            alt="sallad1"
            className=""
            layout={"fill"}
            objectFit={"contain"}
          />
        </div>
        <div className="h-48 w-48 absolute -right-0">
          <Image
            src={`/sallad2.png`}
            alt="sallad1"
            className="bg-blend-color-burn"
            layout={"fill"}
            objectFit={"contain"}
          />
        </div>
      </div>
       <SectionHeader subHeader={subHeader} mainHeader={mainHeader}/>
    </section>
  );
};

export default HeroMenu;
