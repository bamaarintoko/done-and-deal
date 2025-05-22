'use client'
import ShopHeader from "@/components/ShopHeader";
import withAuth from "@/hoc/withAuth";
import { RootState } from "@/lib/store/store";
import { useSelector } from "react-redux";

function PageCart() {
    const cartItems = useSelector((state: RootState) => state.sliceCart.data);

    const total = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);

    const isEmpty = cartItems.length === 0;
    return (
        <div className="w-full ">
            <ShopHeader title="Keranjang Belanja" />
            <div className="max-w-screen-xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-4">
                    <h1 className="text-2xl font-bold mb-4">Keranjang Belanja</h1>
                    {isEmpty ? (
                        <div className="text-center text-gray-500 border border-dashed border-gray-300 p-8 rounded">
                            <p className="text-lg mb-2">Keranjang kamu kosong 😢</p>
                            <p className="text-sm">Yuk, tambahkan produk ke keranjangmu dulu.</p>
                        </div>
                    ) : (
                        cartItems.map((cart) => (
                            <div key={cart.item.id} className="flex items-center justify-between bg-white shadow p-4 rounded">
                                <div className="flex items-center gap-4">
                                    <img src={cart.item.image} alt={cart.item.name} className="w-20 h-20 object-cover rounded" />
                                    <div>
                                        <h2 className="font-semibold text-lg">{cart.item.name}</h2>
                                        <p className="text-sm text-gray-600">Qty: {cart.qty}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-gray-700 font-semibold">Rp {cart.totalPrice.toLocaleString('id-ID')}</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Summary */}
                <div className="bg-white shadow p-4 rounded h-fit">
                    <h2 className="text-xl font-bold mb-4">Ringkasan Belanja</h2>
                    <div className="flex justify-between mb-2">
                        <span>Total Item</span>
                        <span>{cartItems.length}</span>
                    </div>
                    <div className="flex justify-between font-semibold text-lg">
                        <span>Total Harga</span>
                        <span>Rp {total.toLocaleString('id-ID')}</span>
                    </div>
                    <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    )
}

export default withAuth(PageCart)
