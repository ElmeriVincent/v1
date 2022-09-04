import Planet from '../Planet'

export default function Welcome() {
    return (
        <section id="about">
            <div className="whoami lg:grid lg:grid-cols-2 bg-nordpolarnight">
                <div className="xl:ml-52 lg:ml-32 lg:mt-48 lg:divide-y-2 divide-nordfrostlight mx-2">
                    <div className="lg:text-left text-center">
                        <h1 className="text-white lg:text-6xl md:text-4xl text-2xl uppercase">Elmeri Keitaanranta</h1>
                        <p className="text-white lg:text-3xl md:text-2xl text-xl uppercase">full-stack developer</p>
                    </div>
                    <div className="mt-2">
                        <p className="text-white lg:text-lg md:text-lg text-md mt-2 lg:text-left text-center">
                            Dev from the Finnish archipelago. <br />
                            Mostly build stuff for the web and explore nature.
                        </p>
                    </div>
                </div>
                <div className="lg:mt-32 mt-8 flex items-center justify-center mx-2">
                    <Planet />
                </div>
            </div>
        </section>
    )
}
