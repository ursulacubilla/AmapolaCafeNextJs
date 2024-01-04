import Menu from './components/Menu'
import NuestrasCreaciones from './components/NuestrasCreaciones'
import SobreNosotros from './components/SobreNosotros'

export default function Home() {
  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-14">
      <Menu />
      <NuestrasCreaciones />
      <SobreNosotros />
    </main>
  )
}
