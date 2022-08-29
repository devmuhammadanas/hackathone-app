import Routing from "./routing/Routing";
import { useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";
import { doGetActiveUser } from "./store/actions/AuthAction";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
   dispatch(doGetActiveUser())
  })
  
  return (
    <div className="App">
   <Routing />
    </div>
  );
}

export default App;
