import { TICKER_ITEMS } from '../../data'
import styles from './Ticker.module.css'

const Ticker = () => {
    // Duplicated for seamless infinite loop. Each copy gets a stable, unique key.
    const items = [
        ...TICKER_ITEMS.map((text) => ({ id: `a-${text}`, text })),
        ...TICKER_ITEMS.map((text) => ({ id: `b-${text}`, text })),
    ]

    return (
        <div
            className={styles.wrap}
            role="marquee"
            aria-label="Technologies and skills"
        >
            <div className={styles.track}>
                {items.map(({ id, text }) => (
                    <div key={id} className={styles.item}>
                        {text} <span className={styles.dot}>·</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Ticker
