import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTableV2 from "../features/cabins/CabinTableV2";
import AddCabin from "../features/cabins/AddCabin";

function Cabins() {
  return (
    <>
      <Heading as="h1">All cabins</Heading>
      <Row type="vertical">
        <CabinTableV2 />
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
