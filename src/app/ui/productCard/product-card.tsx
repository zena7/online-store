interface ProductCardProps {
  id: number;
  title: string;
  description: string;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string[];
  images: string[];
}

export function productCard(props: ProductCardProps) {
  return <></>;
}
