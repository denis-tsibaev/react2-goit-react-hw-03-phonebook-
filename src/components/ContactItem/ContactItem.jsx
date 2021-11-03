import style from './ContactItem.module.css';

const ContactItem = ({ name, number, onDelete }) => (
    <>
        <span>
            {name}: {number}
        </span>
        <button type="submit" onClick={onDelete} className={style.deleteBtn}>
            Delete
        </button>
    </>
);

export default ContactItem;
