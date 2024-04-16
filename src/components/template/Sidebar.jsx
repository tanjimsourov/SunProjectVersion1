import PlaceHolder from '../../assets/img/floating-img.jpg';
import ClockSVG from "../template/ClockSVG";
import NlPlaceHolder from '../../assets/img/nl/nl-floating.jpeg'
import FrPlaceHolder from '../../assets/img/fr/fr-floating.jpeg'

export default function Sidebar({ ln, placeholder, title }){
    let tag = "This building produces solar energy"
    if(ln === "fr"){
        tag = "Ce bâtiment produit de l'énergie solaire";
    }
    if(ln === "nl"){
        tag = "Dit gebouw produceert zonne-energie";
    }

    if( title ){
        tag = title;
    }

    return(
        <div className="page__sidebar">
            <div className="page__sidebar_header">
                <h2 className="clock-title bold">{tag}</h2>
            </div>
            <h1 style={{color: 'white', alignSelf: 'flex-end'}} className="bold text-center">Showroom</h1>
            <div className="page__sidebar_content">
                <ClockSVG />
            </div>
            <h1 style={{color: 'white'}} className="bold text-center">Zaventem</h1>
            <div className="page__sidebar_footer">
                { ln !== 'nl' && ln !== 'fr' ?(
                <img
                    src={placeholder ? placeholder : PlaceHolder}
                    className="sidebar-float"
                    alt=""
                    />):
                    ln === 'nl' ? (
                <img
                    src={NlPlaceHolder}
                    alt=""
                    className={`sidebar-float nl`}
                />
                ) : ln === 'fr' ? (
                <img
                    src={FrPlaceHolder}
                    alt=""
                    className={`sidebar-float fr`}
                />
                ) : null}


            </div>
        </div>
    )
}