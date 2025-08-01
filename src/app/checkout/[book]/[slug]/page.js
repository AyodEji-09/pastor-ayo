"use client";
import PaymentFailed from "@/components/failurePage";
import PaymentSuccess from "@/components/successPage/successPage";
import { useParams } from "next/navigation";

const PaymentStatus = () => {
  const { slug } = useParams();
  console.log({ slug });

  return (
    <div>
      {slug === "success" && <PaymentSuccess />}
      {slug === "failure" && <PaymentFailed />}
    </div>
  );
};

export default PaymentStatus;
