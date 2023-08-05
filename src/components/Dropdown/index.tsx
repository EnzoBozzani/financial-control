import { Dropdown } from "react-bootstrap";
import styles from './styles.module.scss';
import Link from "next/link";

const MenuDropdown = () => {
    return (
        <Dropdown className={styles.wrapper}>
            <Dropdown.Toggle id="dropdown-basic" className={styles.btn}>
                Menu
            </Dropdown.Toggle>
            <Dropdown.Menu className={styles.menu}>
                <Dropdown.Item className={styles.item}><Link href={'/'}>Home</Link></Dropdown.Item>
                <Dropdown.Item className={styles.item}><Link href={'/transactions'}>Transactions</Link></Dropdown.Item>
                <Dropdown.Item className={styles.item}><Link href={'/export-data'}>Data</Link></Dropdown.Item>
            </Dropdown.Menu>

        </Dropdown>
    )
}

export default MenuDropdown;