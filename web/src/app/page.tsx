import { ClientComponent } from '../components/ClientComponent';
import { ServerComponent } from '../components/ServerComponent';

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="mb-4 text-2xl font-bold">
        Next.js Server/Client Components Demo
      </h1>

      {/* これは実行時にエラーになります */}
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </div>
  );
}
