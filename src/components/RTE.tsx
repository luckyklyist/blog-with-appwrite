import { Editor } from "@tinymce/tinymce-react";
import React from "react";
import { Controller } from "react-hook-form";

const RTE = () => {
  return (
    <Editor
      initialValue="default value"
      init={{
        branding: false,
        height: 500,
        menubar: true,
        plugins: [
          "advlist autolink lists link image charmap print preview anchor",
          "searchreplace visualblocks code fullscreen",
          "insertdatetime media table paste code help wordcount",
        ],
        toolbar: "undo redo | formatselect | bold italic backcolor | ",
      }}
    />
  );
};

export default RTE;
