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
} from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import {
  developmentBoards,
  DevelopmentBoard,
} from "@/testData/developmentBoards";

const HardwareDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toast } = useToast();

  const product: DevelopmentBoard | undefined = developmentBoards.find(
    (p) => p.id === productId
  );

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
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
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
                    product.inStock
                      ? "bg-green-500/20 text-green-400 border-green-500/30"
                      : "bg-red-500/20 text-red-400 border-red-500/30"
                  }`}
                >
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </Badge>

                <h1 className="text-4xl font-bold mb-4">{product.name}</h1>

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
                  {product.description}
                </p>

                <div className="border-t border-b border-slate-700 py-6 mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center space-x-3">
                        <span className="text-4xl font-bold text-white">
                          ${product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-2xl text-gray-500 line-through">
                            ${product.originalPrice}
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
                    product.inStock
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "bg-gray-600"
                  } text-white py-6 text-lg`}
                  disabled={!product.inStock}
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  {product.inStock ? "Add to Cart" : "Out of Stock"}
                </Button>
              </div>
            </div>
          </div>

          {/* Detailed Information */}
          <div className="max-w-7xl mx-auto mt-16 space-y-8">
            {/* Full Description */}
            {(product.fullDescription ?? "").length > 0 && (
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-300">
                    Product Overview
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    {product.fullDescription}
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Specifications */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-300">
                  Technical Specifications
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {product.specifications.map((spec, index) => (
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
                  Key Features
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Applications */}
            {(product.applications?.length ?? 0) > 0 && (
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-gray-300">
                    Ideal Applications
                  </h2>
                  <div className="grid md:grid-cols-3 gap-4">
                    {product.applications!.map((app, index) => (
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
            {(product.packageIncludes?.length ?? 0) > 0 && (
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-gray-300">
                    Package Includes
                  </h2>
                  <div className="space-y-3">
                    {product.packageIncludes!.map((item, index) => (
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
