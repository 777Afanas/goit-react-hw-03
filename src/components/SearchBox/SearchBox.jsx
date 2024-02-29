import css from "./SearchBox.module.css";

export default function SearchBox({value, onSearch}) {

  const handelInput = (evt) => {
    onSearch(evt.target.value);
  };

  return (
      <div className={css.SearchBar}>
          <p>Find contacts by name</p>
          <input
              type="text"
              className={css.textInput}
              value={value}
              onChange={handelInput} />
    </div>
  );
}
