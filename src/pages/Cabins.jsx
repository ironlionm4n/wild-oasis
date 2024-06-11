import { useState } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import Button from "../ui/Button";
import CreateCabinForm from "../features/cabins/CreateCabinForm";

function Cabins() {
  const [showAddCabin, setShowAddCabin] = useState(false);

  return (
    <>
      <Heading as="h1">All cabins</Heading>
      <Row type="vertical">
        <CabinTable />
        <Button onClick={() => setShowAddCabin(!showAddCabin)}>
          Add cabin
        </Button>
        {showAddCabin && <CreateCabinForm />}
      </Row>
    </>
  );
}

export default Cabins;
