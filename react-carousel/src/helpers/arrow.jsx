export const Arrow = ({ ...props }) => {
    return (
        <button className={props.className} onClick={props.onClick}>
            <svg className="svgArrowIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d='M 6.534 5.006 L 8.9 2.64 l 10.14 10.14 l -10.14 10.14 l -2.366 -2.366 l 7.774 -7.774 z' />
            </svg>
        </button>

    )
}
