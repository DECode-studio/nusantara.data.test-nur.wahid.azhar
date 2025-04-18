import { createContext, ReactNode, useContext, useState } from 'react';
import { MessageType } from '../service/enum/meesage';
import { MessageBox } from '../../layout/components/message/message-box';

type ModalMessageContextProps = {
  showMessage: (message: string, type?: MessageType) => void;
};

const ModalMessageContext = createContext<ModalMessageContextProps | undefined>(undefined);

type Props = {
  children: ReactNode
}

export const ModalMessageProvider = ({
  children
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState<MessageType>(MessageType.Info);

  const showMessage = (msg: string, msgType: MessageType = MessageType.Info) => {
    setMessage(msg);
    setType(msgType);
    setIsOpen(true);
  };

  const onClose = () => setIsOpen(false);

  return (
    <ModalMessageContext.Provider value={{ showMessage }}>
      {children}

      {isOpen && (
        <MessageBox
          type={type}
          message={message}
          onClose={onClose}
        />
      )}
    </ModalMessageContext.Provider>
  );
};

export const useModalMessage = (): ModalMessageContextProps => {
  const context = useContext(ModalMessageContext);
  if (!context) {
    throw new Error('useModalMessage must be used within a ModalMessageProvider');
  }
  return context;
};
