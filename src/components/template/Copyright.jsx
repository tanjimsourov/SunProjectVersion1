export default function Copyright({ln}){
    let text;

    if(ln === "nl"){
        text = "Energie waarden opgehaald uit Enerdeal"
    }else if(ln === "fr"){
        text = "Valeurs énergétiques relevées par Enerdeal"
    }else{
        text = `\u00A9 Enerdeal`
    }

    return(
        
        <p className="copyright"> {text} </p>
        
    )
}