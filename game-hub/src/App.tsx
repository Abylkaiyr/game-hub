import Like from "./assets/components/Like";

function App() {
  return (
    <>
      <Like onClick={() => console.log("Clicked")} />
    </>
  );
  // const items = ["Item 1", "Item 2", "Item 3"];
  // return (
  //   <>
  //     <ListGroup
  //       items={items}
  //       heading="My List"
  //       onSelectItem={(item) => console.log(item)}
  //     />
  //   </>
  // );
  // const [alertVisible, setAlertVisible] = useState(false);
  // return (
  //   <div>
  //     {alertVisible && (
  //       <Alert onClose={() => setAlertVisible(false)}>My alert</Alert>
  //     )}
  //     <Button onClick={() => setAlertVisible(true)} className="btn-primary">
  //       {"Click Me"}
  //     </Button>
  //   </div>
  // );
}

export default App;
