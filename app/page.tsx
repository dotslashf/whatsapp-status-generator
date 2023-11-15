'use client';

import FormStatus from './components/FormStatus';
import { FormProvider } from './hooks/useForm';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen bg-white">
      <div className="grid w-full max-w-5xl p-3 bg-slate lg:grid-cols-2 lg:px-6 lg:py-4 lg:gap-x-4 lg:gap-y-0 gap-y-2">
        <FormProvider>
          <FormStatus />
        </FormProvider>
      </div>
    </main>
  );
}
