import { MessageType } from '../enum/meesage';

type ShowMessageFn = (message: string, type?: MessageType) => void;

let showMessageGlobal: ShowMessageFn;

export const registerGlobalModalMessage = (fn: ShowMessageFn) => {
  showMessageGlobal = fn;
};

export const dialogueMessage = (
  message: string,
  type: MessageType = MessageType.Info
) => {
  if (showMessageGlobal) {
    showMessageGlobal(message, type);
  } else {
    console.warn('modalMessage function belum terdaftar!');
  }
};
