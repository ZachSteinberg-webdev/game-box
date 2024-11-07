import astronomy1867616 from '../../assets/astronomy1867616.webp';
import background7275953 from '../../assets/background7275953.webp';
import background7577472 from '../../assets/background7577472.webp';
import blueBackground7470781 from '../../assets/blueBackground7470781.webp';
import colvers8173610 from '../../assets/colvers8173610.webp';
import cosmos6693008 from '../../assets/cosmos6693008.webp';
import crownAnemone6157488 from '../../assets/crownAnemone6157488.webp';
import flower5768092 from '../../assets/flower5768092.webp';
import flower7383299 from '../../assets/flower7383299.webp';
import flower8155370 from '../../assets/flower8155370.webp';
import flowers2708995 from '../../assets/flowers2708995.webp';
import flowers7182930 from '../../assets/flowers7182930.webp';
import flowers8309995 from '../../assets/flowers8309995.webp';
import forest7774205 from '../../assets/forest7774205.webp';
import ginkgo8037886 from '../../assets/ginkgo8037886.webp';
import hyacinths8435741 from '../../assets/hyacinths8435741.webp';
import lake7925872 from '../../assets/lake7925872.webp';
import landscape6724639 from '../../assets/landscape6724639.webp';
import leaves8413064 from '../../assets/leaves8413064.webp';
import mapOfTheWorld2401458 from '../../assets/mapOfTheWorld2401458.webp';
import meadow8071932 from '../../assets/meadow8071932.webp';
import milkyWay8149815 from '../../assets/milkyWay8149815.webp';
import mountain8433234 from '../../assets/mountain8433234.webp';
import mountains3324569 from '../../assets/mountains3324569.webp';
import mountains3699372 from '../../assets/mountains3699372.webp';
import mountains6839521 from '../../assets/mountains6839521.webp';
import ocean3605547 from '../../assets/ocean3605547.webp';
import plumage176723 from '../../assets/plumage176723.webp';
import sea8622735 from '../../assets/sea8622735.webp';
import spiderWeb3725540 from '../../assets/spiderWeb3725540.webp';
import tilesShapes2617112 from '../../assets/tilesShapes2617112.webp';
import trees8512979 from '../../assets/trees8512979.webp';
import water1330252 from '../../assets/water1330252.webp';
import water8183918 from '../../assets/water8183918.webp';
import waterColor5062356 from '../../assets/waterColor5062356.webp';
import wood1108307 from '../../assets/wood1108307.webp';

const useSetWallpaper=(wallpaperId)=>{
	let backgroundImage;
	if(wallpaperId){
		let backgroundImageId=wallpaperId.replace('Thumbnail','');
		backgroundImage=`/assets/${backgroundImageId}.webp`;
	}else{
		backgroundImage='/assets/mountain8433234.webp';
	};
	return backgroundImage;
};

export default useSetWallpaper;
