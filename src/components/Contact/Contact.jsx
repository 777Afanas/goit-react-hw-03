import css from './Contact.module.css'; 
import { FaUser, FaPhone } from 'react-icons/fa6';


export default function Contact({ data: {id, name, number }, onDelete}) {
    return (
        <div className={css.contactItem}>
            <div className={css.info}>
                <p className={css.text}>
                    <FaUser />
                    {name}
                </p>
                <p className={css.text}>
                    <FaPhone />
                    {number}
                </p>
            </div>
            <button
                className={css.button}
                type="button"
                onClick={() => 
                    onDelete(id)}>
                Delete
            </button> 
        </div>
    );
}