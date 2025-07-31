import React from "react";

const Step4PanDetails = ({ register, handleSubmit, errors, setFormData, setStep }) => {
  const onSubmit = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep(5);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4">
      <h3 className="text-xl font-bold mb-6">Taxpayer Details</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* PAN Number Input */}
        <div>
          <label className="block font-medium mb-1">
            Unique National Income Tax Account Number *
          </label>
          <input
            type="text"
            {...register("pan_number", { required: true })}
            className={`w-full border p-2 rounded ${
              errors.pan_number ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Tax Identification Number"
          />
          {errors.pan_number && (
            <p className="text-red-500 text-sm mt-1">
              Please enter tax identification number.
            </p>
          )}
        </div>

        {/* PAN Front Page Upload */}
        <div>
          <label htmlFor="pan_front_page" className="block font-medium mb-1">
            Add Identification Page *
          </label>
          <input
            type="file"
            accept="application/pdf, image/*"
            {...register("pan_front_page", { required: true })}
            className={`w-full border p-2 rounded bg-white cursor-pointer text-sm ${
              errors.pan_front_page ? "border-red-500" : "border-gray-300"
            }`}
          />
          <p className="text-sm text-gray-500 mt-1">
            Image must be .jpeg, .png, or PDF format
          </p>
          {errors.pan_front_page && (
            <p className="text-red-500 text-sm mt-1">
              Please upload the identification page.
            </p>
          )}
        </div>
      </div>
    </form>
  );
};

export default Step4PanDetails;
