import * as S from "./Checkbox.styles";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onGenreChange: () => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onGenreChange,
}) => {
  return (
    <S.Container>
      <label>
        <input type="checkbox" checked={checked} onChange={onGenreChange} />
        {label}
      </label>
    </S.Container>
  );
};
