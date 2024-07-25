"use client";
import birthday from "@/assets/images/birthday/birthday-hero.jpg";
import Image from "next/image";
import { useEffect, useState } from "react";
import DDday from "@/components/Birthday/DDday";
import Momemt from "@/components/Birthday/Momemt";

const LandingPage = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("August 31, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <>
      <div className="container my-3">
        <div className="hero">
          <div className="row justify-content-center">
            <div className="col-lg-4 hero-img">
              <Image
                src={birthday}
                className="img-thumbnail"
                alt="birthday banner"
                width={500}
              />
            </div>
            <div className="col-lg-4">
              <div className="d-flex flex-column justify-content-center hero-text mt-lg-5 pt-lg-5 mt-2 pt-2">
                <h2 className="fw-bolder">
                  Welcome to a Grand Celebration of Life and Ministry!
                </h2>
                <p className="lead mt-1">
                  Join us in celebrating a remarkable milestone as Pastor
                  Ayodeji Samson Anifowose turns 40! We are excited to honor a
                  man of God who has dedicated his life to faith, leadership,
                  and service. This joyous occasion will be filled with
                  heartfelt worship, inspiring testimonies, and a reflection on
                  the incredible journey God has led him through.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DDday />
      <Momemt />

      <div className="container my-5 invited">
        <div className="row justify-content-center">
          <div className="col-lg-8 invited-box rounded shadow">
            <div className="my-3 text-center">
              <h2 className="fw-bolder">You Are Invited</h2>
              <p className="lead mt-1 text-light">
                Join us for an awesome celebration as we mark a special
                milestone!
              </p>
            </div>
            <div className="invited-box-counter text-center rounded shadow">
              <div className="text-center rounded shadow">
                <h2 className="fw-bolder m-0">{timeLeft.days || 0}</h2>
                <p className="lead fw-bolder m-0"> Days</p>
              </div>
              <div className="text-center rounded shadow">
                <h2 className="fw-bolder m-0">{timeLeft.hours || 0}</h2>
                <p className="lead fw-bolder m-0"> Hours</p>
              </div>
              <div className="text-center rounded shadow">
                <h2 className="fw-bolder m-0">{timeLeft.minutes || 0}</h2>
                <p className="lead fw-bolder m-0"> Minutes</p>
              </div>
              <div className="text-center rounded shadow">
                <h2 className="fw-bolder m-0">{timeLeft.seconds || 0}</h2>
                <p className="lead fw-bolder m-0"> Seconds</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
