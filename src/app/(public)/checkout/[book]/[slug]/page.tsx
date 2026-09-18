"use client";
import PaymentFailed from "@/app/components/ui/failurePage";
import PaymentSuccess from "@/app/components/ui/successPage";
import { books, BookType } from "@/lib/data";
import { getBundleBySlug, SaleBundle } from "@/lib/saleBooks";
import { slugify } from "@/lib/utils";
import { notFound, useParams } from "next/navigation";

const PaymentStatus = () => {
  const { book, slug } = useParams();
  let product: BookType | SaleBundle | undefined;

  const isCart = String(book).trim().toLowerCase() === "cart";

  if (!isCart) {
    const bundle: SaleBundle | undefined = getBundleBySlug(
      String(book).trim().toLowerCase(),
    );

    if (bundle) {
      product = bundle;
    } else {
      const legacy = books.find(
        (b) => slugify(b.title) === String(book).trim().toLowerCase(),
      );

      if (!legacy) {
        // Neither bundle nor legacy book found -> 404
        notFound();
      }
      product = legacy as BookType;
    }
  }

  if (slug !== "success" && slug !== "failure") {
    notFound();
  }

  return (
    <div className="px-4 py-8 container mx-auto">
      {slug === "success" && (
        <PaymentSuccess product={product} isCart={isCart} />
      )}
      {slug === "failure" && <PaymentFailed product={product} />}
    </div>
  );
};

export default PaymentStatus;