import { cookies } from "next/headers";
import { CheckoutWrapper } from "../../../components/ui/CheckoutWrapper";
import { notFound } from "next/navigation";
import { books } from "@/lib/data";
import { getBundleBySlug } from "@/lib/saleBooks";
import { slugify } from "@/lib/utils";
import { ResolvedCartItem } from "@/lib/pricing";

const Checkout = async ({ params }: PageProps<"/checkout/[book]">) => {
  const { book } = await params;

  // Try to find a bundle first (route param may be a bundle slug)
  const bundle = getBundleBySlug(String(book).trim().toLowerCase());

  const cookieStore = await cookies();
  const country = cookieStore.get("country")?.value || "US";

  let item: ResolvedCartItem;

  if (bundle) {
    item = {
      slug: bundle.slug,
      type: "bundle",
      title: bundle.title,
      description: bundle.description ?? "",
      img: bundle.image ?? undefined,
      img_url: bundle.image_url ?? "",
      price_ngn: bundle.price_ngn ?? "",
      price_usd: bundle.price_usd ?? "",
      quantity: 1,
    };
  } else {
    // Fallback: try to find a legacy single book entry in src/lib/data.ts
    const legacy = books.find(
      (b) => slugify(b.title) === String(book).trim().toLowerCase(),
    );

    if (!legacy) {
      // Neither bundle nor legacy book found -> 404
      notFound();
    }

    item = {
      slug: slugify(legacy.title),
      type: "book",
      title: legacy.title,
      description: legacy.description,
      img: legacy.img ?? undefined,
      img_url: legacy.img_url ?? "",
      price_ngn: legacy.price_ngn,
      price_usd: legacy.price_usd,
      quantity: 1,
    };
  }

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
          <CheckoutWrapper items={[item]} initialCountry={country} />
        </div>
      </div>
    </div>
    // </main>
  );
};

export default Checkout;