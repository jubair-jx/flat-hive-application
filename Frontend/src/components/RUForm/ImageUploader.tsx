import { Cloudinary } from "@cloudinary/url-gen";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { Accept, useDropzone } from "react-dropzone";
import { toast } from "sonner";

interface ImageUploaderProps {
  setImageUrls: (urls: string[]) => void;
}

interface FileWithPreview extends File {
  preview: string;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ setImageUrls }) => {
  const cloudName = "dh0qpppfr"; // Replace with your Cloudinary cloud name
  // Replace with your Cloudinary API key

  const cld = new Cloudinary({
    cloud: {
      cloudName: cloudName,
    },
  });

  const [files, setFiles] = useState<FileWithPreview[]>([]);

  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string>("");

  const onDrop = (acceptedFiles: File[]) => {
    const newFiles = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const removeFile = (file: FileWithPreview) => () => {
    setFiles((prevFiles) => prevFiles.filter((f) => f !== file));
  };

  const uploadFiles = async () => {
    if (files.length <= 2) {
      toast.info("Please select the at least three images...");
      return;
    }
    setUploading(true);
    setUploadError("");

    const imageUrls: string[] = [];

    const uploadPromises = files.map(async (file) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "eyxd34v1");
      formData.append("cloud_name", cloudName);
      // Replace with your upload preset

      try {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dh0qpppfr/image/upload",
          formData
        );

        imageUrls.push(response.data.secure_url);
        toast.success("Your flat images is uploaded successfully");
        setFiles([]);
      } catch (error) {
        console.log(error);
        setUploadError("Failed to upload images");
      }
    });

    await Promise.all(uploadPromises);
    setUploading(false);
    setImageUrls(imageUrls);
  };

  const accept: Accept = {
    "image/*": [],
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept,
    multiple: true,
  });

  return (
    <div>
      <div
        {...getRootProps()}
        style={{
          border: "2px dashed #FFA62F",
          padding: "20px",
          backgroundColor: "#F6F5F2",
          borderRadius: "10px",
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        <input {...getInputProps()} />
        <p className=" font-Kanit font-normal text-base">
          Drag and drop your flat photos here must be three images for better
          showcase, or click to select files
        </p>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", marginTop: "20px" }}>
        {files.map((file, index) => (
          <div
            key={index}
            style={{
              width: "100px",
              height: "100px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              overflow: "hidden",
              marginRight: "10px",
              marginBottom: "10px",
              position: "relative",
            }}
          >
            <Image
              src={file.preview}
              alt="preview"
              width={400}
              height={400}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <button
              onClick={removeFile(file)}
              style={{
                position: "absolute",
                top: "5px",
                right: "5px",
                background: "rgba(0, 0, 0, 0.5)",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                cursor: "pointer",
                width: "20px",
                height: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              &times;
            </button>
          </div>
        ))}
      </div>
      {files.length > 0 && !uploading && (
        <button
          className=" font-poppins"
          onClick={uploadFiles}
          style={{
            padding: "6px 18px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Upload
        </button>
      )}
      {uploading && <p className=" font-poppins">Uploading...</p>}
      {uploadError && <p className=" font-poppins">{uploadError}</p>}
    </div>
  );
};

export default ImageUploader;
