
type Props = {
    title:string,
    iconName:string
    figure:string
    subscript:string
}

const HiglightCard = (props: Props) => {
    const {title, iconName, figure, subscript} = props
  return (
    <div className="card card-sm highlight-card">
    <h3 className="title-3">{title}</h3>
    <div className="wrapper">
        <span className="m-icon"> {iconName} </span>
        <p className="title-1">
            {figure}<sub>{subscript}</sub>
        </p>
    </div>
</div>
  )
}

export default HiglightCard