import React, { useState, useMemo } from "react";
// import Footer from '../components/Footer';
// import Header from '../components/Header';
import { useForm, useFieldArray, Controller } from "react-hook-form";

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
      unsretNfts: [{}],
      repnftNfts: [{}],
      unsRoles: {
        check_close_associate: false,
        check_foundation_member: false,
        check_core_team_member_cex: false,
        check_core_team_member_dex: false,
        check_second_line_leader: false,
        check_ucc: false,
        check_uns_wings: false,
        check_trainer: false,
        check_pioneer: false,
        check_unsret_holder: false,
        check_repnft_holder: false,
        check_newbie: false,
      },
      unsretNfts: [
        {
          wallet: "",
          numbers: "",
          qty: "",
          referralWallet: "",
          referredName: "",
        },
      ],
      repnftNfts: [
        {
          wallet: "",
          numbers: "",
          qty: "",
          referralWallet: "",
          referredName: "",
        },
      ],
      nftType: "UNSRET",
      unsretNfts: [
        {
          wallet: "",
          numbers: "",
          qty: "",
          referralWallet: "",
          referredName: "",
        },
      ],
      repnftNfts: [
        {
          wallet: "",
          numbers: "",
          qty: "",
          referralWallet: "",
          referredName: "",
        },
      ],
      roles: [],
      interests: "",
      nationalId: "",
      joiningDate: "",
      ownInvestments: [{ wallet: "", amount: "", proof: null }],
      referralInvestments: [{ name: "", wallet: "", amount: "", proof: null }],
      // nftType: 'UNSRET',
      nfts: [
        {
          wallet: "",
          numbers: "",
          qty: "",
          referralWallet: "",
          referredName: "",
        },
      ],
      usdt_own_value: [
        {
          received_wallet_stacking_usdt: "",
          total_invested_own_usdt: "",
          upload_usdt: null,
        },
      ],
      usdt_ref_value: [
        {
          referrals_name: "",
          referrals_wallet_staking: "",
          usdt_refrel_invest: "",
          upload_referal: null,
        },
      ],
      unsret_value: [],
      repnft_value: [],
    },
  });





  // const unsretList = watch('unsretNfts') || [];

