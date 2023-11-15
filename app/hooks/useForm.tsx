import React, { useState, createContext, useMemo } from 'react';

const MIN_STATUS = 1;
const initialForm = {
  name: 'anjimeNation',
  status:
    'Ini adalah contoh status whatsapp yang saya buat dengan menggunakan whatsapp status generator. Silahkan kunjungi https://whatsapp-status-generator.vercel.app/ untuk membuat status whatsapp kamu sendiri.',
  numberOfStatus: MIN_STATUS,
  currentStatus: 1,
  statusPercentage: 50,
  statusWidth: 0,
  date: new Date(),
  statusTextSize: 'default',
  statusFontName: 'font-inter',
  backgroundColor: '#128C7E',
  textColor: '#FFFFFF',
  avatar: 'https://avatars.githubusercontent.com/u/38921923?v=4',
  isSelfStatus: false,
};
interface Form {
  name: string;
  status: string;
  numberOfStatus: number;
  currentStatus: number;
  statusPercentage: number;
  statusWidth: number;
  date: Date;
  statusTextSize: string;
  statusFontName: string;
  backgroundColor: string;
  textColor: string;
  avatar: string;
  isSelfStatus: boolean;
  [key: string]: string | number | Date | boolean;
}
const FormContext = createContext({
  form: initialForm,
  setForm: (form: Form) => {},
});

interface FormProviderProps {
  children: React.ReactNode;
}
export const FormProvider = (props: FormProviderProps) => {
  const [form, setForm] = useState<Form>(initialForm);
  const memoForm = useMemo(() => ({ form, setForm }), [form]);

  return (
    <FormContext.Provider value={memoForm}>
      {props.children}
    </FormContext.Provider>
  );
};

export const useForm = () => {
  const context = React.useContext(FormContext);
  if (context === undefined) {
    throw new Error('useForm must be used within a FormProvider');
  }
  return context;
};
