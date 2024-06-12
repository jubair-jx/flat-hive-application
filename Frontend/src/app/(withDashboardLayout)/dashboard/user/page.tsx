"use client";
import BarChartUser from "@/components/Dashboard/Graph/BarChartUser";
import PieChartUser from "@/components/Dashboard/Graph/PieChartUser";
import CommonDashboardHeaderTitle from "@/shared/CommonDashboardHeaderTitle/CommonDashboardHeaderTitle";
import ApartmentIcon from "@mui/icons-material/Apartment";
import ChairIcon from "@mui/icons-material/Chair";
import SendTimeExtensionIcon from "@mui/icons-material/SendTimeExtension";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
function UserHomePage() {
  const router = useRouter();
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  const data = [
    {
      id: 0,
      icon: ApartmentIcon,
      color: "text-orange-500",
      bgColor: "bg-orange-100",
      title: "Totat Flat",
      count: 6540,
    },
    {
      id: 1,
      icon: SendTimeExtensionIcon,
      color: "#0E9F6E",
      bgColor: "#DEF7EC",
      title: "My Flat Request",
      count: 9630,
    },
    {
      id: 2,
      icon: ChairIcon,
      color: "#3F83F8",
      bgColor: "#E1EFFE",
      title: "My Flat",
      count: 7450,
    },
    {
      id: 3,
      icon: ThumbUpOffAltIcon,
      color: "#0694A2",
      bgColor: "#D5F5F6",
      title: "Flat Confirmed",
      count: 1000,
    },
  ];
  return (
    <section>
      <CommonDashboardHeaderTitle mainTitle="Welcome to the Dashboard" />
      <div
        data-aos="fade-up"
        className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4 mt-6"
      >
        {data?.map((item) => (
          <div
            key={item?.id}
            className="flex items-center p-4 bg-white rounded-md shadow-sm border border-gray-300 border-dashed "
          >
            <div
              className={` p-3 mr-4  rounded-full bg-[#dae5f0] text-[#274c76]  `}
            >
              {item.icon && <item.icon />}
            </div>
            <div>
              <p className="mb-1 text-md font-medium font-poppins text-gray-600 ">
                {item.title}
              </p>
              <p className="text-xl font-Kanit font-semibold text-gray-800">
                {item.count}
              </p>
            </div>
          </div>
        ))}
      </div>
      <CommonDashboardHeaderTitle mainTitle="My Activity Info" />
      <div
        data-aos="fade-down"
        className=" w-full sm:grid lg:grid-cols-2 gap-4 mt-6 mx-auto  hidden"
      >
        <div className=" font-poppins w-full bg-white shadow-md border rounded border-dashed ">
          <BarChartUser />
        </div>

        <div className=" font-poppins mx-auto w-full bg-white shadow-md border rounded border-dashed  ">
          <PieChartUser />
        </div>
      </div>
    </section>
  );
}

export default UserHomePage;
