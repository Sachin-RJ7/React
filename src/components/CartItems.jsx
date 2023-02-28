import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../config";
import { removeItem } from "../utils/cartSlice";


const CartItems = ({
    name,
    description,
    cloudinaryImageId,
    price,
    isVeg,
    id,

}) => {

    const dispatch = useDispatch();
    
    const removeFromCart = (item) => {
        dispatch(removeItem(item));
    }


    return (
        <div className="mt-10 p-5 flex gap-x-8 bg-slate-200 rounded"> 
            <img src={IMG_CDN_URL + cloudinaryImageId} alt="food-img" className="w-72 rounded border-[1px] border-black border-solid" />
            <div>
                <h1 className="font-bold text-xl text-black">{name}</h1>
                <h2 className="mt-2 w-[640px] font-semibold text-lg text-[#172c66]">{description}</h2>
                <h4 className="mt-2 font-semibold text-[#172c66]">Rupees : {price / 100}
                </h4>
                <div className="flex justify-between">
                    {
                        isVeg 
                        ? (<div className="text-[#172c66] font-semibold">Veg</div>) 
                        : (<div className="text-[#172c66] font-semibold"> Veg</div>)
                    }
                    <div className="font-bold ">
                        <button type="button" className="p-2 text-sm rounded font-bold border-2 border-red-500 border-solid bg-red-300 text-black hover:bg-red-400 transition-all ease-in-out duration-200"
                          onClick={() => removeFromCart(id)}>
                            Remove Item
                          </button>
                    </div>
                </div>
            </div>
            
        </div>
     
    )
}

export default CartItems;