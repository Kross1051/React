
import './App.css'
import Greeting from './components/Greeting';
import ShoppingList from './components/ShoppingList';
import { products, emptyList } from './utils/ProductsList';
import OrderStatus from './components/OrderStatus';
import { orders } from './utils/ProductInfo';

function App() {
  return (
    <>
    <div className="App">
      <Greeting name="Anry" />
    </div>

    <div className="App">
      <h1>Мои покупки</h1>
      
      <h3>Актуальный список:</h3>
      <ShoppingList items={products} />

      <h3>Пустой список (проверка):</h3>
      <ShoppingList items={emptyList} />
    </div>

    <div>
    <h2>Статусы заказов</h2>
      {orders.map((order) => (
        <OrderStatus 
          key={order.orderId} 
          orderId={order.orderId} 
          status={order.status} 
        />
      ))}
      </div>
    </>
  )
}

export default App
