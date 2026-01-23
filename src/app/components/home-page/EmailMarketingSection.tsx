"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import toast, { Toaster } from "react-hot-toast";
import { Mail, Sparkles, Send } from "lucide-react";

const EmailMarketingSection = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/email-subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      toast.success("Successfully subscribed! Thank you for joining our community.");
      setEmail("");

    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to subscribe. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative px-4 py-20 overflow-hidden">
      <Toaster position="top-center" />

      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/3" />
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              Join Our Community
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Stay Connected
            </h2>
            <p className="text-lg text-muted-foreground max-w-lg mx-auto">
              Receive weekly inspiration, event updates, and exclusive content delivered to your inbox.
            </p>
          </div>

          {/* Main card */}
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">

              <div className="space-y-6">

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-12 h-14 text-base border-2 focus:border-primary focus:ring-0! transition-colors"
                      disabled={isLoading}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-14 text-base font-semibold bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Subscribing...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Subscribe Now
                      </div>
                    )}
                  </Button>
                </form>

                {/* Privacy notice */}
                <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                  <span>🔒</span>
                  <span>We respect your privacy. Unsubscribe at any time.</span>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Social proof */}
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              Join <span className="font-semibold text-primary">1,000+</span> subscribers already part of our community
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailMarketingSection;
