"use client"
const SectionTitle = ({ header, miniHeader }) => {

  return (
    <div className="flex flex-col space-y-2 justify-center items-center mb-8">
      <p className="text-xl  italic">--- <span className="text-blue-600">{miniHeader}</span> ---</p>
      <hr className="w-80 border" />
      <h2 className="text-4xl font-semibold italic uppercase">{header}</h2>
      {/* <hr className="w-80 border" /> */}
    </div>
  );
};

export default SectionTitle;