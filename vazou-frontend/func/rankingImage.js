export default function rankingImage(score){
    if(score <= 2.5){
        return "/ranking_icons/Danger.png";
    } else if (score <= 5.0){
        return "/ranking_icons/Alert.png";
    } else if (score <= 7.0){
        return "/ranking_icons/Atention.png"
    } else{
        return "/ranking_icons/Great.png";
    }

}
