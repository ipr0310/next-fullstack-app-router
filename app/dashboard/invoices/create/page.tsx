import Form from './_components/create-form';
import Breadcrumbs from '@/app/dashboard/invoices/_components/breadcrumbs';
import { fetchCustomers } from '@/lib/data';

export default async function Page() {
  // REMINDER: This is not a security RISK, react server components is being used here!
  const customers = await fetchCustomers();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Create Invoice',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
      />

      <Form customers={customers} />
    </main>
  );
}
