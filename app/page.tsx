'use client'

import dynamic from 'next/dynamic'
import '../src/App.css'
import '../src/index.css'

// Import the React App component
const App = dynamic(() => import('../src/App').then(mod => ({ default: mod.default })), {
  ssr: false,
  loading: () => (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'linear-gradient(135deg, #050505 0%, #0F0F0F 50%, #050505 100%)',
      color: '#FFFFFF',
      fontSize: '1.2rem'
    }}>
      Loading FormulaGPT...
    </div>
  )
})

export default function Page() {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <App />
    </div>
  )
}
