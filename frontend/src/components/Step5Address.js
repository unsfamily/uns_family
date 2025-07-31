import React from "react";

const Step5Address = ({ register, handleSubmit, errors, watch, setValue, setFormData, setStep }) => {
  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      const fieldsToCopy = [
        "building_street",
        "area_landmark",
        "country",
        "state_region",
        "city",
        "postal_zipcode",
      ];
      const updatedData = {};
      fieldsToCopy.forEach((field) => {
        updatedData[`alt_${field}`] = watch(field);
      });
      setValue("alt_building_street", updatedData.alt_building_street || "");
      setValue("alt_area_landmark", updatedData.alt_area_landmark || "");
      setValue("alt_country", updatedData.alt_country || "");
      setValue("alt_state_region", updatedData.alt_state_region || "");
      setValue("alt_city", updatedData.alt_city || "");
      setValue("alt_postal_zipcode", updatedData.alt_postal_zipcode || "");
    }
  };

  const onSubmit = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep(6);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3 className="text-xl font-bold mb-4">Address Details</h3>

      {/* Permanent Address */}
      <h5 className="text-lg font-semibold mb-3">Permanent Address</h5>
      <div className="grid md:grid-cols-2 gap-4 mb-4 my-2">
        {[
          ["building_street", "Building / Street Name"],
          ["area_landmark", "Area / Landmark"],
          ["country", "Country"],
          ["state_region", "State / Region / Province"],
          ["city", "City"],
          ["postal_zipcode", "Postal / Zip Code"],
        ].map(([name, label]) => (
          <div key={name}>
            <label className="block font-medium">{label} *</label>
            <input
              type={name.includes("postal") ? "number" : "text"}
              {...register(name, { required: true })}
              className={`w-full border p-2 rounded ${
                errors[name] ? "border-red-500" : "border-gray-300"
              }`}
              placeholder={`Enter ${label.toLowerCase()}`}
            />
            {errors[name] && (
              <p className="text-red-500 text-sm">This field is required.</p>
            )}
          </div>
        ))}
      </div>

      {/* Checkbox */}
      <div className="flex items-center mb-6 pb-4 border-b-2 border-green-500">
        <input
          type="checkbox"
          id="copyAddress"
          onChange={handleCheckboxChange}
          className="mr-2 w-4 h-4 text-green-600 bg-gray-100 focus:ring-2"
        />
        <label htmlFor="copyAddress" className="text-sm">
          Same as permanent address
        </label>
      </div>

      {/* Communication Address */}
      <h5 className="text-lg font-semibold mb-3">Address for Communication</h5>
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {[
          ["alt_building_street", "Building / Street Name"],
          ["alt_area_landmark", "Area / Landmark"],
          ["alt_country", "Country"],
          ["alt_state_region", "State / Region / Province"],
          ["alt_city", "City"],
          ["alt_postal_zipcode", "Postal / Zip Code"],
        ].map(([name, label]) => (
          <div key={name}>
            <label className="block font-medium">{label} *</label>
            <input
              type={name.includes("postal") ? "number" : "text"}
              {...register(name, { required: true })}
              className={`w-full border p-2 rounded ${
                errors[name] ? "border-red-500" : "border-gray-300"
              }`}
              placeholder={`Enter ${label.toLowerCase()}`}
            />
            {errors[name] && (
              <p className="text-red-500 text-sm">This field is required.</p>
            )}
          </div>
        ))}
      </div>
    </form>
  );
};

export default Step5Address;
