import { TbCheck, TbClock, TbCreditCard, TbTruckReturn } from "react-icons/tb";
import { Feature } from "../Feature/Feature";

export const FeaturesSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10 bg-gray-100/50">
      <div className="grid md:grid-cols-4 place-items-center gap-6 text-center">
        <Feature title="Quality Guaranteed" icon={<TbCheck size={25} />} text="All our products undergo rigorous quality control." />
        <Feature title="Fast Shipping" icon={<TbClock size={25} />} text="Delivery within 24-48 hours to anywhere in the country." />
        <Feature title="Secure Payment" icon={<TbCreditCard size={25} />} text="Multiple payment methods with maximum security." />
        <Feature title="Free Returns" icon={<TbTruckReturn size={25} />} text="30 days for returns at no additional cost." />
      </div>
    </section>
  );
};
