import { useState } from 'react';
import '@coreui/coreui/dist/css/coreui.min.css';
import { CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem } from '@coreui/react';

const ItcHeader = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleDropdownItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="justify-between items-center bg-green-200 text-white p-4">
      <h1 className="text-2xl text-center bg-green-700 border-4 border-red-800 py-1 text-slate-100">
        Income Tax Calculation for AY 2024-25 (FY 2023-24)
      </h1>
      <div className="flex items-center justify-center my-4">
        <div className="flex space-x-4">
          <button className="bg-[#EADFB4] px-3 py-1 text-green-800 font-bold transition-transform active:scale-95 focus:outline-none">
            Save As
          </button>
          <button className="bg-[#EADFB4] text-pink-500 font-bold px-4 py-2 transition-transform active:scale-95 focus:outline-none">
            Download Latest Version
          </button>
        </div>
        <div className="text-center border-4 border-blue-600 bg-yellow-200 text-red-600 p-2 font-semibold mx-4">
          <p>Version 24.1</p>
        </div>
        <div className="flex space-x-4">
          <button className="bg-[#EADFB4] font-bold text-red-600 px-4 py-2 transition-transform active:scale-95 focus:outline-none">
            Youtube Video Help
          </button>
          <button className="bg-[#EADFB4] font-bold text-red-600 px-4 py-2 transition-transform active:scale-95 focus:outline-none">
            Subscribe
          </button>
        </div>
      </div>
      <div className="flex border-4 bg-pink-200 w-[890px] border-red-900 p-2 my-4">
        <button className="bg-[#EADFB4] text-red-900 font-bold mr-[2px] border-2 px-2 py-0 transition-transform active:scale-95 focus:outline-none">
          Save
        </button>
        <button className="bg-[#EADFB4] text-red-900 font-bold mr-[2px] border-2 px-3 py-0 transition-transform active:scale-95 focus:outline-none">
          Print Preview
        </button>
        <button className="bg-[#EADFB4] text-green-900 font-bold mr-[2px] border-2 px-3 py-0 transition-transform active:scale-95 focus:outline-none">
          Create PDF
        </button>
        <button className="bg-[#EADFB4] text-blue-800 font-bold border-2  px-3 py-0 transition-transform active:scale-95 focus:outline-none">
          Print Pages:
        </button>
        <button className="bg-[#EADFB4] text-blue-800 font-bold border-2  px-3 py-0 transition-transform active:scale-95 focus:outline-none">
          1 & 3
        </button>
        <button className="bg-[#EADFB4] text-blue-800 font-bold border-2  px-3 py-0 transition-transform active:scale-95 focus:outline-none">
          2 & 4
        </button>
        <button className="bg-[#EADFB4] text-blue-800 font-bold border-2  px-3 py-0 transition-transform active:scale-95 focus:outline-none">
          1
        </button>
        <button className="bg-[#EADFB4] text-blue-800 font-bold border-2  px-3 py-0 transition-transform active:scale-95 focus:outline-none">
          2
        </button>
        <button className="bg-[#EADFB4] text-blue-800 font-bold border-2  px-3 py-0 transition-transform active:scale-95 focus:outline-none">
          3
        </button>
        <button className="bg-[#EADFB4] text-blue-800 font-bold border-2 mr-[2px] px-3 py-0 transition-transform active:scale-95 focus:outline-none">
          4
        </button>
        <CDropdown className="w-auto">
          <CDropdownToggle
            className="bg-white text-black w-24 transition-transform active:scale-95 focus:outline-none"
            color="primary"
          >
            {selectedItem ? selectedItem : 'Select'}
          </CDropdownToggle>
          <CDropdownMenu className="w-28">
            <CDropdownItem onClick={() => handleDropdownItemClick('Mar/2023')}>Mar/2023</CDropdownItem>
            <CDropdownItem onClick={() => handleDropdownItemClick('Apr/2023')}>Apr/2023</CDropdownItem>
            <CDropdownItem onClick={() => handleDropdownItemClick('May/2023')}>May/2023</CDropdownItem>
            <CDropdownItem onClick={() => handleDropdownItemClick('Jun/2023')}>Jun/2023</CDropdownItem>
            <CDropdownItem onClick={() => handleDropdownItemClick('Jul/2023')}>Jul/2023</CDropdownItem>
            <CDropdownItem onClick={() => handleDropdownItemClick('Aug/2023')}>Aug/2023</CDropdownItem>
            <CDropdownItem onClick={() => handleDropdownItemClick('Sep/2023')}>Sep/2023</CDropdownItem>
            <CDropdownItem onClick={() => handleDropdownItemClick('Oct/2023')}>Oct/2023</CDropdownItem>
            <CDropdownItem onClick={() => handleDropdownItemClick('Nov/2023')}>Nov/2023</CDropdownItem>
            <CDropdownItem onClick={() => handleDropdownItemClick('Dec/2023')}>Dec/2023</CDropdownItem>
            <CDropdownItem onClick={() => handleDropdownItemClick('Jan/2023')}>Jan/2023</CDropdownItem>
            <CDropdownItem onClick={() => handleDropdownItemClick('Feb/2023')}>Feb/2023</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      </div>
    </div>
  );
};

export default ItcHeader;