import styles from './styles.module.scss';
import { Modal } from 'react-bootstrap';
import { useState } from 'react';

export const TransactionModal = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    return (
        <>
            <button className={styles.loginButton} onClick={handleShow}>
                New Transaction
            </button>

            <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton className={styles.modalHeader}>
                    <Modal.Title>New Transaction</Modal.Title>
                </Modal.Header>
                <Modal.Body className={styles.modalBody}>
                    <form className={styles.wrapper}>
                        <div>
                            <label htmlFor="title">Title:</label>
                            <input type="text" placeholder="(e.g transfer to Batman)" id="title" name="title"
                            />
                        </div>
                        <div>
                            <label htmlFor="description">Description:</label>
                            <input type="text" id="description"
                                placeholder="(e.g transfered him because he was in need)"
                                name="description"
                            />
                        </div>
                        <div>
                            <label htmlFor="title">Value:</label>
                            <input type="number" placeholder='100' id='value' name='value' step={0.01} />
                        </div>
                        <div>
                            <label htmlFor="inputGroupSelect01">Transaction type:</label>
                            <select id="inputGroupSelect01" required>
                                <option>Choose transaction type</option>
                                <option value="profit">Profit</option>
                                <option value="expense">Expense</option>
                            </select>
                        </div>
                        <button type='submit' onClick={handleClose}>
                            Add Transaction
                        </button>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}