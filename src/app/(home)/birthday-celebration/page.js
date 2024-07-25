import { title } from "@/utils/metaData";
import PageHeader from "@/components/Common/PageHeader";
import LandingPage from "@/components/Birthday/LandingPage";

export const metadata = {
  title: title("Birthday Celebration"),
};

const page = () => {
  return (
    <>
      <PageHeader page="Birthday Celebration" birthday={true} />
      <main id="birthday">
        <LandingPage />
      </main>
    </>
  );
};

export default page;
