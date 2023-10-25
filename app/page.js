import { About, Hero, NavBar, Projects } from "@/components";


export default function Home() {
  return (
    <div className="select-none">
      <NavBar />
      <Hero />
      <About />
      <Projects />
    </div>
  )
}
