import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Feed from "@/components/Feed";
import Suggestions from "@/components/Suggestions";

export default function Home() {
  return (
    <div className="flex bg-black min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 ml-16">
        <Header />
        <div className="flex mt-16">
          <div className="flex-1 px-6">
            <Feed />
          </div>
          <Suggestions />
        </div>
      </div>
    </div>
  );
}
