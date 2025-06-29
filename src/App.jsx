import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Skills from "./components/Skills";

export default function App() {
    return (
        <>
            <Navbar />
            <main className=" bg-bgDark text-textWhite px-5 md:px-8">
                <HeroSection />
                <About />
                <Skills />
                <Experience />
                <Certifications />
                <Projects />
                <Contact />
            </main>
        </>
    );
}
