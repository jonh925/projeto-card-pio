'use client'
import { usePathname,useRouter } from 'next/navigation'
import CartPage from '../pages/cart';
import Menu from '../pages/menu';
import { Button } from '@nextui-org/react';
export default function Routes() {
  const pathname = usePathname()
  const router = useRouter();

  return (
    <div>
      <Button onClick={() => router.push('/menu')}>Go to Menu</Button>
      <Button onClick={() => router.push('/cart')}>Go to Cart</Button>

      {/* Display the current route content */}
      {pathname === '/menu' && <Menu />}
      {pathname === '/cart' && <CartPage />}
    </div>
  );
}
