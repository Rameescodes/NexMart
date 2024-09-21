import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const TransactionPage = () => {
  // Sample data for transactions and expenses
  const transactions = [
    {
      id: 1,
      type: 'Income',
      description: 'Salary',
      cardType: 'Visa',
      date: '2024-08-15',
      amount: 2500,
      receipt: 'receipt1.png',
    },
    {
      id: 2,
      type: 'Expense',
      description: 'Groceries',
      cardType: 'MasterCard',
      date: '2024-08-20',
      amount: 150,
      receipt: 'receipt2.png',
    },
    // Add more transactions as needed
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <div className="flex-1 p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Balance Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Balance</h3>
              <div className="text-3xl font-semibold text-purple-600">$5,000</div>
              <p className="text-gray-500">Cardholder: John Doe</p>
              <p className="text-gray-500">Card Type: Visa</p>
              <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
                Add Card
              </button>
            </div>

            {/* My Expenses */}
            <div className="bg-white rounded-lg shadow-md p-6 col-span-1 md:col-span-2">
              <h3 className="text-xl font-bold mb-4">My Expenses</h3>
              {/* Placeholder for graph */}
              <div className="h-48 bg-gray-200 rounded-lg mb-4">
                {/* Integrate your graph library here */}
              </div>
              <h4 className="text-lg font-semibold">August - January</h4>
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="bg-white rounded-lg shadow-md p-6 mt-6">
            <h3 className="text-xl font-bold mb-4">Recent Transactions</h3>
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2">Transaction ID</th>
                  <th className="p-2">Description</th>
                  <th className="p-2">Type</th>
                  <th className="p-2">Card Type</th>
                  <th className="p-2">Date</th>
                  <th className="p-2">Amount</th>
                  <th className="p-2">Receipt</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr key={transaction.id} className="border-b hover:bg-gray-100">
                    <td className="p-2">{transaction.id}</td>
                    <td className="p-2">{transaction.description}</td>
                    <td className="p-2">{transaction.type}</td>
                    <td className="p-2">{transaction.cardType}</td>
                    <td className="p-2">{transaction.date}</td>
                    <td className="p-2">${transaction.amount}</td>
                    <td className="p-2">
                      <img
                        src={transaction.receipt}
                        alt="Receipt"
                        className="h-10 w-10 object-cover rounded"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionPage;
