"use client";
import PaymentFailed from "@/app/components/ui/failurePage";
import PaymentSuccess, { product } from "@/app/components/ui/successPage";
import { useParams } from "next/navigation";

const PaymentStatus = () => {
  const { slug } = useParams();
  console.log({ slug });

  return (
    <div>
      {slug === "success" && <PaymentSuccess />}
      {slug === "failure" && <PaymentFailed product={product} />}
    </div>
  );
};

export default PaymentStatus;
