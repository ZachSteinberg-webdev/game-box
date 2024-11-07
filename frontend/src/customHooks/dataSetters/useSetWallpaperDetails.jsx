const useSetWallpaperDetails=(wallpaperId)=>{
	let imageCreditHref;
	let imageCreditName;
	switch(wallpaperId){
		case null:
			imageCreditHref='https://pixabay.com/users/nickype-10327513/';
			imageCreditName='NickyPe';
			break;
		case 'astronomy1867616Thumbnail':
			imageCreditHref='https://pixabay.com/users/pexels-2286921/';
			imageCreditName='Pexels';
			break;
		case 'background7275953Thumbnail':
			imageCreditHref='https://pixabay.com/users/steve_a_johnson-8206634/';
			imageCreditName='steve_a_johnson';
			break;
		case 'background7577472Thumbnail':
			imageCreditHref='https://pixabay.com/users/riki32-8327183/';
			imageCreditName='Riki32';
			break;
		case 'blueBackground7470781Thumbnail':
			imageCreditHref='https://pixabay.com/users/molnarszabolcserdely-2742379/';
			imageCreditName='MolnarSzabolcsErdely';
			break;
		case 'colvers8173610Thumbnail':
			imageCreditHref='https://pixabay.com/users/wyxina-12884935/';
			imageCreditName='Wyxina';
			break;
		case 'cosmos6693008Thumbnail':
			imageCreditHref='https://pixabay.com/users/darkness_s-9359670/';
			imageCreditName='darkness_s';
			break;
		case 'crownAnemone6157488Thumbnail':
			imageCreditHref='https://pixabay.com/users/rollstein-13853955/';
			imageCreditName='Rollstein';
			break;
		case 'flower5768092Thumbnail':
			imageCreditHref='https://pixabay.com/users/mariya_m-12752456/';
			imageCreditName='mariya_m';
			break;
		case 'flower7383299Thumbnail':
			imageCreditHref='https://pixabay.com/users/nohopuku_photography-25590070/';
			imageCreditName='nohopuku_photography';
			break;
		case 'flower8155370Thumbnail':
			imageCreditHref='https://pixabay.com/users/idat-18128501/';
			imageCreditName='IdaT';
			break;
		case 'flowers2708995Thumbnail':
			imageCreditHref='https://pixabay.com/users/alexas_fotos-686414/';
			imageCreditName='Alexas_Fotos';
			break;
		case 'flowers7182930Thumbnail':
			imageCreditHref='https://pixabay.com/users/dendoktoor-14802912/';
			imageCreditName='dendoktoor';
			break;
		case 'flowers8309995Thumbnail':
			imageCreditHref='https://pixabay.com/users/niki_emmert-13526667/';
			imageCreditName='niki_emmert';
			break;
		case 'forest7774205Thumbnail':
			imageCreditHref='https://pixabay.com/users/aalmeidah-4277022/';
			imageCreditName='aalmeidah';
			break;
		case 'ginkgo8037886Thumbnail':
			imageCreditHref='https://pixabay.com/users/wal_172619-12138562/';
			imageCreditName='wal_172619';
			break;
		case 'hyacinths8435741Thumbnail':
			imageCreditHref='https://pixabay.com/users/mylene2401-10328767/';
			imageCreditName='Mylene2401';
			break;
		case 'lake7925872Thumbnail':
			imageCreditHref='https://pixabay.com/users/alexsios-30452718/';
			imageCreditName='Alexsios';
			break;
		case 'landscape6724639Thumbnail':
			imageCreditHref='https://pixabay.com/users/leolo212-15013188/';
			imageCreditName='Leolo212';
			break;
		case 'leaves8413064Thumbnail':
			imageCreditHref='https://pixabay.com/users/akirevarga-8968314/';
			imageCreditName='akirEVarga';
			break;
		case 'mapOfTheWorld2401458Thumbnail':
			imageCreditHref='https://pixabay.com/users/yuri_b-2216431/';
			imageCreditName='Yuri_B';
			break;
		case 'meadow8071932Thumbnail':
			imageCreditHref='https://pixabay.com/users/chiemseherin-1425977/';
			imageCreditName='ChiemSeherin';
			break;
		case 'milkyWay8149815Thumbnail':
			imageCreditHref='https://pixabay.com/users/chiemseherin-1425977/';
			imageCreditName='ChiemSeherin';
			break;
		case 'mountain8433234Thumbnail':
			imageCreditHref='https://pixabay.com/users/nickype-10327513/';
			imageCreditName='NickyPe';
			break;
		case 'mountains3324569Thumbnail':
			imageCreditHref='https://pixabay.com/users/eriktanghe-8013345/';
			imageCreditName='ErikTanghe';
			break;
		case 'mountains3699372Thumbnail':
			imageCreditHref='https://pixabay.com/users/nonmisvegliate-7011191/';
			imageCreditName='nonmisvegliate';
			break;
		case 'mountains6839521Thumbnail':
			imageCreditHref='https://pixabay.com/users/cdd20-1193381/';
			imageCreditName='CDD20';
			break;
		case 'ocean3605547Thumbnail':
			imageCreditHref='https://pixabay.com/users/jplenio-7645255/';
			imageCreditName='jplenio';
			break;
		case 'plumage176723Thumbnail':
			imageCreditHref='https://pixabay.com/users/stux-12364/';
			imageCreditName='stux';
			break;
		case 'sea8622735Thumbnail':
			imageCreditHref='https://pixabay.com/users/adelinazw-51863/';
			imageCreditName='AdelinaZw';
			break;
		case 'spiderweb3725540Thumbnail':
			imageCreditHref='https://pixabay.com/users/jplenio-7645255/';
			imageCreditName='jplenio';
			break;
		case 'tilesShapes2617112Thumbnail':
			imageCreditHref='https://pixabay.com/users/stocksnap-894430/';
			imageCreditName='StockSnap';
			break;
		case 'trees8512979Thumbnail':
			imageCreditHref='https://pixabay.com/users/mirandi-15290329/';
			imageCreditName='Mirandi';
			break;
		case 'water1330252Thumbnail':
			imageCreditHref='https://pixabay.com/users/michelle_raponi-165491/';
			imageCreditName='Michelle_Raponi';
			break;
		case 'water8183918Thumbnail':
			imageCreditHref='https://pixabay.com/users/mylene2401-10328767/';
			imageCreditName='Mylene2401';
			break;
		case 'watercolor5062356Thumbnail':
			imageCreditHref='https://pixabay.com/users/neangart-16005384/';
			imageCreditName='NeangArt';
			break;
		case 'wood1108307Thumbnail':
			imageCreditHref='https://pixabay.com/users/jeonsango-1594796/';
			imageCreditName='jeonsango';
	};
	return {imageCreditHref, imageCreditName};
};

export default useSetWallpaperDetails;
