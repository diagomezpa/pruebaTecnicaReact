
import { Header } from './components/Header';
import { CardEarnings } from './components/CardEarnings';
import { CardRankProject } from './components/CardRankProject';
import { CardYourProjects } from './components/CardYourProjects';
import { Sliderbar } from './components/Sliderbar';
import { SeccionTwo } from './components/SeccionTwo';
import { RiLineChartLine, RiHashtag } from "react-icons/ri";

function App() {
 

  return (
    <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
      <Sliderbar></Sliderbar>
      <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 h-[100vh] overflow-y-scroll">
        <Header></Header>
        {/* Section 1 */}
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-10 gap-8">
          {/* Card 1 */}
          <CardEarnings></CardEarnings>
          {/* Card 2 */}
          <CardRankProject></CardRankProject>
          {/* Card 3 */}
          <CardYourProjects></CardYourProjects>
        </section>
        {/* Section 2 */}
        <SeccionTwo></SeccionTwo>
        
      </main>
    </div>
  )
}

export default App
