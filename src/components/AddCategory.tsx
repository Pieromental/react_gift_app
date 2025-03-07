import { useState } from "react";
type Props = {
  onAddCategory: (newCategory: string) => void;
};

export const AddCategory = ({ onAddCategory }: Props) => {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = ({ target }: any) => {
    setInputValue(target.value);
  };
  const onSubmit = (event: any) => {
    event.preventDefault();
    if (inputValue) {
      onAddCategory(inputValue);
      setInputValue("");
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        value={inputValue}
        type="text"
        placeholder="Buscar Gifts"
        onChange={onInputChange}
      />
    </form>
  );
};
