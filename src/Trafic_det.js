import React from 'react';
import {decode} from 'html-entities';

import error from './assets/img/error_small.png';
import warning from './assets/img/warning_small.png';
import work from './assets/img/work_small.png';
import valid from './assets/img/valid_small.png';

import TRAIN_N from './assets/img/idfm/lines_small_dark/TRAIN_N.png';

class Trafic_det extends React.Component  {  
	render(){
		return(
			<div className="App"> 
                <SNCF_trafic
                  key = {'trainN'}
                  line = {'TRAIN_N'}
                  name = {'Transilien N'}
                  trafics = {this.props.transilien}
                  type = 'TRAIN'
                  img = {TRAIN_N}
                />
            </div>
  		)
	}
}

function SNCF_trafic ({ line, trafics, name, type, img })  {
	let color;
	let trafic = [];
	let typeImg;
    
	if (typeof trafics !== "undefined"){
		for(var i = 0; i < trafics.length; i++){
			if (trafics[i].transportLine == line){
			trafic = trafics[i];
			break;
			}
		}
  
		if (trafic.currentTrafficDisruptionsCount > 0) {
			color = 'slug1'; 
			typeImg = error;

		} else if (trafic.currentWorksDisruptionsCount > 0) {
			color = 'slug2';
			typeImg = work;
			return ( 
				<>
					<div className='Trafic_det'>
						<span className={'trafic_block ' + color}>
							<img src={img} className='img' />
							<img src={typeImg} className='trafic_img' />
						</span>
						<b>Travaux sur la ligne</b>
					</div>
				</>
			);
	
		} else {
			color = 'slug3'; 
			typeImg = valid;
			return ( 
				<>
					<div className='Trafic_det'>
						<span className={'trafic_block ' + color}>
							<img src={img} className='img' />
							<img src={typeImg} className='trafic_img' />
						</span>
						<b>Tout roule</b>
					</div>
				</>
			);
		}
	} else {
		return ( <></> );
	}
  
	return (
		<div className='Trafic_det'>
			<span className={'trafic_block ' + color}>
				<img src={img} className='img' />
				<img src={typeImg} className='trafic_img' />
			</span>
			<SNCF_det
				trafic = {trafic}
			/>
		</div>
		
	);
}

function SNCF_det ({trafic}){
	let disruptions = trafic.currentDisruptions;

	return(
		<>
			{disruptions.map((disruption, i) => (
				<>
					{disruption.category == 'TRAFIC' ?
						<>
							
							<SNCF_trim_title
								txt = {disruption.title}
							/>
								<br/>
							<SNCF_trim_detail
								txt = {disruption.detail}
							/>
						</>
						:
						<>
						</>
					}
				</>
			))}
		</>
	)
}

function SNCF_trim_title({txt}){
	let text = txt;

	text = text.replaceAll("Ligne N : ", "");
	text = text.replaceAll("Ligne N :", "");
	text = text.replaceAll("Ligne N:", "");
	text = text.replaceAll("Ligne N", "");

	return(
		<b>{text}</b>
	)
}
function SNCF_trim_detail({txt}){
	let text = txt;
	text = text.replaceAll("<br>", "\n");
	text = text.replace(/(<([^>]+)>)/gi, "");

	return(
		<span className='line'> {decode(text)} </span>
	)
}

export default Trafic_det;
