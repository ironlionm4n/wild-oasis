import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/helpers";
import { deleteCabin } from "../../services/apiCabins";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr 1.1fr 0.75fr 1fr 0.5fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;
  background: var(--gradient-beige-slate-7);
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
    margin-bottom: 0.8rem;
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-slate-50);
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
  color: var(--color-slate-200);
`;

function CabinRow({ cabin }) {
  const [showForm, setShowForm] = React.useState(false);

  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: deleteCabin,
    onSuccess: () => {
      toast.success("Cabin deleted");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (error) => {
      toast.error("Could not delete cabin " + error.message);
      console.error("Could not delete cabin", error.message);
    },
  });

  return (
    <>
      <TableRow role="row">
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
          <Button
            variation="secondary"
            size="small"
            onClick={() => setShowForm((prev) => !prev)}
          >
            Edit
          </Button>
          <Button
            variation="danger"
            size="small"
            onClick={() => mutate(cabin.id)}
            disabled={isDeleting}
          >
            Delete
          </Button>
        </div>
      </TableRow>
      {showForm && <CreateCabinForm cabinToEdit={cabin} />}
    </>
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
