import React, { useState } from "react";

// Example data structure (replace with your actual data)
const initialResources = [
  {
    id: 1,
    type: "Hospital Inpatient Services",
    description:
      "An individual or family approved under the RFA program to provide care for a youth or Non-Minor Dependent who is under the jurisdiction of Juvenile Court under a WIC 600....",
    eligibility: "Not a traditionally approved foster care placement.",
    partners: ["CWS", "Probation"],
    direction: ["ACL 22-21", "ACL 21-119", "ACL 21-143"],
  },
  {
    id: 2,
    type: "Psychiatric Health Facility (PHF)",
    description:
      "Placement of youth with a relative/NREFM who has been approved by the caregiver’s state of residence.",
    eligibility: "",
    partners: ["CWS", "Probation"],
    direction: ["WIC sections 4096 and 11462.01"],
  },
  {
    id: 3,
    type: "Group Home",
    description:
      "A home that has been approved by an Indian Tribe for foster care or adoptive placement of an Indian child using standards established by the Tribe pursuant to the Indian Child Welfare Act (ICWA) (25 U.S.C. 1915).",
    eligibility: "IPC still required",
    partners: ["County Mental", "Probation", "Health Plan"],
    direction: [],
  },
  {
    id: 4,
    type: "Congregate Care Innovative Model of Care (STRTF One or Two)",
    shortDescription: "Psychiatric Health Facility services are therapeutic and/or rehabilitative services provided in a psychiatric health facility licensed by the Department of Health Care Services.",
    description: (
      <>
        Psychiatric Health Facility services are therapeutic and/or rehabilitative services provided in a psychiatric health facility licensed by the Department of Health Care Services. Psychiatric health facilities are licensed to provide acute inpatient psychiatric treatment to individuals with major mental disorders. Psychiatric health facility services may include contact with significant support persons or other collaterals if the purpose of their participation is to focus on the treatment of the beneficiary.
        <ul className="list-disc ml-6 mt-2">
          <li>Assessment</li>
          <li>Treatment Planning</li>
          <li>Therapy</li>
          <li>Psychological Rehabilitation</li>
          <li>Intervention</li>
        </ul>
      </>
    ),
    eligibility: (
      <ul className="list-disc ml-6">
        <li>Enrolled in Medi-Cal</li>
        <li>
          Medical necessity inpatient level of care to treat acute mental health concern, including but not limited to a danger to self or others, or grave disability
        </li>
        <li>Can be voluntary admission, or admission through the 5150 process</li>
      </ul>
    ),
    partners: [],
    direction: ["Licensing (CCL) under Title 22 Regulations."],
  },
  {
    id: 5,
    type: "RFA (Relative and Non-Relative)",
    description:
      "An individual or family approved under the RFA program to provide care for a youth or Non-Minor Dependent who is under the jurisdiction of Juvenile Court under a WIC 600....",
    eligibility: "Enrolled in Medi-Cal DMC ODS-Level of Care",
    partners: [],
    direction: ["ACL 22-21", "ACL 21-119", "ACL 21-143"],
  },
];

// Partner badge color mapping
const partnerColors = {
  CWS: "bg-[#e3eaff] text-[#2563eb]",
  Probation: "bg-[#ffb3b3] text-[#d14b3a]",
  "County Mental": "bg-[#d1c4e9] text-[#7d89c2]",
  "Health Plan": "bg-[#b2f0e6] text-[#1e7066]",
};

