import { useState } from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "../../features/cabins/CreateCabinForm";
import Row from "../../ui/Row";

function AddCabin() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <Row>
      <Button onClick={() => setIsOpenModal(!isOpenModal)}>
        {isOpenModal ? "Close Create Cabin Form" : "Show Create Cabin Form"}
      </Button>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
        </Modal>
      )}
    </Row>
  );
}

export default AddCabin;
