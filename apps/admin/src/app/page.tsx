import dynamic from 'next/dynamic';

const AdminApp = dynamic(async () => await import('@/components/pages/admin/admin.page'), {
  ssr: false,
});

export default function Home() {
  return <AdminApp />;
}
