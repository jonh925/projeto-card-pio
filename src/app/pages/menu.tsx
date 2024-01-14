import { usePathname , useRouter } from 'next/navigation'
import MenuList from '../components/List';
import { MenuItemType } from '../components/MenuItem';
import Link from 'next/link';
import menuData from '../data/menuData';

export default function Menu() {
  const pathname = usePathname()
  const router = useRouter();
  

  const handleAddToCart = (item: MenuItemType): void => {
    // Implemente sua lógica para adicionar o item ao carrinho
    console.log(`Adicionado ao carrinho: ${item.name}`);
  };

  return (
    <div>
      <h2>Menu</h2>
      <MenuList menu={menuData} onAddToCart={handleAddToCart} />
      <Link href="/cart">Ver Carrinho</Link>
    </div>
  );
}
