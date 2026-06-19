import { Suspense } from "react";
import SupportSuccessContent from "./SupportSuccessContent";

const SupportSuccessPage = () => {
  return (
    <Suspense
      fallback={
        <div className="bg-secondary min-h-[70vh] flex items-center justify-center px-4 py-20">
          <p className="text-text">Loading...</p>
        </div>
      }
    >
      <SupportSuccessContent />
    </Suspense>
  );
};

export default SupportSuccessPage;
