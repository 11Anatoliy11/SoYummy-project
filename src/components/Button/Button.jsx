import { StyledBtn } from './Button.styled';

export default function Button({
  type,
  onClick,
  width,
  height,
  backgroundColor,
  border,
  borderRadius,
  textColor,
  filter,
  className,
  children,
}) {
  return (
    <>
      <StyledBtn
        type={type}
        width={width}
        height={height}
        onClick={onClick}
        backgroundColor={backgroundColor}
        border={border}
        borderRadius={borderRadius}
        textColor={textColor}
        filter={filter}
        className={className}
      >
        {children}
      </StyledBtn>
    </>
  );
}
