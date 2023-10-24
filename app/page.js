import { About, Hero, NavBar } from "@/components";


export default function Home() {
  return (
    <div className="select-none">
      <NavBar />
      <Hero />
      <About />
    </div>
  )
}
