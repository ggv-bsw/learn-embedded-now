import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/ui/navigation";
import {
  ShoppingCart,
  Star,
  ArrowLeft,
  Check,
  Package,
  Shield,
  Truck,
  Loader2,
} from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { supabase } from "@/integrations/supabase/client";
import { toast as sonnerToast } from "sonner";
import STMImage from "@/assets/STM1.png";
import arduinoImage from "@/assets/arduino1.png";

interface DevelopmentBoard {
  id: string;
  name: string;
  image: string;
  description: string;
  price: number;
  original_price: number | null;
  rating: number;
  reviews: number;
  in_stock: boolean;
  specifications: string[];
  features: string[];
  full_description?: string;
  applications?: string[];
  package_includes?: string[];
  name_ro?: string;
  name_ru?: string;
  description_ro?: string;
  description_ru?: string;
  specifications_ro?: string[];
  specifications_ru?: string[];
  features_ro?: string[];
  features_ru?: string[];
  full_description_ro?: string;
  full_description_ru?: string;
  applications_ro?: string[];
  applications_ru?: string[];
  package_includes_ro?: string[];
  package_includes_ru?: string[];
}

const HardwareDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toast } = useToast();
  const { t, language } = useLanguage();
  const [product, setProduct] = useState<DevelopmentBoard | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProduct();
  }, [productId]);

  const fetchProduct = async () => {
    if (!productId) return;

    try {
      const { data, error } = await supabase
        .from("development_boards")
        .select("*")
        .eq("id", productId)
        .single();

      if (error) throw error;

      // Map image path to imported image
      const productWithImage = {
        ...data,
        image: data.id === "dino-dev-stm32" ? STMImage : arduinoImage,
      };

      setProduct(productWithImage);
    } catch (error) {
      console.error("Error fetching product:", error);
      sonnerToast.error("Failed to load product");
    } finally {
      setLoading(false);
    }
  };

  const getTranslatedField = (field: 'name' | 'description' | 'specifications' | 'features' | 'full_description' | 'applications' | 'package_includes') => {
    if (!product) return '';
    if (language === 'ro' && product[`${field}_ro`]) {
      return product[`${field}_ro`];
    }
    if (language === 'ru' && product[`${field}_ru`]) {
      return product[`${field}_ru`];
    }
    return product[field];
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-blue-400 animate-spin" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-slate-900 text-white">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <Button onClick={() => navigate("/hardware")} variant="outline">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Hardware
          </Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!product) return;
    const translatedName = getTranslatedField('name') as string;
    addToCart({
      id: product.id,
      name: translatedName,
      price: product.price,
      image: product.image,
    });
    toast({
      title: t('hardware.addedToCart', 'Added to cart'),
      description: `${translatedName} ${t('hardware.addedDescription', 'has been added to your cart.')}`,
    });
  };

  return (
    <div className="min-h-screen bg-slate-900 font-inter text-white">
      <Navigation />

      {/* Back Button */}
      <div className="container mx-auto px-4 pt-24 pb-8">
        <Button
          onClick={() => navigate("/hardware")}
          variant="outline"
          className="border-slate-600 text-slate-900 hover:bg-slate-800"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to Hardware
        </Button>
      </div>

      {/* Product Detail Section */}
      <section className="py-8 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Product Image */}
            <div className="space-y-6">
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="aspect-square w-full bg-white rounded-lg p-8 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4">
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-4 text-center">
                    <Shield className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-400">Quality Guaranteed</p>
                  </CardContent>
                </Card>
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-4 text-center">
                    <Truck className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-400">Fast Shipping</p>
                  </CardContent>
                </Card>
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-4 text-center">
                    <Package className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-400">Secure Packaging</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <Badge
                  className={`mb-4 ${
                    product.in_stock
                      ? "bg-green-500/20 text-green-400 border-green-500/30"
                      : "bg-red-500/20 text-red-400 border-red-500/30"
                  }`}
                >
                  {product.in_stock ? t('hardware.inStock', 'In Stock') : t('hardware.outOfStock', 'Out of Stock')}
                </Badge>

                <h1 className="text-4xl font-bold mb-4">{getTranslatedField('name')}</h1>

                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-white font-semibold ml-2">
                      {product.rating}
                    </span>
                    <span className="text-gray-400 ml-2">
                      ({product.reviews} reviews)
                    </span>
                  </div>
                </div>

                <p className="text-gray-300 text-lg mb-6">
                  {getTranslatedField('description')}
                </p>

                <div className="border-t border-b border-slate-700 py-6 mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center space-x-3">
                        <span className="text-4xl font-bold text-white">
                          ${product.price}
                        </span>
                          {product.original_price && (
                            <span className="text-2xl text-gray-500 line-through">
                              ${product.original_price}
                            </span>
                          )}
                      </div>
                      <p className="text-gray-400 mt-2">Including VAT</p>
                    </div>
                  </div>
                </div>

                <Button
                  size="lg"
                  className={`w-full ${
                    product.in_stock
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "bg-gray-600"
                  } text-white py-6 text-lg`}
                  disabled={!product.in_stock}
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  {product.in_stock ? t('hardware.addToCart', 'Add to Cart') : t('hardware.outOfStock', 'Out of Stock')}
                </Button>
              </div>
            </div>
          </div>

          {/* Detailed Information */}
          <div className="max-w-7xl mx-auto mt-16 space-y-8">
            {/* Full Description */}
            {(getTranslatedField('full_description') as string || "").length > 0 && (
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-300">
                    {t('hardware.detail.overview', 'Product Overview')}
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    {getTranslatedField('full_description')}
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Specifications */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-300">
                  {t('hardware.detail.specs', 'Technical Specifications')}
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {(getTranslatedField('specifications') as string[]).map((spec, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{spec}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-300">
                  {t('hardware.detail.features', 'Key Features')}
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {(getTranslatedField('features') as string[]).map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Applications */}
            {((getTranslatedField('applications') as string[])?.length ?? 0) > 0 && (
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-gray-300">
                    {t('hardware.detail.applications', 'Ideal Applications')}
                  </h2>
                  <div className="grid md:grid-cols-3 gap-4">
                    {(getTranslatedField('applications') as string[])!.map((app, index) => (
                      <Badge
                        key={index}
                        className="bg-purple-500/20 text-purple-400 border-purple-500/30 text-center py-2"
                      >
                        {app}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Package Contents */}
            {((getTranslatedField('package_includes') as string[])?.length ?? 0) > 0 && (
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-gray-300">
                    {t('hardware.detail.package', 'Package Includes')}
                  </h2>
                  <div className="space-y-3">
                    {(getTranslatedField('package_includes') as string[])!.map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Package className="w-5 h-5 text-blue-400" />
                        <span className="text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HardwareDetail;
