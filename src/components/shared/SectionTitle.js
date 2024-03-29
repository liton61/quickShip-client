"use client"
const SectionTitle = ({ header, miniHeader }) => {

  return (
    <div className="flex flex-col space-y-2 justify-center items-center py-12">
      <p className="text-xl">--- <span className="text-blue-600">{miniHeader}</span> ---</p>
      <h2 className="text-4xl font-semibold uppercase">{header}</h2>
    </div>
  );
};

export default SectionTitle;