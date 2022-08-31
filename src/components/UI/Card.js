import './Card.css'

const Card = (props) => {
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>  // 'children' is a reserved name. Value is always content in open/close tags (also enables it)
}

export default Card;
