export default function rankingName(score){
    if(score <= 2.5){
        return "Danger";
    } else if (score <= 5.0){
        return "Alert";
    } else if (score <= 7.0){
        return "Atention"
    } else{
        return "Great";
    }

}