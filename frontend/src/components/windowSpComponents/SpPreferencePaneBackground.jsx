import React, {useContext} from 'react';

import {UserContext} from '../../contexts/UserContext.jsx';

import useHandleUserPreferenceChange from '../../customHooks/formSubmissionHandlers/useHandleUserPreferenceChange.jsx';

import astronomy1867616Thumbnail from '../../assets/astronomy1867616Thumbnail.webp';
import background7275953Thumbnail from '../../assets/background7275953Thumbnail.webp';
import background7577472Thumbnail from '../../assets/background7577472Thumbnail.webp';
import blueBackground7470781Thumbnail from '../../assets/blueBackground7470781Thumbnail.webp';
import colvers8173610Thumbnail from '../../assets/colvers8173610Thumbnail.webp';
import cosmos6693008Thumbnail from '../../assets/cosmos6693008Thumbnail.webp';
import crownAnemone6157488Thumbnail from '../../assets/crownAnemone6157488Thumbnail.webp';
import flower5768092Thumbnail from '../../assets/flower5768092Thumbnail.webp';
import flower7383299Thumbnail from '../../assets/flower7383299Thumbnail.webp';
import flower8155370Thumbnail from '../../assets/flower8155370Thumbnail.webp';
import flowers2708995Thumbnail from '../../assets/flowers2708995Thumbnail.webp';
import flowers7182930Thumbnail from '../../assets/flowers7182930Thumbnail.webp';
import flowers8309995Thumbnail from '../../assets/flowers8309995Thumbnail.webp';
import forest7774205Thumbnail from '../../assets/forest7774205Thumbnail.webp';
import ginkgo8037886Thumbnail from '../../assets/ginkgo8037886Thumbnail.webp';
import hyacinths8435741Thumbnail from '../../assets/hyacinths8435741Thumbnail.webp';
import lake7925872Thumbnail from '../../assets/lake7925872Thumbnail.webp';
import landscape6724639Thumbnail from '../../assets/landscape6724639Thumbnail.webp';
import leaves8413064Thumbnail from '../../assets/leaves8413064Thumbnail.webp';
import mapOfTheWorld2401458Thumbnail from '../../assets/mapOfTheWorld2401458Thumbnail.webp';
import meadow8071932Thumbnail from '../../assets/meadow8071932Thumbnail.webp';
import milkyWay8149815Thumbnail from '../../assets/milkyWay8149815Thumbnail.webp';
import mountain8433234Thumbnail from '../../assets/mountain8433234Thumbnail.webp';
import mountains3324569Thumbnail from '../../assets/mountains3324569Thumbnail.webp';
import mountains3699372Thumbnail from '../../assets/mountains3699372Thumbnail.webp';
import mountains6839521Thumbnail from '../../assets/mountains6839521Thumbnail.webp';
import ocean3605547Thumbnail from '../../assets/ocean3605547Thumbnail.webp';
import plumage176723Thumbnail from '../../assets/plumage176723Thumbnail.webp';
import sea8622735Thumbnail from '../../assets/sea8622735Thumbnail.webp';
import spiderWeb3725540Thumbnail from '../../assets/spiderWeb3725540Thumbnail.webp';
import tilesShapes2617112Thumbnail from '../../assets/tilesShapes2617112Thumbnail.webp';
import trees8512979Thumbnail from '../../assets/trees8512979Thumbnail.webp';
import water1330252Thumbnail from '../../assets/water1330252Thumbnail.webp';
import water8183918Thumbnail from '../../assets/water8183918Thumbnail.webp';
import waterColor5062356Thumbnail from '../../assets/waterColor5062356Thumbnail.webp';
import wood1108307Thumbnail from '../../assets/wood1108307Thumbnail.webp';

import '../../css/windowPieces/SpPreferencePaneBackground.css';

