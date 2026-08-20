/* eslint-disable react/prop-types */
export const AmenityPage = ({
  title,
  wrapperClassName,
  infoClassName,
  infoStyle,
  children,
}) => {
  return (
    <div className={wrapperClassName}>
      <div className={infoClassName} style={infoStyle}>
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
};
