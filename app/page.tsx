'use client';

import FormStatus from './components/FormStatus';
import { FormProvider } from './hooks/useForm';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen bg-white">
      <div className="flex flex-col items-center justify-between w-full max-w-lg p-4 bg-slate-200">
        <FormProvider>
          <FormStatus />
        </FormProvider>
      </div>
    </main>
  );
}
