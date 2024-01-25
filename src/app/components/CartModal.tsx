// CartModal.tsx
import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useCart } from '../contexts/CartContext';
import { Button } from '@nextui-org/react';

interface CartModalProps {
  open: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ open, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const { cart, clearCart, removeItem } = useCart();

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  };

  // Função para calcular o total dos itens no carrinho
  const calculateTotal = () => {
    return cart.items.reduce((total, item) => total + item.price, 0);
  };

  return (
    <Transition show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={handleClose}
      >
        <div className="min-h-screen px-4 text-center">
          {/* ... (código anterior) */}
          
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block align-middle my-16 p-6 text-left bg-neutral-600 rounded-lg shadow-xl transform transition-all">
              <Dialog.Title className="text-lg font-medium leading-6 text-gray-200">
                Seu Carrinho
              </Dialog.Title>

              {/* Exibe os itens do carrinho usando o contexto */}
              {cart.items.map((cartItem) => (
                <div key={cartItem.id} className="flex justify-between items-center mb-2 p-2 bg-gray-800 text-white rounded">
                  <div>
                    {cartItem.name} - ${cartItem.price}
                  </div>
                  <button
                    className="text-red-500 hover:text-red-700 focus:outline-none"
                    onClick={() => {
                      // Chama a função para remover o item do carrinho pelo ID
                      removeItem(cartItem.id);
                    }}
                  >
                    <span className="sr-only">Remover</span>
                    <XMarkIcon className="w-6 h-6" />
                  </button>
                </div>
              ))}

              {/* Exibe o total dos itens no carrinho */}
              <div className="mt-4 text-lg font-semibold text-gray-200">
                Total: ${calculateTotal().toFixed(2)}
              </div>

              {/* Botão para finalizar a compra */}
              <div className='grid'>
              <Button
                className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none"
                onClick={() => {
                  // Lógica para finalizar a compra
                  // Pode incluir redirecionamento para uma página de checkout, etc.
                  console.log("Compra finalizada!");
                }}
              >
                Finalizar Compra
              </Button>

              {/* Botão para limpar o carrinho */}
              <Button
                className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
                onClick={() => {
                  // Chama a função para limpar o carrinho
                  clearCart();
                }}
              >
                Limpar Carrinho
              </Button>
              </div>

              <div className="mt-4">
                <button
                  type="button"
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                  onClick={handleClose}
                >
                  <span className="sr-only">Fechar</span>
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CartModal;
