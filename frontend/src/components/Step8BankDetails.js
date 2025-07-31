import React from "react";

const Step8BankDetails = ({ register, errors, handleFileChange }) => {
  return (
    <div className="container mx-auto p-4">
      <h3 className="text-xl font-semibold mb-6">Bank Account Details</h3>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Account Holder Name */}
        <div>
          <label className="block mb-1 font-medium">Account Holder Name *</label>
          <input
            type="text"
            {...register("account_holder", { required: true })}
            placeholder="Enter account holder name"
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${
              errors.account_holder ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.account_holder && (
            <p className="text-red-500 text-sm mt-1">
              Please enter account holder name.
            </p>
          )}
        </div>

        {/* Bank Name */}
        <div>
          <label className="block mb-1 font-medium">Bank Name *</label>
          <input
            type="text"
            {...register("bank_name", { required: true })}
            placeholder="Enter bank name"
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${
              errors.bank_name ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.bank_name && (
            <p className="text-red-500 text-sm mt-1">
              Please enter bank name.
            </p>
          )}
        </div>

        {/* Account Number */}
        <div>
          <label className="block mb-1 font-medium">
            National/International Bank Account No *
          </label>
          <input
            type="number"
            {...register("account_number", { required: true })}
            placeholder="Enter account number"
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${
              errors.account_number ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.account_number && (
            <p className="text-red-500 text-sm mt-1">
              Please enter account number.
            </p>
          )}
        </div>

        {/* IFSC or SWIFT Code */}
        <div>
          <label className="block mb-1 font-medium">
            SWIFT (If Applicable) / National Financial System Code *
          </label>
          <input
            type="text"
            {...register("ifsc_code", { required: true })}
            placeholder="Enter SWIFT or NFS Code"
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${
              errors.ifsc_code ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.ifsc_code && (
            <p className="text-red-500 text-sm mt-1">
              Please enter Financial System Code.
            </p>
          )}
        </div>
      </div>

      {/* Cancelled Cheque Upload */}
      <div className="mt-10">
        <label htmlFor="cancelled_cheque" className="block font-medium mb-2">
          Cancelled Cheque Upload *
        </label>

        <div className="border-dashed border-2 border-gray-400 rounded-md p-6 text-center">
          <label htmlFor="cancelled_cheque" className="cursor-pointer block">
            <i className="fa fa-picture-o text-2xl text-green-600 mb-2"></i>
            <h4 className="text-lg font-bold mb-1">Add Cancelled Cheque</h4>
            <p className="text-sm text-gray-500">
              Image must be .jpeg, .png or .pdf and not larger than 20 MB
            </p>
          </label>

          <input
            id="cancelled_cheque"
            type="file"
            accept="application/pdf, image/*"
            onChange={(e) => handleFileChange(e, "pass_book")}
            className="hidden"
          />
        </div>

        {errors.pass_book && (
          <p className="text-red-500 text-sm mt-2">
            Please upload a valid file.
          </p>
        )}
      </div>
    </div>
  );
};

export default Step8BankDetails;
