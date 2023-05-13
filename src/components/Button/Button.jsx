import { StyledBtn } from './Button.styled';

export default function Button({
  text,
  type,
  onClick,
  width,
  height,
  backgroundColor,
  border,
  borderRadius,
  textColor,
  filter,
  id,
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
        id={id}
      >
       {children}
      </StyledBtn>
    </>
  );
}
