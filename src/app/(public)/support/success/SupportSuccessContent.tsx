"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Heart } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

const SupportSuccessContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [verified, setVerified] = useState(false);
  const [verifying, setVerifying] = useState(true);

  useEffect(() => {
    const sessionId = searchParams.get("session_id");

    if (!sessionId) {
      setVerifying(false);
      return;
    }

    const verify = async () => {
      try {
        const res = await fetch(
          `/api/checkout/session?session_id=${encodeURIComponent(sessionId)}`,
        );

        if (res.ok) {
          setVerified(true);
        }
      } finally {
        setVerifying(false);
      }
    };

    verify();
  }, [searchParams]);

  return (
    <div className="bg-secondary min-h-[70vh] flex items-center justify-center px-4 py-20">
      <Card className="max-w-lg w-full border-0 shadow-xl bg-white">
        <CardContent className="p-8 text-center space-y-6">
          <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            {verified ? (
              <CheckCircle className="w-8 h-8 text-primary" />
            ) : (
              <Heart className="w-8 h-8 text-primary" />
            )}
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-foreground">
              Thank You for Your Support
            </h1>
            <p className="text-text">
              {verifying
                ? "Confirming your gift..."
                : verified
                  ? "Your generosity helps us create, grow, and reach more young minds."
                  : "We received your request. If you completed payment, thank you for supporting our mission."}
            </p>
          </div>

          <Button className="w-full" onClick={() => router.push("/home")}>
            Back to Home
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SupportSuccessContent;
