import React from "react";

const Step6Education = ({ register, errors, handleFileChange }) => {
  return (
    <div className="container mx-auto p-4">
      <h3 className="text-xl font-semibold mb-6">Education Details</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Highest Qualification */}
        <div>
          <label className="block mb-1 font-medium">Highest Qualification *</label>
          <input
            type="text"
            {...register("highest_qualification", {
              required: "Please enter qualification.",
            })}
            className={`w-full p-2 border rounded ${
              errors.highest_qualification ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter qualification"
          />
          {errors.highest_qualification && (
            <p className="text-red-500 text-sm mt-1">
              {errors.highest_qualification.message}
            </p>
          )}
        </div>

        {/* Institute Name */}
        <div>
          <label className="block mb-1 font-medium">Institute Name *</label>
          <input
            type="text"
            {...register("institute_name", {
              required: "Please enter institute name.",
            })}
            className={`w-full p-2 border rounded ${
              errors.institute_name ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter institute"
          />
          {errors.institute_name && (
            <p className="text-red-500 text-sm mt-1">
              {errors.institute_name.message}
            </p>
          )}
        </div>

        {/* Course Type */}
        <div>
          <label className="block mb-1 font-medium">Course Type *</label>
          <select
            {...register("course_type", {
              required: "Please select course type.",
            })}
            className={`w-full p-2 border rounded ${
              errors.course_type ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Select Course Type</option>
            <option value="Regular">Regular</option>
            <option value="Distance Education">Distance Education</option>
          </select>
          {errors.course_type && (
            <p className="text-red-500 text-sm mt-1">
              {errors.course_type.message}
            </p>
          )}
        </div>

        {/* Year of Passing */}
        <div>
          <label className="block mb-1 font-medium">Year of Passing *</label>
          <input
            type="number"
            {...register("year_passing", {
              required: "Please enter year.",
            })}
            className={`w-full p-2 border rounded ${
              errors.year_passing ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="yyyy"
          />
          {errors.year_passing && (
            <p className="text-red-500 text-sm mt-1">
              {errors.year_passing.message}
            </p>
          )}
        </div>

        {/* Percentage of Marks */}
        <div>
          <label className="block mb-1 font-medium">Percentage of Marks *</label>
          <input
            type="text"
            {...register("percentage_marks", {
              required: "Please enter percentage.",
            })}
            className={`w-full p-2 border rounded ${
              errors.percentage_marks ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter percentage of marks"
          />
          {errors.percentage_marks && (
            <p className="text-red-500 text-sm mt-1">
              {errors.percentage_marks.message}
            </p>
          )}
        </div>

        {/* Other Qualification */}
        <div>
          <label className="block mb-1 font-medium">Any Other Qualification/s</label>
          <input
            type="text"
            {...register("other_qualification")}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter other qualification"
          />
        </div>

        {/* Upload Transfer Certificate */}
        <div className="md:col-span-3">
          <label className="block mb-1 font-medium">Social Stratification Document</label>
          <input
            type="file"
            accept="application/pdf,image/*"
            onChange={(e) => handleFileChange(e, "transfer_certificate")}
            className={`w-full p-2 border rounded ${
              errors.transfer_certificate ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.transfer_certificate && (
            <p className="text-red-500 text-sm mt-1">
              {errors.transfer_certificate.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Step6Education;

