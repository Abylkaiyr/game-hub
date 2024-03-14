import Alert from "./assets/components/Alert";
import Button from "./assets/components/Button";

function App() {
  return (
    <div>
      <Alert>
        <span>Hello World</span>
      </Alert>
      <Button text="Click me" className="btn btn-primary" />
    </div>
  );
}

export default App;
