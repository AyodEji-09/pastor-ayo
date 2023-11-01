const SectionHeader = ({ header, desc }) => {
  return (
    <div id="section__header" className="mb-5">
      {header && <h2 className="fw-bolder text-primary">{header}</h2>}
      {desc && <p>{desc}</p>}
    </div>
  );
};

export default SectionHeader;
