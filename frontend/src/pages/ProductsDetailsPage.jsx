import ProductDetails from "@/components/ProductsDetails/ProductDetails";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductsDetailsPage = () => {
  const {id: productId} = useParams()

  const [singleProduct, setSingleProduct] = useState(null)

  const apiUrl = import.meta.env.VITE_API_BASE_URL;


  
  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/products/${productId}`);

        if (!response.ok) {
          throw new Error('Verileri getirme hatası');
        }

        const data = await response.json();
        setSingleProduct(data, productId);
       
      } catch (error) {
        console.log('Veri hatası:', error);
      } 
    };
    fetchSingleProduct();
  }, [apiUrl, productId]);


  return (
    singleProduct ?   <ProductDetails singleProduct={singleProduct}/> : <p>Ürün Yükleniyor</p>
  );
};

export default ProductsDetailsPage;
