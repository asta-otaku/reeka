import { useState } from "react";
import DashboardNav from "../components/DashboardNav";
import DashboardLayout from "../layouts/DashboardLayout";

function Integration() {
  const [bookIntegration, setBookIntegration] = useState({
    airbnb: true,
    booking: false,
  });
  const [paymentIntegration, setPaymentIntegration] = useState({
    bank: false,
    mpesa: false,
  });

  return (
    <DashboardLayout>
      <div>
        <DashboardNav title="Integration" />

        <h3 className="my-4 text-deepBlue px-6 font-medium text-2xl">
          Integration
        </h3>
        <section className="px-6">
          <h5 className="w-full py-2 px-4 bg-[#FAFAFA] text-deepBlue font-bold text-base">
            Booking Integration
          </h5>
          <div className="flex items-center flex-col md:flex-row justify-between max-w-lg mt-8 w-full gap-4">
            <div className="bg-[#F5F5F5] md:w-1/2 p-4 rounded-xl flex flex-col gap-2">
              <button
                onClick={() =>
                  setBookIntegration({
                    ...bookIntegration,
                    airbnb: !bookIntegration.airbnb,
                  })
                }
                className={`p-2 ${
                  bookIntegration.airbnb
                    ? "bg-[#27AE60] text-white"
                    : "bg-white text-[#27AE60] "
                } font-semibold text-xs self-end rounded-xl`}
              >
                {bookIntegration.airbnb ? "Connected" : "Connect"}
              </button>
              <p className="text-sm font-semibold">AirBnB</p>
              <p className="text-xs font-medium max-w-3/5">
                Integration of these platform makes it easy for your property to
                have more integrations
              </p>
            </div>
            <div className="bg-[#F5F5F5] md:w-1/2 p-4 rounded-xl flex flex-col gap-2">
              <button
                onClick={() =>
                  setBookIntegration({
                    ...bookIntegration,
                    booking: !bookIntegration.booking,
                  })
                }
                className={`p-2 ${
                  bookIntegration.booking
                    ? "bg-[#27AE60] text-white"
                    : "bg-white text-[#27AE60] "
                } font-semibold text-xs self-end rounded-xl`}
              >
                {bookIntegration.booking ? "Connected" : "Connect"}
              </button>
              <p className="text-sm font-semibold">Bookings.com</p>
              <p className="text-xs font-medium max-w-3/5">
                Integration of these platform makes it easy for your property to
                have more integrations
              </p>
            </div>
          </div>
        </section>
        <section className="px-6 mt-8">
          <h5 className="w-full py-2 px-4 bg-[#FAFAFA] text-deepBlue font-bold text-base">
            Payment Integration
          </h5>
          <div className="flex items-center flex-col md:flex-row justify-between max-w-lg mt-5 w-full gap-4">
            <div className="bg-[#F5F5F5] md:w-1/2 p-4 rounded-xl flex flex-col gap-2">
              <button
                onClick={() =>
                  setPaymentIntegration({
                    ...paymentIntegration,
                    bank: !paymentIntegration.bank,
                  })
                }
                className={`p-2 ${
                  paymentIntegration.bank
                    ? "bg-[#27AE60] text-white"
                    : "bg-white text-[#27AE60] "
                } font-semibold text-xs self-end rounded-xl`}
              >
                {paymentIntegration.bank ? "Added" : "Add"}
              </button>
              <p className="text-sm font-semibold">Bank Account</p>
              <p className="text-xs font-medium max-w-3/5">
                Integration of these platform makes it easy for your property to
                have more integrations
              </p>
            </div>
            <div className="bg-[#F5F5F5] md:w-1/2 p-4 rounded-xl flex flex-col gap-2">
              <button
                onClick={() =>
                  setPaymentIntegration({
                    ...paymentIntegration,
                    mpesa: !paymentIntegration.mpesa,
                  })
                }
                className={`p-2 ${
                  paymentIntegration.mpesa
                    ? "bg-[#27AE60] text-white"
                    : "bg-white text-[#27AE60] "
                } font-semibold text-xs self-end rounded-xl`}
              >
                {paymentIntegration.mpesa ? "Added" : "Add"}
              </button>
              <p className="text-sm font-semibold">Mpesa Account</p>
              <p className="text-xs font-medium max-w-3/5">
                Integration of these platform makes it easy for your property to
                have more integrations
              </p>
            </div>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}

export default Integration;
