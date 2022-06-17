import React from 'react';

import error from './assets/img/error_small.png';
import valid from './assets/img/valid_small.png';
import work from './assets/img/work_small.png';
import warning from './assets/img/warning_small.png';
import futureWork from './assets/img/futur_work_small.png';
import interogation from './assets/img/interogation_small.png';

import RER_A from './assets/img/idfm/lines_small_dark/RER_A.png';
import RER_B from './assets/img/idfm/lines_small_dark/RER_B.png';
import RER_C from './assets/img/idfm/lines_small_dark/RER_C.png';
import RER_D from './assets/img/idfm/lines_small_dark/RER_D.png';
import RER_E from './assets/img/idfm/lines_small_dark/RER_E.png';
import TRAIN_H from './assets/img/idfm/lines_small_dark/TRAIN_H.png';
import TRAIN_J from './assets/img/idfm/lines_small_dark/TRAIN_J.png';
import TRAIN_K from './assets/img/idfm/lines_small_dark/TRAIN_K.png';
import TRAIN_L from './assets/img/idfm/lines_small_dark/TRAIN_L.png';
import TRAIN_N from './assets/img/idfm/lines_small_dark/TRAIN_N.png';
import TRAIN_P from './assets/img/idfm/lines_small_dark/TRAIN_P.png';
import TRAIN_R from './assets/img/idfm/lines_small_dark/TRAIN_R.png';
import TRAIN_U from './assets/img/idfm/lines_small_dark/TRAIN_U.png';
import TRAM_1 from './assets/img/idfm/lines_small_dark/TRAM_1.png';
import TRAM_2 from './assets/img/idfm/lines_small_dark/TRAM_2.png';
import TRAM_3A from './assets/img/idfm/lines_small_dark/TRAM_3A.png';
import TRAM_3B from './assets/img/idfm/lines_small_dark/TRAM_3B.png';
import TRAM_4 from './assets/img/idfm/lines_small_dark/TRAM_4.png';
import TRAM_5 from './assets/img/idfm/lines_small_dark/TRAM_5.png';
import TRAM_6 from './assets/img/idfm/lines_small_dark/TRAM_6.png';
import TRAM_7 from './assets/img/idfm/lines_small_dark/TRAM_7.png';
import TRAM_8 from './assets/img/idfm/lines_small_dark/TRAM_8.png';
import TRAM_9 from './assets/img/idfm/lines_small_dark/TRAM_9.png';
import TRAM_10 from './assets/img/idfm/lines_small_dark/TRAM_10.png';
import TRAM_11 from './assets/img/idfm/lines_small_dark/TRAM_11.png';
import TRAM_12 from './assets/img/idfm/lines_small_dark/TRAM_12.png';
import TRAM_13 from './assets/img/idfm/lines_small_dark/TRAM_13.png';
import METRO_1 from './assets/img/idfm/lines_small_dark/METRO_1.png';
import METRO_2 from './assets/img/idfm/lines_small_dark/METRO_2.png';
import METRO_3 from './assets/img/idfm/lines_small_dark/METRO_3.png';
import METRO_3B from './assets/img/idfm/lines_small_dark/METRO_3B.png';
import METRO_4 from './assets/img/idfm/lines_small_dark/METRO_4.png';
import METRO_5 from './assets/img/idfm/lines_small_dark/METRO_5.png';
import METRO_6 from './assets/img/idfm/lines_small_dark/METRO_6.png';
import METRO_7 from './assets/img/idfm/lines_small_dark/METRO_7.png';
import METRO_7B from './assets/img/idfm/lines_small_dark/METRO_7B.png';
import METRO_8 from './assets/img/idfm/lines_small_dark/METRO_8.png';
import METRO_9 from './assets/img/idfm/lines_small_dark/METRO_9.png';
import METRO_10 from './assets/img/idfm/lines_small_dark/METRO_10.png';
import METRO_11 from './assets/img/idfm/lines_small_dark/METRO_11.png';
import METRO_12 from './assets/img/idfm/lines_small_dark/METRO_12.png';
import METRO_13 from './assets/img/idfm/lines_small_dark/METRO_13.png';
import METRO_14 from './assets/img/idfm/lines_small_dark/METRO_14.png';
import METRO_15 from './assets/img/idfm/lines_small_dark/METRO_15.png';
import METRO_16 from './assets/img/idfm/lines_small_dark/METRO_16.png';
import METRO_17 from './assets/img/idfm/lines_small_dark/METRO_17.png';
import METRO_18 from './assets/img/idfm/lines_small_dark/METRO_18.png';

