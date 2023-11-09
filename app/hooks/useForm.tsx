import React, { useState, createContext, useMemo } from 'react';

const MIN_STATUS = 4;
const initialForm = {
  status:
    'Culpa non velit aliqua aliquip cupidatat quis. Duis non exercitation irure occaecat. Sit ea cillum ullamco id nisi sit nostrud aliquip qui tempor veniam. Labore sit mollit quis.',
  numberOfStatus: MIN_STATUS,
  currentStatus: Math.floor(MIN_STATUS / 2),
  statusPercentage: 50,
};
interface Form {
  status: string;
  numberOfStatus: number;
  currentStatus: number;
  statusPercentage: number;
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
