import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function CableTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "with-discount", label: "With Discounts" },
          { value: "no-discount", label: "No Discounts" },
        ]}
      />
      {/* <SortBy
        options={[
          { value: "name-asc", label: "Sort By Name (Asc)" },
          { value: "name-desc", label: "Sort By Name (Desc)" },
          { value: "regularPrice-asc", label: "Sort By Regular Price (Asc)" },
          { value: "regularPrice-desc", label: "Sort By Regular Price (Desc)" },
          { value: "discountPrice-asc", label: "Sort By Discount Price (Asc)" },
          {
            value: "discountPrice-desc",
            label: "Sort By Discount Price (Desc)",
          },
          { value: "maxCapacity-asc", label: "Sort By Max Capacity (Asc)" },
          { value: "maxCapacity-desc", label: "Sort By Max Capacity (Desc)" },
        ]}
      /> */}
    </TableOperations>
  );
}

export default CableTableOperations;
