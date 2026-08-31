import { useParams } from "react-router-dom";
import PolicyDetailPage from "../components/PolicyDetailPage";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import NotFoundPage from "./NotFoundPage";
import { getPolicy } from "../content/policies";


export default function PolicyPage() {
  
  const { policy: slug } = useParams();
  const policy = slug ? getPolicy(slug) : undefined;
  
  if (!policy) return <NotFoundPage />;
  
  return (
    <main>
      <SiteHeader />
      <PolicyDetailPage policy={policy} />
      <SiteFooter />
    </main>
  );
}
