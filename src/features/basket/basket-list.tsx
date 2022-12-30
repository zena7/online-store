interface BasketListProps {
  // products: (Product & { amount: number })[]
  children: React.ReactNode;
}

export const BasketList = ({ children }: BasketListProps) => {
  return <>{children}</>;
};
