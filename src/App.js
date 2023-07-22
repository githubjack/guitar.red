import './App.css';
import MainLayout from './layout/MainLayout';
import Hero from './components/Hero';
import Section from './components/Section';
function App() {
  return (
    <MainLayout>
      <Hero />
      <Section />
    </MainLayout>
  );
}

export default App;
