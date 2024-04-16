import Boxes from "../Boxes";
import Sidebar from "../template/Sidebar";
import PlaceHolder from '../../assets/img/nl/nl-floating.jpeg'

export default function NlFirstPage(){

    return(
        <>
            <div className="page full-screen background home">
                <div className="shadow"></div>
                <div className="grid full">
                    {/* Side bar starts */}
                    <Sidebar ln="nl" placeholder={PlaceHolder} />
                    <div className="page__content">
                        <h2 className="title">Energie van zonlicht</h2>
                        <div className="space-50"></div>
                        <Boxes ln="nl" />
                    </div>
                </div>
            </div>
        </>
    )
}
