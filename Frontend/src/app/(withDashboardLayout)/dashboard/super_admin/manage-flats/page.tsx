"use client";
import {
  useDeleteFlatByIdMutation,
  useGetAllFlatsQuery,
} from "@/redux/api/flatApi";
import CommonDashboardHeaderTitle from "@/shared/CommonDashboardHeaderTitle/CommonDashboardHeaderTitle";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

function ManageAllFlats() {
  const [modalOpen, setModalOpen] = useState(false);
  const { data, isLoading, refetch } = useGetAllFlatsQuery({});
  const [deleteFlatById] = useDeleteFlatByIdMutation();
  const [id, setId] = useState<string>();

  const handleModalOpen = (id: string) => {
    setId(id);
    setModalOpen(true);
  };

  const handleDeleteFlat = async (id: string | undefined) => {
    const res = await deleteFlatById(id).unwrap();
    await refetch();
    if (res?.id) {
      toast.success("You flat is deleted successfully");
    }
  };

  const showToast = (id?: string) => {
    toast("Boss!!! Are you sure want to delete this flat.?", {
      action: {
        label: "Yes!!",
        onClick: () => handleDeleteFlat(id),
      },
    });
  };

  return (
    <>
      <section>
        <CommonDashboardHeaderTitle
          mainTitle="Manage Flats"
          secondaryTitle="Hey, Boss!!!, you can manage the all of flat..."
        />

        <h1 className="text-lg font-semibold mt-4 mb-4">Display All Flats</h1>
        {/* {!isLoading ? ( */}

        <div className="relative overflow-x-auto shadow-md sm:rounded-sm">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 font-poppins ">
            <thead className="text-xs text-gray-800 uppercase bg-violet-50 text-center ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  SL No
                </th>
                <th scope="col" className="px-6 py-3">
                  Location
                </th>
                <th scope="col" className="px-6 py-3">
                  Total Rooms
                </th>
                <th scope="col" className="px-6 py-3">
                  Total Bedrooms
                </th>
                <th scope="col" className="px-6 py-3">
                  Square Feet
                </th>
                <th scope="col" className="px-6 py-3">
                  Rent Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            {!isLoading ? (
              data?.map((item: any, index: number) => (
                <tbody key={index}>
                  <tr className=" border-b bg-gray-50 text-center hover:bg-white cursor-pointer ">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      {index + 1}
                    </th>
                    <td className="px-6 py-4 text-gray-700">
                      {" "}
                      {item?.location}
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      {item?.totalRooms}
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      {item?.totalBedrooms}
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      {item?.squareFeet}
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      {item?.rent}
                      {" ৳"}
                    </td>
                    <td className="px-6 py-4 flex justify-between gap-2 text-gray-700">
                      <svg
                        onClick={() => showToast(item?.id)}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className=" h-8 w-8 rounded-md bg-red-200 text-red-600 px-2 py-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                      <Link href={`/flatDetails/${item?.id}`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className=" h-8 w-8  rounded-md bg-orange-200 text-orange-700 px-2 py-1"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                          />
                        </svg>
                      </Link>
                      <Link
                        href={`/dashboard/admin/manage-flats/edit/${item?.id}`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className=" h-8 w-8 rounded-md bg-blue-200 text-blue-600 px-2 py-1"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                          />
                        </svg>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              ))
            ) : (
              <div>Loading..</div>
            )}
          </table>
          <nav
            className="flex items-center flex-column mt-2 mb-2 flex-wrap md:flex-row justify-between"
            aria-label="Table navigation"
          >
            <span className="text-sm font-normal pl-4 text-gray-800 mb-4 md:mb-0 block w-full md:inline md:w-auto">
              Showing <span className="font-semibold text-gray-900 ">1-10</span>{" "}
              of <span className="font-semibold text-gray-900 ">1000</span>
            </span>
            <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-700 bg-white border  rounded-s-lg hover:bg-gray-100 hover:text-gray-800   border-gray-700   "
                >
                  Previous
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border  hover:bg-gray-100 hover:text-gray-700 border-gray-700   "
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border  hover:bg-gray-100 hover:text-gray-700 border-gray-700   "
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-current="page"
                  className="flex items-center justify-center px-3 h-8 border   bg-orange-600 hover:text-gray-200 border-gray-700 text-white"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border  hover:bg-gray-100 hover:text-gray-700 border-gray-700   "
                >
                  4
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border  hover:bg-gray-100 hover:text-gray-700 border-gray-700   "
                >
                  5
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border  rounded-e-lg hover:bg-gray-100 hover:text-gray-700 border-gray-700   "
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
}

export default ManageAllFlats;
