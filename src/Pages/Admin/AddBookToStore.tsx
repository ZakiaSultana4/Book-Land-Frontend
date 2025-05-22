import { useState } from "react";
import CustomForm from "../../components/CustomForm/CustomForm";
import CustomInput from "../../components/CustomForm/CustomInput";
import CustomSelect from "../../components/CustomForm/CustomSelect";
import { Button } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { CategoryOptions } from "../../Constants/constants";
import { usePublishBookMutation } from "../../Redux/Features/Admin/UserManagementApi/bookManagement.api";
import { motion } from "framer-motion";
import { toast } from "sonner";

const AddBookToStore = () => {
  const [publishBook] = usePublishBookMutation();
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Publishing your book...");

    try {
      if (!image) {
        toast.error("Please select an image first!", { id: toastId });
        return;
      }

      // 1. Upload to Cloudinary
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "bikeStore"); // 🔁 Your Cloudinary unsigned preset

      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dmvw2gidg/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();
      if (!result.secure_url) {
        toast.error("Image upload failed!", { id: toastId });
        return;
      }

      // 2. Add image URL to book data
      const bookData = {
        ...data,
        image: result.secure_url,
      };

      // 3. Submit to API
      const res = await publishBook(bookData);

      if (res?.data?.success) {
        toast.success("Book published successfully!", { id: toastId });
      } else {
        toast.error("Failed to publish book!", { id: toastId });
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!", { id: toastId });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex justify-center items-center p-6"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Publish Your Book 📚
        </h2>

        <CustomForm onSubmit={onSubmit} className="space-y-6">
          <CustomInput name="title" placeholderTitle="Title" type="text" />
          <CustomInput
            name="description"
            placeholderTitle="Description"
            type="text"
          />
          <CustomInput name="price" placeholderTitle="Price" type="number" />
          <CustomInput
            name="quantity"
            placeholderTitle="Quantity"
            type="number"
          />
          <CustomInput name="author" placeholderTitle="Author" type="text" />
          <CustomSelect
            name="category"
            label="Category"
            options={CategoryOptions}
          />

          {/* ✅ File input */}
          <div>
            <label className="block mb-1 text-gray-700">Book Cover</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
              file:rounded file:border-0 file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button htmlType="submit" className="custom-btn w-full">
              Publish Book
            </Button>
          </motion.div>
        </CustomForm>
      </motion.div>
    </motion.div>
  );
};

export default AddBookToStore;
