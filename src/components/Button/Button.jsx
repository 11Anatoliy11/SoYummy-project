import { StyledBtn } from './Button.styled';

export default function Button({
  text,
  type,
  disabled,
  onClick,
  width,
  height,
  backgroundColor,
  border,
  borderRadius,
  textColor,
  filter,
  id,
  className
}) {
  return (
    <>
      <StyledBtn
        type={type}
        width={width}
        height={height}
        disabled={disabled}
        onClick={onClick}
        backgroundColor={backgroundColor}
        border={border}
        borderRadius={borderRadius}
        textColor={textColor}
        filter={filter}
        id={id}
        className={className}
      >
        {text}
      </StyledBtn>
    </>
  );
}
