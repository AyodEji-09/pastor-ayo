const SectionHeader = ({ header, desc }) => {
  return (
    <div id="section__header" className="text-center">
      <header className="d-flex justify-content-center align-items-center gap-1">
        <span></span>
        {header && <h2 className="fw-bolder">{header}</h2>}
        <span></span>
      </header>
      {desc && <p className="lead">{desc}</p>}
    </div>
  );
};

export default SectionHeader;