class Trafic extends React.Component  {  
	render(){
		return(
			<div className="Trafic">
			<div>
				<RATP_trafic
					key = {'rera'}
					line = {'A'}
					name = {'RER A'}
					trafics = {this.props.ratp.rers}
					type = 'TRAM'
					img = {RER_A}
				/>
				<RATP_trafic
					key = {'rerb'}
					line = {'B'}
					name = {'RER B'}
					trafics = {this.props.ratp.rers}
					type = 'TRAM'
					img = {RER_B}
				/>
				<SNCF_trafic
					key = {'rerc'}
					line = {'RER_C'}
					name = {'RER C'}
					trafics = {this.props.transilien}
					type = 'RER'
					img = {RER_C}
				/>
				<SNCF_trafic
					key = {'rerd'}
					line = {'RER_D'}
					name = {'RER D'}
					trafics = {this.props.transilien}
					type = 'RER'
					img = {RER_D}
				/>
				<SNCF_trafic
					key = {'rere'}
					line = {'RER_E'}
					name = {'RER E'}
					trafics = {this.props.transilien}
					type = 'RER'
					img = {RER_E}
				/>
			</div>
			<div>
				<RATP_trafic
					key = {'m1'}
					line = {'1'}
					name = {'Métro 1'}
					trafics = {this.props.ratp.metros}
					type = 'METRO'
					img = {METRO_1}
				/>
				<RATP_trafic
					key = {'m2'}
					line = {'2'}
					name = {'Métro 2'}
					trafics = {this.props.ratp.metros}
					type = 'METRO'
					img = {METRO_2}
				/>
				<RATP_trafic
					key = {'m3'}
					line = {'3'}
					name = {'Métro 3'}
					trafics = {this.props.ratp.metros}
					type = 'METRO'
					img = {METRO_3}
				/>
				<RATP_trafic
					key = {'m3b'}
					line = {'3B'}
					name = {'Métro 3bis'}
					trafics = {this.props.ratp.metros}
					type = 'METRO'
					img = {METRO_3B}
				/>
				<RATP_trafic
					key = {'m4'}
					line = {'4'}
					name = {'Métro 4'}
					trafics = {this.props.ratp.metros}
					type = 'METRO'
					img = {METRO_4}
				/>
				<RATP_trafic
					key = {'m5'}
					line = {'5'}
					name = {'Métro 5'}
					trafics = {this.props.ratp.metros}
					type = 'METRO'
					img = {METRO_5}
				/>
				<RATP_trafic
					key = {'m6'}
					line = {'6'}
					name = {'Métro 6'}
					trafics = {this.props.ratp.metros}
					type = 'METRO'
					img = {METRO_6}
				/>
				<RATP_trafic
					key = {'m7'}
					line = {'7'}
					name = {'Métro 7'}
					trafics = {this.props.ratp.metros}
					type = 'METRO'
					img = {METRO_7}
				/>
				<RATP_trafic
					key = {'m7b'}
					line = {'7B'}
					name = {'Métro 7bis'}
					trafics = {this.props.ratp.metros}
					type = 'METRO'
					img = {METRO_7B}
				/>
				<RATP_trafic
					key = {'m8'}
					line = {'8'}
					name = {'Métro 8'}
					trafics = {this.props.ratp.metros}
					type = 'METRO'
					img = {METRO_8}
				/>
				<RATP_trafic
					key = {'m9'}
					line = {'9'}
					name = {'Métro 9'}
					trafics = {this.props.ratp.metros}
					type = 'METRO'
					img = {METRO_9}
				/>
				<RATP_trafic
					key = {'m10'}
					line = {'10'}
					name = {'Métro 10'}
					trafics = {this.props.ratp.metros}
					type = 'METRO'
					img = {METRO_10}
				/>
				<RATP_trafic
					key = {'m11'}
					line = {'11'}
					name = {'Métro 11'}
					trafics = {this.props.ratp.metros}
					type = 'METRO'
					img = {METRO_11}
				/>
				<RATP_trafic
					key = {'m12'}
					line = {'12'}
					name = {'Métro 12'}
					trafics = {this.props.ratp.metros}
					type = 'METRO'
					img = {METRO_12}
				/>
				<RATP_trafic
					key = {'m13'}
					line = {'13'}
					name = {'Métro 13'}
					trafics = {this.props.ratp.metros}
					type = 'METRO'
					img = {METRO_13}
				/>
				<RATP_trafic
					key = {'m14'}
					line = {'14'}
					name = {'Métro 14'}
					trafics = {this.props.ratp.metros}
					type = 'METRO'
					img = {METRO_14}
				/>	
			</div>
			<div>
                <RATP_trafic
                  key = {'t1'}
                  line = {'1'}
                  name = {'Tram T1'}
                  trafics = {this.props.ratp.tramways}
                  type = 'METRO'
                  img = {TRAM_1}
                />
                <RATP_trafic
                  key = {'t2'}
                  line = {'2'}
                  name = {'Tram T2'}
                  trafics = {this.props.ratp.tramways}
                  type = 'METRO'
                  img = {TRAM_2}
                />
                <RATP_trafic
                  key = {'t3a'}
                  line = {'3A'}
                  name = {'Tram T3a'}
                  trafics = {this.props.ratp.tramways}
                  type = 'METRO'
                  img = {TRAM_3A}
                />
                <RATP_trafic
                  key = {'t3b'}
                  line = {'3B'}
                  name = {'Tram T3b'}
                  trafics = {this.props.ratp.tramways}
                  type = 'METRO'
                  img = {TRAM_3B}
                />
                <RATP_trafic
                  key = {'t4'}
                  line = {'4'}
                  name = {'Tram T4'}
                  trafics = {this.props.ratp.tramways}
                  type = 'METRO'
                  img = {TRAM_4}
                />
                <RATP_trafic
                  key = {'t5'}
                  line = {'5'}
                  name = {'Tram T5'}
                  trafics = {this.props.ratp.tramways}
                  type = 'METRO'
                  img = {TRAM_5}
                />
                <RATP_trafic
                  key = {'t6'}
                  line = {'6'}
                  name = {'Tram T6'}
                  trafics = {this.props.ratp.tramways}
                  type = 'METRO'
                  img = {TRAM_6}
                />
                <RATP_trafic
                  key = {'t7'}
                  line = {'7'}
                  name = {'Tram T7'}
                  trafics = {this.props.ratp.tramways}
                  type = 'METRO'
                  img = {TRAM_7}
                />
                <RATP_trafic
                  key = {'t8'}
                  line = {'8'}
                  name = {'Tram T8'}
                  trafics = {this.props.ratp.tramways}
                  type = 'METRO'
                  img = {TRAM_8}
                />
                <SNCF_trafic
                  key = {'t9'}
                  line = {'TRAM_T9'}
                  name = {'Tram T9'}
                  trafics = {this.props.transilien}
                  type = 'TRAM'
                  img = {TRAM_9}
                />
                <SNCF_trafic
                  key = {'t11'}
                  line = {'TRAM_T11'}
                  name = {'Tram T11 Express'}
                  trafics = {this.props.transilien}
                  type = 'TRAM'
                  img = {TRAM_11}
                />
				<SNCF_trafic
                  key = {'t13'}
                  line = {'TRAM_T13'}
                  name = {'Tram T13 Express'}
                  trafics = {this.props.transilien}
                  type = 'TRAM'
                  img = {TRAM_13}
                />
              </div>

              <div>
                <SNCF_trafic
                  key = {'trainH'}
                  line = {'TRAIN_H'}
                  name = {'Transilien H'}
                  trafics = {this.props.transilien}
                  type = 'TRAIN'
                  img = {TRAIN_H}
                />
                <SNCF_trafic
                  key = {'trainJ'}
                  line = {'TRAIN_J'}
                  name = {'Transilien J'}
                  trafics = {this.props.transilien}
                  type = 'TRAIN'
                  img = {TRAIN_J}
                />
                <SNCF_trafic
                  key = {'trainK'}
                  line = {'TRAIN_K'}
                  name = {'Transilien K'}
                  trafics = {this.props.transilien}
                  type = 'TRAIN'
                  img = {TRAIN_K}
                />
                <SNCF_trafic
                  key = {'trainL'}
                  line = {'TRAIN_L'}
                  name = {'Transilien L'}
                  trafics = {this.props.transilien}
                  type = 'TRAIN'
                  img = {TRAIN_L}
                />
                <SNCF_trafic
                  key = {'trainN'}
                  line = {'TRAIN_N'}
                  name = {'Transilien N'}
                  trafics = {this.props.transilien}
                  type = 'TRAIN'
                  img = {TRAIN_N}
                />
                <SNCF_trafic
                  key = {'trainP'}
                  line = {'TRAIN_P'}
                  name = {'Transilien P'}
                  trafics = {this.props.transilien}
                  type = 'TRAIN'
                  img = {TRAIN_P}
                />
                <SNCF_trafic
                  key = {'trainR'}
                  line = {'TRAIN_R'}
                  name = {'Transilien R'}
                  trafics = {this.props.transilien}
                  type = 'TRAIN'
                  img = {TRAIN_R}
                />
                <SNCF_trafic
                  key = {'trainU'}
                  line = {'TRAIN_U'}
                  name = {'Transilien U'}
                  trafics = {this.props.transilien}
                  type = 'TRAIN'
                  img = {TRAIN_U}
                  
                />
            </div>
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
  
	  } else if (trafic.currentWorksDisruptionsCount == 0 && trafic.hasWorksDisruptions == true) {
		color = 'slug0';
		typeImg = futureWork;
  
	  } else if (trafic.currentTrafficDisruptionsCount == 0 && trafic.currentWorksDisruptionsCount == 0 ) {
		color = 'slug0';
		return (
			<span className={'trafic_block ' + color}>
				  <img src={img} className='img' />
				<span className='trafic_img' ></span>
			</span>
		);
  
	  } else {
		color = 'slug0';
		typeImg = interogation;
	  }
	} else {
	  color = 'slug0';
	  typeImg = interogation
	}
  
