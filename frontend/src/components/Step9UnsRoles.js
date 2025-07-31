import React from "react";

const Step9UnsRoles = ({
  register,
  watchRoles,
  ROLES = [],
  FIELDS_OF_INTEREST = [],
  ownInvestments = { fields: [], append: () => {}, remove: () => {} },
  totalOwn = 0,
  referralInvestments = { fields: [], append: () => {}, remove: () => {} },
  totalReferral = 0,
  unsretNfts = { fields: [], append: () => {}, remove: () => {} },
  unsretTotal = 0,
  unsretReward = 0,
  repnftNfts = { fields: [], append: () => {}, remove: () => {} },
  repnftTotal = 0,
  repnftReward = 0,
}) => {
  return (
    <div className="container mx-auto p-4">
      {/* Section 1: Roles */}
      <div>
        <label className="block font-semibold">UNS Role/s *</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4 border-b-2 border-green-500 pb-4">
          {(ROLES || []).map((role) => (
            <label key={role} className="flex items-center space-x-2">
              <input type="checkbox" value={role} {...register("roles")} />
              <span>{role}</span>
            </label>
          ))}
        </div>
        {(watchRoles || []).map((role) => (
          <div key={role} className="mt-2">
            <label className="block">{role} - Achieved Date</label>
            <input
              type="date"
              {...register(`roleDates.${role}`)}
              className="border p-2 w-full"
            />
          </div>
        ))}
      </div>

      {/* Section 2 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <select
          {...register("interests", { required: true })}
          className="border p-2"
        >
          <option value="">Select Field Of Interest *</option>
          {(FIELDS_OF_INTEREST || []).map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <input
          placeholder="National ID or Passport *"
          {...register("nationalId", { required: true })}
          className="border p-2"
        />
        <input
          type="date"
          {...register("joiningDate", { required: true })}
          className="border p-2"
        />
      </div>

      {/* Section 3: Own USDT */}
      <div className="my-2 border-b-2 border-green-500 pb-4">
        <h2 className="font-semibold mb-2 mt-4">USDT invested (Own)</h2>
        {(ownInvestments?.fields || []).map((field, index) => (
          <div
            key={field.id}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2"
          >
            <input
              placeholder="Wallet Address"
              {...register(`ownInvestments.${index}.wallet`)}
              className="border p-2"
            />
            <input
              type="number"
              placeholder="USDT Invested"
              {...register(`ownInvestments.${index}.amount`)}
              className="border p-2"
            />
            <input
              type="file"
              {...register(`ownInvestments.${index}.proof`)}
              className="border p-2"
            />
            {ownInvestments.fields.length > 1 && (
              <button
                type="button"
                onClick={() => ownInvestments.remove(index)}
                className="w-24 focus:outline-none text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              >
                Delete
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={() => ownInvestments.append({})}
          className="text-white bg-green-600 hover:bg-green-700 px-5 py-2 rounded mb-4"
        >
          + USDT Invested Own
        </button>
        <p>
          Total USDT Invested (Own): <strong>{totalOwn}</strong>
        </p>
      </div>

      {/* Section 4: Referral USDT */}
      <div className="my-2 border-b-2 border-green-500 pb-4">
        <h2 className="font-semibold mb-2 mt-4">USDT invested (Through Referral)</h2>
        {(referralInvestments?.fields || []).map((field, index) => (
          <div
            key={field.id}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2"
          >
            <input
              placeholder="Referral Name"
              {...register(`referralInvestments.${index}.name`)}
              className="border p-2"
            />
            <input
              placeholder="Referral Wallet"
              {...register(`referralInvestments.${index}.wallet`)}
              className="border p-2"
            />
            <input
              type="number"
              placeholder="USDT Invested"
              {...register(`referralInvestments.${index}.amount`)}
              className="border p-2"
            />
            <input
              type="file"
              {...register(`referralInvestments.${index}.proof`)}
              className="border p-2"
            />
            {referralInvestments.fields.length > 1 && (
              <button
                type="button"
                onClick={() => referralInvestments.remove(index)}
                className="w-24 focus:outline-none text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              >
                Delete
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={() => referralInvestments.append({})}
          className="text-white bg-green-600 hover:bg-green-700 px-5 py-2 rounded mb-4"
        >
          + Add USDT Invested Referral
        </button>
        <p>
          Total USDT Invested (Referral): <strong>{totalReferral}</strong>
        </p>
      </div>

      {/* Section 5: NFT */}
      <div className="my-2 mt-4 border-b-4 border-green-500">
        <h3 className="font-bold text-lg">NFT DETAILS</h3>

        {/* UNSRET NFT Section */}
        <div className="border-t-2 mt-6 pt-4">
          <h4 className="font-bold text-lg mb-4">UNSRET NFT Details</h4>
          {(unsretNfts?.fields || []).map((field, index) => {
            const path = `unsretNfts.${index}`;
            return (
              <div key={field.id} className="border p-4 my-4 space-y-2 rounded">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    placeholder="Purchased Wallet"
                    {...register(`${path}.wallet`)}
                    className="border p-2 w-full"
                  />
                  <input
                    placeholder="NFT Numbers (comma separated)"
                    {...register(`${path}.numbers`)}
                    className="border p-2 w-full"
                  />
                  <input
                    type="number"
                    placeholder="NFT Quantity"
                    {...register(`${path}.qty`)}
                    className="border p-2 w-full"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    placeholder="Referral Wallet"
                    {...register(`${path}.referralWallet`)}
                    className="border p-2 w-full"
                  />
                  <input
                    placeholder="Referred Person Name"
                    {...register(`${path}.referredName`)}
                    className="border p-2 w-full"
                  />
                </div>

                {unsretNfts.fields.length > 1 && (
                  <button
                    type="button"
                    onClick={() => unsretNfts.remove(index)}
                    className="text-white bg-red-700 hover:bg-red-800 px-5 py-2 rounded"
                  >
                    Delete
                  </button>
                )}
              </div>
            );
          })}

          <button
            type="button"
            onClick={() => unsretNfts.append({})}
            className="text-white bg-green-600 hover:bg-green-700 px-5 py-2 rounded"
          >
            + Add UNSRET NFT
          </button>

          <div className="mt-6 p-4 border-t-4 border-blue-500 bg-blue-50 rounded shadow">
            <h3 className="font-bold text-lg mb-2">UNSRET NFT Summary</h3>
            <p>Total Purchased Value in USDT: <strong>{unsretTotal.toFixed(2)}</strong></p>
            <p>Referral Reward in USDT: <strong>{unsretReward.toFixed(2)}</strong></p>
          </div>
        </div>

        {/* REPNFT NFT Section */}
        <div className="border-t-2 mt-6 pt-4">
          <h4 className="font-bold text-lg mb-4">REPNFT NFT Details</h4>
          {(repnftNfts?.fields || []).map((field, index) => {
            const path = `repnftNfts.${index}`;
            return (
              <div key={field.id} className="border p-4 my-4 space-y-2 rounded">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    placeholder="Purchased Wallet"
                    {...register(`${path}.wallet`)}
                    className="border p-2 w-full"
                  />
                  <input
                    placeholder="NFT Numbers (comma separated)"
                    {...register(`${path}.numbers`)}
                    className="border p-2 w-full"
                  />
                  <input
                    type="number"
                    placeholder="NFT Quantity"
                    {...register(`${path}.qty`)}
                    className="border p-2 w-full"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    placeholder="Referral Wallet"
                    {...register(`${path}.referralWallet`)}
                    className="border p-2 w-full"
                  />
                  <input
                    placeholder="Referred Person Name"
                    {...register(`${path}.referredName`)}
                    className="border p-2 w-full"
                  />
                </div>

                {repnftNfts.fields.length > 1 && (
                  <button
                    type="button"
                    onClick={() => repnftNfts.remove(index)}
                    className="text-white bg-red-700 hover:bg-red-800 px-5 py-2 rounded"
                  >
                    Delete
                  </button>
                )}
              </div>
            );
          })}

          <button
            type="button"
            onClick={() => repnftNfts.append({})}
            className="text-white bg-green-600 hover:bg-green-700 px-5 py-2 rounded"
          >
            + Add REPNFT NFT
          </button>

          <div className="mt-6 p-4 border-t-4 border-purple-500 bg-purple-50 rounded shadow">
            <h3 className="font-bold text-lg mb-2">REPNFT NFT Summary</h3>
            <p>Total Purchased Value in USDT: <strong>{repnftTotal.toFixed(2)}</strong></p>
            <p>Referral Reward in USDT: <strong>{repnftReward.toFixed(2)}</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step9UnsRoles;
