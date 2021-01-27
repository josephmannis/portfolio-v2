export const Checkbox = ({ onClicked, selected, id }) => (
    <label className="container" htmlFor={id}>
        <input name={id} type="checkbox" defaultChecked={selected} />
        <span onClick={onClicked} className="checkmark" id={id}></span>
        {id}
    </label>
);