export default function SpPreferencePaneBackground(){
	const {user, setUser}=useContext(UserContext);
	const handleUserPreferenceChange=(name)=>(e)=>{useHandleUserPreferenceChange(name, e, setUser)};
	return(
		<div
			className='sp-window-preference-pane-background'
			id='sp-window-preference-pane-background'
		>
			<div
				className='sp-window-preference-pane-background-thumbnails-header'
			>
				Choose a background for your desktop:
			</div>
			<div
				className='sp-window-preference-pane-background-thumbnails'
			>
				<button
					className={`wallpaper-button ${user.wallpaper==='astronomy1867616Thumbnail' && 'button-selected'}`}
					type='button'
					onClick={handleUserPreferenceChange('astronomy1867616Thumbnail')}
				>
					<img
						className='wallpaper-button-image'
						src={astronomy1867616Thumbnail}
					/>
				</button>
				<button
					className={`wallpaper-button ${user.wallpaper==='background7275953Thumbnail' && 'button-selected'}`}
					type='button'
					onClick={handleUserPreferenceChange('background7275953Thumbnail')}
				>
					<img
						className='wallpaper-button-image'
						src={background7275953Thumbnail}
					/>
				</button>
				<button
					className={`wallpaper-button ${user.wallpaper==='background7577472Thumbnail' && 'button-selected'}`}
					type='button'
					onClick={handleUserPreferenceChange('background7577472Thumbnail')}
				>
					<img
						className='wallpaper-button-image'
						src={background7577472Thumbnail}
					/>
				</button>
				<button
					className={`wallpaper-button ${user.wallpaper==='blueBackground7470781Thumbnail' && 'button-selected'}`}
					type='button'
					onClick={handleUserPreferenceChange('blueBackground7470781Thumbnail')}
				>
					<img
						className='wallpaper-button-image'
						src={blueBackground7470781Thumbnail}
					/>
				</button>
				<button
					className={`wallpaper-button ${user.wallpaper==='colvers8173610Thumbnail' && 'button-selected'}`}
					type='button'
					onClick={handleUserPreferenceChange('colvers8173610Thumbnail')}
				>
					<img
						className='wallpaper-button-image'
						src={colvers8173610Thumbnail}
					/>
				</button>
				<button
					className={`wallpaper-button ${user.wallpaper==='cosmos6693008Thumbnail' && 'button-selected'}`}
					type='button'
					onClick={handleUserPreferenceChange('cosmos6693008Thumbnail')}
				>
					<img
						className='wallpaper-button-image'
						src={cosmos6693008Thumbnail}
					/>
				</button>
				<button
					className={`wallpaper-button ${user.wallpaper==='crownAnemone6157488Thumbnail' && 'button-selected'}`}
					type='button'
					onClick={handleUserPreferenceChange('crownAnemone6157488Thumbnail')}
				>
					<img
						className='wallpaper-button-image'
						src={crownAnemone6157488Thumbnail}
					/>
				</button>
				<button
					className={`wallpaper-button ${user.wallpaper==='flower5768092Thumbnail' && 'button-selected'}`}
					type='button'
					onClick={handleUserPreferenceChange('flower5768092Thumbnail')}
				>
					<img
						className='wallpaper-button-image'
						src={flower5768092Thumbnail}
					/>
				</button>
				<button
					className={`wallpaper-button ${user.wallpaper==='flower7383299Thumbnail' && 'button-selected'}`}
					type='button'
					onClick={handleUserPreferenceChange('flower7383299Thumbnail')}
				>
					<img
						className='wallpaper-button-image'
						src={flower7383299Thumbnail}
					/>
				</button>
				<button
					className={`wallpaper-button ${user.wallpaper==='flower8155370Thumbnail' && 'button-selected'}`}
					type='button'
					onClick={handleUserPreferenceChange('flower8155370Thumbnail')}
				>
					<img
						className='wallpaper-button-image'
						src={flower8155370Thumbnail}
					/>
				</button>
				<button
					className={`wallpaper-button ${user.wallpaper==='flowers2708995Thumbnail' && 'button-selected'}`}
					type='button'
					onClick={handleUserPreferenceChange('flowers2708995Thumbnail')}
				>
					<img
						className='wallpaper-button-image'
						src={flowers2708995Thumbnail}
					/>
				</button>
				<button
					className={`wallpaper-button ${user.wallpaper==='flowers7182930Thumbnail' && 'button-selected'}`}
					type='button'
					onClick={handleUserPreferenceChange('flowers7182930Thumbnail')}
				>
					<img
						className='wallpaper-button-image'
						src={flowers7182930Thumbnail}
					/>
				</button>
				<button
					className={`wallpaper-button ${user.wallpaper==='flowers8309995Thumbnail' && 'button-selected'}`}
					type='button'
					onClick={handleUserPreferenceChange('flowers8309995Thumbnail')}
				>
					<img
						className='wallpaper-button-image'
						src={flowers8309995Thumbnail}
					/>
				</button>
				<button
					className={`wallpaper-button ${user.wallpaper==='forest7774205Thumbnail' && 'button-selected'}`}
					type='button'
					onClick={handleUserPreferenceChange('forest7774205Thumbnail')}
				>
					<img
						className='wallpaper-button-image'
						src={forest7774205Thumbnail}
					/>
				</button>
				<button
					className={`wallpaper-button ${user.wallpaper==='ginkgo8037886Thumbnail' && 'button-selected'}`}
					type='button'
					onClick={handleUserPreferenceChange('ginkgo8037886Thumbnail')}
				>
					<img
						className='wallpaper-button-image'
						src={ginkgo8037886Thumbnail}
					/>
				</button>
				<button
					className={`wallpaper-button ${user.wallpaper==='hyacinths8435741Thumbnail' && 'button-selected'}`}
					type='button'
					onClick={handleUserPreferenceChange('hyacinths8435741Thumbnail')}
				>
					<img
						className='wallpaper-button-image'
						src={hyacinths8435741Thumbnail}
					/>
				</button>
				<button
					className={`wallpaper-button ${user.wallpaper==='lake7925872Thumbnail' && 'button-selected'}`}
					type='button'
					onClick={handleUserPreferenceChange('lake7925872Thumbnail')}
				>
					<img
						className='wallpaper-button-image'
						src={lake7925872Thumbnail}
					/>
				</button>
				<button
					className={`wallpaper-button ${user.wallpaper==='landscape6724639Thumbnail' && 'button-selected'}`}
					type='button'
					onClick={handleUserPreferenceChange('landscape6724639Thumbnail')}
				>
					<img
						className='wallpaper-button-image'
						src={landscape6724639Thumbnail}
					/>
				</button>
				<button
					className={`wallpaper-button ${user.wallpaper==='leaves8413064Thumbnail' && 'button-selected'}`}
					type='button'
					onClick={handleUserPreferenceChange('leaves8413064Thumbnail')}
				>
					<img
						className='wallpaper-button-image'
						src={leaves8413064Thumbnail}
					/>
				</button>
				<button
					className={`wallpaper-button ${user.wallpaper==='mapOfTheWorld2401458Thumbnail' && 'button-selected'}`}
					type='button'
					onClick={handleUserPreferenceChange('mapOfTheWorld2401458Thumbnail')}
				>
					<img
						className='wallpaper-button-image'
						src={mapOfTheWorld2401458Thumbnail}
					/>
				</button>
				<button
					className={`wallpaper-button ${user.wallpaper==='meadow8071932Thumbnail' && 'button-selected'}`}
					type='button'
					onClick={handleUserPreferenceChange('meadow8071932Thumbnail')}
				>
					<img
						className='wallpaper-button-image'
						src={meadow8071932Thumbnail}
					/>
				</button>
				<button
					className={`wallpaper-button ${user.wallpaper==='milkyWay8149815Thumbnail' && 'button-selected'}`}
					type='button'
					onClick={handleUserPreferenceChange('milkyWay8149815Thumbnail')}
				>
					<img
						className='wallpaper-button-image'
						src={milkyWay8149815Thumbnail}
					/>
				</button>
				<button
					className={`wallpaper-button ${user.wallpaper==='mountain8433234Thumbnail' && 'button-selected'}`}
					type='button'
					onClick={handleUserPreferenceChange('mountain8433234Thumbnail')}
				>
					<img
						className='wallpaper-button-image'
						src={mountain8433234Thumbnail}
					/>
				</button>
				<button
					className={`wallpaper-button ${user.wallpaper==='mountains3324569Thumbnail' && 'button-selected'}`}
					type='button'
					onClick={handleUserPreferenceChange('mountains3324569Thumbnail')}
				>
					<img
						className='wallpaper-button-image'
						src={mountains3324569Thumbnail}
					/>
				</button>
				<button
					className={`wallpaper-button ${user.wallpaper==='mountains3699372Thumbnail' && 'button-selected'}`}
					type='button'
					onClick={handleUserPreferenceChange('mountains3699372Thumbnail')}
				>
					<img
						className='wallpaper-button-image'
						src={mountains3699372Thumbnail}
					/>
				</button>
				<button
					className={`wallpaper-button ${user.wallpaper==='mountains6839521Thumbnail' && 'button-selected'}`}
					type='button'
					onClick={handleUserPreferenceChange('mountains6839521Thumbnail')}
				>
					<img
						className='wallpaper-button-image'
						src={mountains6839521Thumbnail}
					/>
				</button>
				<button
					className={`wallpaper-button ${user.wallpaper==='ocean3605547Thumbnail' && 'button-selected'}`}
					type='button'
					onClick={handleUserPreferenceChange('ocean3605547Thumbnail')}
				>
					<img
						className='wallpaper-button-image'
						src={ocean3605547Thumbnail}
					/>
				</button>
				<button
					className={`wallpaper-button ${user.wallpaper==='plumage176723Thumbnail' && 'button-selected'}`}
					type='button'
					onClick={handleUserPreferenceChange('plumage176723Thumbnail')}
				>
					<img
						className='wallpaper-button-image'
						src={plumage176723Thumbnail}
					/>
				</button>
				<button
					className={`wallpaper-button ${user.wallpaper==='sea8622735Thumbnail' && 'button-selected'}`}
					type='button'
					onClick={handleUserPreferenceChange('sea8622735Thumbnail')}
				>
					<img
						className='wallpaper-button-image'
						src={sea8622735Thumbnail}
					/>
				</button>
				<button
					className={`wallpaper-button ${user.wallpaper==='spiderWeb3725540Thumbnail' && 'button-selected'}`}
					type='button'
					onClick={handleUserPreferenceChange('spiderWeb3725540Thumbnail')}
				>
					<img
						className='wallpaper-button-image'
						src={spiderWeb3725540Thumbnail}
					/>
				</button>
				<button
					className={`wallpaper-button ${user.wallpaper==='tilesShapes2617112Thumbnail' && 'button-selected'}`}
					type='button'
					onClick={handleUserPreferenceChange('tilesShapes2617112Thumbnail')}
				>
					<img
						className='wallpaper-button-image'
						src={tilesShapes2617112Thumbnail}
					/>
				</button>
				<button
					className={`wallpaper-button ${user.wallpaper==='trees8512979Thumbnail' && 'button-selected'}`}
					type='button'
					onClick={handleUserPreferenceChange('trees8512979Thumbnail')}
				>
					<img
						className='wallpaper-button-image'
						src={trees8512979Thumbnail}
					/>
				</button>
				<button
					className={`wallpaper-button ${user.wallpaper==='water1330252Thumbnail' && 'button-selected'}`}
					type='button'
					onClick={handleUserPreferenceChange('water1330252Thumbnail')}
				>
					<img
						className='wallpaper-button-image'
						src={water1330252Thumbnail}
					/>
				</button>
				<button
					className={`wallpaper-button ${user.wallpaper==='water8183918Thumbnail' && 'button-selected'}`}
					type='button'
					onClick={handleUserPreferenceChange('water8183918Thumbnail')}
				>
					<img
						className='wallpaper-button-image'
						src={water8183918Thumbnail}
					/>
				</button>
				<button
					className={`wallpaper-button ${user.wallpaper==='waterColor5062356Thumbnail' && 'button-selected'}`}
					type='button'
					onClick={handleUserPreferenceChange('waterColor5062356Thumbnail')}
				>
					<img
						className='wallpaper-button-image'
						src={waterColor5062356Thumbnail}
					/>
				</button>
				<button
					className={`wallpaper-button ${user.wallpaper==='wood1108307Thumbnail' && 'button-selected'}`}
					type='button'
					onClick={handleUserPreferenceChange('wood1108307Thumbnail')}
				>
					<img
						className='wallpaper-button-image'
						src={wood1108307Thumbnail}
					/>
				</button>
			</div>
		</div>
	);
};
