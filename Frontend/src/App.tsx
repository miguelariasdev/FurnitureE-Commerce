import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [products, setProducts] = useState<{name: string, price: number}[]>([]);

  useEffect(() => {
    fetch('https://localhost:5001/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])

  const addProduct = () => {
    setProducts(prevState => [...prevState,
    {
      name: 'product' + (prevState.length + 1),
      price: (prevState.length * 100) + 100
    }])
  }

  return (
    <div>
      <h1>FurniE-commerce</h1>
      <ul>
        {products.map(item => {
          return <li key={item.name}>{item.name} - {item.price}</li>
        })}
      </ul>
      <button onClick={addProduct}>Add Product</button>
    </div>
  )
}

export default App
