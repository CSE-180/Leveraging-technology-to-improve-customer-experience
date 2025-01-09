import React from "react";
import { useParams, Link } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes for type checking
import "../styles/compare.css"; // Import the CSS file

// Static data for insurance comparison
const insuranceData = {
  "health-insurance": [
    {
      company: "Reliance General Insurance Company Limited",
      coverage: [
        "In-patient treatment",
        "Day care treatment",
        "Pre and post-hospitalization",
        "Rehabilitation",
      ],
      premium: "Varies based on the plan and coverage selected.",
      deductibles: "Customizable plans with higher deductibles, ideal for low healthcare needs.",
      coPayments: "20% on dental claims\n"+"other co-payment terms may apply.",
      claimSettlementRatio: "98.75% ",
      waitingPeriods:
        "Specific waiting periods apply for some conditions",
      exclusions: [
        "Non-medically necessary treatments, cosmetic surgeries, and specific conditions are excluded.",
      ],
      additionalBenefits: [
        "No Claim Bonus",
        "Inflation protection",
        "Unlimited reinstatement",
      ],
      customerService: "Strong digital tools but inconsistent service.",
      policyTerm: "Annual, Biannual, or Quarterly.",
      renewability: "Generally available.",
      discounts: "Focus more on online purchase and NCB-related discounts.",
      rating: "4.3/5",
      noClaimBonus: "Applicable if no claims are made during the policy term.",
    },
    {
      company: "ManipalCigna Health Insurance Company.",
      coverage:"Arogya Sanjeevani Health Insurance Policy.",
      premium: "Offers a variety of health insurance plans with different premium features.",
      deductibles: "Offers flexibility, mainly suited for comprehensive coverage and employer-based group plans.",
      coPayments:
        "A fixed co-pay of 5% applicable across all ages for every claim.",
      claimSettlementRatio: "99.96%",
      waitingPeriods: "It offers flexibility in reducing waiting times for pre-existing conditions, depending on the plan.",
      exclusions: "Maternity and related expenses are not covered",
      additionalBenefits: "In-patient hospitalization, pre and post-hospitalization, daycare treatment and modern treatments.",
      customerService: "Excels in customer service, especially in support efficiency and user satisfaction.",
      policyTerm: "Annual",
      renewability: "Lifelong renewability",
      discounts: "Offers higher cumulative bonuses and wellness incentives with healthy lifestyles.",
      rating: "4.2/5",
      claimProcess: "Provide comprehensive support for cashless and reimbursement claims",
      noClaimBonus: "Yes, cumulative bonus available",
    },
  ],
  "car-insurance": [
    {
      company: "Acko General Insurance Limited",
      coverage:
        "Coverage for own vehicle damage, personal accident for owner-driver, theft, fire, and specified risks.",
      premium:
        "The premium varies based on the vehicle and chosen coverage options.",
      deductibles:
        "The insured must pay a deductible as specified in the schedule for each claim under Section I.",
      coPayments: "Acko prioritizes minimal to zero co-payment across its products.",
      networkOfHospitals: "Not applicable as this is a car insurance policy.",
      claimSettlementRatio: "86.87%",
      waitingPeriods: "Offers flexibility to reduce pre-existing condition waiting periods based on the plan.",
      exclusions:
        "Excludes loss from mechanical breakdown, tyre damage unless with vehicle damage, and claims under intoxication.",
      additionalBenefits:
        "Includes personal accident cover for the owner-driver, accessory coverage, and options for geographic extension.",
      customerService: "Offers a range of insurance products, including motor, health, and home insurance, with a focus on digital customer experience and quick claim settlements.",
      policyTerm: "Acko typically offers one-year policies, with multi-year options depending on the region and offer.",
      renewability:
        "Acko leans more towards a digital-first, streamlined approach renewability.",
      discounts:
        "Discounts may be available for safe driving, membership in automobile associations, and for vintage cars.",
      rating: "4.7/5",
      claimProcess:
        "Claims must be reported immediately, and the insured must provide all necessary information and assistance.",
      noClaimBonus:
        "Acko includes NCB protection add-on.",
    },
    {
      company: "Bajaj Allianz General Insurance Co. Ltd.",
      coverage:
        "Own Damage covers accidental car damage from fire, theft, and natural disasters.",
      premium:
        "Determined based on the information provided in the Private Car Package Policy Proposal Form.",
      coverageLimits:
        "Not explicitly mentioned; typically based on the Insured Declared Value (IDV) of the vehicle.",
      deductibles: "Has both compulsory and voluntary deductibles.",
      coPayments: "Bajaj Allianz offers flexibility with optional co-payment for voluntary deductibles.",
      networkOfHospitals: "Not applicable as this is a car insurance policy.",
      claimSettlementRatio: "98.50%",
      waitingPeriods: "Not applicable as this is a car insurance policy.",
      exclusions:"Exclusions include damage outside the geographical area, use of the car beyond policy, consequential loss.",
      additionalBenefits:
        "Optional extensions such as loss of accessories, legal liability to paid driver/cleaner, and personal accident cover for occupants.",
      customerService: "Bajaj Allianz General Insurance offers customer support through various channels, including toll-free numbers, emails and their dedicated call center.",
      policyTerm: "Bajaj Allianz car insurance policies usually have a one-year term but offer multi-year options with potential benefits like discounts.",
      renewability:
        "Bajaj Allianz caters to both digital and traditional preferences.",
      discounts:
        "Available for claims-free experience, opting for voluntary excess, membership with approved automobile associations, and installing approved anti-theft devices.",
      rating: "4.4/5",
      claimProcess: [
        "Call the toll-free number 1-800-209-5858.",
        "Submit a completely filled claim form at the nearest Bajaj Allianz General Insurance office.",
      ],     
      noClaimBonus:
        "Bajaj allows NCB transferability and offers flexibility with voluntary excess discounts.",
    },
  ],
  "home-insurance": [
    {
      company: "SBI General Insurance Company Limited",
      coverage:
        " Covers fire, lightning, explosion, riots, storms, floods, and more.",
      premium:
        "Varies based on the insured value and coverage options.",
      coverageLimits:
        "Based on the insured value determined by reinstatement value, market value, or agreed value basis.",
      deductibles: "Vary by policy.",
      coPayments: "10% co-pay applies to admissible claims for non-network hospitalization.",
      networkOfHospitals: "Not applicable as this is a home insurance policy.",
      claimSettlementRatio: "95%",
      waitingPeriods: "30-day waiting period for general illnesses, 12 months for specific diseases, and 36 months for pre-existing conditions.",
      exclusions: "Losses from official orders, unoccupied homes, livestock, vehicles, securities.",
      additionalBenefits: "Personal accident cover, Key replacement and All risk cover for portable equipment, jewelry, and valuables.",
      customerService: "Offers customer support through various channels, including toll-free numbers, emails and their dedicated call center.",
      policyTerm: "Policies are for 1, 2, or a maximum of 3 years.",
      renewability:
        "Not specified; generally, home insurance policies are renewable annually.",
      discounts:"TenureDiscounts like 2 Year Policy of  5% and 3 Year Policy of 7.5%",
      rating: "4.4/5",
      claimProcess:
        "Claims can be reported via phone or email, and assistance is provided throughout the process.",
      maternityBenefits: "Not applicable as this is a home insurance policy.",
      noClaimBonus: "A discount on the renewal premium offered to policyholders for not making any claims during the policy period, rewarding them for maintaining a claim-free record.",
    },
    {
      company: "Bajaj Allianz General Insurance Company Ltd.",
      coverage: "It covers damage to the home building, contents, and offers optional covers for valuables and personal accident.",
      premium:
        "The premium amount is not specified; it varies based on the insured value and coverage options.",
      coverageLimits:
        "Based on the Sum Insured as stated in the Policy Schedule.",
      deductibles: "Fixed amount payable by the policyholder before the insurer settles the claim.",
      coPayments: "A percentage of the claim amount borne by the policyholder, as per policy terms.",
      networkOfHospitals: "Not applicable as this is a home insurance policy.",
      claimSettlementRatio: "High claim settlement ratio, indicating efficient and reliable claim processing.",
      waitingPeriods: "Waiting periods vary depending on the policy, often between 30 to 90 days.",
      exclusions: [
        "Loss or damage caused by deliberate acts.",
        "War, invasion, or civil commotion.",
        "Pollution or contamination unless resulting from an insured event.",
        "Loss or damage due to mechanical breakdown or electrical failure.",
      ],
      additionalBenefits: [
        "Loss of rent and rent for alternative accommodation.",
        "Coverage for architect’s, surveyor’s, and consulting engineer’s fees.",
      ],
      customerService: "Bajaj Allianz is known for responsive customer service, offering multiple channels like phone, email, live chat, and a mobile app for claim support and inquiries.",
      policyTerm: "Not specified; typically annual.",
      renewability:
        "Not specified; generally, home insurance policies are renewable annually.",
      discounts: "Offers discounts for maintaining a claim-free record, typically around 20%-50% depending on the policy.",
      rating: "4.5/5",
      claimProcess:
        "Claims must be reported as per the procedures outlined in the policy document.",
      maternityBenefits: "Not applicable as this is a home insurance policy.",
      noClaimBonus: "Specific details on NCB may vary by policy type.",
    },
  ],
  "life-insurance": [
    {
      company: "Max Life Insurance Company Limited",
      coverage:
        "Provides life insurance coverage with options for death benefits, critical illness benefits, and additional riders.",
      premium:
        "The premium varies based on the sum assured, age, and selected options. Minimum annual premium is ₹2,200.",
      coverageLimits: ["minimum: ₹25 lakhs", "maximum: ₹100 crores"],
      deductibles: "Policyholder may need to pay an amount before coverage kicks in. ",
      coPayments: "Co-payment percentages may vary depending on the plan and the terms selected by the policyholder.",
      networkOfHospitals: "Not applicable as this is a life insurance policy.",
      claimSettlementRatio: "Claim settlement ratio is around 99%, demonstrating a high success rate in claim processing.",
      waitingPeriods:
        "A waiting period of 90 days applies for the Critical Illness benefit.",
      exclusions: [
        "Pre-existing conditions.",
        "Suicide within the first year.",
        "Claims arising from war or criminal acts.",
      ],
      additionalBenefits: [
        "Accelerated Critical Illness Benefit.",
        "Life Stage Event Benefit.",
        "Riders for comprehensive coverage.",
      ],
      customerService:
        "Contact via the company's website or customer helpline.",
      policyTerm:
        "Policy terms range from 10 to 50 years, depending on the payment option chosen.",
      renewability:
        "Policies are generally renewable, subject to terms and conditions.",
      discounts: "Discounts for higher sum assured and non-smokers.",
      rating: "4.6/5",
      claimProcess:
        "Claims can be initiated online or through customer service, with required documentation.",
      maternityBenefits: "Not applicable as this is a life insurance policy.",
      noClaimBonus: "0%-50% discount applies to the renewal premium based on the number of claim-free years.",
    },
    {
      company: "SBI Life Insurance Company Limited",
      coverage: [
        "description: Life insurance cover with return of premium.",
        "optionalRider: Optional accident benefit rider available.",
      ],
      premium:
        "Example premium for a ₹1 crore sum assured is ₹22,284 per annum (excluding taxes).",
      coverageLimits: [
        "minimum: ₹25,00,000",
        "maximum: Subject to board-approved underwriting policy.",
      ],
      deductibles: ", deductibles are usually based on the specific plan chosen, but not commonly applicable to life insurance products.",
      coPayments: "Co-payments apply primarily to health insurance policies and vary by plan.",
      networkOfHospitals: "Not applicable as this is a life insurance policy.",
      claimSettlementRatio: "Claim settlement ratio is approximately 96-97%, reflecting efficient and reliable claim settlement.",
      waitingPeriods: "No waiting period for life insurance policies, except for specific riders like critical illness.",
      exclusions: [
        "Death due to suicide within the first 12 months.",
        "Other exclusions as per the policy terms.",
      ],
      additionalBenefits: [
        "Maturity benefit of 100% of total premiums paid.",
        "Optional riders for enhanced protection.",
      ],
      customerService: ["phone: 1800 267 9090", "email: info@sbilife.co.in"],
      policyTerm: "Policy terms range from 10 to 30 years.",
      renewability:
        "Policies are generally renewable, subject to terms and conditions.",
      discounts: "Staff discounts applicable for employees and their families.",
      rating: "4.7/5",
      claimProcess:
        "Claims can be initiated through customer service or online.",
      maternityBenefits: "Not applicable as this is a life insurance policy.",
      noClaimBonus: "The discount for a claim-free year can range from 10%-50%, depending on the policy type.",
    },
  ],
};

