import { Table, Button, Card } from "antd";
import { useAppSelector } from "../../Redux/hook";
import {
  addToOrderedList,
  getCart,
} from "../../Redux/Features/Orders/cartSlice";
import { useCreateOrderMutation } from "../../Redux/Features/Orders/Order.api";
import { useDispatch } from "react-redux";
import { ICartModal } from "../../Types/global";

const CheckoutPage: React.FC = () => {
  const { items } = useAppSelector(getCart);
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const [createOrder] = useCreateOrderMutation(undefined);

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
      dataIndex: "totalPrice",
      key: "price",
      render: (_item: string, record: ICartModal) =>
        `$${Number(record.totalPrice) / Number(record.quantity)}`,
    },
    {
      title: "Total",
      key: "total",
      render: (item: ICartModal) => `$${item.totalPrice}`,
    },
  ];

  const handleCheckout = async () => {
    // router.push("/checkout-success");
    let productData = {};
    productData = items.map((item) => ({
      productId: item.productId,
      quantity: item.quantity,
    }));
    const data = {
      products: productData,
    };
    console.log(data);
    const result = await createOrder(data);
    if (result?.data) {
      // console.log(result?.data?.data);
      const redirectUrl = result?.data?.data;
      const url = new URL(redirectUrl);
      const orderId = url.searchParams.get("order_id");
      console.log(orderId);
      dispatch(addToOrderedList(orderId));
      window.open(redirectUrl, "_blank");
    }
  };

  return (
    <div className="p-6 flex justify-center">
      <Card className="w-full max-w-4xl shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Checkout</h1>
        <Table
          dataSource={items}
          columns={columns}
          rowKey="id"
          pagination={false}
        />
        <div className="flex justify-between items-center mt-6 border-t pt-4">
          <h2 className="text-xl font-semibold">
            Total: ${totalPrice.toFixed(2)}
          </h2>
          <Button className="custom-btn" size="large" onClick={handleCheckout}>
            Order Now
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default CheckoutPage;
