import { TbCheck, TbClock, TbCreditCard, TbTruckReturn } from "react-icons/tb";

export const FeaturesSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10 bg-gray-100/50">
      <div className="grid md:grid-cols-4 place-items-center gap-6 text-center">
        <article className="p-4">
          <div className="flex items-center justify-center bg-gray-300 rounded-full w-12 h-12 mx-auto mb-4">
            <TbCheck size={25} />
          </div>
          <h3 className="font-medium mb-2">Quality Guaranteed</h3>
          <p className="text-sm text-gray-500">
            All our products undergo rigorous quality control.
          </p>
        </article>
        <article className="p-4">
          <div className="flex items-center justify-center bg-gray-300 rounded-full w-12 h-12 mx-auto mb-4">
            <TbClock size={25} />
          </div>
          <h3 className="font-medium mb-2">Fast Shipping</h3>
          <p className="text-sm text-gray-500">
            Delivery within 24-48 hours to anywhere in the country.
          </p>
        </article>
        <article className="p-4">
          <div className="flex items-center justify-center bg-gray-300 rounded-full w-12 h-12 mx-auto mb-4">
            <TbCreditCard size={25} />
          </div>
          <h3 className="font-medium mb-2">Secure Payment</h3>
          <p className="text-sm text-gray-500">
            Multiple payment methods with maximum security.
          </p>
        </article>
        <article className="p-4">
          <div className="flex items-center justify-center bg-gray-300 rounded-full w-12 h-12 mx-auto mb-4">
            <TbTruckReturn size={25} />
          </div>
          <h3 className="font-medium mb-2">Free Returns</h3>
          <p className="text-sm text-gray-500">
            30 days for returns at no additional cost.
          </p>
        </article>
      </div>
    </section>
  );
};
