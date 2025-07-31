import React, { useState, useMemo } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import Step1PersonalInfo from '../components/Step1PersonalInfo';
import Step2ContactDetails from '../components/Step2ContactDetails';
import Step3AadharDetails from '../components/Step3AadharDetails';
import Step4PanDetails from '../components/Step4PanDetails';
import Step5Address from '../components/Step5Address';
import Step6Education from '../components/Step6Education';
import Step7WorkBusiness from '../components/Step7WorkBusiness';
import Step8BankDetails from '../components/Step8BankDetails';
import Step9UnsRoles from '../components/Step9UnsRoles';

const EmployeeData = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const maxDate = new Date().toISOString().split("T")[0];

  const {
    register,
    handleSubmit,
    watch,
    control,
    setValue,
    getValues,
    trigger,
    formState: { errors },
  } = useForm({
    defaultValues: {
      selected_option: "Work",
      nftType: "UNSRET",
      unsRoles: {},
      unsretNfts: [{}],
      repnftNfts: [{}],
      roles: [],
      interests: "",
      nationalId: "",
      joiningDate: "",
      ownInvestments: [{ wallet: "", amount: "", proof: null }],
      referralInvestments: [{ name: "", wallet: "", amount: "", proof: null }],
      usdt_own_value: [{ received_wallet_stacking_usdt: "", total_invested_own_usdt: "", upload_usdt: null }],
      usdt_ref_value: [{ referrals_name: "", referrals_wallet_staking: "", usdt_refrel_invest: "", upload_referal: null }],
      unsret_value: [],
      repnft_value: [],
    },
  });

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <Step1PersonalInfo
            register={register}
            handleSubmit={handleSubmit}
            // onSubmitStep1={onSubmitStep1}
            watch={watch}
            errors={errors}
          />
        );
      case 2:
        return (
          <Step2ContactDetails
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            setFormData={setFormData}
            setStep={setStep}
          />
        );
      case 3:
        return (
          <Step3AadharDetails
            register={register}
            errors={errors}
            handleFileChange={handleFileChange}
          />
        );
      case 4:
        return (
          <Step4PanDetails
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            setFormData={setFormData}
            setStep={setStep}
          />
        );
      case 5:
        return (
          <Step5Address
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            watch={watch}
            setValue={setValue}
            setFormData={setFormData}
            setStep={setStep}
          />
        );
      case 6:
        return (
          <Step6Education
            register={register}
            errors={errors}
            handleFileChange={handleFileChange}
          />
        );
      case 7:
        return (
          <Step7WorkBusiness
            register={register}
            errors={errors}
            watch={watch}
          />
        );
      case 8:
        return (
          <Step8BankDetails
            register={register}
            errors={errors}
            handleFileChange={handleFileChange}
          />
        );
      case 9:
        return (
          <Step9UnsRoles
            register={register}
            watchRoles={watch("roles")}
            ROLES={ROLES}
            watch={watch}
            FIELDS_OF_INTEREST={FIELDS_OF_INTEREST}
            ownInvestments={ownInvestments}
            totalOwn={totalOwn}
            referralInvestments={referralInvestments}
            totalReferral={totalReferral}
            unsretNfts={unsretNfts}
            unsretTotal={unsretTotal}
            unsretReward={unsretReward}
            repnftNfts={repnftNfts}
            repnftTotal={repnftTotal}
            repnftReward={repnftReward}
          />
        );
      default:
        return <div>Step {step} content placeholder</div>;
    }
  };

  const handleFileChange = (e, fieldName) => {
    const file = e.target.files[0];
    if (file) {
      setValue(fieldName, file);
      trigger(fieldName);
    }
  };

const watchRoles = watch("roles");
const unsretNfts = useFieldArray({ control, name: "unsretNfts" });
const repnftNfts = useFieldArray({ control, name: "repnftNfts" });
const watchNFTType = watch('nftType');
const ownInvestments = useFieldArray({ control, name: 'ownInvestments' });
const referralInvestments = useFieldArray({ control, name: 'referralInvestments' });
const nfts = useFieldArray({ control, name: 'nfts' });
const totalOwn = watch('ownInvestments')?.reduce((sum, item) => sum + Number(item.amount || 0), 0);
const totalReferral = watch('referralInvestments')?.reduce((sum, item) => sum + Number(item.amount || 0), 0);
const ROLES = ["Mentor", "Investor", "Leader"]; // Example
const FIELDS_OF_INTEREST = ["Education", "Finance", "Healthcare"];
const NFT_PRICE = { UNSRET: { price: 1666.67, reward: 83.33 }, REPNFT: { price: 329, reward: 16.45 }, };
const unsretTotal = unsretNfts.fields.reduce((acc, _, index) => {
const qty = watch(`unsretNfts.${index}.qty`) || 0; return acc + qty * NFT_PRICE.UNSRET.price; }, 0);
const unsretReward = unsretNfts.fields.reduce((acc, _, index) => {
const qty = watch(`unsretNfts.${index}.qty`) || 0; return acc + qty * NFT_PRICE.UNSRET.reward; }, 0);
const repnftTotal = repnftNfts.fields.reduce((acc, _, index) => {
const qty = watch(`repnftNfts.${index}.qty`) || 0; return acc + qty * NFT_PRICE.REPNFT.price; }, 0);
const repnftReward = repnftNfts.fields.reduce((acc, _, index) => {
const qty = watch(`repnftNfts.${index}.qty`) || 0; return acc + qty * NFT_PRICE.REPNFT.reward; }, 0);

const total = (unsretTotal + repnftTotal).toFixed(2);
const reward = (unsretReward + repnftReward).toFixed(2);
  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
      
      {/* Stepper */}
      <div className="flex flex-wrap sm:flex-nowrap items-center justify-center mb-10">
        {[...Array(9)].map((_, index) => (
          <React.Fragment key={index}>
            <div
              className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm sm:text-base font-bold ${
                step >= index + 1 ? "bg-green-600 text-white" : "bg-gray-300 text-gray-700"
              }`}
            >
              {index + 1}
            </div>
            {index < 8 && (
              <div className={`w-4 sm:w-20 h-1 ${step >= index + 2 ? "bg-green-600" : "bg-gray-300"}`} />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Step Content */}
      <div className="mb-10">{renderStepContent()}</div>

      {/* Navigation Buttons */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 mt-8">
        {step > 1 && (
          <button
            type="button"
            onClick={() => setStep(step - 1)}
            className="bg-gray-400 text-white px-5 py-2 rounded hover:bg-gray-500 w-full sm:w-auto"
          >
            Previous
          </button>
        )}
        {step < 9 && (
          <button
            type="button"
            onClick={() => setStep(step + 1)}
            className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-600 w-full sm:w-auto ml-auto"
          >
            Next
          </button>
        )}
        {step === 9 && (
          <button
            type="submit"
            className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 w-full sm:w-auto ml-auto"
          >
            Confirm
          </button>
        )}
      </div>

    </div>
  );
};

export default EmployeeData;
