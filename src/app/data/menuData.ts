export interface MenuItemType {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
  }
  
  const menuData: MenuItemType[] = [
    {
      id: 1,
      name: 'Prato 1',
      description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
      image: 'https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg',
      price: 10.99,
    },
    {
      id: 2,
      name: 'Prato 2',
      description: '"Lorem ipsum dolor sit amet, consectetur adipiscing e',
      image: 'https://www.foodiesfeed.com/wp-content/uploads/2023/10/bowl-of-ice-cream-with-chocolate.jpg',
      price: 12.99,
    },
    {
        id: 3,
        name: 'Prato 2',
        description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        image: 'https://www.foodiesfeed.com/wp-content/uploads/2023/10/bowl-of-ice-cream-with-chocolate.jpg',
        price: 12.99,
      },
      {
        id: 4,
        name: 'Prato 2',
        description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        image: 'https://www.foodiesfeed.com/wp-content/uploads/2023/10/bowl-of-ice-cream-with-chocolate.jpg',
        price: 12.99,
      },
    // Adicione mais itens conforme necessário
  ];
  
  export default menuData;
  