import SelectCountry from "@/components/select-country.tsx";
import DisplayStatistics from "@/components/display-statistics.tsx";

function App() {
  return (
    <div className="flex flex-col justify-between items-center min-h-screen max-w-4xl m-auto py-10">
      <SelectCountry />
      <DisplayStatistics />
    </div>
  );
}

export default App;
