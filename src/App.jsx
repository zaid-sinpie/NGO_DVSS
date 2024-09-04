import Header from "./components/Header.jsx";
import Head from "./components/Head.jsx";
import Programs from "./components/Programs.jsx";
import Community from "./components/Community.jsx";
import About from "./components/About.jsx";

function App() {
  return (
    <main className="flex flex-col">
      {<Header />}
      {<Head />}
      {<Programs />}
      {<Community />}
      {/* {<About />} */}
    </main>
  );
}

export default App;
