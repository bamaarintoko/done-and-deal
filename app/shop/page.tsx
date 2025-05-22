'use client'
import ShopHeader from "@/components/ShopHeader"
import withAuth from "@/hoc/withAuth"
import { Product } from "@/lib/interface"
import { addToCart } from "@/lib/store/slice/sliceCart"
import { RootState } from "@/lib/store/store"
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"

function PageProducts() {
    const products = useSelector((state: RootState) => state.sliceProducts.data)
    const dispatch = useDispatch()
    const handleAddToCart = (item: Product) => {
        dispatch(addToCart(item))
        console.log("item : ", item)
    }
    return (
        <div className="w-full ">
            <ShopHeader title="Products" />
            <div className="max-w-screen-xl mx-auto p-4 ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                    {products.map((product) => (
                        <Link href={`shop/product/${product.id}`} key={product.id} className="block">
                            <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
                                    <p className="text-sm text-gray-600 mb-1">
                                        <span className="font-semibold text-green-600">
                                            Rp {product.price.toLocaleString('id-ID')}
                                        </span>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                                    <p className="text-xs text-gray-400 mb-2">
                                        Ditambahkan: {new Date(product.createAt).toLocaleString('id-ID')}
                                    </p>
                                    <button onClick={(e) => {
                                        e.preventDefault(); // cegah klik link
                                        e.stopPropagation(); // cegah bubbling ke link
                                        handleAddToCart(product)
                                    }} type="button" className="w-full focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Add to cart</button>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default withAuth(PageProducts)