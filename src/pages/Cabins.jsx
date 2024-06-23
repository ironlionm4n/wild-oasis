import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTableV2 from "../features/cabins/CabinTableV2";
import AddCabin from "../features/cabins/AddCabin";
import CabinTableOperations from "../features/cabins/CabinTableOperations";

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperations />
      </Row>
      <Row type="vertical">
        <CabinTableV2 />
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
