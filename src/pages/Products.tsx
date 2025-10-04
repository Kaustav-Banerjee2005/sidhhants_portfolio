import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

// Product data structure - easily extendable
const products = [
  {
    id: 1,
    name: "Data Science Fundamentals",
    type: "Book",
    description: "A comprehensive guide to data science, covering Python, SQL, and machine learning fundamentals for aspiring data analysts.",
    price: "$29.99",
    image: "/placeholder.svg",
    available: true,
  },
  // Add more products here in the future
];

const Products = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Products
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore resources and materials created by Siddhant Chopra
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="glass border-border/50 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <div className="aspect-[3/4] mb-4 rounded-md bg-muted/20 border border-border/30 flex items-center justify-center overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-xs text-primary font-semibold mb-2">
                  {product.type}
                </div>
                <CardTitle className="text-xl">{product.name}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">
                  {product.price}
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  disabled={!product.available}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  {product.available ? "Purchase" : "Out of Stock"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
