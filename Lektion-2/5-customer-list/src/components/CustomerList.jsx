import { Customer } from "./Customer"

export const CustomerList = ({customers, onDeleteCustomer}) => {



  return (
    <div className="mt-5">
      <p className="h2">My Customers</p>

      <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Customer Name</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    {
      customers.map(customer => <Customer onDeleteCustomer={onDeleteCustomer} key={customer.id} customer={customer} /> )
    }

  </tbody>
</table>
    </div>
  )
}