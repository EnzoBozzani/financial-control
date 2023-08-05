'use client';

import Link from 'next/link';
import styles from './styles.module.scss';
import { TransactionModal } from '../Modal';
import { useEffect, useState } from 'react';
import MenuDropdown from '../Dropdown';

export const Header = () => {
    const [ screenSize, setScreenSize ] = useState({ width: innerWidth, height: innerHeight});
    useEffect(() => {
        const updateScreenSize = () => {
            setScreenSize({ width: innerWidth, height: innerHeight});
        }
        window.addEventListener('resize', updateScreenSize);
        return (() => {
            window.removeEventListener('resize', updateScreenSize);
        })
    }, [screenSize])
    if (innerWidth < 800) {
        return (
            <header className={styles.wrapper}>
                <MenuDropdown/>
                <TransactionModal />
            </header>
        )
    }
    return (
        <header className={styles.wrapper2}>
            <nav>
                <Link href={'/'}>Home</Link>
                <Link href={'/transactions'}>Transactions</Link>
                <Link href={'/export-data'}>Data</Link>
            </nav>
            <TransactionModal />
        </header>
    )
}