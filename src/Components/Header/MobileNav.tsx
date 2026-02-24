import { HEADER_MENU } from "../../constants/headerData";

export default function MobileNav({ mobileOpen, setMobileOpen }: any) {
  return (
    <div className="lg:hidden">
      {/* Mobile Top */}
      <div className="flex items-center justify-between px-6 py-4">
        <div className="text-xl font-bold text-teal-600">Medica.</div>
        <button onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          )}
        </button>
      </div>

      {/* Drawer */}
      {mobileOpen && (
        <div className="px-6 pb-6 space-y-6 bg-white shadow-lg">
          {HEADER_MENU.map((item) => (
            <div key={item.key}>
              <h3 className="font-semibold mb-2">{item.label}</h3>
              {item.sections?.map((section: any) => (
                <div key={section.title} className="mb-3">
                  <p className="text-sm text-gray-500">{section.title}</p>
                  <ul className="ml-3 mt-1 space-y-1">
                    {section.links.map((link: any) => (
                      <li key={link.label}>
                        <a className="text-sm text-gray-700">{link.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}

          <button className="w-full bg-pink-600 text-white py-2 rounded-full">Sign in</button>
        </div>
      )}
    </div>
  );
}
