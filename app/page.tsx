import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Works from "./components/Works"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f3f0]">
      <Header />
      <About />
      <Works/>
      <Footer />
    </main>
  );
}
