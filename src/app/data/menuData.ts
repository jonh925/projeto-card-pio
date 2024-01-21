export interface MenuItemType {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  category: 'hamburgers' | 'salads' | 'main_dishes' | 'appetizers';
}

const HAMBURGERS = 'hamburgers';
const SALADS = 'salads';
const MAIN_DISHES = 'main_dishes';
const APPETIZERS = 'appetizers';

const menuData: MenuItemType[] = [
  {
    id: 101,
    name: 'Hamburger 1',
    description: 'Description of Hamburger 1',
    image: 'https://img.freepik.com/fotos-gratis/cheeseburguer-grelhado-com-tomate-cebola-e-fritas-gerado-por-ia_188544-43039.jpg',
    price: 10.99,
    category: HAMBURGERS,
  },
  {
    id: 102,
    name: 'Hamburger 2',
    description: 'Description of Hamburger 2',
    image: 'https://img.freepik.com/fotos-gratis/um-hamburguer-com-um-copo-de-agua-ao-lado_188544-12233.jpg?w=1060&t=st=1705682841~exp=1705683441~hmac=7e0d070b6065a8d9880686e1a5f10d7c81943d71cfc745c4f87b3a77ca473359',
    price: 12.99,
    category:HAMBURGERS,
  },
  {
    id: 201,
    name: 'Salad 1',
    description: 'Description of Salad 1',
    image: 'https://images3.alphacoders.com/280/280069.jpg',
    price: 8.99,
    category:SALADS,
  },
  {
    id: 202,
    name: 'Salad 2',
    description: 'Description of Salad 2',
    image: 'https://example.com/images/salad2.jpg',
    price: 9.99,
    category:SALADS,
  },
  {
    id: 301,
    name: 'Main Dish 1',
    description: 'Description of Main Dish 1',
    image: 'https://th.bing.com/th/id/R.db1a71ff1e8aaf9b6073b50e36047cfc?rik=PAhoLnY5XS8c8Q&pid=ImgRaw&r=0',
    price: 15.99,
    category: MAIN_DISHES,
  },
  {
    id: 302,
    name: 'Main Dish 2',
    description: 'Description of Main Dish 2',
    image: 'https://th.bing.com/th/id/R.db1a71ff1e8aaf9b6073b50e36047cfc?rik=PAhoLnY5XS8c8Q&pid=ImgRaw&r=0',
    price: 17.99,
    category: MAIN_DISHES,
  },
  {
    id: 401,
    name: 'Appetizer 1',
    description: 'Description of Appetizer 1',
    image: 'https://img.freepik.com/fotos-gratis/carne-grelhada-e-legumes-na-placa-gourmet-generative-ai_188544-8030.jpg?w=996&t=st=1705682939~exp=1705683539~hmac=f384eb178dae3fe35d808095d95fedc68104ba3ee8772f11be8ed6abc617446b',
    price: 6.99,
    category:APPETIZERS,
  },
  {
    id: 402,
    name: 'Appetizer 2',
    description: 'Description of Appetizer 2',
    image: 'https://images3.alphacoders.com/280/280069.jpg',
    price: 8.99,
    category:APPETIZERS,
  },
  // Add more items as needed
];

export default menuData;
