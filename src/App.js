import Main from "./components/Main";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div className="container-sm" style={{ width: 200 }}>
      <Wrapper>
        <Main />
      </Wrapper>
    </div>
  );
}

export default App;
