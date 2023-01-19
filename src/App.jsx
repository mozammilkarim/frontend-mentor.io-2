import './App.css'
import Footer from './components/Footer'
import SuperSolution from './components/SuperSolution'
import TopSection from './components/TopSection'
function App() {
  return (
    <div className='relative'>
      <div className="xl:px-[165px] xl:py-[50px] p-3 ">
        <TopSection />
        <SuperSolution />
      </div>
      <Footer />
    </div>
  )
}

export default App
