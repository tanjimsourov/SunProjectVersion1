import Boxes from "../Boxes";
import Sidebar from "../template/Sidebar";

export default function Home(){

    return(
        <>
            <div className="page full-screen background home">
                <div className="shadow"></div>
                <div className="grid full">
                    {/* Side bar starts */}
                    <Sidebar />
                    <div className="page__content">
                        <h2 className="title">Energy from sunlight</h2>
                        <div className="space-50"></div>
                        <Boxes ln="en"/>
                    </div>
                </div>
            </div>
        </>
    )
}