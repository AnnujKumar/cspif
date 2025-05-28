import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const mainCategories = ["Services", "Placement", "Programs"];
const childOptions = [
  "Child Welfare",
  "Probation",
  "Behavioral Health",
  "Dev Services",
  "Education",
];

const filterSections = [
  {
    label: "Service Type",
    options: ["All", "RFA", "TAH", "Group Home"],
    hasSearch: true,
  },
  {
    label: "Description",
    options: ["All"],
  },
  {
    label: "Eligibility",
    options: ["All"],
  },
  {
    label: "Partners Involved",
    options: ["All"],
  },
];

const Sidebar = () => {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedMain, setSelectedMain] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState({
    "Service Type": "All",
    Description: "All",
    Eligibility: "All",
    "Partners Involved": "All",
  });
  const [serviceTypeOpen, setServiceTypeOpen] = useState(true);

  const handleCategoryClick = (cat) => {
    if (selectedCategory === cat) {
      setSelectedCategory(null);
      setSelectedMain(null);
    } else {
      setSelectedCategory(cat);
      setSelectedMain(null);
      setCategoryOpen(false);
    }
  };

  const handleFilterSelect = (section, option) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [section]: option,
    }));
    if (section === "Service Type" && option === "All") {
      setServiceTypeOpen((prev) => !prev);
    } else if (section === "Service Type") {
      setServiceTypeOpen(true);
    }
  };

  return (
    <div className="bg-[#bfc6ea] w-64 rounded-xl p-3 flex flex-col border border-[#bfc6ea] max-h-min">
      {/* Category Dropdown */}
      <div className="mb-2">
        <div
          className="bg-[#065ec6] rounded-xl px-2 py-3 flex items-center mb-1 cursor-pointer"
          onClick={() => setCategoryOpen((prev) => !prev)}
        >
          <span className="text-white font-normal text-md flex-1">
            {selectedCategory ? selectedCategory : "Category"}
          </span>
          <span className="ml-2">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              style={{
                display: "block",
                transition: "transform 0.2s",
                transform: categoryOpen ? "rotate(0deg)" : "rotate(180deg)",
              }}
            >
              <polygon points="9,6 14,11 4,11" fill="#fff" />
            </svg>
          </span>
        </div>
        <div className="bg-[#a7b5e0] rounded-xl flex flex-col px-2 pb-2 pt-2">
          {/* Show main categories only when dropdown is open */}
          {categoryOpen && (
            <div className="flex flex-col gap-2 mb-2">
              {mainCategories.map((cat) => (
                <button
                  key={cat}
                  className={`w-full px-2 py-3 text-md font-semibold rounded-xl text-left transition
                    ${selectedCategory === cat ? "bg-[#fff8ee] text-[#D14B3A]" : "bg-transparent text-[#222]"}
                  `}
                  style={{ border: "none" }}
                  onClick={() => handleCategoryClick(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
          {/* Show child options only when dropdown is closed and a category is selected */}
          {!categoryOpen && selectedCategory && (
            <div className="flex flex-col mt-2">
              {childOptions.map((item) => (
                <button
                  key={item}
                  className={`text-left w-full px-2 py-3 text-md font-semibold transition rounded-xl
                    ${
                      selectedMain === item
                        ? "bg-[#fff8ee] text-[#D14B3A]"
                        : "bg-transparent text-[#222]"
                    }`}
                  style={{
                    border: "none",
                  }}
                  onClick={() => setSelectedMain(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Filters */}
      {filterSections.map((section) => (
        <div key={section.label} className="mb-2">
          <div className="text-xs font-semibold text-[#222] mb-1 flex items-center">
            {section.label}
            <span className="flex-1 border-t border-[#8b93c9] ml-2"></span>
          </div>
          {/* Custom select for Service Type */}
          {section.label === "Service Type" ? (
            <div className="bg-[#a7b5e0] rounded-xl p-2">
              <div className="relative mb-2">
                <button
                  className="w-full bg-[#fff8ee] border-none rounded-xl pl-2 py-2 text-md text-[#D14B3A] flex items-center justify-between focus:outline-none"
                  onClick={() => {
                    setServiceTypeOpen((prev) => !prev);
                    setSelectedFilters((prev) => ({
                      ...prev,
                      [section.label]: "All",
                    }));
                  }}
                  style={{
                    fontWeight: 400,
                  }}
                >
                  All
                  <span className="ml-2">
                    {serviceTypeOpen ? (
                      <svg width="22" height="22" viewBox="0 0 22 22">
                        <polygon points="6,14 11,9 16,14" fill="#7d89c2" />
                      </svg>
                    ) : (
                      <svg width="22" height="22" viewBox="0 0 22 22">
                        <polygon points="6,9 11,14 16,9" fill="#7d89c2" />
                      </svg>
                    )}
                  </span>
                </button>
              </div>
              {serviceTypeOpen && (
                <div className="flex flex-col gap-1">
                  {section.options
                    .filter((option) => option !== "All")
                    .map((option) => (
                      <div
                        key={option}
                        className="flex items-center justify-between pl-2 py-2 text-md text-[#222] bg-[#a7b5e0] rounded-xl"
                        style={{ fontWeight: 400 }}
                      >
                        {option}
                        <FaSearch className="text-[#fff] text-base ml-2" />
                      </div>
                    ))}
                </div>
              )}
            </div>
          ) : (
            // Custom dropdown for all other sections
            <div className="relative">
              <button
                type="button"
                className={`
                  w-full bg-[#8b93c9] border-none rounded-lg px-2 py-1 text-sm text-[#222] flex items-center justify-between
                  focus:outline-none
                  transition
                  text-[13px] sm:text-[14px] md:text-[15px]
                `}
                style={{
                  fontWeight: 400,
                  marginTop: "10px",
                  height: "30px",
                }}
                onClick={() =>
                  setSelectedFilters((prev) => ({
                    ...prev,
                    [`${section.label}Open`]: !prev[`${section.label}Open`],
                  }))
                }
              >
                {selectedFilters[section.label]}
                <span className="ml-2">
                  <svg width="18" height="18" viewBox="0 0 18 18">
                    <polygon points="7,10 12,15 17,10" fill="#fff" />
                  </svg>
                </span>
              </button>
              {/* Custom dropdown menu */}
              {selectedFilters[`${section.label}Open`] && (
                <ul
                  className={`
                    absolute left-0 mt-1 w-full bg-[#8b93c9] border border-[#bfc6ea] rounded-xl shadow z-50
                    text-[13px] sm:text-[14px] md:text-[15px]
                    max-h-40 overflow-y-auto
                  `}
                >
                  {section.options.map((option) => (
                    <li
                      key={option}
                      className={`
                        px-3 py-2 cursor-pointer hover:bg-blue-100 transition
                        ${option === selectedFilters[section.label] ? "bg-blue-50 font-semibold" : ""}
                      `}
                      onClick={() =>
                        setSelectedFilters((prev) => ({
                          ...prev,
                          [section.label]: option,
                          [`${section.label}Open`]: false,
                        }))
                      }
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;