import React from "react";

const Step1PersonalInfo = ({ register, handleSubmit, onSubmitStep1, watch, errors }) => {
  const calculateAge = (dob) => {
    if (!dob) return "";
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <form onSubmit={handleSubmit(onSubmitStep1)} className="space-y-6">
      <h3 className="text-xl font-bold mb-4">Personal Information</h3>

      <div className="grid md:grid-cols-2 gap-4">
        {[
          ["first_name", "First Name"],
          ["last_name", "Last Name"],
          ["given_name_passport", "Given Name in Passport"],
          ["surname_passport", "Surname in Passport"],
          ["father_name", "Father’s Name"],
          ["mother_name", "Mother’s Name"],
          ["spouse_name", "Spouse Name"],
          ["religion", "Religion"],
          ["nationality", "Nationality"],
        ].map(([name, label]) => (
          <div key={name}>
            <label className="block font-medium">
              {label}
              {name === "spouse_name" ? "" : " *"}
            </label>
            <input
              type="text"
              {...register(name, {
                required: name === "spouse_name" ? false : true,
              })}
              className={`w-full border p-2 rounded ${
                errors[name] ? "border-red-500" : "border-gray-300"
              }`}
              placeholder={`Enter ${label.toLowerCase()}`}
            />
            {errors[name] && (
              <p className="text-red-500 text-sm">
                Please enter {label.toLowerCase()}.
              </p>
            )}
          </div>
        ))}

        {/* Date of Birth */}
        <div>
          <label className="block font-medium">Date of Birth *</label>
          <input
            type="date"
            {...register("date_of_birth", { required: true })}
            className={`w-full border p-2 rounded ${
              errors.date_of_birth ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.date_of_birth && (
            <p className="text-red-500 text-sm">Please enter date of birth.</p>
          )}
        </div>

        {/* Auto-calculated Age */}
        <div>
          <label className="block font-medium">Age</label>
          <input
            type="number"
            value={calculateAge(watch("date_of_birth")) || ""}
            readOnly
            className="w-full border p-2 rounded bg-gray-100"
          />
        </div>

        {/* Gender */}
        <div>
          <label className="block font-medium">Gender *</label>
          <div className="flex items-center gap-6 mt-1">
            <label className="flex items-center ms-2 text-sm font-medium text-gray-900">
              <input
                type="radio"
                value="male"
                {...register("gender", { required: true })}
                className="mr-2 w-4 h-4 text-green-600 bg-gray-100 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              Male
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="female"
                {...register("gender", { required: true })}
                className="mr-2 w-4 h-4 text-green-600 bg-gray-100 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              Female
            </label>
          </div>
          {errors.gender && (
            <p className="text-red-500 text-sm">Please select a gender.</p>
          )}
        </div>

        {/* Community */}
        <div>
          <label className="block font-medium">Community *</label>
          <select
            {...register("community", { required: true })}
            className={`w-full border p-2 rounded ${
              errors.community ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Select community</option>
            <option value="OBC">OBC</option>
            <option value="BC">BC</option>
            <option value="MBC">MBC</option>
            <option value="SC">SC</option>
            <option value="ST">ST</option>
          </select>
          {errors.community && (
            <p className="text-red-500 text-sm">Please select community.</p>
          )}
        </div>
      </div>

      {/* Languages Known */}
      <div>
        <label className="block font-medium">Languages Known</label>
        {[1, 2, 3].map((n) => (
          <div key={n} className="flex items-center gap-4 mt-2">
            <input
              type="text"
              {...register(`lang_known_input_${n}`)}
              className="w-1/3 border border-gray-300 p-2 rounded"
              placeholder="Language"
            />
            <label className="flex items-center">
              <input
                type="checkbox"
                {...register(`check_lang_known_${n}`)}
                className="mr-1 w-4 h-4 text-green-600 bg-gray-100 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              Speak
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                {...register(`check_lang_write_${n}`)}
                className="mr-1 w-4 h-4 text-green-600 bg-gray-100 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              Read/Write
            </label>
          </div>
        ))}
      </div>

      {/* Optional Submit Button */}
      {/* <div className="text-right">
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-600"
        >
          Next
        </button>
      </div> */}
    </form>
  );
};

export default Step1PersonalInfo;
