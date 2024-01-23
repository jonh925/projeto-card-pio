import React, { useEffect } from 'react';

interface NotificationProps {
  message: string;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, onClose }) => {
  useEffect(() => {
    // Define um temporizador para fechar a notificação após alguns segundos
    const timeoutId = setTimeout(() => {
      onClose();
    }, 3000);

    // Limpa o temporizador ao desmontar o componente
    return () => {
      clearTimeout(timeoutId);
    };
  }, [onClose]);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '16px',
        right: '16px',
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '16px',
        borderRadius: '4px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      {message}
    </div>
  );
};

export default Notification;
