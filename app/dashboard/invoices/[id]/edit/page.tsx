import Breadcrumbs from '@/app/dashboard/invoices/_components/breadcrumbs';
import Form from './_components/edit-form';
import { fetchCustomers, fetchInvoiceById } from '@/lib/data';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  // REMINDER: This is not a security RISK, react server components is being used here!
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);

  if (!invoice) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />

      <Form invoice={invoice} customers={customers} />
    </main>
  );
}
