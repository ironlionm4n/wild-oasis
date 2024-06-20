import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import { useDeleteCabin } from "../../hooks/query-hooks/useDeleteCabin";
import { useCreateCabin } from "../../hooks/query-hooks/useCreateCabin";
import { HiDuplicate, HiPencil, HiTrash } from "react-icons/hi";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

// const TableRow = styled.div`
//   display: grid;
//   grid-template-columns: 0.5fr 1fr 1.1fr 0.75fr 1fr 0.5fr;
//   column-gap: 4rem;
//   align-items: center;
//   padding: 1.4rem 2.4rem;
//   &:not(:last-child) {
//     border-bottom: 3px solid var(--color-coral-300);
//   }
// `;

const Img = styled.img`
  display: block;
  width: 8.4rem;
  aspect-ratio: 3/2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-slate-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
  font-size: 1.6rem;
  color: var(--color-teal-400);
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 700;
  font-size: 1.6rem;
  color: var(--color-teal-400);
`;

const Capacity = styled.div`
  font-family: "Sono";
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-slate-500);
`;

function CabinRow({ cabin }) {
  //console.log("cabin", cabin);
  const { isDeleting, deleteCabin } = useDeleteCabin();
  const { createCabin, isLoading } = useCreateCabin();

  function handleDuplicate() {
    createCabin({
      name: `Copy of ${cabin.name}`,
      maxCapacity: cabin.maxCapacity,
      regularPrice: cabin.regularPrice,
      discount: cabin.discount,
      image: cabin.image,
      description: cabin.description,
    });
  }

  return (
    <Table.Row>
      <Img src={cabin.image} alt={cabin.name} />
      <Cabin>{cabin.name}</Cabin>
      <Capacity>Fits up to {cabin.maxCapacity} guests</Capacity>
      <Price>{formatCurrency(cabin.regularPrice)}</Price>
      <Discount>
        {formatCurrency(
          cabin.regularPrice - cabin.regularPrice * (cabin.discount / 100)
        )}
      </Discount>
      <div style={{ display: "flex", gap: "12px" }}>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={cabin.id} />
            <Menus.List id={cabin.id}>
              <Menus.Button icon={<HiDuplicate />} onClick={handleDuplicate}>
                Duplicate
              </Menus.Button>
              <Modal.Open opens="edit">
                <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
              </Modal.Open>
              <Modal.Open opens="delete">
                <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
              </Modal.Open>
            </Menus.List>
            <Modal.Window name="edit">
              <CreateCabinForm cabinToEdit={cabin} />
            </Modal.Window>
            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName="cabins"
                disabled={isDeleting}
                onConfirm={() => deleteCabin(cabin.id)}
              />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </div>
    </Table.Row>
  );
}

export default CabinRow;

CabinRow.propTypes = {
  cabin: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    maxCapacity: PropTypes.number.isRequired,
    regularPrice: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
