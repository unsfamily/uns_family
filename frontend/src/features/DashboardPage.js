import React from 'react';
import Header from '../components/Header';
import { useForm, useFieldArray } from 'react-hook-form';
import Step9UnsRoles from '../components/Step9UnsRoles';

const DashboardPage = ({ employeeDetails }) => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    setValue,
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

  const handleFileChange = (e, fieldName) => {
    const file = e.target.files[0];
    if (file) {
      setValue(fieldName, file);
      trigger(fieldName);
    }
  };

  const watchRoles = watch("roles");
  const watchNFTType = watch('nftType');

  const unsretNfts = useFieldArray({ control, name: "unsretNfts" });
  const repnftNfts = useFieldArray({ control, name: "repnftNfts" });
  const ownInvestments = useFieldArray({ control, name: 'ownInvestments' });
  const referralInvestments = useFieldArray({ control, name: 'referralInvestments' });

  const totalOwn = watch('ownInvestments')?.reduce((sum, item) => sum + Number(item.amount || 0), 0);
  const totalReferral = watch('referralInvestments')?.reduce((sum, item) => sum + Number(item.amount || 0), 0);

  const ROLES = ["Mentor", "Investor", "Leader"];
  const FIELDS_OF_INTEREST = ["Education", "Finance", "Healthcare"];
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

  return (
    <>
      <Header />

      <div className="container mx-auto px-4 py-4">
        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-r">
              <div className="flex flex-col items-center mt-4">
                <img
                  src={employeeDetails?.profile_picture}
                  alt="Profile"
                  className="rounded mb-2 w-48 h-48 object-cover"
                />
                <div className="text-center text-lg font-medium">
                  {employeeDetails?.first_name} {employeeDetails?.last_name}
                </div>
                <div className="text-center text-sm text-gray-600">
                  {employeeDetails?.role_uns}
                </div>
              </div>
            </div>

            <div className="border-r">
              <h5 className="text-md font-semibold p-2">Profile Details</h5>
              <div className="p-2"><span className="font-medium">Employee ID: </span>{employeeDetails?.mobile_number}</div>
              <div className="p-2"><span className="font-medium">Phone: </span>{employeeDetails?.mobile_number}</div>
              <div className="p-2"><span className="font-medium">Whatsapp Number: </span>{employeeDetails?.whatsapp_number}</div>
              <div className="p-2"><span className="font-medium">Email Id: </span>{employeeDetails?.email_id}</div>
              <div className="p-2">
                <span className="font-medium">Address: </span>
                {employeeDetails?.building_street}, {employeeDetails?.city}, {employeeDetails?.district}, {employeeDetails?.country}, {employeeDetails?.pincode}
              </div>
            </div>

            <div>
              <h5 className="text-md font-semibold p-2">Business Details</h5>
              <div className="p-2"><span className="font-medium">Total Business in USDT: </span>{employeeDetails?.investment_through_referral}</div>
              <div className="p-2"><span className="font-medium">USDT invested (Own): </span>{employeeDetails?.total_own_usdt}</div>
              <div className="p-2 mt-2">
                <h5 className="text-md font-semibold">Announcement</h5>
                <p className="text-sm text-gray-600">Description Details</p>
              </div>
            </div>
          </div>
        </div>

        <Step9UnsRoles
          register={register}
          watch={watch}
          totalOwn={totalOwn}
          totalReferral={totalReferral}
          unsretTotal={unsretTotal}
          unsretReward={unsretReward}
          repnftTotal={repnftTotal}
          repnftReward={repnftReward}
          ownInvestments={ownInvestments}
          referralInvestments={referralInvestments}
          unsretNfts={unsretNfts}
          repnftNfts={repnftNfts}
        />

        <div className="mt-8">
          <h5 className="text-lg font-semibold border-b pb-2 mb-4">Video</h5>
          <div className="mb-4">
            <strong>For More Videos: </strong>
            <a
              href="https://www.youtube.com/@SureshSathyanarayanan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Visit Suresh Sathyanarayanan's Channel
            </a>
          </div>
          <div className="flex flex-wrap gap-4">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ohNzIgYIjHU"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ZnIDxY17eBs?start=206"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded shadow"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
