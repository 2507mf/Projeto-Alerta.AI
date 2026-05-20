import { useState, useRef, useEffect } from 'react'
import './App.css'
import Sidebar    from './components/Sidebar'
import Header     from './components/Header'
import MapCard    from './components/MapCard'
import BarChartCard  from './components/BarChartCard'
import PieChartCard  from './components/PieChartCard'
import ChamadosTable from './components/ChamadosTable'
import RightPanel    from './components/RightPanel'
import ChamadosPage  from './pages/ChamadosPage'

function App() {
  const [activePage, setActivePage] = useState('Dashboard')
  const mainRef = useRef(null)

  useEffect(() => {
    if (mainRef.current) mainRef.current.scrollTop = 0
  }, [activePage])

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#f0f2f5]">
      <Sidebar active={activePage} onNavigate={setActivePage} />

      <main ref={mainRef} className="flex-1 overflow-y-auto">
        {activePage === 'Dashboard' && (
          <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: 20, minHeight: '100%' }}>
            <Header />
            <MapCard />
            <div className="flex gap-5">
              <BarChartCard />
              <PieChartCard />
            </div>
            <ChamadosTable onVerTudo={() => setActivePage('Chamados')} />
          </div>
        )}

        {activePage === 'Chamados' && <ChamadosPage />}
      </main>

      <RightPanel />
    </div>
  )
}

export default App
