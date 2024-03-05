import DataTable from 'react-data-table-component';
import data from '../../utils/data.json'; 


const TableBill = () => {
  const columns = [ 
    {
      name: 'Month / Year',
      selector: 'my'
    },
    {
      name: 'BASIC PAY',
      selector: 'bpay'
    },
   
    {
      name: 'PP',
      selector: 'column3'
    },
    {
      name: 'DA',
      selector: 'column4'
    },
    {
      name: 'HRA',
      selector: 'col5'
    },
    {
      name: 'CCA',
      selector: 'col6'
    },
    {
      name: 'MA',
      selector: 'col7'
    },
    {
      name: 'SPLA',
      selector: 'col8'
    },
    {
      name: 'HA',
      selector: 'col9'
    },
    {
      name: 'WA',
      selector: 'col10'
    },
    {
      name: 'Conve. Allow.',
      selector: 'col11'
    },
    {
      name: 'Bonus',
      selector: 'col12'
    },
    {
      name: 'Others',
      selector: 'col13'
    },
    {
      name: 'Gross',
      selector: 'col14'
    },
    {
      name: 'CPS',
      selector: 'col15'
    },
    {
      name: 'SPF',
      selector: 'col16'
    },
    {
      name: 'FBF',
      selector: 'col17'
    },
    {
      name: 'NHIS',
      selector: 'col18'
    },
    {
      name: 'LIC/PLI',
      selector: 'col19'
    },
    {
      name: 'IT + Cess',
      selector: 'col20'
    },
    {
      name: 'HBA / Others',
      selector: 'col21'
    },
    {
      name: 'Total Dedn.',
      selector: 'col22'
    },
    {
      name: 'NET',
      selector: 'last23'
    }
    
   
  ];

 
  columns.forEach(column => {
    column.cell = row => <div className="cell-container">{row[column.selector]}</div>;
  });

  console.log('Columns:', columns); 
  console.log('Data:', data); 

  const customStyles = {
    cells: {
      style: {
        padding: '6px',
        border: '1px solid black',
        backgroundColor: 'white',
        color: 'black', 
        textAlign: 'center',
      },
    },
  };

  return (
    <div className='container mt-5'>
      <DataTable
        columns={columns}
        data={data}
        customStyles={customStyles}
      />
    </div>
  );
};

export default TableBill;
