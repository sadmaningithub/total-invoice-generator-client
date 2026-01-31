import { useState } from "react"


export default function InvoiceForm() {

  const [inputFields, setInputFields] = useState([
    { item: '', quantity: '', unitPrice: '' },
    // { item: '', quantity: '', unitPrice: '', amount: '' }
  ])

  const [discount, setDiscount] = useState(0)

  const handleAddField = () => {
    const newField = { item: '', quantity: '', unitPrice: ''};
    setInputFields([...inputFields, newField])
  }

  const handleRemoveField = (index) => {
    if (index === 0) {
      console.log('index is 0 so process ending here.');
      return
    }
    console.log('not yet 0');
    // console.log(index);
    const data = [...inputFields];
    data.splice(index, 1)
    // // console.log(data);
    // // console.log(result);
    setInputFields(data)
  }

  const handleItems = (index, event) => {
    // console.log(event.target.name);
    // console.log(event.target.value);
    // console.log(index, event);
    const data = [...inputFields];
    // console.log(data[1]);
    // // console.log(prevData);
    data[index][event.target.name] = event.target.value;
    // console.log(data);
    // data[index]['amount'] = data[index]['quantity'] * data[index]['unitPrice']

    // setTotal([...total, data[index]['amount']])
    // console.log(total);
    // console.log(data);
    setInputFields(data)
    // const quantity = Data.quantity;
    // console.log(Data);
    // console.log(quantity.quantity);
    // console.log(inputFields[0].item);
  }

  const handleItemsSubmit = (e) => {
    e.preventDefault();
    console.log(inputFields);
    const form = e.target;
    const invoiceData = {
      companyDetails: {
        name: form.companyName.value,
        number: form.companyContact.value,
        address: form.companyAddress.value,
        mail: form.companyMail.value,
      },
      clientDetails: {
        name: form.clientName.value,
        number: form.clientContact.value,
        address: form.clientAddress.value,
        mail: form.clientMail.value,
      },
      invoiceDetails: {
        invoice: form.invoiceNumber.value,
        currency: form.currency.value,
        issueDate: form.issueDate.value,
        dueDate: form.dueDate.value,
      },
      itemDetails: inputFields.map(item => ({
        item: item.item,
        quantity: parseFloat(item.quantity),
        unitPrice: parseFloat(item.unitPrice),
        amount: item.quantity * item.unitPrice
      })),
      payment: {
        subtotal,
        discount,
        total: result
      }
    }
    console.log(invoiceData);
  }

  const handleDiscount = (e) => {
    const discountNum = parseFloat(e.target.value);
    console.log(discount);
    setDiscount(discountNum)
    // total = 55
  }

  const subtotal = inputFields.reduce((sum, currentItem) => {
    return sum + (currentItem.quantity * currentItem.unitPrice);
  }, 0)

  // setTotal(calTotal)

  console.log(subtotal);

  const result = subtotal - ((subtotal * discount) / 100)
  console.log(result);



  return (
    <div className="min-h-screen bg-base-200 p-5">

      <form onSubmit={handleItemsSubmit} className=" md:max-w-1/2 mx-auto bg-white shadow-xs rounded-lg border border-gray-200 p-5 ">

        {/* company details */}

        <div className="mb-5">

          <h1 className="text-xl font-medium mb-5">Company Details</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-gray-700 ">

            <div className="flex flex-col">
              <label> Name</label>
              <input className="input w-full bg-base-200" name="companyName" placeholder="Name" type="text" />
            </div>

            <div className="flex flex-col">
              <label>Phone Number</label>
              <input className="input w-full bg-base-200" name="companyContact" placeholder="Name" type="text" />
            </div>

            <div className="flex flex-col">
              <label>Address</label>
              <input className="input w-full bg-base-200" name="companyAddress" placeholder="Name" type="text" />
            </div>

            <div className="flex flex-col">
              <label>Mail</label>
              <input className="input w-full bg-base-200" name="companyMail" placeholder="Name" type="email" />
            </div>
          </div>
        </div>
        {/* client details */}
        <div className="mb-5 ">

          <h1 className="text-xl font-medium mb-5">Client Details</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-gray-700 ">

            <div className="flex flex-col">
              <label>Name</label>
              <input className="input w-full" name="clientName" type="text" />
            </div>

            <div className="flex flex-col">
              <label>Phone Number</label>
              <input className="input w-full" name="clientContact" type="text" />
            </div>

            <div className="flex flex-col">
              <label>Address</label>
              <input className="input w-full" name="clientAddress" type="text" />
            </div>

            <div className="flex flex-col">
              <label>Mail</label>
              <input className="input w-full" name="clientMail" type="text" />
            </div>
          </div>
        </div>
        {/* invoice details */}
        <div className="mb-5">

          <h1 className="text-xl font-medium mb-5">Invoice Details</h1>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 text-gray-700">

            <div className="flex flex-col gap-3">
              <label className=""> Invoice Number</label>
              <input className="input w-full bg-base-200" name="invoiceNumber" placeholder="Name" type="text" />
            </div>

            <div className="flex flex-col gap-3">
              <label>Currency</label>
              <select defaultValue="Choose currency" name="currency" className="select w-full bg-base-200">
                <option disabled={true}>Choose currency</option>
                <option>BDT</option>
                <option>USD</option>
                <option>CAD</option>
              </select>
            </div>

            <div className="flex flex-col gap-3">
              <label>Issued Date</label>
              <input className="input w-full bg-base-200" name="issueDate" type="date" />
            </div>

            <div className="flex flex-col gap-3">
              <label>Due date</label>
              <input className="input w-full bg-base-200" name="dueDate" type="date" />
            </div>
          </div>
        </div>
        {/* product details */}

        <div>
          <h1 className="text-xl font-medium mb-5">Product Details</h1>
          {
            inputFields.map((input, index) => {

              const amount = input.quantity * input.unitPrice;

              return (<div key={index} className="grid grid-cols-1 md:grid-cols-6 gap-5 mb-5 text-gray-700 border border-red-300">

                <div className="flex flex-col md:col-span-2">
                  <label> Item</label>
                  <input className="input w-full bg-base-200" onChange={(event) => handleItems(index, event)} placeholder="item" name="item" type="text" />
                </div>

                <div className="flex flex-col">
                  <label>Quantity</label>
                  <input className="input w-full bg-base-200" onChange={(event) => handleItems(index, event)} placeholder="quantity" name="quantity" type="text" />
                </div>

                <div className="flex flex-col">
                  <label>Unit Price</label>
                  <input className="input w-full bg-base-200" onChange={(event) => handleItems(index, event)} placeholder="unit price" name="unitPrice" type="text" />
                </div>

                <div className="flex flex-col">
                  <label>Amount</label>
                  <input className="input w-full bg-base-200" name="amount" value={amount} readOnly type="number" />
                </div>
                <div className="flex flex-col justify-end  ">
                  <button onClick={() => handleRemoveField(index)} className="btn">Remove</button>
                </div>
              </div>
              )
            })
          }

          <button onClick={handleAddField} className="btn mb-5" type="button">Add </button>
        </div>

        {/* {
          inputFields.map((input, index) => <div key={index}>{total}</div>)
        } */}

        <div className="mb-5 flex flex-row justify-end">
          <div className="flex flex-col gap-5">
            <div className="flex flex-row items-center gap-2">
              <label htmlFor="">Subtotal</label>
              <input className="input" value={subtotal} readOnly name="subtotal" type="number" />
            </div>
            <div className="flex flex-row items-center gap-2">
              <label htmlFor="">Discount</label>
              <input onChange={handleDiscount} className="input" name="total" type="number" />
            </div>
            <div className="flex flex-row items-center gap-2">
              <label htmlFor="">Total</label>
              <input className="input" value={result} readOnly name="total" type="number" />
            </div>
          </div>
        </div>

        <input className="btn" type="submit" value="Submit" />
      </form>
    </div>
  )
}
