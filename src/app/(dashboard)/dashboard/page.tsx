import { DashboardHeader } from '@/components/dashboard-header';
import { DashboardShell } from '@/components/dashboard-shell';
import { PostCreateButton } from '@/components/post-create-button';

const Page: React.FC = () => {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="記事投稿"
        text="記事の投稿と管理"
      >
        <PostCreateButton />
      </DashboardHeader>
      <div>
        <h1>Dashboard</h1>
      </div>
    </DashboardShell>
  );
};

export default Page;
