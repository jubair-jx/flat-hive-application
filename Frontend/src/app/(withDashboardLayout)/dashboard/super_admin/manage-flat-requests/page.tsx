"use client";
import {
  useGetAllFlatRquestQuery,
  useUpdateRequestByIdMutation,
} from "@/redux/api/bookingApi";
import CommonDashboardHeaderTitle from "@/shared/CommonDashboardHeaderTitle/CommonDashboardHeaderTitle";
import { toast } from "sonner";

function FlatShareRequestManagement() {
  const { data, isLoading, refetch } = useGetAllFlatRquestQuery({});
  const [updateRequestById] = useUpdateRequestByIdMutation();
  const handleOnUpdate = async (
    id: string | undefined,
    status: string | undefined
  ) => {
    const payload = {
      id: id,
      body: {
        status: status,
      },
    };
    const res = await updateRequestById(payload).unwrap();
    await refetch();

    if (res?.id) {
      toast.success("Boss!!! you changed the status...");
    }
  };

  const showToast = (status?: string | undefined, id?: string) => {
    toast("Are you sure to something make it happen.?", {
      action: {
        label: "Yes",
        onClick: () => handleOnUpdate(id, status),
      },
    });
  };
  return (
    <section>
      <CommonDashboardHeaderTitle
        mainTitle="Flat Share Request Management"
        secondaryTitle="Boss!!! you can manage all of flat request status"
      />
      <div className="w-full mb-8 overflow-hidden rounded-lg shadow-xs mt-10 border-b border-gray-400">
        <div className="w-full overflow-x-auto">
          <table className="w-full whitespace-no-wrap">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-gray-800 font-poppins text-center uppercase border-b bg-gray-50 ">
                <th className="px-4 py-3">Sl No</th>
                <th className="px-4 py-3">Location</th>

                <th className="px-4 py-3">User mail</th>
                <th className="px-4 py-3">Rooms</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Change Status</th>
              </tr>
            </thead>
            {!isLoading ? (
              data?.map((item: any, index: number) => (
                <tbody
                  key={item?.id}
                  className="bg-white divide-y text-center divide-gray-800 font-poppins "
                >
                  <tr className="text-gray-800">
                    <td className="px-4 py-3">
                      <p className="font-semibold text-center">{index + 1}</p>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center text-sm">
                        <div>
                          <p className="font-semibold text-center">
                            {item?.flat?.location}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-4 py-3 text-sm">{item?.user?.email}</td>
                    <td className="px-4 py-3 text-sm">
                      {item?.flat?.totalRooms}
                    </td>
                    <td className="px-4 py-3 text-xs">
                      <span
                        className={`px-2 py-1 text-xs font-semibold ${
                          item?.status === "BOOKED" &&
                          "bg-green-700 text-green-100"
                        } ${
                          item?.status === "PENDING" &&
                          "bg-orange-200 text-orange-600"
                        }  ${
                          item?.status === "REJECTED" &&
                          "bg-red-200 text-red-600"
                        } leading-tight  rounded-full `}
                      >
                        {item?.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-center space-x-2 text-sm">
                        <button
                          onClick={() => showToast("BOOKED", item?.id)}
                          disabled={item?.status === "BOOKED" ? true : false}
                          className={`px-2 py-1 ${
                            item?.status === "BOOKED"
                              ? "bg-gray-200 text-gray-400"
                              : "bg-green-200 text-green-700"
                          } rounded-md text-xs `}
                        >
                          CONFIRMED
                        </button>
                        <button
                          onClick={() => showToast("PENDING", item?.id)}
                          disabled={item?.status === "PENDING" ? true : false}
                          className={`px-2 py-1 ${
                            item?.status === "PENDING"
                              ? "bg-orange-100 text-orange-300"
                              : "bg-orange-200 text-orange-700"
                          } rounded-md text-xs `}
                        >
                          PENDING
                        </button>
                        <button
                          onClick={() => showToast("REJECTED", item?.id)}
                          disabled={item?.status === "REJECTED" ? true : false}
                          className={`px-2 py-1 ${
                            item?.status === "REJECTED"
                              ? "bg-red-100 text-red-300"
                              : "bg-red-200 text-red-700"
                          } rounded-md text-xs `}
                        >
                          REJECTED
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              ))
            ) : (
              <div>Loading...</div>
            )}
          </table>
        </div>
      </div>

      {/* <div className=" text-xs font-semibold tracking-wide text-gray-800 uppercase border-t font-poppins border-gray-400 bg-gray-50 "></div> */}
    </section>
  );
}

export default FlatShareRequestManagement;
