function App() {

  const order = {
    products: [
      {
        productId: '658af473d711cabe3c940462',
        quantity: 15
      }
    ]
  }

  const useFetch = async () => {
    const res = await fetch('https://js2-ecommerce-api.vercel.app/api/orders', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OGIyZDYxZWUxZjNiNWMwNjA1NzkyMCIsImlhdCI6MTcwNTk5NTY4OCwiZXhwIjoxNzA5NDUxNjg4fQ.2KBmFa9txlybmmzvaGhzCSjG-nkPbVKVxAbhuHLCLDQ'
      },
      body: JSON.stringify(order)
    })
    console.log(res)
    const data = await res.json()
    console.log(data)


  }
  return (
    <div>
      <button onClick={useFetch}>klicka här</button>
    </div>
  )
}
export default App