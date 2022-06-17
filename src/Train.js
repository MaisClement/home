import React from 'react';

import error from './assets/img/error.png';
import valid from './assets/img/valid.png';
import warning from './assets/img/warning.png';
import interogation from './assets/img/interogation.png';
import maintenance from './assets/img/maintenance.png';

class Trains extends React.Component  {  
	render(){
		return(
			<div className="Départ">

            {this.props.trains ?
                <>
                    {this.props.trains.slice(0, 6).map((train, i) => (
                        <Train 
                            key = {i} 
                            train = {train}
                            number = {i}
                        />
                    ))}
                </>
                    :
                <>
                    <div className='maintenance'>
                        <img src={maintenance}/>
                            <br/>
                        <b>Quelque chose s'est mal passé</b>
                        {this.props.error ?
                            <>
                                <br/>
                                {this.props.error}
                            </>
                        :
                            <></>
                        }    
                    </div>
                </>
            }
                

			</div>
  		)
	}
}

class Train extends React.Component {
	render(){
        if (typeof this.props.train === 'undefined') {
            return (
                <>
                </>
            );
        }

        let head = this.props.train.informations.direction.name;

        let network = this.props.train.informations.network;
        let code = this.props.train.informations.code;
        let name = this.props.train.informations.trip_name;

        let real_time;
        let base_time;
        let created_base_time;
        
        if (typeof this.props.train.stop_date_time.base_departure_date_time !== 'undefined') {
			created_base_time = createDate(this.props.train.stop_date_time.base_departure_date_time);
			base_time = this.props.train.stop_date_time.base_departure_date_time;
		} else {
			created_base_time = createDate(this.props.train.stop_date_time.departure_date_time);
			base_time = this.props.train.stop_date_time.departure_date_time;
		}
		real_time = this.props.train.stop_date_time.departure_date_time;

        let status = this.props.train.informations.status;
        let message = this.props.train.informations.message;

        let state = getClass(status, message, real_time, base_time);
        let type_img;

        if (state == 'ok')
            type_img = valid;

        else if (state == 'late')
            type_img = warning;

        else if (state == 'deleted')
            type_img = error;

        else
            type_img = interogation;

        return (
            <>
                <div className={getClass(status, message, real_time, base_time)}>
                    <span className="class"><img className='class_img' src={'/class/' + network.trim() + '.png'} alt="Logo service"/></span>
                    <span className="name">{code.substring(0, 4)}</span>
                    <span className="depart">{(created_base_time.getHours() < 10) ? '0' + created_base_time.getHours() : created_base_time.getHours()}:{(created_base_time.getMinutes() < 10) ? '0' + created_base_time.getMinutes() : created_base_time.getMinutes()}</span>
                    <Info real_time={real_time} base_time={base_time} status={status} message={message}/>
                    { this.props.train.stops.length == 2 ?
                        <span className="direct"><b> Direct </b></span>
                        :
                        <></>
                    }
                    <span className="dest">{head}</span>
                    
                </div>
                <img src={type_img} className='trafic_img' />

                <br/>
            </>
        );
	}
}

class Info extends React.Component {
	render(){

        let real_time = this.props.real_time;
        let base_time = this.props.base_time;
        let status = this.props.status;
        let message = this.props.message;

        if (status == 'deleted')
            return ( <span className="trafic_delete"><b> Supprimé </b></span> );

        if (status == 'late')
            return ( <span className="trafic"><b> Retardé </b></span> );

        if (status == 'real_time')
            return ( <span className="trafic"><b> Retardé </b></span> );

        real_time = createDate(real_time);
        base_time = createDate(base_time);
        
        
        if (real_time < base_time) {
            real_time.setDate(real_time.getDate());
        }
        
        var diff = real_time - base_time;
        var msec = diff;
        var hh = Math.floor(msec / 1000 / 60 / 60);
        msec -= hh * 1000 * 60 * 60;
        var mm = Math.floor(msec / 1000 / 60);
        msec -= mm * 1000 * 60;

        if (mm > 0 && hh >= 0){
            if (hh == 0)
                    return ( <span className="trafic"><b> +{mm}’</b> </span> );
                else 
                    return ( <span className="trafic"><b> +{hh}h{mm + hh*60}’</b> </span> );
        } else if (message == 'idf')
            return ( <span className="trafic_info"><b> Théorique </b></span> );
        else
            return ( <></> );
        
	}   
}

function getClass(status, message, real_time, base_time){

    if (status == 'deleted' || status == 'late' || status == 'real_time')
        return "deleted";

    real_time = createDate(real_time);
    base_time = createDate(base_time);
    
    
    if (real_time < base_time) {
        real_time.setDate(real_time.getDate());
    }
    
    var diff = real_time - base_time;
    var msec = diff;
    var hh = Math.floor(msec / 1000 / 60 / 60);
    msec -= hh * 1000 * 60 * 60;
    var mm = Math.floor(msec / 1000 / 60);
    msec -= mm * 1000 * 60;

    if (mm > 0){
        return "late";
    } else if (message == 'idf')
        return 'interrogation'
    else
        return "ok";
}

function createDate(date){
    let el = new Date(date.substring(0, 4), date.substring(4, 6), date.substring(6, 8), date.substring(9, 11), date.substring(11, 13), 0, 0); 
    return el;
}


export default Trains;
