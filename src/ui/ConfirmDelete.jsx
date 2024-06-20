import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";
import propTypes from "prop-types";
import Paragraph from "./Paragraph";

const StyledConfirmDelete = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  & p {
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

function ConfirmDelete({ resourceName, onConfirm, disabled, onCloseModal }) {
  return (
    <StyledConfirmDelete>
      <Heading as="h3">Delete {resourceName}</Heading>
      <Paragraph size="large" variation="danger">
        This will permanently delete the {resourceName}. Are you sure you want
        to proceed?
      </Paragraph>

      <div>
        <Button
          variation="secondary"
          disabled={disabled}
          onClick={onCloseModal}
        >
          Cancel
        </Button>
        <Button variation="danger" disabled={disabled} onClick={onConfirm}>
          Delete
        </Button>
      </div>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;

ConfirmDelete.propTypes = {
  resourceName: propTypes.string.isRequired,
  onConfirm: propTypes.func.isRequired,
  disabled: propTypes.bool,
  onCloseModal: propTypes.func,
};
