import React from 'react';

const AdminDashboard  = ({ employeeDetails = {}, unsRoles = [], UNSRoles = {}, UNSRoleDateField = {} }) => {
const selectedOption = employeeDetails?.selected_option;
const showWork = selectedOption === 'Work' || selectedOption === 'Both';
const showBusiness = selectedOption === 'Business' || selectedOption === 'Both';
  return (
    <>
      {/* Header */}
      <header className="w-full bg-gray-100 py-4 shadow-md text-center text-xl font-semibold">
        Employee Details
      </header>

      <div className="px-4 py-6 max-w-7xl mx-auto">
        {/* =============================== Personal Details =============================== */}
        <section className="mb-8">
          <h2 className="text-lg font-bold bg-blue-100 p-2 rounded">Personal Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 bg-white shadow rounded">
            <Detail label="First Name" value={employeeDetails?.first_name} />
            <Detail label="Last Name" value={employeeDetails?.last_name} />
            <Detail label="Given Name (Passport)" value={employeeDetails?.given_name_passport} />
            <Detail label="Surname Name (Passport)" value={employeeDetails?.surname_passport} />
            <Detail label="Father’s Name" value={employeeDetails?.father_name} />
            <Detail label="Mother’s Name" value={employeeDetails?.mother_name} />
            <Detail label="Spouse Name" value={employeeDetails?.spouse_name} />
            <Detail label="Gender" value={employeeDetails?.gender} />
            <Detail label="Date of Birth" value={employeeDetails?.date_of_birth} />
            <Detail label="Age" value={employeeDetails?.age} />
            <Detail label="Religion" value={employeeDetails?.religion} />
            <Detail label="Nationality" value={employeeDetails?.nationality} />
            <Detail label="Community" value={employeeDetails?.community} />
            <div>
              <label className="block font-medium">Language:</label>
              <p>{employeeDetails?.language}</p>
              <p><strong>Speak:</strong> {employeeDetails?.speak ? 'Yes' : 'No'}</p>
              <p><strong>Read:</strong> {employeeDetails?.read ? 'Yes' : 'No'}</p>
              <p><strong>Write:</strong> {employeeDetails?.write ? 'Yes' : 'No'}</p>
            </div>
          </div>
        </section>

        {/* =============================== Contact Details =============================== */}
        <section className="mb-8">
          <h2 className="text-lg font-bold bg-blue-100 p-2 rounded">Contact Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-white shadow rounded">
            <SplitDetail label1="Code" value1={employeeDetails?.country_code} label2="Mobile Number" value2={employeeDetails?.mobile_number} />
            <SplitDetail label1="Code" value1={employeeDetails?.alt_country_code} label2="Alternative Mobile Number" value2={employeeDetails?.alternative_number} />
            <SplitDetail label1="Code" value1={employeeDetails?.whatsapp_country_code} label2="WhatsApp Number" value2={employeeDetails?.whatsapp_number} />
            <Detail label="Email ID" value={employeeDetails?.email_id} />
            <div>
              <label className="block font-medium mb-1">Profile Picture</label>
              <img
                src={employeeDetails?.profile_picture}
                alt="Profile"
                className="w-32 h-32 object-cover rounded border"
              />
            </div>
          </div>
        </section>

        {/* =============================== Pan Details =============================== */}
        <section className="mb-8">
            <h2 className="text-lg font-bold bg-blue-100 p-2 rounded">Taxpayer Details</h2>
            <div className="p-4 bg-white shadow rounded grid grid-cols-1 md:grid-cols-2 gap-4">

                <div>
                <label className="block font-medium mb-1">Unique National Income Tax Account Number *</label>
                <p>{employeeDetails?.pan_number || 'N/A'}</p>
                </div>

                <div>
                <label className="block font-medium mb-1">Identification Page</label>
                {employeeDetails?.pan_front_page ? (
                    <img
                    src={employeeDetails?.pan_front_page}
                    alt="PAN Identification Page"
                    className="w-full max-w-xs object-contain border rounded"
                    />
                ) : (
                    <p>No image available</p>
                )}
                </div>
                
            </div>
        </section>

{/* =============================== aadhar details =============================== */}
        <section className="mb-8">
            <h2 className="text-lg font-bold bg-blue-100 p-2 rounded">National Identity Card</h2>

            <div className="p-4 bg-white shadow rounded">
                {/* Identity Card Number */}
                <div className="mb-4">
                <label className="block font-medium mb-1">Identity Card Number</label>
                <p>{employeeDetails?.aadhar_number || 'N/A'}</p>
                </div>

                {/* Info message */}
                <p className="text-sm text-gray-600 mb-4">
                Uploaded identification document, including both the front and back sides:
                </p>

                {/* Front and Back Images */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label className="block font-medium mb-1">Front Page</label>
                    {employeeDetails?.aadhar_front_page ? (
                    <img
                        src={employeeDetails?.aadhar_front_page}
                        alt="Front of Aadhar"
                        className="w-full max-w-xs border rounded"
                    />
                    ) : (
                    <p>No image available</p>
                    )}
                </div>

                <div>
                    <label className="block font-medium mb-1">Back Page</label>
                    {employeeDetails?.aadhar_back_page ? (
                    <img
                        src={employeeDetails?.aadhar_back_page}
                        alt="Back of Aadhar"
                        className="w-full max-w-xs border rounded"
                    />
                    ) : (
                    <p>No image available</p>
                    )}
                </div>
                </div>
            </div>
        </section>
        
{/* =============================== address details =============================== */}        
        <section className="mb-8">
            <h2 className="text-lg font-bold bg-blue-100 p-2 rounded">Address Details</h2>

            <div className="p-4 bg-white shadow rounded">
                {/* Permanent Address */}
                <h3 className="font-semibold mb-3">Permanent Address</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                <Detail label="Building / Street Name" value={employeeDetails?.building_street} />
                <Detail label="Area / Landmark" value={employeeDetails?.area_landmark} />
                <Detail label="Country" value={employeeDetails?.country} />
                <Detail label="State/Region/Province" value={employeeDetails?.state_region} />
                <Detail label="City" value={employeeDetails?.city} />
                <Detail label="Postal / Zip Code" value={employeeDetails?.postal_zipcode} />
                </div>

                {/* Communication Address */}
                <h3 className="font-semibold mb-3">Address for Communication</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Detail label="Building / Street Name" value={employeeDetails?.alt_building_street} />
                <Detail label="Area / Landmark" value={employeeDetails?.alt_area_landmark} />
                <Detail label="Country" value={employeeDetails?.alt_country} />
                <Detail label="State/Region/Province" value={employeeDetails?.alt_state_region} />
                <Detail label="City" value={employeeDetails?.alt_city} />
                <Detail label="Postal / Zip Code" value={employeeDetails?.alt_postal_zipcode} />
                </div>
            </div>
        </section>

{/* =============================== education details =============================== */}  
        <section className="mb-8">
            <h2 className="text-lg font-bold bg-blue-100 p-2 rounded">Education Details</h2>

            <div className="p-4 bg-white shadow rounded grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Detail label="Highest Qualification" value={employeeDetails?.highest_qualification} />
                <Detail label="Institute Name" value={employeeDetails?.institute_name} />
                <Detail
                label="Course Type"
                value={
                    employeeDetails?.course_type === 'Single'
                    ? 'Regular'
                    : 'Distance Education'
                }
                />
                <Detail label="Year of Passing" value={employeeDetails?.year_passing} />
                <Detail label="Percentage of Marks" value={employeeDetails?.percentage_marks} />
                <Detail label="Any Other Qualification(s)" value={employeeDetails?.other_qualification || 'N/A'} />

                <div className="col-span-1 sm:col-span-2 lg:col-span-3">
                <label className="block font-medium mb-1">View Transfer Certificate</label>
                {employeeDetails?.transfer_certificate ? (
                    <img
                    src={employeeDetails?.transfer_certificate}
                    alt="Transfer Certificate"
                    className="w-full max-w-md border rounded"
                    />
                ) : (
                    <p>No certificate uploaded</p>
                )}
                </div>
            </div>
        </section>

{/* =============================== Work / Business Experience =============================== */}  
        <section className="mb-8">
            <h2 className="text-lg font-bold bg-blue-100 p-2 rounded">Work / Business Experience</h2>

            <div className="p-4 bg-white shadow rounded">
                {/* Selected Option */}
                <div className="mb-6">
                <label className="block font-medium mb-1">Selected Option:</label>
                <p className="text-blue-700 font-semibold">
                    {selectedOption === 'Work' && 'Work'}
                    {selectedOption === 'Business' && 'Business'}
                    {selectedOption === 'Both' && 'Work / Business'}
                </p>
                </div>

                {/* Work Experience Section */}
                {showWork && (
                <>
                    <h3 className="font-semibold mb-2">Work Experience</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    <Detail label="Name of the Organization" value={employeeDetails?.organization_name} />
                    <Detail label="Job Title" value={employeeDetails?.job_title} />
                    <Detail label="Department / Field" value={employeeDetails?.department_field} />
                    <Detail label="Years of Experience" value={employeeDetails?.years_experience} />
                    <Detail label="Previous Experience" value={employeeDetails?.other_experience || 'N/A'} />
                    </div>
                </>
                )}

                {/* Business Experience Section */}
                {showBusiness && (
                <>
                    <h3 className="font-semibold mb-2">Business Experience</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Detail label="Name of the Organization" value={employeeDetails?.name_of_organization} />
                    <Detail label="Nature of Business" value={employeeDetails?.nature_of_business} />
                    <Detail label="No of Employees" value={employeeDetails?.number_of_employees} />
                    <Detail label="Experience in Field" value={employeeDetails?.experience_in_field} />
                    </div>
                </>
                )}
            </div>
        </section>   

{/* =============================== Bank Account details =============================== */} 
      <section className="mb-8">
      <h2 className="text-lg font-bold bg-blue-100 p-2 rounded">Bank Account Details</h2>

      <div className="p-4 bg-white shadow rounded">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Detail label="Account Holder Name" value={employeeDetails?.account_holder} />
          <Detail label="Bank Name" value={employeeDetails?.bank_name} />
          <Detail label="National/International Bank Account No" value={employeeDetails?.account_number} />
          <Detail label="SWIFT / National Financial System Code" value={employeeDetails?.ifsc_code} />
        </div>

        {/* Canceled Cheque / Passbook Image */}
        <div className="mt-6">
          <label className="block font-medium mb-1">View Canceled Cheque / Passbook</label>
          {employeeDetails?.pass_book ? (
            <img
              src={employeeDetails?.pass_book}
              alt="Canceled Cheque / Passbook"
              className="w-full max-w-md border rounded"
            />
          ) : (
            <p>No image available</p>
          )}
        </div>
      </div>
    </section>

{/* =============================== UNS details =============================== */} 
      {/* UNS Details */}
      <section className="mb-10">
      <h2 className="text-lg font-bold bg-blue-100 p-2 rounded">UNS Details</h2>

      <div className="p-4 bg-white shadow rounded space-y-6">
        {/* UNS Roles */}
        <div className="grid gap-4">
          {unsRoles.map(role => (
            employeeDetails?.[role] && (
              <div key={role}>
                <p><strong>UNS Role:</strong> {UNSRoles[role]}</p>
                <p>Achieved Date: {employeeDetails?.[UNSRoleDateField[role]]}</p>
              </div>
            )
          ))}
        </div>

        {/* Basic Info */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 border-b pb-4">
          <Detail label="Field of Interest" value={employeeDetails?.field_of_interest} />
          <Detail label="Passport Number" value={employeeDetails?.passport_number} />
          <Detail label="Date of Joining" value={employeeDetails?.date_of_joining} />
        </div>

        {/* Totals */}
        <div className="grid sm:grid-cols-3 gap-4 text-yellow-700 font-semibold border-b py-4">
          <Detail label="Total USDT (Own)" value={employeeDetails?.total_own_usdt} />
          <Detail label="Total USDT (Referral)" value={employeeDetails?.total_ref_usdt} />
          <Detail label="Total Business in USDT" value={employeeDetails?.investment_through_referral} />
        </div>

        {/* USDT Own Investments */}
        <div>
          <h3 className="font-semibold text-blue-700">USDT Own Investments</h3>
          <div className="grid gap-4 mt-2">
            {employeeDetails?.usdt_own_value?.map((item, idx) => (
              <div key={idx} className="border p-3 rounded">
                <p><strong>Wallet Address:</strong> {item.received_wallet_stacking_usdt}</p>
                <p><strong>USDT Invested:</strong> {item.total_invested_own_usdt}</p>
                {item.upload_usdt && <img src={item.upload_usdt} alt="USDT Upload" className="w-64 mt-2 border rounded" />}
              </div>
            ))}
          </div>
        </div>

        {/* USDT Referral Investments */}
        <div>
          <h3 className="font-semibold text-blue-700">Referral Investments</h3>
          <div className="grid gap-4 mt-2">
            {employeeDetails?.usdt_ref_value?.map((item, idx) => (
              <div key={idx} className="border p-3 rounded">
                <p><strong>Referral Name:</strong> {item.referrals_name}</p>
                <p><strong>Wallet Address:</strong> {item.referrals_wallet_staking}</p>
                <p><strong>USDT Invested (Referral):</strong> {item.usdt_refrel_invest}</p>
                {item.upload_referal && <img src={item.upload_referal} alt="Referral Upload" className="w-64 mt-2 border rounded" />}
              </div>
            ))}
          </div>
        </div>

        {/* NFT Type */}
        <p className="font-semibold text-indigo-700">
          <strong>NFT Type:</strong> {employeeDetails?.nftType === 'option1' ? 'REPNFT' : 'UNSRET'}
        </p>

        {/* UNSRET Investments */}
        <div>
          <h3 className="font-semibold text-blue-700">UNSRET Investments</h3>
          <div className="grid gap-4 mt-2">
            {employeeDetails?.unsret_value?.map((item, idx) => (
              <div key={idx} className="border p-3 rounded">
                <p><strong>Purchase Wallet Address:</strong> {item.purchase_wallet}</p>
                <p><strong>NFT Number:</strong> {item.nft_number}</p>
                <p><strong>Purchased Quantity:</strong> {item.nft_purchased_qty}</p>
                <p><strong>Referral Wallet:</strong> {item.ref_wallet}</p>
                <p><strong>Referred Person:</strong> {item.referred_per_name}</p>
                <p className="text-yellow-800 font-semibold">
                  <strong>Total Purchased Value:</strong> {item.nft_purchased_val}
                </p>
                <p className="text-yellow-800 font-semibold">
                  <strong>Referral Reward:</strong> {item.nft_rewards_val}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* REPNFT Investments */}
        <p className="font-semibold text-indigo-700">
          <strong>NFT Type:</strong> {employeeDetails?.nftType === 'option2' ? 'UNSRET' : 'REPNFT'}
        </p>

        <div>
          <h3 className="font-semibold text-blue-700">REPNFT Investments</h3>
          <div className="grid gap-4 mt-2">
            {employeeDetails?.repnft_value?.map((item, idx) => (
              <div key={idx} className="border p-3 rounded">
                <p><strong>Purchase Wallet Address:</strong> {item.thai_purchase_wallet}</p>
                <p><strong>NFT Number:</strong> {item.thai_nft_number}</p>
                <p><strong>Purchased Quantity:</strong> {item.thai_nft_purchased_qty}</p>
                <p><strong>Referral Wallet:</strong> {item.thai_ref_wallet}</p>
                <p><strong>Referred Person:</strong> {item.thai_referred_per_name}</p>
                <p className="text-yellow-800 font-semibold">
                  <strong>Total Purchased Value:</strong> {item.thai_nft_purchased_val}
                </p>
                <p className="text-yellow-800 font-semibold">
                  <strong>Referral Reward:</strong> {item.thai_nft_rewards_val}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
      </div>
    </>
  );
};


// Reusable component for label + value
const Detail = ({ label, value }) => (
  <div>
    <label className="block font-medium">{label}</label>
    <p className="text-gray-700">{value || 'N/A'}</p>
  </div>
);

// Reusable component for 2-column label + value
const SplitDetail = ({ label1, value1, label2, value2 }) => (
  <div className="grid grid-cols-2 gap-4">
    <div>
      <label className="block font-medium">{label1}</label>
      <p>{value1}</p>
    </div>
    <div>
      <label className="block font-medium">{label2}</label>
      <p>{value2}</p>
    </div>
  </div>
);

export default AdminDashboard;
