import { Content } from "@/components/Content";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { FaParking } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
export default function Home() {
  return (
    <div className="">
      <NavBar />
      <div className="flex flex-col justify-center items-center px-20 mb-20">
        <Content
          heading="About us"
          hstyle={"text-blue-600 text-4xl"}
          content="Making Parkless Effortless,One spot at a time"
          cstyle={"text-2xl"}
          img="/parking-area.jpg"
        />
        <Content
          heading="Who we are"
          hstyle={"text-4xl"}
          content="At ParkSpot,we ate revolutionizing the way people find and book parking spots in buys urban areas.Our goal is to provide a seamless, stress-free parking experience that saves time and effort."
          cstyle={"text-lg text-center "}
          img={"/ci.jpeg"}
        />
        <Content
          mstyle="shadow-md w-full flex items-center justify-center px-8 py-12 rounded"
          heading="Our Mission"
          hstyle={"text-4xl"}
          content="Our mission is to simplify parking by connecting drivers with nearby parking spaces using advanced technology and real time availability"
          cstyle={"text-lg text-center "}
        >
          <div className="flex items-center justify-center gap-4">
            <FaParking color={"green"} size={"50"} />
            <FaCarSide color={"green"} size={"50"} />
            <FaBuilding color={"green"} size={"50"} />
          </div>
        </Content>
        <Content
          mstyle={"p-8  flex items-center justify-center gap-2"}
          heading="Why Choose us"
          hstyle={"text-4xl"}
          content="Making Parkless Effortless,One spot at a time"
          data={[
            "Seamless and intuitive user experience",
            "Wide coverage in urban and suburban areas",
            "Plan ahead with out reserve-in-advance-feature",
            "Secure payments and reliable parking solutions",
          ]}
          cstyle={"text-lg"}
          img={"/why.jpg"}
        />
        <Content
          mstyle="shadow-md w-full flex items-center justify-center rounded bg-blue-600 text-white"
          heading="Our Vision"
          hstyle={"text-4xl"}
          content="We belive in a future where smart cities and innovative mobility solutions reduce traffic and support Sustainability"
          cstyle={"text-lg text-center "}
          img={"/inno.jpeg"}
        />
      </div>
      <Footer />
    </div>
  );
}
