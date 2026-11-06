const OrderStatus = ({ orderId, status }) => {
  return (
    <p>
      <strong>Заказ #{orderId}:</strong> {status}
    </p>
  );
};

export default OrderStatus;