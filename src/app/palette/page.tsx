export default function Palette () {

    //69CA29, 86BBD8, 7C4B13

    const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit vero laudantium veritatis amet, natus corrupti. Dignissimos quo id ullam! Architecto eius, id veniam aperiam dignissimos cum at eum aliquam hic."

    return (
        <div className="mt-[50px] h-full">
            <h1 className="text-4xl mb-4">Palette Info</h1>
            <div className="flex flex-row text-xl m-auto w-5/6 mb-3">
                    <div className="flex items-center w-1/6 bg-[#69CA29] mx-3 p-3 rounded-l-3xl">
                        #69CA29
                    </div>
                    <div className="w-5/6 bg-gray-300 h-1/4 p-3 rounded-r-3xl">
                        <strong>Lime Green</strong> is our highlighting color and our font color. This is what we use to pull the attention of the user most prominently. Green is the color of nature, of fresh leaves, of growth, and it has a calming effect too. For an environmentally-focused application, you've just gotta have green. Lime Green specifically was chosen because of its high contrast compared to the dark hues and muted tones we've opted for in our other colors. Importantly as well, a brighter green serves to symbolize fresh sprouts, rising out from dark soil, just as how opportunities for growth remain even where there appears to be no life.
                    </div>
            </div>
            <div className="flex flex-row text-xl m-auto w-5/6 mb-3 ">
                    <div className="flex items-center w-1/6 bg-[#86BBD8] mx-3 p-3 rounded-l-3xl">
                        #86BBD8
                    </div>
                    <div className="w-5/6 bg-gray-300 h-1/4 p-3 rounded-r-3xl">
                        <strong>Carolina Blue</strong> is our underlining color and our accent. This is used to soften the otherwise high-contrast clash of our background color and our font color. The color blue instills a greater sense of calm, especially muted blues, which serves to juxtapose the impact that lime green has. As well, in our case, Carolina Blue is chosen to symbol streams of water. It's neither the deep blue of a lake nor the sky blue of the...skies. It's a tenuous flow that serves as an accent to fresh sprouts and dark soil, reminding us that even a little bit of water can be enough to encourage growth, so long as one is there to receive it.
                    </div>
            </div>
            <div className="flex flex-row text-xl m-auto w-5/6 mb-3">
                    <div className="flex items-center w-1/6 bg-[#311D08] mx-3 p-3 rounded-l-3xl text-white">
                        #311D08
                    </div>
                    <div className="w-5/6 bg-gray-300 h-1/4 p-3 rounded-r-3xl">
                        <strong>Bistre</strong> is our background color and perhaps the color that will feature the most in EnviroQuest. It is a heavy color, nearly black, and it evokes thoughts of the earth, of deep roots, of dark oak. It is a symbol of enduring nature, of strength and power, all elements that we wanted to impart upon the planet itself. Earth is life-giving, after all, but it will also survive longer than anything that stands upon it. Water cannot flow without it, and sprouts cannot grow without it. That's why, compared to our Lime Green or Carolina Blue, it's ultimately Bistre that dominates the entirety of our application.
                    </div>
            </div>
        </div>
    )
}