// const { totalUnsretUSDT, totalUnsretReward } = useMemo(() => {
//   return unsretList.reduce(
//     (acc, curr) => {
//       const qty = parseFloat(curr.qty || 0);
//       acc.totalUnsretUSDT += qty * NFT_PRICE.UNSRET.price;
//       acc.totalUnsretReward += qty * NFT_PRICE.UNSRET.reward;
//       return acc;
//     },
//     { totalUnsretUSDT: 0, totalUnsretReward: 0 }
//   );
// }, [unsretList]);


  const unsRoles = watch("unsRoles");

  const unsretNfts = useFieldArray({ control, name: "unsretNfts" });
  const repnftNfts = useFieldArray({ control, name: "repnftNfts" });

  const roleDateFields = Object.keys(unsRoles).filter(
    (roleKey) => unsRoles[roleKey]
  );

  const {
    fields: ownFields,
    append: appendOwn,
    remove: removeOwn,
  } = useFieldArray({
    control,
    name: "usdt_own_value",
  });

  const {
    fields: refFields,
    append: appendRef,
    remove: removeRef,
  } = useFieldArray({
    control,
    name: "usdt_ref_value",
  });

  const {
    fields: unsretFields,
    append: addUnsret,
    remove: removeUnsret,
  } = useFieldArray({
    control,
    name: "unsret_value",
  });

  const {
    fields: repnftFields,
    append: addRepnft,
    remove: removeRepnft,
  } = useFieldArray({
    control,
    name: "repnft_value",
  });
  

  const ROLES = [
    "CLOSE ASSOCIATE",
    "FOUNDATION MEMBER",
    "CORE TEAM MEMBER (CEX)",
    "CORE TEAM MEMBER (DEX)",
    "SECOND LINE LEADER",
    "UCC",
    "UNSWINGS",
    "TRAINER",
    "PIONEER",
    "UNSRET HOLDER",
    "REPNFT HOLDER",
    "NEWBIE",
  ];
  const FIELDS_OF_INTEREST = [
    "AGRICULTURE",
    "EDUCATION",
    "RENEWABLE ENERGY",
    "HEALTHCARE",
    "E-COMMERCE",
    "REAL ESTATE",
    "HYBRID CEX",
    "DEX",
    "OWN BLOCKCHAIN",
    "GAMISM",
    "SPORTS",
    "HOSPITALITY",
  ];
  const watchRoles = watch("roles");
  const watchNFTType = watch("nftType");
  const ownInvestments = useFieldArray({ control, name: "ownInvestments" });
  const referralInvestments = useFieldArray({
    control,
    name: "referralInvestments",
  });
  const nfts = useFieldArray({ control, name: "nfts" });
  const totalOwn = watch("ownInvestments")?.reduce(
    (sum, item) => sum + Number(item.amount || 0),
    0
  );
  const totalReferral = watch("referralInvestments")?.reduce(
    (sum, item) => sum + Number(item.amount || 0),
    0
  );

  const onSubmit = (data) => console.log(data);

  const handleFileChange = (e, fieldName) => {
    const file = e.target.files[0];
    if (file) {
      setValue(fieldName, file); // store file in React Hook Form state
      trigger(fieldName); // trigger validation manually
    }
  };

  const onSubmitStep1 = (data) => {
    const age = calculateAge(data.date_of_birth);
    setFormData((prev) => ({ ...prev, ...data, age }));
    setStep(2);
  };

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const [nftType, setNftType] = useState("UNSRET");
  const [entries, setEntries] = useState([
    {
      wallet: "",
      numbers: "",
      quantity: "",
      referralWallet: "",
      personName: "",
    },
  ]);

  const getUSDTValue = (quantity) => {
    const qty = parseFloat(quantity || 0);
    return nftType === "UNSRET"
      ? { total: (qty * 1666.67).toFixed(2), reward: (qty * 83.33).toFixed(2) }
      : { total: (qty * 329).toFixed(2), reward: (qty * 16.45).toFixed(2) };
  };

  const handleChange = (index, field, value) => {
    const updated = [...entries];
    updated[index][field] = value;
    setEntries(updated);
  };

  const addEntry = () => {
    setEntries([
      ...entries,
      {
        wallet: "",
        numbers: "",
        quantity: "",
        referralWallet: "",
        personName: "",
      },
    ]);
  };

  const deleteEntry = (index) => {
    if (entries.length > 1) {
      setEntries(entries.filter((_, i) => i !== index));
    }
  };

  //Bottom section details
const NFT_PRICE = {
  UNSRET: { price: 1666.67, reward: 83.33 },
  REPNFT: { price: 329, reward: 16.45 },
};
const unsretTotal = unsretNfts.fields.reduce((acc, _, index) => {
const qty = watch(`unsretNfts.${index}.qty`) || 0;
  return acc + qty * NFT_PRICE.UNSRET.price;
}, 0);

const unsretReward = unsretNfts.fields.reduce((acc, _, index) => {
  const qty = watch(`unsretNfts.${index}.qty`) || 0;
  return acc + qty * NFT_PRICE.UNSRET.reward;
}, 0);

const repnftTotal = repnftNfts.fields.reduce((acc, _, index) => {
  const qty = watch(`repnftNfts.${index}.qty`) || 0;
  return acc + qty * NFT_PRICE.REPNFT.price;
}, 0);

const repnftReward = repnftNfts.fields.reduce((acc, _, index) => {
  const qty = watch(`repnftNfts.${index}.qty`) || 0;
  return acc + qty * NFT_PRICE.REPNFT.reward;
}, 0);

