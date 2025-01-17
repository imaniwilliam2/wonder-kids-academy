import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Enroll() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        "/assets/photos/HFH04648.jpg",
        "/assets/photos/HFH07739.jpg",
        "/assets/photos/HFH05012.jpg",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="enroll-div p-6 max-w-6xl mx-auto pt-20 pb-10">
            {/* Title Section */}
            <div className="join-title">
                <h1 className="text-5xl text-olive font-bold text-center mb-8">
                    Join the Wonder Kids Family
                </h1>
            </div>

            <div>
                <div className="flex flex-col md:flex-row items-center">
                    {/* Photo Carousel */}
                    <div className="md:w-full p-4"> 
                        <div className="relative h-96 bg-gray-200 flex items-center justify-center rounded-xl"> 
                            {/* Replace placeholder with actual carousel images */}
                            {slides.map((src, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 transition-opacity duration-1000 ${
                                        index === currentSlide ? "opacity-100" : "opacity-0"
                                    }`}
                                >
                                    <img
                                        rel="preload"
                                        src={src}
                                        alt={`Slide ${index + 1}`}
                                        className="enroll-image w-full h-full object-cover text-xl rounded-xl"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="enroll-text md:w-1/2 text-center p-4 pt-10">
                        <p className="text-gray-700 mb-6 text-base">
                            Are you looking for a faith-filled environment where your child can learn, grow, and thrive? At Wonder Kids Academy, we are honored to partner with you in this important season of your child’s life.
                        </p>
                        <div className="flex justify-center mb-6">
                            <button className="text-lg font-bold text-olive inline-block border-2 border-navy/50 p-2 bg-stone-200 hover:shadow-lg hover:-translate-y-1 transition duration-300 ease-in-out">
                            <Link to="https://form.jotform.com/250098411592154">
                                Enroll Now
                            </Link>
                            </button>
                        </div>
                        <div className="flex justify-center mb-6">
                            <button className="text-base font-bold text-olive inline-block border-2 border-navy/50 p-2 bg-stone-200 hover:shadow-lg hover:-translate-y-1 transition duration-300 ease-in-out">
                            <Link to="https://my.matterport.com/show/?m=W1NXSP2dzka">
                                Take A Virtual Tour
                            </Link>
                            </button>
                        </div>
                        <p className="text-gray-700 text-base">
                            Let’s embark on this journey together. Schedule a tour today or contact us for more information about our programs and enrollment process.
                        </p>
                        <p className="text-base font-bold text-brown"> Our space is limited, so do not hesitate to take your next steps.</p>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Enroll;
