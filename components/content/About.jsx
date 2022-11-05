import Planet from '../Planet'

export default function Welcome() {
    return (
        <section id="about">
            <div className="whoami lg:grid lg:grid-cols-2 bg-nordpolarnight">
                <div className="xl:ml-52 lg:ml-32 lg:mt-48 lg:divide-y-2 divide-nordfrostlight mx-2">
                    <div className="lg:text-left text-center">
                        <h1 className="text-white lg:text-6xl md:text-4xl text-2xl uppercase">Elmeri Keitaanranta</h1>
                        <p className="text-white lg:text-3xl md:text-2xl text-xl uppercase">Full-stack developer</p>
                    </div>
                    <div className="mt-4 mx-2">
                        <p className="text-white lg:text-lg md:text-lg text-md lg:text-left text-center">
                            I am a developer from the Finnish archipelago. I
                            Recently graduated and I've Been building stuff for almost 3 years. 
                            I write silly things on <a href='https://dev.to/elmerivincent' className="underline decoration-2 decoration-nordauroraorange">Dev.to</a> and build broken hello worlds daily ⚒️. 
                        </p>
                    </div>
                </div>
                <div className="planet-svg lg:mt-32 mt-8 flex items-center justify-center mx-2">
                    <Planet />
                </div>
            </div>
        </section>
    )
}
