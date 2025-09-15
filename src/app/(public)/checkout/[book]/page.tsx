import { cookies } from "next/headers";
import { CheckoutProduct } from "../../../components/ui/CheckoutProduct";
import { CheckoutForm } from "../../../components/ui/CheckoutForm";
import { books } from '@/lib/data';
import { slugify } from '@/lib/utils';

interface CheckoutParams {
  params: {
    book: string;
  };
}

const Checkout = ({ params }: CheckoutParams) => {
  // const router = useRouter();
  const { book } = params;
  const product = books.find((b) => slugify(b.title) === book);

  const cookieStore = cookies(); // no await needed
  const country = cookieStore.get("country")?.value || "US";
  console.log("Country from cookie:", country);
  
  const displayPrice =
    country === "NG" ? `NGN${product?.price_ngn}` : `$${product?.price_usd}`;

  const enrichedProduct = {
    ...product,
    displayPrice,
  };

  // const product = books.find((b) => slugify(b.title) === book);

  if (!product || !enrichedProduct) return <div>Book not found 😢</div>;
  return (
    // <main id="shop__page">
    <div className="bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Complete Your Order
            </h1>
            {/* <p className="text-muted-foreground">
              Secure checkout powered by industry-leading encryption
            </p> */}
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8 animate-slide-up">
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
