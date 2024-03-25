import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useCart } from '../contexts/CartContext';
import { Button, Input } from '@nextui-org/react';

interface CheckoutModalProps {
  open: boolean;
  onClose: () => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ open, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const { cart, clearCart, removeItem } = useCart();
  const [customerName, setCustomerName] = useState('');
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  };

  const handleConfirmOrder = () => {
    if (!customerName.trim()) {
      alert('Por favor, insira seu nome antes de confirmar o pedido.');
      return;
    }
    alert(`Pedido confirmado para ${customerName}!`);
    clearCart(); // Limpar o carrinho após o pedido ser confirmado
    setIsOrderConfirmed(true); // Marcar o pedido como confirmado
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
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block align-middle my-16 p-6 text-left bg-gray-300 rounded-lg shadow-xl transform transition-all">
              <Dialog.Title className="text-lg font-medium leading-6 text-gray-900 mb-4">
                Checkout
              </Dialog.Title>

              {/* Exibe os itens do carrinho */}
              {cart.items.map((cartItem) => (
                <div key={cartItem.id} className="flex justify-between items-center mb-2 p-2 bg-violet-500 text-black rounded">
                  <div>
                    <span className="font-semibold">{cartItem.name}</span> - ${cartItem.price}
                  </div>
                  <button
                    className="text-red-500 hover:text-red-700 focus:outline-none"
                    onClick={() => {
                      // Chama a função para remover o item do carrinho pelo ID
                      removeItem(cartItem.id);
                    }}
                  >
                    <XMarkIcon className="w-5 h-5" />
                  </button>
                </div>
              ))}

              {/* Exibe o total dos itens no carrinho */}
              <div className="mt-4 text-lg font-semibold text-gray-900">
                Total: ${calculateTotal().toFixed(2)}
              </div>

              {/* Formulário para inserir o nome do cliente */}
              <input
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Seu nome"
                className="w-full p-3 mt-4 text-black font-sans rounded border-gray-300"
              />

              {/* Botão para confirmar o pedido */}
              {!isOrderConfirmed && (
                <Button
                  className="mt-4 w-full bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none"
                  onClick={handleConfirmOrder}
                >
                  Confirmar Pedido
                </Button>
              )}

              {/* Mensagem de sucesso após o pedido ser confirmado */}
              {isOrderConfirmed && (
                <p className="mt-4 text-green-700">Pedido confirmado com sucesso!</p>
              )}

              {/* Botão para limpar o carrinho */}
              <Button
                className="mt-2 w-full bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
                onClick={() => {
                  // Chama a função para limpar o carrinho
                  clearCart();
                }}
              >
                Limpar Carrinho
              </Button>

              {/* Botão para fechar o modal */}
              <div className="mt-4">
                <Button
                  type="button"
                  className="text-gray-500 hover:text-gray-800 focus:outline-none"
                  onClick={handleClose}
                >
                  Fechar
                </Button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CheckoutModal;
