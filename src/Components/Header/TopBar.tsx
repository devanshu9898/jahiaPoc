export default function TopBar() {
  return (
    <div className="hidden md:flex justify-end px-8 py-2 text-sm bg-[#F8F3F2] text-[#22272D]">
      <div className="flex gap-6">
        <span>For brokers</span>
        <span>For providers</span>
        <span>For employers</span>
      </div>
    </div>
  );
}