import Buukbox from './projects/Buukbox'
import Authentication from './projects/Authentication'
import Game from './projects/Game'
import Contra from './projects/Contra'

export default function Projects() {
    return (
        <section id="projects">
            <div className="bg-nordpolarevening">
                <svg id="visual" viewBox="0 0 1920 200" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 143L53.3 129.8C106.7 116.7 213.3 90.3 320 97.2C426.7 104 533.3 144 640 144C746.7 144 853.3 104 960 92.8C1066.7 81.7 1173.3 99.3 1280 100.8C1386.7 102.3 1493.3 87.7 1600 80.2C1706.7 72.7 1813.3 72.3 1866.7 72.2L1920 72L1920 0L1866.7 0C1813.3 0 1706.7 0 1600 0C1493.3 0 1386.7 0 1280 0C1173.3 0 1066.7 0 960 0C853.3 0 746.7 0 640 0C533.3 0 426.7 0 320 0C213.3 0 106.7 0 53.3 0L0 0Z" fill="#2E3440" strokeLinecap="round" strokeLinejoin="miter"></path></svg>
                <div className="flex justify-center items-center flex-col lg:mt-auto mt-20">
                    <h1 className="font-Poppins text-3xl border-nordfrostlight border-b border-l px-2 text-white text-right uppercase">
                        Recent Projects
                    </h1>
                    <div className="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1">
                        <Buukbox />
                        <Authentication />
                        <Game />
                        <Contra />
                    </div>
                </div>
            </div>
        </section>
    )
}
