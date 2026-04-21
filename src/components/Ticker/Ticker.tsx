// src/components/Ticker.tsx
import { TICKER_ITEMS } from '../../data'
import styles from './Ticker.module.css'

const Ticker = () => {
    // Duplicate for seamless infinite loop
    const items = [...TICKER_ITEMS, ...TICKER_ITEMS]

    return (
        <div className={styles.wrap}>
            <div className={styles.track}>
                {items.map((item, i) => (
                    <div key={i} className={styles.item}>
                        {item} <span className={styles.dot}>·</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Ticker