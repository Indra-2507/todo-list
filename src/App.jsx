import Nav from "./components/Nav";
import TaskContainer from "./components/TaskContainer";
import Footer from "./components/Footer";

function App() {
  
  return (
    <section className="flex flex-col h-screen">
      <Nav />
      <TaskContainer />
      <Footer />
    </section>
  );
}

export default App;
