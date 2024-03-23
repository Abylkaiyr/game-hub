import { useState } from "react";
import Expandable from "./assets/components/Expandable";
import Button from "./assets/components/Button";

function App() {
  const [expandable, setExpandable] = useState(false);
  const text =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo voluptas nesciunt distinctio assumenda itaque! Voluptatibus dolore, blanditiis deserunt mollitia incidunt unde aperiam tempora, molestias porro facilis at expedita dolorem nobis ad harum voluptatum ab fugiat consequuntur nesciunt qui officiis id reprehenderit! Soluta voluptatibus reiciendis cum, in accusamus dolorem omnis fuga?";

  const handleClick = () => {
    console.log("clicked more");
    setExpandable(!expandable);
  };

  return (
    <>
      <Expandable text={text} textlength={50} expandable={expandable} />
      <Button className="btn-primary" onClick={handleClick}>
        {expandable ? "Less" : "More"}
      </Button>
    </>
  );
}

export default App;
