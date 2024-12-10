const ServicesBox = ({ title, description, buttonText, exampleMessage }) => {
  return (
    <div className="services-box">
      <div className="services-box-text">
        <h2>{title}</h2> {/* Dynamic title */}
        <ul>
          {description.map((point, index) => (
            <li key={index}>{point}</li> // Render each point as a list item
          ))}
        </ul>
        {title !== "Prime Force Advisory Special" && ( // Conditional rendering
          <p>
            <strong>Example Message:</strong> {exampleMessage}
          </p>
        )}
        <a href="#contact" className="header-btn">
          <button>{buttonText}</button> {/* Dynamic button text */}
        </a>
      </div>
    </div>
  );
};

export default ServicesBox;
