import { useRouteError } from "react-router-dom"

function ShopError() {

  const error = useRouteError()
  return (
    <div>
      <h1>Error - { error.response.status }</h1>
      <p>{error.message}</p>
    </div>
  )
}
export default ShopError