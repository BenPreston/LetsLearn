import { BottomNav } from "../BottomNav";
import { TopNav } from "../TopNav";

function WithNavsLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <TopNav />
      <div className="flex-grow">{children}</div>
      <BottomNav />
    </div>
  );
}

export default WithNavsLayout;
