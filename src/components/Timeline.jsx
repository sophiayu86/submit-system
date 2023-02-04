import { BsFillCircleFill } from "react-icons/bs";
export const Timeline = ({ data }) => {
    const renderTimeline = data.map((item, index) => {
        return (
            <div key={item.text} className="d-flex">
                <div className="d-flex flex-column align-items-center">
                    <div>{item.date}</div>
                    <div style={{ margin: "15px 0"}}>
                        <BsFillCircleFill />
                    </div>
                    <div className="d-flex justify-content-center" style={{width: "25px", height: "24px"}}>
                        <div style={{position: "absolute"}}>{item.text}</div>
                    </div>
                </div>
                {index !== data.length - 1 && 
                <div className="d-flex align-items-center" style={{ marginRight: "-5px", marginLeft: "-5px"}}>
                    <div className="line"></div>
                </div>}
            </div>
        )
    })
    return (
        <div className="d-flex">
            {renderTimeline}
        </div>
    )
}