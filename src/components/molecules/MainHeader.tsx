import {
  ChevronDown,
  LayoutGrid,
  Volume2,
  Settings2,
  Search,
} from "lucide-react";

export const MainHeader = () => {
  return (
    <header className="flex items-center justify-between px-6 py-3 border-b border-border bg-background">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-axiom-blue rounded-lg flex items-center justify-center font-bold text-black">
            A
          </div>
          <span className="text-xl font-bold font-sans">Pulse</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-bold text-text-secondary">
          <span className="text-white border-b-2 border-white pb-4 mt-4 cursor-pointer">
            New Pairs
          </span>
          <span className="hover:text-white cursor-pointer mt-1">
            Final Stretch
          </span>
          <span className="hover:text-white cursor-pointer mt-1">Migrated</span>
        </nav>
      </div>

      <div className="flex items-center gap-4 text-text-secondary">
        <button className="flex items-center gap-2 bg-background-secondary border border-border px-3 py-1.5 rounded-md text-sm font-bold text-white">
          <LayoutGrid size={16} />
          Display
          <ChevronDown size={14} />
        </button>
        <div className="flex items-center gap-4 border-l border-border pl-4">
          <Search size={18} className="hover:text-white cursor-pointer" />
          <Volume2 size={18} className="hover:text-white cursor-pointer" />
          <Settings2 size={18} className="hover:text-white cursor-pointer" />
        </div>
      </div>
    </header>
  );
};
