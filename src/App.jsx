import { BiPurchaseTag } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaGraduationCap } from "react-icons/fa";
import { RiMoneyCnyCircleLine } from "react-icons/ri";
import { RiGovernmentLine } from "react-icons/ri";
import { FaBoxOpen } from "react-icons/fa";
import { GiHealthNormal } from "react-icons/gi";

import Card from "./Card";
import zoomWheel from "./zoom-all-1.png";
import beca from "./beca.jpg";
import zoomLogo from "./Zoom_logo.svg";

function App() {
  return (
    <div className=" flex flex-col items-center w-full">
      <nav className="flex justify-between items-center text-2xl p-3 w-full">
        <div className="flex items-center gap-6 w-2/3">
          <img src={zoomLogo} alt="Zoom_logo.svg" />
          <div>
            <ul className="hidden lg:flex items-center text-base gap-5 ">
              <li className=" text-gray-500 hover:text-blue-900">Products</li>
              <li className=" text-gray-500 hover:text-blue-900">Solutions</li>
              <li className=" text-gray-500 hover:text-blue-900">Resources</li>
              <li className=" text-gray-500 hover:text-blue-900">
                Plans & Pricing
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center md:hidden">
          <ul className="flex gap-3">
            <li className="text-blue-700 hover:text-blue-900">Join</li>
            <li className="text-blue-700 hover:text-blue-900">Host</li>
          </ul>
          <div className="mx-3 text-blue-300">
            <RxHamburgerMenu />
          </div>
        </div>
        <div className="hidden md:flex gap-2 items-center">
          <button className="text-blue-600 border border-blue-400 rounded-2xl text-base p-2">
            Contact Sales
          </button>
          <button className=" text-white bg-blue-600  hover:bg-blue-700 border border-blue-400 rounded-2xl text-base p-2">
            Sign Up Free
          </button>
          <div className="hidden md:block lg:hidden mx-3 text-blue-300">
            <RxHamburgerMenu />
          </div>
        </div>
      </nav>
      <nav>
        <div className="flex flex-row m-6 p-6">
          <div>
            <h1 className=" font-extrabold text-4xl w-2/3">
              One platform to <span className="text-blue-600">connect</span>
            </h1>
            <p className=" mr-4">
              Bring teams together, reimagine workspaces, engage new audiences,
              and delight your customers-all on the zoom platform you know and
              love.
            </p>
            <div>
              <ul className=" flex flex-row gap-6 mt-4">
                <li className=" bg-blue-600 hover:bg-blue-700 rounded-2xl h-8 w-40 text-white text-center pt-1 ">
                  Plans & Pricing
                </li>
                <li className=" text-blue-600 font-bold">Sign Up, It's Free</li>
              </ul>
            </div>
          </div>
          <div>
            <img className="w-auto h-auto" src={beca} alt="beca.jpg" />
          </div>
        </div>
      </nav>
      <section className=" w-full ">
        <div className=" flex flex-row bg-zoom-bg-blue mb-12  ">
          <img src={zoomWheel} alt="zoom-all-1.png" className=" h-72" />
          <div className=" w-3/4 text-white">
            <h1 className=" font-extrabold text-2xl ">Make work less work</h1>
            <br />
            <p>
              Security connect and collaborate so you can work better together
              simple to manage and delightful to use, zoom powers the modern
              workforce.
              <br />
              <br />
              Discover the possibilities
            </p>
          </div>
        </div>
        <div className=" flex flex-col w-full md:flex-row">
          <div className=" ml-6">
            <h2 className=" font-bold text-xl">
              Powering organizations across
              <br />
              industries and geographies
            </h2>
            <br />
            <p className=" text-lg">
              Zoom helps consolidate communications, connect people, and
              collaborate better together in the boardroom, classroom, operating
              room, and everywhere in between.
            </p>
            <div className=" mt-3">
              <h3 className=" bg-cyan-300 h-10 w-64 pt-1 text-center rounded-3xl text-lg hover:bg-cyan-400">
                Explore Industry Solution
              </h3>
            </div>
          </div>
          <div className=" grid grid-cols-3 gap-3 font-bold m-4 hover:text-blue-700 w-2/3 ">
            <Card icon={<FaGraduationCap />} title={"EDUCATION"} />
            <Card icon={<BiPurchaseTag />} title={"RETAIL"} />
            <Card
              icon={<RiMoneyCnyCircleLine />}
              title={"FINANCIAL SERVICES"}
            />
            <Card icon={<RiGovernmentLine />} title={"GOVERNMENT"} />
            <Card icon={<FaBoxOpen />} title={"MANUFACTURING"} />
            <Card icon={<GiHealthNormal />} title={"HEALTHCARE"} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
