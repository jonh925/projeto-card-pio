// CartModal.tsx

import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface CartModalProps {
  open: boolean;
  onClose: () => void;
  // Adicione mais propriedades conforme necessário para exibir informações do carrinho
}

const CartModal: React.FC<CartModalProps> = ({ open, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300); // Tempo de duração da animação de fechamento
  };

  return (
    <Transition show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={handleClose}
      >
        <div className="min-h-screen px-4 text-center">
          {/* Overlay */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-75"
            leave="ease-in duration-200"
            leaveFrom="opacity-75"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
          </Transition.Child>

          {/* Modal */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block align-middle my-16 p-6 text-left bg-white rounded-lg shadow-xl transform transition-all">
              <Dialog.Title className="text-lg font-medium leading-6 text-gray-900">
                Seu Carrinho
              </Dialog.Title>

              {/* Conteúdo do carrinho vai aqui */}
              {/* {cart.items.map(item => <CartItem key={item.id} item={item} />)} */}

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
