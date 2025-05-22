import { Card, Button, Table } from "antd";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Redux/hook";
import { clearCart } from "../../Redux/Features/Orders/cartSlice";
import { motion } from "framer-motion";

const OrderConfirmation: React.FC = () => {
  const dispatch = useAppDispatch();
  dispatch(clearCart());
  const navigate = useNavigate();
  const items = useAppSelector((state) => state.cart.orderedItems);
  const orderId = useAppSelector((state) => state.cart.orderId);

  const totalPrice = items.reduce((sum, item) => sum + item.totalPrice, 0);

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image: string) => (
        <img src={image} alt="product" className="w-16 h-16 rounded-md" />
      ),
    },
    {
      title: "Item Name",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Price",
      key: "price",
      render: (_: any, record: any) =>
        `$${(record.totalPrice / record.quantity).toFixed(2)}`,
    },
    {
      title: "Total",
      key: "total",
      render: (_: any, record: any) => `$${record.totalPrice.toFixed(2)}`,
    },
  ];

  return (
    <div className="flex justify-center p-6">
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: [0, -10, 0], opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: "easeIn",
          repeat: 2,
          repeatType: "reverse",
        }}
      >
        <Card className="w-full max-w-3xl shadow-lg">
          {/* Animated Order Confirmation Text */}
          <motion.h1
            className="text-3xl font-bold text-center text-green-600 mb-4"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            🎉 Order Confirmed!
          </motion.h1>

          <p className="text-lg text-center mb-6">
            Thank you for your purchase! Your order has been successfully
            placed.
          </p>

          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <p className="text-lg font-semibold">📦 Order ID: {orderId}</p>
          </div>

          <Table
            dataSource={items}
            columns={columns}
            rowKey="id"
            pagination={false}
          />

          <div className="flex justify-between items-center mt-6 border-t pt-4">
            <h2 className="text-xl font-semibold">
              Total:{" "}
              <span className="text-green-600">${totalPrice.toFixed(2)}</span>
            </h2>
            <Button
              className="custom-btn"
              size="large"
              onClick={() => navigate("/")}
            >
              Back to Home
            </Button>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default OrderConfirmation;
