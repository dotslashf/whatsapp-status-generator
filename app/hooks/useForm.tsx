import React, { useState, createContext, useMemo } from 'react';

const MIN_STATUS = 1;
const initialForm = {
  name: 'anjimeNation',
  status:
    'Culpa non velit aliqua aliquip cupidatat quis. Duis non exercitation irure occaecat. Sit ea cillum ullamco id nisi sit nostrud aliquip qui tempor veniam. Labore sit mollit quis.',
  numberOfStatus: MIN_STATUS,
  currentStatus: 1,
  statusPercentage: 100,
  statusWidth: 0,
  date: new Date(),
  statusTextSize: 'default',
  backgroundColor: '#64748B',
  textColor: '#FFFFFF',
  avatar: 'https://avatars.githubusercontent.com/u/38921923?v=4',
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
  backgroundColor: string;
  textColor: string;
  avatar: string;
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
