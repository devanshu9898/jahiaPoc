export default function MegaMenu({ data }: any) {
  return (
    <div className="absolute left-0 w-full bg-gray-50 shadow-lg p-8 px-21 grid grid-cols-3 gap-10">
      {/* Sections */}
      {data.sections?.map((section: any) => (
        <div key={section.title}>
          <h4 className="text-sm font-semibold text-[#6E6B71] mb-4">
            {section.title}
          </h4>
          <ul className="space-y-3">
            {section.links.map((link: any) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-gray-800 hover:text-pink-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* CTA Card */}
      {data.cta && (
        <div className="bg-white rounded-xl p-6 shadow-md">
          <h3 className="text-lg font-semibold mb-2">
            {data.cta.title}
          </h3>
          <p className="text-sm text-gray-600 mb-3">
            {data.cta.description}
          </p>
          <button className="text-pink-600 font-medium">
            {data.cta.link}
          </button>
        </div>
      )}
    </div>
  );
}