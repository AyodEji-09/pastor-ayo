export const buyBookAction = async (initialState, formData) => {
  const data = {
    email: formData(email),
    firstName: formData(firstName),
    lastName: formData(lastName),
    address: formData(address),
    city: formData(city),
    state: formData(state),
    zipCode: formData(zipCode),
    country: formData(country),
  };

  try {
    const data = await handleBuy(data, product);
    return { data, success: true };

    // Simulate success/failure (80% success rate)
    // const isSuccess = Math.random() > 0.2;

    // if (isSuccess) {
    //   toast({
    //     title: "Payment Successful!",
    //     description: "Your order has been processed successfully.",
    //   });
    //   onSuccess();
    // } else {
    //   throw new Error("Payment failed");
    // }
  } catch (error) {
    // console.log({ error });

    // toast({
    //   title: "Payment Failed",
    //   description:
    //     "There was an issue processing your payment. Please try again.",
    //   variant: "destructive",
    // });
    // onError();
    return { data: error, success: false };
  }
};

async function handleBuy(formData, book) {
  console.log("buy book");
  //   try {
  const res = await fetch("/api/checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ priceId: book.priceId, book, data: formData }),
  });

  const data = await res.json();
  console.log({ data });
  return data;
  // return { data, success: true };

  //     window.location.href = data.url; // redirect to Stripe Checkout
  //   } catch (error) {
  //     console.log(error);
  //   return { data: error, success: false };
  //   }
}
