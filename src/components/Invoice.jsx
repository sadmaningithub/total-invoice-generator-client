

const Invoice = () => {


    return (
        <div className="min-h-screen bg-base-100 p-8">
            <div className=" md:max-w-1/2 mx-auto bg-white p-5 mb-5 shadow-xs rounded-xl border border-gray-100">

                <div className="flex flex-row justify-between items-center mb-5 p-5 border-b border-gray-100">
                    <div>
                        <h1>INVOICE</h1>
                        <p>INV-000001</p>
                    </div>
                    <div>
                        <h1>Company Name</h1>

                    </div>
                </div>

                <div className="flex flex-row justify-between items-center p-5">
                    <div>
                        <h3>Billed To</h3>
                        <p>Client Name</p>
                        <p>New York, USA</p>
                        <p>+12345678910</p>
                        <p>clientname@email.com</p>
                    </div>

                    <div>
                        <h3>Billed By</h3>
                        <p>Company Name</p>
                        <p>New York, USA</p>
                        <p>+12345678910</p>
                        <p>companyname@email.com</p>
                    </div>
                </div>

                {/* product table */}
                <table className="table-auto w-full mb-5">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-4 font-medium text-gray-900">Description</th>
                            <th className="px-6 py-4 font-medium text-gray-900">Quantity</th>
                            <th className="px-6 py-4 font-medium text-gray-900">Unit Price</th>
                            <th className="px-6 py-4 font-medium text-gray-900">Amount</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 border-t border-gray-100 ">
                        <tr>
                            <td className="px-6 py-4">Hosting</td>
                            <td className="px-6 py-4">1</td>
                            <td className="px-6 py-4">200</td>
                            <td className="px-6 py-4">200</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4">Subscription</td>
                            <td className="px-6 py-4">1</td>
                            <td className="px-6 py-4">600</td>
                            <td className="px-6 py-4">600</td>
                        </tr>
                    </tbody>
                </table>

                <div className="flex justify-end">
                    <div className="w-64">
                        <div className="flex justify-between mb-2">
                            <span>Subtotal:</span>
                            <span>$1,750.00</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span>Tax (10%):</span>
                            <span>$175.00</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg">
                            <span>Total:</span>
                            <span>$1,925.00</span>
                        </div>
                    </div>
                </div>

            </div>

            <div className="border text-center">
                <button className="btn">Download</button>
            </div>
        </div>
    );
};

export default Invoice;
