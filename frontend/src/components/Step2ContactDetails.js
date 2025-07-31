import React from "react";

const Step2ContactDetails = ({ register, handleSubmit, errors, setFormData, setStep }) => {
  const onSubmit = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep(3);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4">
      <h3 className="text-xl font-bold mb-6">Contact Details</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Mobile Code */}
        <div>
          <label className="block font-medium mb-1">Code *</label>
          <input
            type="number"
            {...register("country_code", { required: true })}
            className={`w-full border p-2 rounded ${
              errors.country_code ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Code"
          />
          {errors.country_code && (
            <p className="text-red-500 text-sm">Required</p>
          )}
        </div>

        {/* Mobile Number */}
        <div>
          <label className="block font-medium mb-1">Mobile Number *</label>
          <input
            type="number"
            {...register("mobile_number", { required: true })}
            className={`w-full border p-2 rounded ${
              errors.mobile_number ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter Mobile Number"
          />
          {errors.mobile_number && (
            <p className="text-red-500 text-sm">Required</p>
          )}
        </div>

        {/* Alt Code */}
        <div>
          <label className="block font-medium mb-1">Code</label>
          <input
            type="number"
            {...register("alt_country_code")}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Code"
          />
        </div>

        {/* Alternative Number */}
        <div>
          <label className="block font-medium mb-1">
            Alternative Mobile Number
          </label>
          <input
            type="number"
            {...register("alternative_number")}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Enter alternative number"
          />
        </div>

        {/* WhatsApp Code */}
        <div>
          <label className="block font-medium mb-1">Code *</label>
          <input
            type="number"
            {...register("whatsapp_country_code", { required: true })}
            className={`w-full border p-2 rounded ${
              errors.whatsapp_country_code ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Code"
          />
          {errors.whatsapp_country_code && (
            <p className="text-red-500 text-sm">Required</p>
          )}
        </div>

        {/* WhatsApp Number */}
        <div>
          <label className="block font-medium mb-1">WhatsApp Number *</label>
          <input
            type="number"
            {...register("whatsapp_number", { required: true })}
            className={`w-full border p-2 rounded ${
              errors.whatsapp_number ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter WhatsApp number"
          />
          {errors.whatsapp_number && (
            <p className="text-red-500 text-sm">Required</p>
          )}
        </div>

        {/* Email */}
        <div >
          <label className="block font-medium mb-1">Email ID *</label>
          <input
            type="email"
            {...register("email_id", { required: true })}
            className={`w-full border p-2 rounded ${
              errors.email_id ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter email"
          />
          {errors.email_id && (
            <p className="text-red-500 text-sm">Required</p>
          )}
        </div>
        <div>
          <label htmlFor="ProfilePic" className="block font-medium mb-2">
            Add Profile Picture
          </label>
          <input
            type="file"
            accept="image/*"
            {...register("profile_picture")}
            className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 p-2"
          />
          <p className="text-sm text-gray-500 mt-1">
            Image must be .jpeg, .png format only
          </p>
        </div>
      </div>

      {/* Profile Picture Upload */}
      
    </form>
  );
};

export default Step2ContactDetails;
