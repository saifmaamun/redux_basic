import Home from "./pages/Home/Home/Home";
import { useAppSelector } from "./redux/hooks/hooks";

function App() {
  const count = useAppSelector((state) => state.counter);
  console.log(count);

  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
