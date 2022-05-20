import "./search-box.styles.css";

const SearchBar = (props) => {
  const { onsearchChange } = props;
  return (
    <input
      type="search"
      placeholder="Search Monster"
      className="search-box"
      onChange={onsearchChange}
    />
  );
};

export default SearchBar;