	return (
		<span className={'trafic_block ' + color}>
	  		<img src={img} className='img' />
			<img src={typeImg} className='trafic_img' />
		</span>
	);
}
function RATP_trafic ({ line, trafics, name, type, img })  {
	let color;
	let trafic = [];
	let typeImg;
  
	if (typeof trafics !== "undefined"){
	  for(var i = 0; i < trafics.length; i++){
		if (trafics[i].line == line){
		  trafic = trafics[i];
		  break;
		}
	  }
  
	  if (trafic.slug == 'critical') {
		color = 'slug1'; 
		typeImg = error;
  
	  } else if (trafic.slug == 'alerte') {
		color = 'slug2';
		typeImg = warning;
  
	  } else if (trafic.slug == 'normal_trav') {
		color = 'slug2';
		typeImg = work;
  
	  } else if (trafic.slug == 'normal') {
		color = 'slug0';
		return (
			<span className={'trafic_block ' + color}>
				  <img src={img} className='img' />
				<span className='trafic_img' ></span>
			</span>
		);
  
	  } else {
		color = 'slug0';
		typeImg = interogation
	  }
	} else {
	  color = 'slug0';
	  typeImg = interogation
	} 
  
	return (
		<span className={'trafic_block ' + color}>
	  		<img src={img} className='img' />
			<img src={typeImg} className='trafic_img' />
		</span>
	);
}

export default Trafic;