const total = (unsretTotal + repnftTotal).toFixed(2);
const reward = (unsretReward + repnftReward).toFixed(2);

  // const gender = watch("gender");

  const renderStepContent = () => {
    if (step === 1) {
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
                <p className="text-red-500 text-sm">
                  Please enter date of birth.
                </p>
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
                <label className="flex flex items-center ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  <input
                    type="radio"
                    value="male"
                    {...register("gender", { required: true })}
                    className="mr-2 w-4 h-4 text-green-600 bg-gray-100  dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  Male
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="female"
                    {...register("gender", { required: true })}
                    className="mr-2 w-4 h-4 text-green-600 bg-gray-100  dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
                    className="mr-1 w-4 h-4 text-green-600 bg-gray-100  dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  Speak
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    {...register(`check_lang_write_${n}`)}
                    className="mr-1 w-4 h-4 text-green-600 bg-gray-100  dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  Read/Write
                </label>
              </div>
            ))}
          </div>

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
    }

    if (step === 2) {
      return (
        <form
          onSubmit={handleSubmit((data) => {
            setFormData((prev) => ({ ...prev, ...data }));
            setStep(3);
          })}
          className="p-4"
        >
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
                  errors.whatsapp_country_code
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                placeholder="Code"
              />
              {errors.whatsapp_country_code && (
                <p className="text-red-500 text-sm">Required</p>
              )}
            </div>

            {/* WhatsApp Number */}
            <div>
              <label className="block font-medium mb-1">
                WhatsApp Number *
              </label>
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
            <div className="col-span-2">
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
          </div>

          {/* Profile Picture Upload */}
          <div className="mt-6">
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
        </form>
      );
    }

    if (step === 3) {
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
    }

    if (step === 4) {
      return (
        <form
          onSubmit={handleSubmit((data) => {
            setFormData((prev) => ({ ...prev, ...data }));
            setStep(5);
          })}
          className="p-4"
        >
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
              <label
                htmlFor="pan_front_page"
                className="block font-medium mb-1"
              >
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
    }

    if (step === 5) {
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
          setValue(
            "alt_building_street",
            updatedData.alt_building_street || ""
          );
          setValue("alt_area_landmark", updatedData.alt_area_landmark || "");
          setValue("alt_country", updatedData.alt_country || "");
          setValue("alt_state_region", updatedData.alt_state_region || "");
          setValue("alt_city", updatedData.alt_city || "");
          setValue("alt_postal_zipcode", updatedData.alt_postal_zipcode || "");
        }
      };

      return (
        <form
          onSubmit={handleSubmit((data) => {
            setFormData((prev) => ({ ...prev, ...data }));
            setStep(6);
          })}
        >
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
                  <p className="text-red-500 text-sm">
                    This field is required.
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Checkbox to copy address */}
          <div className="flex items-center mb-6  pb-4 border-b-2 border-green-500">
            <input
              type="checkbox"
              id="copyAddress"
              onChange={handleCheckboxChange}
              className="mr-2 w-4 h-4 text-green-600 bg-gray-100  dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="copyAddress" className="text-sm">
              Same as permanent address
            </label>
          </div>

          {/* Communication Address */}
          <h5 className="text-lg font-semibold mb-3">
            Address for Communication
          </h5>
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
                  <p className="text-red-500 text-sm">
                    This field is required.
                  </p>
                )}
              </div>
            ))}
          </div>
        </form>
      );
    }

    if (step === 6) {
      return (
        <div className="container mx-auto p-4">
          <h3 className="text-xl font-semibold mb-6">Education Details</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Row 1: Qualification / Institute / Course Type */}
            <div>
              <label className="block mb-1 font-medium">
                Highest Qualification *
              </label>
              <input
                type="text"
                {...register("highest_qualification", {
                  required: "Please enter qualification.",
                })}
                className={`w-full p-2 border rounded ${
                  errors.highest_qualification
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                placeholder="Enter qualification"
              />
              {errors.highest_qualification && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.highest_qualification.message}
                </p>
              )}
            </div>

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

            {/* Row 2: Year / Percentage / Other Qualification */}
            <div>
              <label className="block mb-1 font-medium">
                Year of Passing *
              </label>
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

            <div>
              <label className="block mb-1 font-medium">
                Percentage of Marks *
              </label>
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

            <div>
              <label className="block mb-1 font-medium">
                Any Other Qualification/s
              </label>
              <input
                type="text"
                {...register("other_qualification")}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter other qualification"
              />
            </div>

            {/* Row 3: Document Upload (spans one full row or left-aligned) */}
            <div className="md:col-span-3">
              <label className="block mb-1 font-medium">
                Social Stratification Document
              </label>
              <input
                type="file"
                accept="application/pdf,image/*"
                onChange={(e) => handleFileChange(e, "transfer_certificate")}
                className={`w-full p-2 border rounded ${
                  errors.transfer_certificate
                    ? "border-red-500"
                    : "border-gray-300"
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
    }

    if (step === 7) {
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
                    className="mr-2 w-4 h-4 text-green-600 bg-gray-100  dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
          {(watch("selected_option") === "Work" ||
            watch("selected_option") === "Both") && (
            <>
              <h5 className="text-lg font-semibold mt-6 mb-2">
                Work Experience
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block font-medium mb-1">
                    Organization Name *
                  </label>
                  <input
                    type="text"
                    {...register("organization_name", { required: true })}
                    className={`w-full border p-2 rounded ${
                      errors.organization_name
                        ? "border-red-500"
                        : "border-gray-300"
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
                  <label className="block font-medium mb-1">
                    Department / Field *
                  </label>
                  <input
                    type="text"
                    {...register("department_field", { required: true })}
                    className={`w-full border p-2 rounded ${
                      errors.department_field
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                  {errors.department_field && (
                    <p className="text-red-500 text-sm">Required</p>
                  )}
                </div>

                <div>
                  <label className="block font-medium mb-1">
                    Years of Experience *
                  </label>
                  <input
                    type="number"
                    {...register("years_experience", { required: true })}
                    className={`w-full border p-2 rounded ${
                      errors.years_experience
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                  {errors.years_experience && (
                    <p className="text-red-500 text-sm">Required</p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label className="block font-medium mb-1">
                    Previous Experience
                  </label>
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
          {(watch("selected_option") === "Business" ||
            watch("selected_option") === "Both") && (
            <>
              <h5 className="text-lg font-semibold mt-8 mb-2">
                Business Experience
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block font-medium mb-1">
                    Organization Name *
                  </label>
                  <input
                    type="text"
                    {...register("name_of_organization", { required: true })}
                    className={`w-full border p-2 rounded ${
                      errors.name_of_organization
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                  {errors.name_of_organization && (
                    <p className="text-red-500 text-sm">Required</p>
                  )}
                </div>

                <div>
                  <label className="block font-medium mb-1">
                    Nature of Business *
                  </label>
                  <input
                    type="text"
                    {...register("nature_of_business", { required: true })}
                    className={`w-full border p-2 rounded ${
                      errors.nature_of_business
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                  {errors.nature_of_business && (
                    <p className="text-red-500 text-sm">Required</p>
                  )}
                </div>

                <div>
                  <label className="block font-medium mb-1">
                    No. of Employees *
                  </label>
                  <input
                    type="number"
                    {...register("number_of_employees", { required: true })}
                    className={`w-full border p-2 rounded ${
                      errors.number_of_employees
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                  {errors.number_of_employees && (
                    <p className="text-red-500 text-sm">Required</p>
                  )}
                </div>

                <div>
                  <label className="block font-medium mb-1">
                    Experience in Field *
                  </label>
                  <input
                    type="text"
                    {...register("experience_in_field", { required: true })}
                    className={`w-full border p-2 rounded ${
                      errors.experience_in_field
                        ? "border-red-500"
                        : "border-gray-300"
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
    }

    if (step === 8) {
      return (
        <div className="container mx-auto p-4">
          <h3 className="text-xl font-semibold mb-6">Bank Account Details</h3>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Account Holder Name */}
            <div>
              <label className="block mb-1 font-medium">
                Account Holder Name *
              </label>
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
            <label
              htmlFor="cancelled_cheque"
              className="block font-medium mb-2"
            >
              Cancelled Cheque Upload *
            </label>

            <div className="border-dashed border-2 border-gray-400 rounded-md p-6 text-center">
              <label
                htmlFor="cancelled_cheque"
                className="cursor-pointer block"
              >
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
    }

    if (step === 9) {
      return (
        <div className="container mx-auto p-4 ">
          {/* Section 1: Roles */}
          <div>
            <label className="block font-semibold">UNS Role/s *</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4 border-b-2 border-green-500 pb-4">
              {ROLES.map((role) => (
                <label key={role} className="flex items-center space-x-2">
                  <input type="checkbox" value={role} {...register("roles")} />
                  <span>{role}</span>
                </label>
              ))}
            </div>
            {watchRoles?.map((role) => (
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
              {FIELDS_OF_INTEREST.map((opt) => (
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

          {/* Section 3 */}
          <div className="my-2 border-b-2 border-green-500 pb-4">
            <h2 className="font-semibold mb-2 mt-4">USDT invested (Own)</h2>
            {ownInvestments.fields.map((field, index) => (
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
                    className="w-24 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
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

          {/* Section 4 */}
          <div className="my-2 border-b-2 border-green-500 pb-4">
            <h2 className="font-semibold mb-2 mt-4">
              USDT invested (Through Referral)
            </h2>
            {referralInvestments.fields.map((field, index) => (
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
                    className="w-24 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
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

          {/* Section 5: NFT Selection */}
          <div className="my-2 mt-4 border-b-4 border-green-500">
  <h3 className="font-bold text-lg">NFT DETAILS</h3>

  {/* UNSRET NFT Section */}
  <div className="border-t-2 mt-6 pt-4">
    <h4 className="font-bold text-lg mb-4">UNSRET NFT Details</h4>

    {unsretNfts.fields.map((field, index) => {
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

    {repnftNfts.fields.map((field, index) => {
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

  {/* Total Summary Section (OUTSIDE BOTH MAPPINGS) */}
  
</div>


        </div>
      );
    }

    return (
      <div className="text-center text-lg font-semibold text-gray-700">
        Step {step} content placeholder
      </div>
    );
  };

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
      {/* Stepper */}
      <div className="flex flex-wrap sm:flex-nowrap items-center justify-center  mb-10">
        {[...Array(9)].map((_, index) => (
          <React.Fragment key={index}>
            <div
              className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm sm:text-base font-bold ${
                step >= index + 1
                  ? "bg-green-600 text-white"
                  : "bg-gray-300 text-gray-700"
              }`}
            >
              {index + 1}
            </div>
            {index < 8 && (
              <div
                className={`w-4 sm:w-20 h-1 ${
                  step >= index + 2 ? "bg-green-600" : "bg-gray-300"
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Step Content */}
      <div className="mb-10">{renderStepContent()}</div>

      {/* Navigation Buttons */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 mt-8">
        {/* Previous button: shown from step 2 onwards */}
        {step > 1 && (
          <button
            type="button"
            onClick={() => setStep(step - 1)}
            className="bg-gray-400 text-white px-5 py-2 rounded hover:bg-gray-500 w-full sm:w-auto"
          >
            Previous
          </button>
        )}

        {/* Next button: shown from steps 1 to 8 */}
        {step < 9 && (
          <button
            type="button"
            onClick={() => setStep(step + 1)}
            className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-600 w-full sm:w-auto ml-auto"
          >
            Next
          </button>
        )}

        {/* Confirm button: shown only on step 9 */}
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