const ResourceListing = () => {
  const [selectedId, setSelectedId] = useState(initialResources[3].id); // Default selected as in your screenshot

  return (
    <div className="flex flex-col flex-1 bg-white rounded-xl border border-[#bfc6ea] p-0 overflow-x-auto">
      <div className="flex items-center justify-between p-4">
        <span className="text-[#2563eb] font-semibold text-sm tracking-wide">RESOURCE LISTING</span>
        <button
          className="flex items-center bg-[#d14b3a] hover:bg-[#b53c2a] text-white rounded-lg px-2 py-2 text-sm font-normal uppercase transition"
        >
          PRINT RESULTS
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <rect x="6" y="9" width="12" height="7" rx="1" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M6 17v2a1 1 0 001 1h10a1 1 0 001-1v-2" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M6 7V5a1 1 0 011-1h10a1 1 0 011 1v2" stroke="currentColor" strokeWidth="2" fill="none"/>
            <circle cx="17" cy="13" r="1" fill="currentColor"/>
          </svg>
        </button>
      </div>
      <table className="w-full text-sm border-separate" style={{ borderSpacing: "0 4px" }}>
        <thead>
          <tr className="bg-[#0561c9]">
            <th className="text-white font-semibold py-2 px-2 text-left">
              Service Type
            </th>
            <th className="text-white font-semibold py-2 px-2 text-left">
              Description Of Service
            </th>
            <th className="text-white font-semibold py-2 px-2 text-left">
              Eligibility
            </th>
            <th className="text-white font-semibold py-2 px-2 text-left">
              Partners Involved
            </th>
            <th className="text-white font-semibold py-2 px-2 text-left">
              Associated Direction
            </th>
            <th className="text-white font-semibold py-2 px-2 text-left">
              {/* Empty header for actions */}
            </th>
          </tr>
        </thead>
        <tbody>
          {initialResources.map((res, idx) => {
            const isSelected = res.id === selectedId;
            return (
              <tr
                key={res.id}
                className={[
                  "cursor-pointer",
                  "align-top",
                  "transition-colors",
                  "rounded-xl",
                  "overflow-hidden",
                  "resource-row",
                  isSelected
                    ? "bg-[#fff8ee] border-l-4 border-[#ffb84d]"
                    : "bg-[#f6f8fc]",
                ].join(" ")}
                style={{
                  borderBottom: "8px solid #fff",
                }}
                onClick={() => setSelectedId(res.id)}
              >
                <td className={`py-3 px-2 align-top font-semibold ${isSelected ? "text-[#d14b3a]" : "text-[#2563eb]"}`}>
                  {res.type}
                </td>
                <td className="py-3 px-2 align-top text-[#222]">
                  {isSelected
                    ? res.description
                    : res.shortDescription // For resource 4, use shortDescription; for others, fallback below
                      ?? (typeof res.description === "string"
                        ? res.description.length > 120
                          ? res.description.slice(0, 120) + "..."
                          : res.description
                        : "")}
                </td>
                <td className="py-3 px-2 align-top text-[#222]">
                  {isSelected
                    ? res.eligibility
                    : res.id === 4
                      ? (
                          <span>
                            <ul className="list-disc ml-6">
                              <li>Enrolled in Medi-Cal</li>
                              <li>
                                Medical necessity inpatient level of care to treat acute mental health concern...
                              </li>
                            </ul>
                          </span>
                        )
                      : res.shortEligibility
                        ?? (typeof res.eligibility === "string"
                          ? res.eligibility.length > 80
                            ? res.eligibility.slice(0, 80) + "..."
                            : res.eligibility
                          : "")}
                </td>
                <td className="py-3 px-2 align-top">
                  <div className="flex flex-wrap gap-2">
                    {res.partners.map((p) => (
                      <span
                        key={p}
                        className={`inline-block px-2 py-1 rounded-lg text-xs font-semibold ${partnerColors[p] || "bg-[#e3eaff] text-[#2563eb]"}`}
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="py-3 px-2 align-top text-black">
                  {Array.isArray(res.direction)
                    ? res.direction.map((d, i) => <div key={i}>{d}</div>)
                    : res.direction}
                </td>
                {/* Action buttons column */}
                <td className="py-3 px-2 align-top">
                  <div className="flex flex-col gap-2">
                    {/* Add/Remove Button */}
                    {isSelected ? (
                      <button
                        type="button"
                        className="w-8 h-8 flex items-center justify-center bg-[#faa9a0] rounded-lg"
                        title="Remove"
                        onClick={e => {
                          e.stopPropagation();
                          setSelectedId(null);
                        }}
                        style={{ boxShadow: "none", border: "none" }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <rect x="4" y="4" width="16" height="16" rx="4" fill="#faa9a0"/>
                          <rect x="8" y="11" width="8" height="2" rx="1" fill="white"/>
                        </svg>
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="w-8 h-8 flex items-center justify-center bg-[#eaf8fe] rounded-lg"
                        title="Add"
                        onClick={e => {
                          e.stopPropagation();
                          setSelectedId(res.id);
                        }}
                        style={{ boxShadow: "none", border: "none" }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#0561c9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke="currentColor" strokeWidth="2" d="M12 5v14m7-7H5"/>
                        </svg>
                      </button>
                    )}
                    {/* Print Button */}
                    <button
                      type="button"
                      className="p-1 rounded hover:bg-[#e3eaff] transition"
                      title="Print"
                      onClick={e => { e.stopPropagation(); /* handle print */ }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#2563eb]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <rect x="6" y="9" width="12" height="7" rx="1" stroke="currentColor" strokeWidth="2" fill="none"/>
                        <path d="M6 17v2a1 1 0 001 1h10a1 1 0 001-1v-2" stroke="currentColor" strokeWidth="2" fill="none"/>
                        <path d="M6 7V5a1 1 0 011-1h10a1 1 0 011 1v2" stroke="currentColor" strokeWidth="2" fill="none"/>
                        <circle cx="17" cy="13" r="1" fill="currentColor"/>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ResourceListing;