import { CheckoutForm } from "@/components/form/CheckoutForm";
import { CheckoutProduct } from "@/components/product/CheckoutProduct";
import { useParams, useRouter } from "next/navigation";
import { books } from "@/utils/data";
import { slugify } from "@/app/(home)/shop/page";
import { cookies } from "next/headers";

// export const product = {
//   id: "wireless-headphones-pro",
//   name: "Wireless Headphones Pro",
//   price: 199,
//   originalPrice: 299,
//   description:
//     "Experience premium sound quality with our latest wireless headphones featuring advanced noise cancellation and 30-hour battery life.",
//   features: [
//     "Active Noise Cancellation",
//     "30-hour battery life",
//     "Premium drivers for superior sound",
//     "Comfortable over-ear design",
//     "Quick charge - 5 min for 2 hours",
//     "Bluetooth 5.2 connectivity",
//     "Voice assistant integration",
//     "1-year warranty included",
//   ],
// };

const Checkout = ({ params }) => {
  // const router = useRouter();
  const { book } = params;
  const product = books.find((b) => slugify(b.title) === book);

  const country = cookies().get("country")?.value || "US";
  const displayPrice = country === "NG" ? `NGN${product.price_ngn}` : `$${product.price_usd}`;

  const enrichedProduct = {
    ...product,
    displayPrice,
  };

  // const product = books.find((b) => slugify(b.title) === book);



  if (!product) return <div>Book not found 😢</div>;
  return (
    // <main id="shop__page">
    <div className="tw-bg-gradient-subtle">
      <div className="tw-container tw-mx-auto tw-px-4 tw-py-8">
        <div className="tw-max-w-6xl tw-mx-auto">
          {/* Header */}
          <div className="tw-text-center tw-mb-8 tw-animate-fade-in">
            <h1 className="tw-text-3xl tw-font-bold tw-text-foreground tw-mb-2">
              Complete Your Order
            </h1>
            {/* <p className="tw-text-muted-foreground">
              Secure checkout powered by industry-leading encryption
            </p> */}
          </div>

          {/* Main Content */}
          <div className="tw-grid tw-lg:grid-cols-2 tw-gap-8 tw-animate-slide-up">
            {/* Product Details */}
            <div>
              <CheckoutProduct product={enrichedProduct} />
            </div>

            {/* Checkout Form */}
            <div>
              <CheckoutForm
                product={enrichedProduct}
                // onSuccess={handleSuccess}
                // onError={handleError}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    // </main>
  );
};

export default Checkout;
