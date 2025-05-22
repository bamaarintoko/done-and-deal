'use client'
import { useDispatch, useSelector } from "react-redux";
import ArrowRightToBracket from "./icons/arrow-right-to-bracket";
import CartSolid from "./icons/cart-solid";
import { RootState } from "@/lib/store/store";
import { useEffect } from "react";
import Link from "next/link";
import { clearUser } from "@/lib/store/slice/sliceAuth";
import { clearCart } from "@/lib/store/slice/sliceCart";
import { clearTask } from "@/lib/store/slice/sliceTask";

interface ShopHeaderProps {
    title: string;
}

export default function ShopHeader({ title = "title" }: ShopHeaderProps) {
    const carts = useSelector((state: RootState) => state.sliceCart.data)
    const dispatch = useDispatch()
    useEffect(() => {
        console.log("carts : ", carts.length)
    }, [carts])

    const handleLogOut = () => {
        dispatch(clearUser())
        dispatch(clearCart())
        dispatch(clearTask())
    }
    return (
        <div className=" h-16 bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-screen-xl mx-auto p-4 flex">
                <div className="flex-1">
                    <Link href={"/"}>
                        {title}
                    </Link>
                </div>
                <div className="flex space-x-2">
                    <Link href={'shop/cart'}>
                        <div className="cursor-pointer relative">
                            {
                                carts.length > 0
                                &&
                                <div className="absolute bg-red-500 h-4 w-4 rounded-full flex items-center justify-center -right-1 -top-1">
                                    <p className="text-[10px] text-white">{carts.length}</p>
                                </div>
                            }

                            <CartSolid />
                        </div>
                    </Link>
                    <div onClick={()=>handleLogOut()} className="cursor-pointer">

                        <ArrowRightToBracket />
                    </div>
                </div>
            </div>
        </div>
    )
}