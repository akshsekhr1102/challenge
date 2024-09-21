import SearchProducts from "./SearchProducts";
import DisplayProducts from "./components/display-producs";

export default function Search({ params, searchParams }: any) {
  return (
    <div className="mt-16 px-4 ">
      <div className="md:hidden">
        <SearchProducts params={params} searchParams={searchParams} />
      </div>
      <DisplayProducts searchParams={searchParams} />
    </div>
  );
}
