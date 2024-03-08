import { useSelector } from "react-redux";

const TableBill = () => {
  const data = useSelector((state) => state.finance.form[1]?.billDrawn);
  return (
    <table className="w-full border-collapse border-2 border-black" id="">
      <thead>
        <div className="flex">
          <h1 className="p-4 w-[61.5%] border-t-2 text-center font-bold border-l-2  border-r-2 border-black">
            BILL DRAWN PARTICULARS for the Financial Year 2023 - 24
          </h1>
          <h1 className="p-4 w-[38.6%] border-t-2 text-sm text-center font-bold border-l-2 border-r-2 border-black">
            Name : M P ARUN JEYAHAR
          </h1>
        </div>
      </thead>
      <thead>
        <div className="flex">
          <h1 className="py-2 w-[28%] border-t-2 text-center font-bold border-l-2  border-r-2 border-black">
            Designation: DEPUTY STATE TAX OFFICER
          </h1>
          <h1 className="py-2 w-[16.6%] border-t-2 text-sm text-center font-bold border-l-2 border-r-2 border-black">
            PAN : BFOPA6244Q
          </h1>
          <h1 className="py-2 w-[16.9%] border-t-2 text-sm text-center font-bold border-l-2 border-r-2 border-black">
            Office TAN : MRIC01323A{" "}
          </h1>
          <h1 className="py-2 w-[38.6%] border-t-2 text-sm text-center font-bold border-l-2 border-r-2 border-black">
            Office : STATE TAX OFFICE NAGERCOIL 1
          </h1>
        </div>
      </thead>
      <thead>
        <div className="flex">
          <h1 className=" border-t-2 pt-6 text-center text-xs font-bold border-l-2 border-r-2 border-black w-[6.2%]">
            Month
            <br /> /
          </h1>
          <h1 className="p-4 border-2 text-center font-bold border-black w-[56.2%]">
            Name of the Company
          </h1>
          <h1 className="p-4 border-2 text-center font-bold border-black w-[38.6%]">
            Name of Policy
          </h1>
        </div>
      </thead>
      <thead>
        <div className="">
          <tr>
            <td className="px- font-extrabold4 border-b-2 text-center font-bold border-l-2 border-r-2 border-black w-[16%]">
              {" "}
              Year
            </td>
            <td className="p-4 font-extrabold border-2 text-center text-xs border-black w-[6.2%] ">
              BASIC PAY
            </td>
            <td className="p-4 font-extrabold border-2 text-center text-xs border-black w-[4.8%]">
              PP
            </td>
            <td className="p-4 font-extrabold border-2 text-center text-xs border-black w-[3.5%] ">
              DA
            </td>
            <td className="p-4 font-extrabold border-2 text-center text-xs border-black w-[2.8%]">
              HRA
            </td>
            <td className="p-4 font-extrabold border-2 text-center text-xs border-black w-[3.8%] ">
              CCA
            </td>
            <td className="p-4 font-extrabold border-2 text-center text-xs border-black w-[3.8%]">
              MA
            </td>
            <td className="p-4 font-extrabold border-2 text-center text-xs border-black w-[3.2%] ">
              SPLA
            </td>
            <td className="p-4 font-extrabold border-2 text-center text-xs border-black w-[4%]">
              HA
            </td>
            <td className="p-4 font-extrabold border-2 text-center text-xs border-black w-[3.9%] ">
              WA
            </td>
            <td className="p-4 font-extrabold border-2 text-center text-xs border-black w-[5%]">
              Conve. Allow.{" "}
            </td>
            <td className="p-4 font-extrabold border-2 text-center text-xs border-black w-[2%] ">
              Bonus
            </td>
            <td className="p-4 font-extrabold border-2 text-center text-xs border-black w-[4.8%]">
              Others
            </td>
            <td className="p-4 font-extrabold border-2 text-center text-xs border-black w-[4.8%] ">
              Gross
            </td>
            <td className="p-4 font-extrabold border-2 text-center text-xs border-black w-[5%]">
              CPS
            </td>
            <td className="p-4 font-extrabold border-2 text-center text-xs border-black w-[3.9%] ">
              SPF
            </td>
            <td className="p-4 font-extrabold border-2 text-center text-xs border-black w-[3.9%]">
              FBF
            </td>
            <td className="p-4 font-extrabold border-2 text-center text-xs border-black w-[3.9%] ">
              NHIS
            </td>
            <td className="p-4 font-extrabold border-2 text-center text-xs border-black w-[4%]">
              LIC/ PLI{" "}
            </td>
            <td className="p-4 font-extrabold border-2 text-center text-xs border-black w-[3.9%] ">
              IT + Cess{" "}
            </td>
            <td className="p-4 font-extrabold border-2 text-center text-xs border-black w-[5%]">
              HBA/
              <br />
              Others
            </td>
            <td className="p-4 font-extrabold border-2 text-center text-xs border-black w-[5%] ">
              Total Dedn.
            </td>
            <td className="p-4 font-extrabold border-2 text-center text-xs border-black w-[4.8%]">
              NET
            </td>
          </tr>
        </div>
      </thead>
      <div id="">
        <tr>
          <td
            className="p-2 text-xs w-[5%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.year}
          </td>
          <td
            className="p-2 text-xs w-[5%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.number}
          </td>
          <td
            className="p-2 text-xs w-[4.2%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.pp}
          </td>
          <td
            className="p-2 text-xs w-[3.5%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.da}
          </td>
          <td
            className="p-2 text-xs w-[4.3%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.hra}
          </td>
          <td
            className="p-2 text-xs w-[4.1%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.cca}
          </td>
          <td
            className="p-2 text-xs w-[3.5%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.ma}
          </td>
          <td
            className="p-2 text-xs w-[4.5%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.spla}
          </td>
          <td
            className="p-2 text-xs w-[4.5%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.ha}
          </td>
          <td
            className="p-2 text-xs w-[4.7%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.wa}
          </td>
          <td
            className="p-2 text-xs w-[5.2%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.conv}
          </td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.bonus}
          </td>
          <td
            className="p-2 text-xs w-[4.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.others}
          </td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.gross}
          </td>
          <td
            className="p-2 text-xs w-[4%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.cps}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.spf}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.fbf}
          </td>
          <td
            className="p-2 text-xs w-[3.5%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.nhis}
          </td>
          <td
            className="p-2 text-xs w-[4.4%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.pli}
          </td>
          <td
            className="p-2 text-xs w-[4.4%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.it}
          </td>
          <td
            className="p-2 text-xs w-[5%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.hba}
          </td>
          <td
            className="p-2 text-xs w-[5.2%] border-2 border-black text-blue-500"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.total}
          </td>
          <td
            className="p-2 text-xs w-[5.3%] border-2 border-black text-blue-500"
            contentEditable="true"
          >
            {data?.billDrawn?.net}
          </td>
        </tr>

        <tr>
          <td
            className="p-2 text-xs w-[6%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.year}
          </td>
          <td
            className="p-2 text-xs w-[5.1%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.number}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.pp}
          </td>
          <td
            className="p-2 text-xs w-[3%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.da}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.hra}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.cca}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.ma}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.spla}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.ha}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.wa}
          </td>
          <td
            className="p-2 text-xs w-[5%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.conv}
          </td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.bonus}
          </td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.others}
          </td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.gross}
          </td>
          <td
            className="p-2 text-xs w-[4%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.cps}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.spf}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.fbf}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.nhis}
          </td>
          <td
            className="p-2 text-xs w-[4%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.pi}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.it}
          </td>
          <td
            className="p-2 text-xs w-[5%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.hba}
          </td>
          <td
            className="p-2 text-xs w-[5%] border-2 border-black text-blue-500"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.total}
          </td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black text-blue-500"
            contentEditable="true"
          >
            {data?.billDrawn?.net}
          </td>
        </tr>

        <tr>
          <td
            className="p-2 text-xs w-[6%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.year}
          </td>
          <td
            className="p-2 text-xs w-[5.1%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.pay}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.pp}
          </td>
          <td
            className="p-2 text-xs w-[3%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.da}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.hra}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.cca}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.ma}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.spla}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.ha}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.wa}
          </td>
          <td
            className="p-2 text-xs w-[5%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.conv}
          </td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.bonus}
          </td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.other}
          </td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.gross}
          </td>
          <td
            className="p-2 text-xs w-[4%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.cps}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.spf}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.fbf}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.nhis}
          </td>
          <td
            className="p-2 text-xs w-[4%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.pli}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.it}
          </td>
          <td
            className="p-2 text-xs w-[5%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
          {data?.billDrawn?.hba}
          </td>
          <td
            className="p-2 text-xs w-[5%] border-2 border-black text-blue-500"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.total}
          </td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black text-blue-500"
            contentEditable="true"
          >
            {data?.billDrawn?.net}
          </td>
        </tr>

        <tr>
          <td
            className="p-2 text-xs w-[6%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.year}
          </td>
          <td
            className="p-2 text-xs w-[5.1%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.pay}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.pp}
          </td>
          <td
            className="p-2 text-xs w-[3%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.da}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.hra}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.cca}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.ma}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.spla}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.ha}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.wa}
          </td>
          <td
            className="p-2 text-xs w-[5%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.conv}
          </td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.bonus}
          </td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.others}
          </td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.gross}
          </td>
          <td
            className="p-2 text-xs w-[4%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.cps}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.spf}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.fbf}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.nhis}
          </td>
          <td
            className="p-2 text-xs w-[4%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.pli}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.it}
          </td>
          <td
            className="p-2 text-xs w-[5%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.hba}
          </td>
          <td
            className="p-2 text-xs w-[5%] border-2 border-black text-blue-500"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.total}
          </td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black text-blue-500"
            contentEditable="true"
          >
            {data?.billDrawn?.net}
          </td>
        </tr>

        <tr>
          <td
            className="p-2 text-xs w-[6%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.year}
          </td>
          <td
            className="p-2 text-xs w-[5.1%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.basic}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.pp}
          </td>
          <td
            className="p-2 text-xs w-[3%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.da}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.hra}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.cca}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.ma}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.spla}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.ha}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          > 
          {data?.billDrawn?.wa}
          </td>
          <td
            className="p-2 text-xs w-[5%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.conv}
          </td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.bonus}
          </td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.others}
          </td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.gross}
          </td>
          <td
            className="p-2 text-xs w-[4%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.cps}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.spf}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.fbf}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.nhis}
          </td>
          <td
            className="p-2 text-xs w-[4%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.pli}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
          {data?.billDrawn?.it}
          </td>
          <td
            className="p-2 text-xs w-[5%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.hba}
          </td>
          <td
            className="p-2 text-xs w-[5%] border-2 border-black text-blue-500"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.total}
          </td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black text-blue-500"
            contentEditable="true"
          >
            {data?.billDrawn?.net}
          </td>
        </tr>

        <tr>
          <td
            className="p-2 text-xs w-[6%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.year}
          </td>
          <td
            className="p-2 text-xs w-[5.1%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.pay}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.da}
          </td>
          <td
            className="p-2 text-xs w-[3%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.hra}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.cca}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.ma}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.spla}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.ha}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          >
          {data?.billDrawn?.wa}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.conv}
          </td>
          <td
            className="p-2 text-xs w-[5%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.bonus}
          </td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.others}
          </td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.gross}
          </td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.cps}
          </td>
          <td
            className="p-2 text-xs w-[4%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.spf}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.fbf}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.nhis}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.pli}
          </td>
          <td
            className="p-2 text-xs w-[4%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.it}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.hba}
          </td>
          <td
            className="p-2 text-xs w-[5%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.total}
          </td>
          <td
            className="p-2 text-xs w-[5%] border-2 border-black text-blue-500"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.net}
          </td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black text-blue-500"
            contentEditable="true"
          >
            {data?.billDrawn?.net}
          </td>
        </tr>
        <tr>
          <td
            className="p-2 text-xs w-[6%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.year}
          </td>
          <td
            className="p-2 text-xs w-[5.1%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.pay}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.pp}
          </td>
          <td
            className="p-2 text-xs w-[3%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.da}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.hra}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.cca}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.ma}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.spla}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.ha}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.wa}
          </td>
          <td
            className="p-2 text-xs w-[5%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.conv}
          </td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.bonus}
          </td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.others}
          </td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.gross}
          </td>
          <td
            className="p-2 text-xs w-[4%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.cps}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.spf}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.fbf}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.nhis}
          </td>
          <td
            className="p-2 text-xs w-[4%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.pli}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.it}
          </td>
          <td
            className="p-2 text-xs w-[5%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.hba}
          </td>
          <td
            className="p-2 text-xs w-[5%] border-2 border-black text-blue-500"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.total}
          </td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black text-blue-500"
            contentEditable="true"
          >
            {data?.billDrawn?.net}
          </td>
        </tr>
        <tr>
          <td
            className="p-2 text-xs w-[6%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.year}
          </td>
          <td
            className="p-2 text-xs w-[5.1%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.pay}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.pp}
          </td>
          <td
            className="p-2 text-xs w-[3%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.da}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.hra}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.cca}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.ma}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.spla}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.ha}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.wa}
          </td>
          <td
            className="p-2 text-xs w-[5%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.conv}
          </td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.bonus}
          </td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.others}
          </td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.gross}
          </td>
          <td
            className="p-2 text-xs w-[4%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.cps}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.spf}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.fbf}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.nhis}
          </td>
          <td
            className="p-2 text-xs w-[4%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.pli}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.it}
          </td>
          <td
            className="p-2 text-xs w-[5%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.hba}
          </td>
          <td
            className="p-2 text-xs w-[5%] border-2 border-black text-blue-500"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.total}
          </td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black text-blue-500"
            contentEditable="true"
          >
            {data?.billDrawn?.net}
          </td>
        </tr>
        <tr>
          <td
            className="p-2 text-xs w-[6%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.year}
          </td>
          <td
            className="p-2 text-xs w-[5.1%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.pay}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.pp}
          </td>
          <td
            className="p-2 text-xs w-[3%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.da}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.hra}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.cca}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.ma}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.spla}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.ha}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.wa}
          </td>
          <td
            className="p-2 text-xs w-[5%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.conv}
          </td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.bonus}
          </td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.others}
          </td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.gross}
          </td>
          <td
            className="p-2 text-xs w-[4%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.cps}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.spf}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.fbf}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.nhis}
          </td>
          <td
            className="p-2 text-xs w-[4%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.pi}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.it}
          </td>
          <td
            className="p-2 text-xs w-[5%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.hba}
          </td>
          <td
            className="p-2 text-xs w-[5%] border-2 border-black text-blue-500"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.total}
          </td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black text-blue-500"
            contentEditable="true"
          >
            {data?.billDrawn?.net}
          </td>
        </tr>
        <tr>
          <td
            className="p-2 text-xs w-[6%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.year}
          </td>
          <td
            className="p-2 text-xs w-[5.1%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.pay}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.pp}
          </td>
          <td
            className="p-2 text-xs w-[3%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.da}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.hra}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.cca}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.ma}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.spla}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.ha}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.wa}
          </td>
          <td
            className="p-2 text-xs w-[5%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.conv}
          </td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.bonus}
          </td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.others}
          </td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.gross}
          </td>
          <td
            className="p-2 text-xs w-[4%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.cps}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.spf}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.fbf}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.nhis}
          </td>
          <td
            className="p-2 text-xs w-[4%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.pli}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.it}
          </td>
          <td
            className="p-2 text-xs w-[5%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.hba}
          </td>
          <td
            className="p-2 text-xs w-[5%] border-2 border-black text-blue-500"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.total}
          </td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black text-blue-500"
            contentEditable="true"
          >
            {data?.billDrawn?.net}
          </td>
        </tr>
        <tr>
          <td
            className="p-2 text-xs w-[6%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.year}
          </td>
          <td
            className="p-2 text-xs w-[5.1%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.pay}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.pp}
          </td>
          <td
            className="p-2 text-xs w-[3%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.da}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.hra}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.cca}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.ma}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.spla}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.ha}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.wa}
          </td>
          <td
            className="p-2 text-xs w-[5%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.conv}
          </td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.bonus}
          </td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.others}
          </td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.gross}
          </td>
          <td
            className="p-2 text-xs w-[4%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.cps}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.spf}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.fbf}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.nhis}
          </td>
          <td
            className="p-2 text-xs w-[4%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.pli}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.it}
          </td>
          <td
            className="p-2 text-xs w-[5%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.hba}
          </td>
          <td
            className="p-2 text-xs w-[5%] border-2 border-black text-blue-500"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.total}
          </td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black text-blue-500"
            contentEditable="true"
          >
            {data?.billDrawn?.net}
          </td>
        </tr>
        <tr>
          <td
            className="p-2 text-xs w-[6%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.year}
          </td>
          <td
            className="p-2 text-xs w-[5.1%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.pay}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.pp}
          </td>
          <td
            className="p-2 text-xs w-[3%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.da}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.hra}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.cca}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.ma}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.spla}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.ha}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.wa}
          </td>
          <td
            className="p-2 text-xs w-[5%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.conv}
          </td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.bonus}
          </td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.others}
          </td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.gross}
          </td>
          <td
            className="p-2 text-xs w-[4%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.cps}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.spf}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.fbf}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.nhis}
          </td>
          <td
            className="p-2 text-xs w-[4%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.pli}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.it}
          </td>
          <td
            className="p-2 text-xs w-[5%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.hba}
          </td>
          <td
            className="p-2 text-xs w-[5%] border-2 border-black text-blue-500"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.total}
          </td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black text-blue-500"
            contentEditable="true"
          >
            {data?.billDrawn?.net}
          </td>
        </tr>
        <tr>
          <td
            className="p-2 text-xs w-[6%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.year}
          </td>
          <td
            className="p-2 text-xs w-[5.1%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.pay}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.pp}
          </td>
          <td
            className="p-2 text-xs w-[3%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.da}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.hra}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.cca}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.ma}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.spla}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          >
          {data?.billDrawn?.ha}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.wa}
          </td>
          <td
            className="p-2 text-xs w-[5%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.conv}
          </td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.bonus}
          </td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.others}
          </td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.gross}
          </td>
          <td
            className="p-2 text-xs w-[4%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
          {data?.billDrawn?.cps}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.spf}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.fbf}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.nhis}
          </td>
          <td
            className="p-2 text-xs w-[4%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.pli}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.it}
          </td>
          <td
            className="p-2 text-xs w-[5%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.hba}
          </td>
          <td
            className="p-2 text-xs w-[5%] border-2 border-black text-blue-500"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.total}
          </td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black text-blue-500"
            contentEditable="true"
          >
            {data?.billDrawn?.net}
          </td>
        </tr>
        <tr>
          <td
            className="p-2 text-xs w-[6%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.year}
          </td>
          <td
            className="p-2 text-xs w-[5.1%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.pay}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.pp}
          </td>
          <td
            className="p-2 text-xs w-[3%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.da}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.hra}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.cca}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.ma}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
          {data?.billDrawn?.spla}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          >
          {data?.billDrawn?.ha}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.wa}
          </td>
          <td
            className="p-2 text-xs w-[5%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.conv}
          </td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.bonus}
          </td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.others}
          </td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.gross}
          </td>
          <td
            className="p-2 text-xs w-[4%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.cps}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.spf}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.fbf}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.nhis}
          </td>
          <td
            className="p-2 text-xs w-[4%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.pli}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.it}
          </td>
          <td
            className="p-2 text-xs w-[5%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.hba}
          </td>
          <td
            className="p-2 text-xs w-[5%] border-2 border-black text-blue-500"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.total}
          </td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black text-blue-500"
            contentEditable="true"
          >
            {data?.billDrawn?.net}
          </td>
        </tr>
        <tr>
          <td
            className="p-2 text-xs w-[6%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.year}
          </td>
          <td
            className="p-2 text-xs w-[5.1%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.pay}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.pp}
          </td>
          <td
            className="p-2 text-xs w-[3%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.da}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.hra}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.cca}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.ma}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.spla}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.ha}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.wa}
          </td>
          <td
            className="p-2 text-xs w-[5%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.conv}
          </td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.bonus}
          </td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.others}
          </td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.gross}
          </td>
          <td
            className="p-2 text-xs w-[4%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.cps}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.spf}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.fbf}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.nhis}
          </td>
          <td
            className="p-2 text-xs w-[4%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.pli}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.it}
          </td>
          <td
            className="p-2 text-xs w-[5%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.hba}
          </td>
          <td
            className="p-2 text-xs w-[5%] border-2 border-black text-blue-500"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.total}
          </td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black text-blue-500"
            contentEditable="true"
          >
            {data?.billDrawn?.net}
          </td>
        </tr>
        <tr>
          <td
            className="p-2 text-xs w-[6%] border-2 border-black"
            contentEditable="true"
          ></td>
          <td
            className="p-2 text-xs w-[5.1%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          ></td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          ></td>
          <td
            className="p-2 text-xs w-[3%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          ></td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          ></td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          ></td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          ></td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          ></td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          ></td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          ></td>
          <td
            className="p-2 text-xs w-[5%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          ></td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          ></td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          ></td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.gross}
          </td>
          <td
            className="p-2 text-xs w-[4%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.cps}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          ></td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          ></td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          ></td>
          <td
            className="p-2 text-xs w-[4%] border-2 border-black"
            contentEditable="true"
          ></td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          ></td>
          <td
            className="p-2 text-xs w-[5%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          ></td>
          <td
            className="p-2 text-xs w-[5%] border-2 border-black text-blue-500"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.gross}
          </td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black text-blue-500"
            contentEditable="true"
          >
            {data?.billDrawn?.cps}
          </td>
        </tr>
        <tr>
          <td
            className="p-2 text-xs w-[6%] border-2 border-black"
            contentEditable="true"
          ></td>
          <td
            className="p-2 text-xs w-[5.1%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          ></td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          ></td>
          <td
            className="p-2 text-xs w-[3%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          ></td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          ></td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          ></td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          ></td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          ></td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          ></td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          ></td>
          <td
            className="p-2 text-xs w-[5%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          ></td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          ></td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          ></td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.gross}
          </td>
          <td
            className="p-2 text-xs w-[4%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.cps}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          ></td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          ></td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          ></td>
          <td
            className="p-2 text-xs w-[4%] border-2 border-black"
            contentEditable="true"
          ></td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          ></td>
          <td
            className="p-2 text-xs w-[5%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          ></td>
          <td
            className="p-2 text-xs w-[5%] border-2 border-black text-blue-500"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.total}
          </td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black text-blue-500"
            contentEditable="true"
          >
            {data?.billDrawn?.net}
          </td>
        </tr>
        <tr>
          <td
            className="p-2 text-xs w-[6%] border-2 border-black"
            contentEditable="true"
          ></td>
          <td
            className="p-2 text-xs w-[5.1%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          ></td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          ></td>
          <td
            className="p-2 text-xs w-[3%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          ></td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          ></td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          ></td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          ></td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          ></td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          ></td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          ></td>
          <td
            className="p-2 text-xs w-[5%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          ></td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          ></td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          ></td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black"
            contentEditable="true"
          >
            {data?.billDrawn?.gross}
          </td>
          <td
            className="p-2 text-xs w-[4%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            {data?.billDrawn?.cps}
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          ></td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          ></td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          ></td>
          <td
            className="p-2 text-xs w-[4%] border-2 border-black"
            contentEditable="true"
          ></td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          ></td>
          <td
            className="p-2 text-xs w-[5%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          ></td>
          <td
            className="p-2 text-xs w-[5%] border-2 border-black text-blue-500"
            contentEditable="true"
            id="cell-1-3"
          >
            {data?.billDrawn?.total}
          </td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black text-blue-500"
            contentEditable="true"
          >
            {data?.billDrawn?.net}
          </td>
        </tr>
        <tr className="font-bold">
          <td
            className="p-2 text-sm w-[6%] border-2 border-black"
            contentEditable="true"
          >
            Grand Total{" "}
          </td>
          <td
            className="p-2 text-xs w-[5.1%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            44000
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            0
          </td>
          <td
            className="p-2 text-xs w-[3%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            16720
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          >
            2600
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            0
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            300
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          ></td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          >
            0
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          ></td>
          <td
            className="p-2 text-xs w-[5%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            0
          </td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          ></td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          ></td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black"
            contentEditable="true"
          >
            63620
          </td>
          <td
            className="p-2 text-xs w-[4%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          >
            6072
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            70
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          >
            110
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
          >
            300
          </td>
          <td
            className="p-2 text-xs w-[4%] border-2 border-black"
            contentEditable="true"
          >
            1303
          </td>
          <td
            className="p-2 text-xs w-[3.9%] border-2 border-black"
            contentEditable="true"
            id="cell-1-2"
          ></td>
          <td
            className="p-2 text-xs w-[5%] border-2 border-black"
            contentEditable="true"
            id="cell-1-3"
          ></td>
          <td
            className="p-2 text-xs w-[5%] border-2 border-black text-blue-500"
            contentEditable="true"
            id="cell-1-3"
          >
            7855
          </td>
          <td
            className="p-2 text-xs w-[4.8%] border-2 border-black text-blue-500"
            contentEditable="true"
          >
            55765
          </td>
        </tr>
      </div>
    </table>
  );
};
export default TableBill;
