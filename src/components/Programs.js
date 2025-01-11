

function Programs() {
    return (
        <div className="programs-div bg-stone-50 pr-5 mb-[-8rem]">

            {/* Title Section */}
            <div className="join-title text-center pt-20">
                <h1 className="text-5xl font-bold text-olive">A Journey of Growth and Faith</h1>
            </div>

            <div className="programs-text">
                <h1 className="text-base font-semibold text-navy mt-2 text-center pb-10 pl-10">
                    We offer developmentally appropriate programs for children aged 6 weeks to 4 years that inspire confidence, curiosity, and Christ-like character:
                </h1>

                {/* Programs Section */}
                <div className="flex justify-center space-x-8 pl-9 mb-10 pt-20 pb-40">
                    <div className="text-center">
                        <h1 className="text-base font-bold text-olive inline-block border-2 border-navy/50 p-2 bg-stone-200 hover:shadow-lg hover:-translate-y-1 transition duration-300 ease-in-out mb-5">Infants (6 weeks - 12 months)</h1>
                        <img src="/assets/photos/HFH00142.jpg" alt="placeholder" className="mb-4 h-2/5 rounded-xl translate-x-full mx-[-8.5rem]"/>
                        <h2 className="text-default text-gray-700">Our infant program provides a loving and secure environment where your baby can thrive. With a focus on nurturing and sensory exploration, our caregivers foster your child’s cognitive, physical, and emotional growth.</h2>
                    </div>

                    <div className="text-center transform translate-y-[-80px]">
                        <h1 className="text-base font-bold text-olive inline-block border-2 border-navy/50 p-2 bg-stone-200 hover:shadow-lg hover:-translate-y-1 transition duration-300 ease-in-out mb-5">Toddlers (1 - 2 years)</h1>
                        <img src="/assets/photos/HFH05001.jpg" alt="placeholder" className="mb-4 h-2/5 rounded-xl translate-x-full mx-[-8.5rem]"/>
                        <h2 className="text-default text-gray-700">For our curious toddlers, we create opportunities for hands-on discovery and skill development. Our activities include art, music, language building, and gross motor play to encourage their growing independence and creativity.</h2>
                    </div>

                    <div className="text-center">
                    <h1 className="text-base font-bold text-olive inline-block border-2 border-navy/50 p-2 bg-stone-200 hover:shadow-lg hover:-translate-y-1 transition duration-300 ease-in-out mb-5">Preschool (3 - 4 years)</h1>
                        <img src="/assets/photos/HFH00148.jpg" alt="placeholder" className="mb-4 mx-auto h-2/5 rounded-xl translate-x-full mx-[-8.5rem]"/>
                        <h2 className="text-default text-gray-700">Our preschool program focuses on preparing children for the next phase of their educational journey. Through structured play and thematic learning, children build essential literacy, numeracy, and problem-solving skills while developing their social and emotional intelligence.</h2>
                    </div>
                </div>
            </div>



    
        </div>
    );
}

export default Programs;