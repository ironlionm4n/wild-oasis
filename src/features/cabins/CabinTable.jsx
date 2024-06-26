import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useCabins } from "../../hooks/query-hooks/useCabins";

const Table = styled.div`
  border: 1px solid var(--color-slate-700);
  font-size: 1.4rem;
  background: var(--gradient-beige-slate-6);
  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr 0.75fr 1fr 0.5fr;
  column-gap: 3rem;
  align-items: center;
  background-color: var(--color-slate-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 700;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

function CabinTable() {
  const { isLoading, cabins, error } = useCabins();

  if (isLoading) return <Spinner />;

  return (
    <Table role="table">
      <TableHeader role="row">
        <div>Image</div>
        <div>Cabin Name</div>
        <div>Capacity</div>
        <div>Regular Price</div>
        <div>Discount Price</div>
      </TableHeader>
      {cabins.map((cabin) => (
        <CabinRow key={cabin.id} cabin={cabin} />
      ))}
    </Table>
  );
}

export default CabinTable;
