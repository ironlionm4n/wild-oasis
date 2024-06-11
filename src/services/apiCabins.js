import { supabase, supabaseUrl } from "./supabase";

export const getCabins = async () => {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    throw new Error("Could not fetch cabins", error.message);
  }

  return data;
};

export const deleteCabin = async (id) => {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    throw new Error("Could not delete cabin", error.message);
  }

  return data;
};

export const createEditCabin = async (cabin, id) => {
  console.log(`Creating or editing cabin with id ${id}, and data`, cabin);
  const hasImagePath = cabin.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${cabin.image.name}`.replaceAll("/", "");
  const imagePath = hasImagePath
    ? cabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  let query = supabase.from("cabins");

  // To create a new cabin
  if (!id) {
    console.log("Creating new cabin", cabin);
    console.log("Image path", imagePath);
    query = query.insert([{ ...cabin, image: imagePath }]);
  }

  // To Edit an existing cabin
  if (id) {
    console.log("Editing cabin", cabin);
    console.log("Image path", imagePath);
    query = query.update({ ...cabin, image: imagePath }).eq("id", id);
  }

  const { data, error } = await query.select().single();

  if (error) {
    throw new Error("Could not create cabin", error.message);
  }

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, cabin.image);

  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    throw new Error(
      "Could not upload image, no cabin created",
      storageError.message
    );
  }

  return data;
};

export const updateCabin = async (id, cabin) => {
  const { data, error } = await supabase
    .from("cabins")
    .update(cabin)
    .eq("id", id);
  if (error) {
    throw new Error("Could not update cabin", error.message);
  }

  return data;
};
