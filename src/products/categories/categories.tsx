import { useForm } from "react-hook-form";
import Button from "../../components/Button/Button";
import Textfield from "../../components/Textfield/Textfield";
import { instance } from "../../App";
import { useState } from "react";
import Navigate from "../../components/Navigate1";
const Categories = () => {
  const { register, handleSubmit } = useForm();
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setImage(file || null);
  };

  const handleCreateCategorie = handleSubmit(async (Data) => {
    console.log(Data);
    try {
      const formData = new FormData();
      if (image) {
        formData.append("img", image);
      }
      formData.append("categorieName", Data.categorieName);
      console.log(formData);
      const res = await instance.post("/create/categorie", formData);
      console.log(res);
    } catch (error) {
      console.error("Error creating categorie:", error);
    }
  });

  return (
    <>
      <Navigate />
      <div className=" flex flex-col p-5">
        <div className="z-10 p-3 flex flex-col items-center bg-red-400 w-full rounded-t-md">
          <h1>Categories</h1>
        </div>
        <form
          onSubmit={handleCreateCategorie}
          className="flex flex-col gap-3 p-3 bg-red-400 w-full"
          action=""
        >
          <Textfield
            type="file"
            label="Upload your image "
            accept="image/*"
            onChange={handleImageChange}
          />
          <Textfield
            label="inter your categorie name"
            validation={register("categorieName")}
          />
          <Button children="Create" />
        </form>
      </div>
    </>
  );
};
export default Categories;
