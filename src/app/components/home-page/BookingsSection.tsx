import { Button } from "@/components/ui/button";
import { HeaderStyleComponent } from "./HeroSection";

const BookingsSection = () => {
  return (
    <section className="py-12 flex justify-center items-center px-4">
      <div className="space-y-2 relative z-10">
        <HeaderStyleComponent variant="dark" title="Bookings" />
        <p className="text-center text-text">
          Click here to book a counseling session or request an invitation to
          minister in words or songs
        </p>
        <div className="mt-8 flex justify-center">
          <Button>Book Now</Button>
        </div>
      </div>
    </section>
  );
};

export default BookingsSection;
