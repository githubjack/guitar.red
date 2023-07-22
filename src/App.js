import "./App.css";
import MainLayout from "./layout/MainLayout";
import Hero from "./components/Hero";
import Section from "./components/Section";
function App() {
  return (
    <MainLayout>
      <div className="page-layout">
        <Hero />
      </div>
      <div className="page-layout">
        <Section />
      </div>
    </MainLayout>
  );
}

export default App;
