function About() {
    return (
        <div className="mt-5 mb-16 space-y-8"> 

            <div className="flex items-center justify-center space-x-4">

                {/* Philosophy Section */}
                <img src="/assets/photos/placeholder.jpg" alt="placeholder" className="w-70 h-70object-cover" />
                                    
                <div className="text-center max-w-4xl mx-auto px-6 py-12">
                    <div className="phil-title">
                        <h1 className="text-5xl font-bold text-olive">Our Philosophy</h1>
                    </div>

                    <div class="phil-text">
                        <h2 className="text-xl font-semibold text-navy mt-2">Building Bright Futures Rooted in God’s Truth</h2>

                        <p className="mt-6 text-lg text-gray-700">
                            We are dedicated to fostering a love of learning in a nurturing atmosphere steeped in Christian values. At Wonder Kids Academy, we understand that early childhood is a time of incredible growth and discovery. Our approach is designed to:
                        </p>

                        <div class="max-w-4xl mx-auto p-6 space-y-4 bg-navy/50 rounded-xl shadow-md border border-stone-200">
                            <ul class="space-y-6">
                                <li class="bg-stone-50 rounded-lg p-6 shadow hover:shadow-lg hover:-translate-y-1 transition duration-300 ease-in-out">
                                <span class="text-lg text-olive font-medium">
                                    Cultivate Christ-like character in every child through biblical teachings and daily prayer.
                                </span>
                                </li>
                                <li class="bg-stone-50 rounded-lg p-6 shadow hover:shadow-lg hover:-translate-y-1 transition duration-300 ease-in-out">
                                <span class="text-lg text-olive font-medium">
                                    Encourage curiosity and creativity by providing hands-on learning experiences tailored to each child’s developmental stage.
                                </span>
                                </li>
                                <li class="bg-stone-50 rounded-lg p-6 shadow hover:shadow-lg hover:-translate-y-1 transition duration-300 ease-in-out">
                                <span class="text-lg text-olive font-medium">
                                    Promote a love of learning that lays a strong foundation for academic success.
                                </span>
                                </li>
                                <li class="bg-stone-50 rounded-lg p-6 shadow hover:shadow-lg hover:-translate-y-1 transition duration-300 ease-in-out">
                                <span class="text-lg text-olive font-medium">
                                    Partner with families in guiding children’s hearts and minds toward God’s purpose for their lives.
                                </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <img src="/assets/photos/placeholder.jpg" alt="placeholder" className="w-70 h-70 object-cover" />
            </div>


            {/* Different Section */}
            <div className="mt-16 pt-8 pb-8 bg-stone-100">
                <div class="different-title">
                    <h1 className='text-5xl text-olive font-bold  text-center max-w-4xl mx-auto'>What Makes Us Different</h1>
                </div>

                <div className="different-text">
                    <h1 className="text-center text-xl font-semibold text-navy mt-2">Faith and Excellence in Every Detail</h1>



                    <div class="mt-10 flex flex-col items-center text-center mb-20">
                        <img src="/assets/photos/placeholder.jpg" alt="placeholder" className="mb-4"/>
                        <h1 class="text-xl font-bold text-olive max-w-4xl mx-auto border-2 border-navy/50 p-2 bg-stone-200 hover:shadow-lg hover:-translate-y-1 transition duration-300 ease-in-out">
                            Christ-Centered Curriculum
                        </h1>
                        <h1 class="max-w-4xl mx-auto pt-2">
                            With the use of Abeka, the nation's top faith-based curriculum, we integrate Christian teachings into every subject, providing children with a strong foundation in both faith and academics. Through Bible stories, worship, and scripture memorization, we teach children about God’s love and His plan for their lives. A highlight of our week is Chapel service, where children come together in worship, hear age-appropriate Bible lessons, and experience the joy of praising God as a community. These moments reinforce the biblical principles taught in the classroom and inspire a deeper connection to Christ
                        </h1>
                    </div>

                    <div class="mt-10 flex flex-col items-center text-center mb-20">
                        <img src="/assets/photos/placeholder.jpg" alt="placeholder" className="mb-4"/>
                        <h1 class="text-xl font-bold text-olive max-w-4xl mx-auto border-2 border-navy/50 p-2 bg-stone-200 hover:shadow-lg hover:-translate-y-1 transition duration-300 ease-in-out">
                            Loving and Qualified Teachers
                        </h1>
                        <h1 class="max-w-4xl mx-auto pt-2">
                            Our educators are more than just teachers, they are caregivers, role models, and prayer warriors. Each staff member is committed to reflecting Christ’s love and fostering a joyful, safe environment where every child feels valued.
                        </h1>
                    </div>

                    <div class="mt-10 flex flex-col items-center text-center mb-20">
                        <img src="/assets/photos/placeholder.jpg" alt="placeholder" className="mb-4"/>
                        <h1 class="text-xl font-bold text-olive max-w-4xl mx-auto border-2 border-navy/50 p-2 bg-stone-200 hover:shadow-lg hover:-translate-y-1 transition duration-300 ease-in-out">
                            Hands-On Learning
                        </h1>
                        <h1 class="max-w-4xl mx-auto pt-2">
                            We believe that children learn best through exploration and play. Our classrooms are designed to engage young minds with interactive activities, outdoor adventures, and creative expression, all while pointing them toward God’s handiwork in the world.
                        </h1>
                    </div>

                    <div class="mt-10 flex flex-col items-center text-center mb-20">
                        <img src="/assets/photos/placeholder.jpg" alt="placeholder" className="mb-4"/>
                        <h1 class="text-xl font-bold text-olive max-w-4xl mx-auto border-2 border-navy/50 p-2 bg-stone-200 hover:shadow-lg hover:-translate-y-1 transition duration-300 ease-in-out">
                            Community and Partnership
                        </h1>
                        <h1 class="max-w-4xl mx-auto pt-2">
                            At Wonder Kids Academy, we view parents as essential partners in their child’s education and spiritual growth. Through open communication, family events, and shared faith practices, we strive to build a strong community of believers working together for each child’s success.
                        </h1>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default About;
