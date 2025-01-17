function Home() {
    return (
        <div className="home-div min-h-screen flex flex-col">
            {/* Header Section */}
            <div className="home-photo-div relative flex items-center justify-center text-center py-16 px-6 md:px-12">
                {/* Photo Section */}
                <div className="relative w-full md:w-1/2 h-[300px] md:h-[500px] overflow-hidden mb-6 md:mb-0">
                    <img
                        rel="preload"
                        src="/assets/photos/HFH04607.jpg"
                        alt="Welcome Placeholder"
                        className="home-photo object-cover w-full h-full rounded-xl"
                    />
                </div>

                {/* Welcome Section */}
                <div className="welcome-title-div ">
                    <div className="flex-1 md:pl-12">
                        <h1 className="welcome-title text-4xl md:text-6xl font-extrabold text-olive mb-4 drop-shadow-md shadow-slate-900">Welcome to Wonder Kids Academy</h1>
                        <p className="welcome-statement text-2xl text-navy opacity-90 mb-4 max-w-2xl mx-auto">
                            Where Faith, Learning, and Joyful Discovery Shine Bright
                        </p>
                    </div>
                </div>
            </div>

            {/* Welcome About Section */}
            <div className="welcome-about flex justify-center items-center py-16 px-6 md:px-12 bg-stone-100">
                <div className="text-center max-w-3xl mx-auto">
                    <p className="welcome-about-text text-lg text-gray-800 mb-6 leading-relaxed">
                        At Wonder Kids Academy, we believe that every child is a unique creation of God, full of potential and purpose. Our mission is
                        to nurture young hearts and minds in a Christ-centered environment, equipping them with the tools they need to thrive
                        academically, spiritually, and emotionally.
                    </p>
                    <p className="welcome-about-text text-lg text-gray-800 mt-6 leading-relaxed">
                        Through a blend of faith-based instruction, engaging curriculum, and loving care, we create a safe and inspiring space where
                        children can explore, grow, and wonder about the beauty of God’s world.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;
