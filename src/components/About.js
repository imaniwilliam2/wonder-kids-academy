function About() {
    return (
        <div className="about-div mt-5 space-y-8"> 

            <div className="flex items-center justify-center space-x-4">

                {/* Philosophy Section */}
                <img rel="preload" src="/assets/photos/HFH02823.jpg" alt="placeholder" className="phil-one-photo w-80 h-full object-cover rounded-xl ml-2 mt-40" />
                                    
                <div className="text-center max-w-4xl mx-auto px-6 py-12">
                    <div className="phil-title">
                        <h1 className="phil-title text-5xl font-bold text-olive">Our Philosophy</h1>
                    </div>

                    <div className="phil-text">
                        <h2 className=" phil-subtitle text-xl font-semibold text-navy mt-2">Building Bright Futures Rooted in God’s Truth</h2>

                        <p className="phil-subtext mt-6 text-lg text-gray-700 pb-5">
                            We are dedicated to fostering a love of learning in a nurturing atmosphere steeped in Christian values. At Wonder Kids Academy, we understand that early childhood is a time of incredible growth and discovery. Our approach is designed to:
                        </p> 

                        <div className="phil-points max-w-4xl mx-auto p-6 space-y-4 bg-navy/50 rounded-xl shadow-md border border-stone-200">
                            <ul className="grid grid-cols-2 gap-6">
                                <li className="bg-stone-50 p-6 shadow hover:shadow-lg hover:-translate-y-1 transition duration-300 ease-in-out border-t-4 border-b-4 border-brown h-[200px] w-full flex items-center justify-center">
                                    <span className="phil-points text-base text-olive font-medium text-center">
                                        Cultivate Christ-like character in every child through biblical teachings and daily prayer.
                                    </span>
                                </li>
                                <li className="bg-stone-50 p-6 shadow hover:shadow-lg hover:-translate-y-1 transition duration-300 ease-in-out border-t-4 border-b-4 border-brown h-[200px] w-full flex items-center justify-center">
                                    <span className="phil-points text-sm text-olive font-medium text-center">
                                        Encourage curiosity and creativity by providing hands-on learning experiences tailored to each child’s developmental stage.
                                    </span>
                                </li>
                                <li className="bg-stone-50 p-6 shadow hover:shadow-lg hover:-translate-y-1 transition duration-300 ease-in-out border-t-4 border-b-4 border-brown h-[200px] w-full flex items-center justify-center">
                                    <span className="phil-points text-base text-olive font-medium text-center">
                                        Promote a love of learning that lays a strong foundation for academic success.
                                    </span>
                                </li>
                                <li className="bg-stone-50 p-6 shadow hover:shadow-lg hover:-translate-y-1 transition duration-300 ease-in-out border-t-4 border-b-4 border-brown h-[200px] w-full flex items-center justify-center">
                                    <span className="phil-points text-base text-olive font-medium text-center">
                                        Partner with families in guiding children’s hearts and minds toward God’s purpose for their lives.
                                    </span>
                                </li>
                            </ul>
                        </div>



                    </div>
                </div>

                <img rel="preload" src="/assets/photos/HFH00161.jpg" alt="placeholder" className="phil-two-photo w-80 h-full object-cover rounded-xl mr-2 mt-40 " />
            </div>


            {/* Different Section */}
            <div className="mt-16 pt-8 pb-8 bg-stone-100">
                <div className="different-title">
                    <h1 className='different-title text-5xl text-olive font-bold  text-center max-w-4xl mx-auto'>What Makes Us Different</h1>
                </div>

                <div className="different-text">
                    <h1 className="different-text text-center text-xl font-semibold text-navy mt-2">Faith and Excellence in Every Detail</h1>



                    <div className="mt-10 flex flex-col items-center text-center mb-20">
                        <img rel="preload" src="/assets/photos/HFH00164.jpg" alt="placeholder" className="different-points-image-vertical mb-4 w-1/6 h-full rounded-xl"/>
                        <h1 className="different-points-title text-xl font-bold text-olive max-w-4xl mx-auto border-2 border-navy/50 p-2 bg-stone-200 hover:shadow-lg hover:-translate-y-1 transition duration-300 ease-in-out">
                            Christ-Centered Curriculum
                        </h1>
                        <h1 className="different-points-text max-w-4xl mx-auto pt-2">
                            With the use of Abeka, the nation's top faith-based curriculum, we integrate Christian teachings into every subject, providing children with a strong foundation in both faith and academics. Through Bible stories, worship, and scripture memorization, we teach children about God’s love and His plan for their lives. A highlight of our week is Chapel service, where children come together in worship, hear age-appropriate Bible lessons, and experience the joy of praising God as a community. These moments reinforce the biblical principles taught in the classroom and inspire a deeper connection to Christ
                        </h1>
                    </div>

                    <div className="mt-10 flex flex-col items-center text-center mb-20">
                        <img rel="preload" src="/assets/photos/HFH04544.jpg" alt="placeholder" className="different-points-image mb-4 w-2/6 h-full rounded-xl"/>
                        <h1 className="different-points-title  text-xl font-bold text-olive max-w-4xl mx-auto border-2 border-navy/50 p-2 bg-stone-200 hover:shadow-lg hover:-translate-y-1 transition duration-300 ease-in-out">
                            Loving and Qualified Teachers
                        </h1>
                        <h1 className="different-points-text max-w-4xl mx-auto pt-2">
                            Our educators are more than just teachers, they are caregivers, role models, and prayer warriors. Each staff member is committed to reflecting Christ’s love and fostering a joyful, safe environment where every child feels valued.
                        </h1>
                    </div>

                    <div className="mt-10 flex flex-col items-center text-center mb-20">
                        <img rel="preload" src="/assets/photos/HFH02381.jpg" alt="placeholder" className="different-points-image-vertical mb-4 w-1/6 h-full rounded-xl"/>
                        <h1 className="different-points-title text-xl font-bold text-olive max-w-4xl mx-auto border-2 border-navy/50 p-2 bg-stone-200 hover:shadow-lg hover:-translate-y-1 transition duration-300 ease-in-out">
                            Hands-On Learning
                        </h1>
                        <h1 className="different-points-text max-w-4xl mx-auto pt-2">
                            We believe that children learn best through exploration and play. Our classrooms are designed to engage young minds with interactive activities, outdoor adventures, and creative expression, all while pointing them toward God’s handiwork in the world.
                        </h1>
                    </div>

                    <div className="mt-10 flex flex-col items-center text-center mb-20">
                        <img rel="preload" src="/assets/photos/HFH04554.jpg" alt="placeholder" className="different-points-image mb-4 w-2/6 h-full rounded-xl"/>
                        <h1 className="different-points-title  text-xl font-bold text-olive max-w-4xl mx-auto border-2 border-navy/50 p-2 bg-stone-200 hover:shadow-lg hover:-translate-y-1 transition duration-300 ease-in-out">
                            Community and Partnership
                        </h1>
                        <h1 className="different-points-text max-w-4xl mx-auto pt-2">
                            At Wonder Kids Academy, we view parents as essential partners in their child’s education and spiritual growth. Through open communication, family events, and shared faith practices, we strive to build a strong community of believers working together for each child’s success.
                        </h1>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default About;
