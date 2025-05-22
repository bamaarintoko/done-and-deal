
'use client'
import ShopHeader from "@/components/ShopHeader";
import withAuth from "@/hoc/withAuth";
import { Product } from "@/lib/interface";
import { RootState } from "@/lib/store/store";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function PageProduct() {
    const products = useSelector((state: RootState) => state.sliceProducts.data)
    // const router = useRouter();
    const { id } = useParams();

    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        if (id) {
            const found = products.find((p) => p.id === id);
            setProduct(found || null);
        }
    }, [id]);

    useEffect(() => {
        console.log("product : ", product)
    }, [product])

    if (!product) {
        return (
            <div className="max-w-screen-md mx-auto p-6 text-center">
                <h1 className="text-2xl font-bold mb-4">Produk tidak ditemukan</h1>
                <p className="text-gray-500">Coba kembali ke halaman utama.</p>
            </div>
        );
    }

    return (
        <div className="w-full ">
            <ShopHeader title="Products" />
            <div className="max-w-screen-xl mx-auto p-4 ">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded mb-6" />
                <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                <p className="text-xl text-green-600 font-semibold mb-4">Rp {product.price.toLocaleString('id-ID')}</p>
                <p className="text-gray-700 mb-6">{product.description}</p>
                <p className="text-sm text-gray-400">Ditambahkan pada: {new Date(product.createAt).toLocaleString('id-ID')}</p>
            </div>

        </div>
    )
}

export default withAuth(PageProduct)