export default function Image({url, imagetext }){
 
    return (
        <div className="image">
            <img src={ url } alt="xinpusen" className="xin"/>
            <div className="image-text">
                <div>{ imagetext.top }</div>
                <div>{ imagetext.bottom }</div>
            </div>
        </div>
    );
}