import { getWebinarDetails } from '@/app/comman/FrontApi';
import WebinarDetailsPanel from '@/components/view/Webinar/WebinarDetailsPanel';

export const generateStaticParams = async () => {
  return [{ id: '1' }, { id: '2' }];
};

export default async function WebinarDetailPage({ params }) {
  const { id } = await params; // 

  try {
    const res = await getWebinarDetails(id);
    const data = res.data.data;

    return (
      <WebinarDetailsPanel
        description={data.description}
        agenda={data.agenda || []}
        facts={data.facts || []}
      />
    );
  } catch (err) {
    return <div className="p-6 text-red-600">Error loading webinar</div>;
  }
}
