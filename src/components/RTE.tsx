import { Editor } from "@tinymce/tinymce-react";
import React from "react";
import { Controller } from "react-hook-form";

interface RTEprops {
  name: string;
  control: any;
  label?: string;
  defaultValue?: string;
}

const RTE: React.FC<RTEprops> = ({
  name,
  control,
  label,
  defaultValue = "",
}) => {
  return (
    <div className="w-[70vw] mx-8">
      {label && <label htmlFor={name}>{label}</label>}
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange } }) => (
          <Editor
            init={{
              height: 500,
              menubar: true,
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount",
              ],
              toolbar:
                "undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help",
            }}
            onEditorChange={onChange}
            value={defaultValue}
          />
        )}
      />
    </div>
  );
};

export default RTE;
