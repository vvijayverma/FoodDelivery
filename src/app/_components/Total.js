import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const Total = () => {
  const router = useRouter();
  const { cart } = useSelector((state) => state.cart);
  const { userData } = useSelector((state) => state?.auth);

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };

  const OrderNow =()=>{
    if (userData?._id) {
       router.push('/order')
    }else{
      router.push('/user-auth?order=true')
    }
  }

  function roundToDecimal(num, decimalPlaces) {
    const factor = Math.pow(10, decimalPlaces);
    return Math.round(num * factor) / factor;
  }
  return (
    <div className="shadow-2xl h-80  m-4 rounded-md">
      <div className="flex gap-20 justify-center items-center font-bold bg-white h-52 rounded">
        <div className="flex gap-4 flex-col">
          <span>Food Charges :</span>
          <span>Tax Amount :</span>
          <span>Delivery Charge :</span>
          <span>Total Amount :</span>
        </div>
        <div className="flex gap-4 flex-col">
          <span>Rs{getTotal().totalPrice}</span>
          <span>Rs{roundToDecimal((getTotal().totalPrice / 100) * 10, 2)}</span>
          <span>Rs{50}</span>
          <span>
            Rs{getTotal().totalPrice + (getTotal().totalPrice / 100) * 10 + 50}
          </span>
        </div>
      </div>
      <div className="flex justify-center">
        <button onClick={()=>OrderNow()} className="font-bold bg-green-500 px-24 py-4 rounded">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Total;
