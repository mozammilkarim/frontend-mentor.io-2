import './App.css'
import Footer from './components/Footer'
import SuperSolution from './components/SuperSolution'
import TopSection from './components/TopSection'
function App() {
  return (
    <>
      <div className="xl:px-[165px] xl:py-[50px] p-3 sm:pb-[30rem]">
        <TopSection />
        <SuperSolution />
      </div>
      <Footer />
    </>
  )
}

export default App
