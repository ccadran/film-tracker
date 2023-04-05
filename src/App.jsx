import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";

function App() {
  const [count] = useState(0);
  useEffect(() => {
    console.log({ count });
  }, []);
  return (
    <div>
      <p>salut !</p>
    </div>
  );
}

export default App;
