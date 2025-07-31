import React from "react";

const Step7WorkBusiness = ({ register, errors, watch }) => {
  const selectedOption = watch("selected_option");

  return (
    <div className="container mx-auto p-4">
      <h3 className="text-xl font-semibold mb-4">
        Work / Business Experience
      </h3>

      {/* Radio Selection */}
      <div className="mb-6">
        <label className="block font-medium mb-2">
          Do you have work or business experience?
        </label>
        <div className="flex flex-wrap gap-6">
          {["Work", "Business", "Both"].map((option) => (
            <label key={option} className="flex items-center">
              <input
                type="radio"
                value={option}
                {...register("selected_option", { required: true })}
                className="mr-2 w-4 h-4 text-green-600 bg-gray-100 focus:ring-2"
              />
              {option}
            </label>
          ))}
        </div>
        {errors.selected_option && (
          <p className="text-red-500 text-sm mt-1">
            Please select an option.
          </p>
        )}
      </div>

      {/* Work Experience */}
      {(selectedOption === "Work" || selectedOption === "Both") && (
        <>
          <h5 className="text-lg font-semibold mt-6 mb-2">Work Experience</h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block font-medium mb-1">Organization Name *</label>
              <input
                type="text"
                {...register("organization_name", { required: true })}
                className={`w-full border p-2 rounded ${
                  errors.organization_name ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.organization_name && (
                <p className="text-red-500 text-sm">Required</p>
              )}
            </div>

            <div>
              <label className="block font-medium mb-1">Job Title *</label>
              <input
                type="text"
                {...register("job_title", { required: true })}
                className={`w-full border p-2 rounded ${
                  errors.job_title ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.job_title && (
                <p className="text-red-500 text-sm">Required</p>
              )}
            </div>

            <div>
              <label className="block font-medium mb-1">Department / Field *</label>
              <input
                type="text"
                {...register("department_field", { required: true })}
                className={`w-full border p-2 rounded ${
                  errors.department_field ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.department_field && (
                <p className="text-red-500 text-sm">Required</p>
              )}
            </div>

            <div>
              <label className="block font-medium mb-1">Years of Experience *</label>
              <input
                type="number"
                {...register("years_experience", { required: true })}
                className={`w-full border p-2 rounded ${
                  errors.years_experience ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.years_experience && (
                <p className="text-red-500 text-sm">Required</p>
              )}
            </div>

            <div className="md:col-span-2">
              <label className="block font-medium mb-1">Previous Experience</label>
              <input
                type="text"
                {...register("other_experience")}
                className="w-full border p-2 rounded border-gray-300"
              />
            </div>
          </div>
        </>
      )}

      {/* Business Experience */}
      {(selectedOption === "Business" || selectedOption === "Both") && (
        <>
          <h5 className="text-lg font-semibold mt-8 mb-2">Business Experience</h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block font-medium mb-1">Organization Name *</label>
              <input
                type="text"
                {...register("name_of_organization", { required: true })}
                className={`w-full border p-2 rounded ${
                  errors.name_of_organization ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.name_of_organization && (
                <p className="text-red-500 text-sm">Required</p>
              )}
            </div>

            <div>
              <label className="block font-medium mb-1">Nature of Business *</label>
              <input
                type="text"
                {...register("nature_of_business", { required: true })}
                className={`w-full border p-2 rounded ${
                  errors.nature_of_business ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.nature_of_business && (
                <p className="text-red-500 text-sm">Required</p>
              )}
            </div>

            <div>
              <label className="block font-medium mb-1">No. of Employees *</label>
              <input
                type="number"
                {...register("number_of_employees", { required: true })}
                className={`w-full border p-2 rounded ${
                  errors.number_of_employees ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.number_of_employees && (
                <p className="text-red-500 text-sm">Required</p>
              )}
            </div>

            <div>
              <label className="block font-medium mb-1">Experience in Field *</label>
              <input
                type="text"
                {...register("experience_in_field", { required: true })}
                className={`w-full border p-2 rounded ${
                  errors.experience_in_field ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.experience_in_field && (
                <p className="text-red-500 text-sm">Required</p>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Step7WorkBusiness;
