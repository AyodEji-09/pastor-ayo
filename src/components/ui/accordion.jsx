import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart, Star, Shield, Truck, Headphones } from "lucide-react";
import productHero from "@/assets/product-hero.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Index = () => {
  const router = useRouter();

  const features = [
    {
      icon: Star,
      title: "Premium Quality",
      description: "Industry-leading audio technology",
    },
    {
      icon: Shield,
      title: "1-Year Warranty",
      description: "Complete protection included",
    },
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Fast & secure delivery worldwide",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Expert customer service team",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-5xl font-bold text-foreground leading-tight">
                  Wireless Headphones
                  <span className="bg-gradient-primary bg-clip-text text-transparent block">
                    Pro Collection
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Experience premium sound quality with our latest wireless
                  headphones featuring advanced noise cancellation and 30-hour
                  battery life.
                </p>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex items-center gap-1">
                  {/* {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))} */}
                </div>
                <span className="text-muted-foreground">
                  4.9/5 from 2,847 reviews
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  $199
                </span>
                <span className="text-2xl text-muted-foreground line-through">
                  $299
                </span>
                <span className="px-3 py-1 bg-destructive text-destructive-foreground text-sm font-semibold rounded-full">
                  33% OFF
                </span>
              </div>

              <Button
                variant="checkout"
                size="lg"
                className="text-lg px-8 py-6"
                onClick={() => router.push("/checkout")}
              >
                <ShoppingCart className="w-5 h-5" />
                Buy Now - Limited Time Offer
              </Button>

              <p className="text-sm text-muted-foreground">
                ✓ Free shipping worldwide • ✓ 30-day money-back guarantee • ✓
                1-year warranty
              </p>
            </div>

            <div className="animate-slide-up">
              <Card className="overflow-hidden shadow-elegant bg-gradient-card">
                <Image
                  src={productHero}
                  alt="Wireless Headphones Pro"
                  className="w-full h-auto object-cover hover:scale-105 transition-smooth"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Why Choose Our Headphones?
            </h2>
            <p className="text-muted-foreground">
              Premium features that set us apart from the competition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 bg-gradient-card shadow-md hover:shadow-elegant transition-smooth animate-slide-up"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="p-12 text-center bg-gradient-card shadow-elegant">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                Ready to Experience Premium Audio?
              </h2>
              <p className="text-lg text-muted-foreground">
                Join thousands of satisfied customers and upgrade your listening
                experience today.
              </p>
              <Button
                variant="checkout"
                size="lg"
                className="text-lg px-12 py-6"
                onClick={() => router.push("/checkout")}
              >
                <ShoppingCart className="w-5 h-5" />
                Start Secure Checkout
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
