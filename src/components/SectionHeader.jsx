const SectionHeader = ({ header, desc }) => {
  return (
    <div id="section__header" className="mb-3">
      <header className="d-flex justify-content-center align-items-center gap-1">
        <span></span>
        {header && <h2 className="fw-bolder text-primary">{header}</h2>}
        <span></span>
      </header>
      {desc && <p>{desc}</p>}
    </div>
  );
};

export default SectionHeader;
