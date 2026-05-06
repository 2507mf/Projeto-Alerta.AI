import './App.css'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import MapCard from './components/MapCard'
import BarChartCard from './components/BarChartCard'
import PieChartCard from './components/PieChartCard'
import ChamadosTable from './components/ChamadosTable'
import RightPanel from './components/RightPanel'

function App() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#f0f2f5]">
      <Sidebar />

      <main className="flex-1 overflow-y-auto">
        <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: 20, minHeight: '100%' }}>
          <Header />
          <MapCard />

          <div className="flex gap-5">
            <BarChartCard />
            <PieChartCard />
          </div>

          <ChamadosTable />
        </div>
      </main>

      <RightPanel />
    </div>
  )
}

export default App
