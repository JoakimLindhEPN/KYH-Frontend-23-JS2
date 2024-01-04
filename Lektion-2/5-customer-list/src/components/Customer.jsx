export const Customer = ({ customer, onDeleteCustomer }) => {
  return (
    <tr>
      <td>{customer.id.slice(0, 5)}</td>
      <td>{customer.name}</td>
      <td className="text-end">
        <button onClick={() => onDeleteCustomer(customer.id)} className="btn btn-danger btn-sm">Remove Customer</button>
      </td>
    </tr>
  )
}