import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import propTypes from "prop-types";
import { useCreateCabin } from "../../hooks/query-hooks/useCreateCabin";
import { useEditCabin } from "../../hooks/query-hooks/useEditCabin";

function CreateCabinForm({ cabinToEdit = {}, onCloseModal }) {
  const { id: editId, ...editValues } = cabinToEdit;

  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  const { errors } = formState;

  const { createCabin, isLoading } = useCreateCabin();
  const { editCabin, isEditing } = useEditCabin();

  const isWorking = isLoading || isEditing;

  const onSubmit = (data) => {
    const image = typeof data.image === "string" ? data.image : data.image[0];
    if (isEditSession)
      editCabin(
        { newCabinData: { ...data, image }, id: editId },
        {
          onSuccess: (data) => {
            console.log("Cabin edited", data);
            reset(data);
          },
        }
      );
    else
      createCabin(
        { ...data, image: image },
        {
          onSuccess: (data) => {
            console.log("Cabin created", data);
            reset();
            onCloseModal?.();
          },
        }
      );
  };

  const onError = (errors) => {
    toast.error("Could not create cabin, please check the form");
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label="Cabin Name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          {...register("name", { required: "Name is required" })}
          disabled={isWorking}
        />
      </FormRow>

      <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          {...register("maxCapacity", {
            required: "Maximum capacity is required",
            min: { value: 1, message: "Capacity must be at least 1" },
            max: { value: 20, message: "Capacity must be at most 20" },
          })}
          disabled={isWorking}
        />
      </FormRow>

      <FormRow label="Regular Price" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          {...register("regularPrice", {
            required: "Regular Price is required",
            min: { value: 100, message: "Price must be at least $100" },
          })}
          disabled={isWorking}
        />
      </FormRow>

      <FormRow label="Discount %" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          {...register("discount", {
            required: "Discount is required",
            min: { value: 0, message: "Discount must be at least 0" },
            max: { value: 75, message: "Discount must be at most 75" },
          })}
          disabled={isWorking}
        />
      </FormRow>

      <FormRow label="Description" error={errors?.description?.message}>
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          {...register("description", {
            required: "Description is required",
            minLength: {
              value: 10,
              message: "Description must be at least 10 characters",
            },
            maxLength: {
              value: 200,
              message: "Description must be at most 200 characters",
            },
          })}
        />
      </FormRow>

      <FormRow label="Cabin Photo" error={errors?.image?.message}>
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", {
            required: isEditSession ? false : "Image File is required",
          })}
          disabled={isWorking}
        />
      </FormRow>

      <FormRow>
        <Button type="reset" onClick={() => onCloseModal?.()}>
          Clear Form
        </Button>
        <Button disabled={isWorking}>
          {isEditSession ? "Edit Cabin" : "Create New Cabin"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;

CreateCabinForm.propTypes = {
  cabinToEdit: propTypes.object,
  onCloseModal: propTypes.func,
};
