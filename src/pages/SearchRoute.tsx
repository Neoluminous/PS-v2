import { useSearchParams } from "react-router-dom";
import SearchPage from "../components/SearchPage";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { searchEntries } from "../content/search";

export default function SearchRoute() {
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q") || "";
  
  return (
    <main>
      <SiteHeader />
      <SearchPage entries={searchEntries} initialQuery={q.slice(0, 120)} />
      <SiteFooter />
    </main>
  );
}
