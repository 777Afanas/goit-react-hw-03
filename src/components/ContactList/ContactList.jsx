import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

export default function ContactList() {
    return (
        <ul className={css.list}>
            {ContactList.map(contact => (
                <li key={contact.id}>
                    <Contact data={contact} onDelete={onDelete} />
                </li> ))}
        </ul>
    );
}