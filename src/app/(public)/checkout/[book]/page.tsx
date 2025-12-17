import { cookies } from "next/headers";
import { CheckoutProduct } from "../../../components/ui/CheckoutProduct";
import { CheckoutForm } from "../../../components/ui/CheckoutForm";
import { notFound } from "next/navigation";
import { BookType, books } from "@/lib/data";
import { getBundleBySlug, SaleBundle } from "@/lib/saleBooks";
import { slugify } from "@/lib/utils";

const Checkout = async ({ params }: PageProps<"/checkout/[book]">) => {
  // const router = useRouter();
  const { book } = await params;

  // Try to find a bundle first (route param may be a bundle slug)
  const bundle: SaleBundle | undefined = getBundleBySlug(
    String(book).trim().toLowerCase(),
  );

  const cookieStore = await cookies();
  const country = cookieStore.get("country")?.value || "US";

  // productForComponents will be a BookType-shaped object used by existing components.
  let productForComponents: BookType;

  if (bundle) {
    // Use bundle-provided prices directly (you said prices will be added directly)

    const displayPrice =
      country === "NG"
        ? `NGN${bundle.sale_price_ngn}`
        : `$${bundle.sale_price_usd}`;

    // Map SaleBundle -> legacy BookType shape expected by Checkout components.
    productForComponents = {
      title: bundle.title,
      description: bundle.description ?? "",
      // bundle cover image
      img: bundle.image ?? undefined,
      img_url: bundle.image_url ?? "",
      url: "",
      url_2: "",
      price_ngn: bundle.price_ngn ?? "",
      price_usd: bundle.price_usd ?? "",
      displayPrice,
      // Represent bundle members as `format` entries so UI shows them (type=member title)
      format: bundle.items.map((it) => ({
        type: it.title ?? it.slug,
        url: it.img_url ?? it.img ?? "",
        price: it.price_usd
          ? `$${it.price_usd}`
          : it.price_ngn
            ? `NGN${it.price_ngn}`
            : "",
      })),
      dop: bundle.dop ?? bundle.createdAt ?? "",
      pages: `${bundle.items.length} items`,
      language: "Mixed",
    } as BookType;
  } else {
    console.log("Legacy book not found");
    // Fallback: try to find a legacy single book entry in src/lib/data.ts
    const legacy = books.find(
      (b) => slugify(b.title) === String(book).trim().toLowerCase(),
    );

    if (!legacy) {
      // Neither bundle nor legacy book found -> 404
      notFound();
    }

    // Use the legacy book directly and ensure displayPrice is populated from the provided fields
    const displayPrice =
      country === "NG" ? `NGN${legacy.price_ngn}` : `$${legacy.price_usd}`;

    productForComponents = {
      ...legacy,
      displayPrice,
    } as BookType;
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
          <div className="grid lg:grid-cols-2 gap-8 animate-slide-up">
            {/* Product Details */}
            <div>
              <CheckoutProduct product={productForComponents} />
            </div>

            {/* Checkout Form */}
            <div>
              <CheckoutForm country={country} product={productForComponents} />
            </div>
          </div>
        </div>
      </div>
    </div>
    // </main>
  );
};

export default Checkout;
