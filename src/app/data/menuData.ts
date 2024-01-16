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
    image: 'https://example.com/images/hamburger1.jpg',
    price: 10.99,
    category: HAMBURGERS,
  },
  {
    id: 102,
    name: 'Hamburger 2',
    description: 'Description of Hamburger 2',
    image: 'https://example.com/images/hamburger2.jpg',
    price: 12.99,
    category:HAMBURGERS,
  },
  {
    id: 201,
    name: 'Salad 1',
    description: 'Description of Salad 1',
    image: 'https://example.com/images/salad1.jpg',
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
    image: 'https://example.com/images/maindish1.jpg',
    price: 15.99,
    category: MAIN_DISHES,
  },
  {
    id: 302,
    name: 'Main Dish 2',
    description: 'Description of Main Dish 2',
    image: 'https://example.com/images/maindish2.jpg',
    price: 17.99,
    category: MAIN_DISHES,
  },
  {
    id: 401,
    name: 'Appetizer 1',
    description: 'Description of Appetizer 1',
    image: 'https://example.com/images/appetizer1.jpg',
    price: 6.99,
    category:APPETIZERS,
  },
  {
    id: 402,
    name: 'Appetizer 2',
    description: 'Description of Appetizer 2',
    image: 'https://example.com/images/appetizer2.jpg',
    price: 8.99,
    category:APPETIZERS,
  },
  // Add more items as needed
];

export default menuData;
