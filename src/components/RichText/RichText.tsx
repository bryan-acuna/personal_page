import { Fragment } from 'react'

interface RichTextProps {
    text: string
}

/**
 * Renders text with **markdown-style bold**. Splits on the bold delimiters
 * and wraps odd-indexed segments in <strong>. Safe — no innerHTML.
 */
const RichText = ({ text }: RichTextProps) => {
    const parts = text.split(/\*\*(.+?)\*\*/g)
    return (
        <>
            {parts.map((part, i) =>
                i % 2 === 1 ? (
                    <strong key={i}>{part}</strong>
                ) : (
                    <Fragment key={i}>{part}</Fragment>
                )
            )}
        </>
    )
}

export default RichText