const InsuranceTypePage = () => {
  const { type } = useParams();
  const formattedType = decodeURIComponent(type).replace(/ /g, "-");
  const dataForType = insuranceData[formattedType] || [];

  const renderTableRows = () => {
    if (dataForType.length === 0) {
      return (
        <tr>
          <td colSpan="2" className="no-data">
            No data available for this insurance type.
          </td>
        </tr>
      );
    }
  
    // Create a mapping of display names to actual keys
    const properties = {
      "Coverage": "coverage",
      "Premium": "premium",
      "Rating": "rating",
      "Deductibles": "deductibles",
      "Co-Payments": "coPayments",
      "Claim Settlement Ratio": "claimSettlementRatio",
      "Waiting Periods": "waitingPeriods",
      "Exclusions": "exclusions",
      "Additional Benefits": "additionalBenefits",
      "Customer Service": "customerService",
      "Policy Term": "policyTerm",
      "Renewability": "renewability",
      "Discounts": "discounts",
      "No Claim Bonus": "noClaimBonus",
    };
  
    return Object.entries(properties).map(([displayName, key], index) => {
      return (
        <tr key={index}>
          <td>{displayName}</td>
          {dataForType.map((insurance) => {
            const value = insurance[key];
            const displayValue = Array.isArray(value)
              ? value.join(", ")
              : value !== undefined && value !== null
              ? value
              : "Not specified";
            return <td key={insurance.company}>{displayValue}</td>;
          })}
        </tr>
      );
    });
  };

  return (
    <div className="insurance-type-page">
      <h1 className="page-title">
        {formattedType.replace("-", " ").toUpperCase()} COMPARISION
      </h1>
      <Link to="/dashboard" className="home-button">
        Home
      </Link>{" "}
      {/* Home Button */}
      <table className="insurance-table">
        <thead>
          <tr>
            <th scope="col">Property</th>
            {dataForType.map((insurance) => (
              <th key={insurance.company} scope="col">
                {insurance.company}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table>
    </div>
  );
};

// Adding PropTypes for type checking
InsuranceTypePage.propTypes = {
  type: PropTypes.string.isRequired,
};

export default InsuranceTypePage;
