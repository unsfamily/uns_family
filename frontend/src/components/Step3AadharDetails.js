import React from "react";

const Step3AadharDetails = ({ register, errors, handleFileChange }) => {
  return (
    <div className="container mx-auto p-4">
      <h3 className="text-xl font-semibold mb-6">Aadhar Card Details</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Aadhar Number */}
        <div>
          <label className="block mb-1 font-medium">Aadhar Number *</label>
          <input
            type="text"
            {...register("aadhar_number", {
              required: "Please enter Aadhar number",
              pattern: {
                value: /^\d{12}$/,
                message: "Aadhar number must be 12 digits",
              },
            })}
            className={`w-full p-2 border rounded ${
              errors.aadhar_number ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter 12-digit Aadhar number"
          />
          {errors.aadhar_number && (
            <p className="text-red-500 text-sm mt-1">
              {errors.aadhar_number.message}
            </p>
          )}
        </div>

        {/* Aadhar Front Upload */}
        <div>
          <label className="block mb-1 font-medium">
            Upload Aadhar Card (Front) *
          </label>
          <input
            type="file"
            accept="application/pdf,image/*"
            onChange={(e) => handleFileChange(e, "aadhar_front")}
            className={`w-full p-2 border rounded ${
              errors.aadhar_front ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.aadhar_front && (
            <p className="text-red-500 text-sm mt-1">
              {errors.aadhar_front.message}
            </p>
          )}
        </div>

        {/* Aadhar Back Upload */}
        <div>
          <label className="block mb-1 font-medium">
            Upload Aadhar Card (Back) *
          </label>
          <input
            type="file"
            accept="application/pdf,image/*"
            onChange={(e) => handleFileChange(e, "aadhar_back")}
            className={`w-full p-2 border rounded ${
              errors.aadhar_back ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.aadhar_back && (
            <p className="text-red-500 text-sm mt-1">
              {errors.aadhar_back.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Step3AadharDetails;
