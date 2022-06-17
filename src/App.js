import React, { cloneElement } from 'react';

import Trafic from './Trafic';
import Trafic_det from './Trafic_det';
import Webcam from './Webcam';
import Train from './Train';
import Night from './Night';
import Weather, {Home, Graph} from './Weather';
import Clock from './Clock';

import wind from './assets/img/weather/wind.png';
import wet from './assets/img/weather/wet.png';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			force: false,
		};

		this.force = this.force.bind(this);
		this.restore_force = this.restore_force.bind(this);
		this.tick = this.tick.bind(this);
	}
	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}	
	componentWillUnmount() {
		clearInterval(this.timerID);
	}
	tick() {
		let date = new Date();

		this.setState({
			hour: date.getHours()
		});
	}
	force() {
		if (this.timeout) clearTimeout(this.timeout);

		this.setState({
			force: true
		})

		this.timeout = setTimeout(
			() => this.restore_force(),
			1000 * 60 * 3
		);
	}
	restore_force(){
		this.setState({
			force: false
		})
	}
	
	render(){
		return(
			<>
				{ (this.state.hour < 6 || this.state.hour >= 23 ) && this.state.force == true ? 
					<div onClick={this.force}  >
						<Night />
					</div>
				:
					<>
						<Default />
					</>
				}
			</>
		)
	}
}
class Default extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			timer: 0,

			ratp: [],
			transilien: [],

			trains: [],

			error: '',

			weather_data: [],
			weather: false,

			coord_lat: '',
			coord_lon: '',
		};
		this.getRATPTrafic = this.getRATPTrafic.bind(this);
		this.getSNCFTrafic = this.getSNCFTrafic.bind(this);

		this.getPos = this.getPos.bind(this);
		this.getWeather = this.getWeather.bind(this);
		this.getTrain = this.getTrain.bind(this);
	}
	componentDidMount(){
		this.getRATPTrafic();
		this.getSNCFTrafic();
		this.getTrain();
		this.getPos();

		this.intervalTimer = setInterval(
			() => this.timer(),
			50
		);

		this.intervalSNCF = setInterval(
			() => this.getSNCFTrafic(),
			1000 * 60 * 3
		);
		this.intervalRATP = setInterval(
			() => this.getRATPTrafic(),
			1000 * 60 * 3
		);
		this.intervalTrain = setInterval(
			() => this.getTrain(),
			1000 * 60 * 2
		);

		this.intervalWeather = setInterval(
			() => this.getWeather(),
			1000 * 60 * 60
		);
	}
	componentWillUnmount() {
		clearInterval(this.intervalTimer);
		clearInterval(this.intervalSNCF);
		clearInterval(this.intervalRATP);
		clearInterval(this.intervalTrain);
		clearInterval(this.intervalWeather);
	}
	timer() {
		if (this.state.timer > 1000 * 80){
			this.setState({
				timer: 0
			});
		} else {
			this.setState({
				timer: this.state.timer + 50
			});
		}
	}
	getRATPTrafic() {
		// RATP uniquement
		let url = 'https://api-ratp.pierre-grimaud.fr/v4/traffic';
				
		fetch(url)
		.then(res => res.json())
		.then(data => {
			this.setState({
				ratp: data.result
			});
		})
		.catch(err => {
			this.setState({
				ratp: []
			}); 
		});
	}
	getSNCFTrafic(){
		// SNCF
		let url = 'https://api.mylines.fr/transilien_trafic.php';
			  
		fetch(url)
		.then(res => res.json())
		.then(data => {
			this.setState({
				transilien: data.allPerturbationsByLine
			});
		})
		.catch(err => {
			this.setState({
				transilien: []
			}); 
		});
	}
	getPos(){
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(this.getWeather);
		} else { 
			this.setState({
				weather: false
			});
		}
	}
	getWeather(position) {
		let lat, lon;

		if (position){
			this.setState({
				coord_lat: position.coords.latitude,
				coord_lon: position.coords.longitude,
			});
			lat = position.coords.latitude;
			lon = position.coords.longitude; 
		} else {
			lat = this.state.coord_lat;
			lon = this.state.coord_lon; 
		}

		// lat = 43.60651;
		// lon = 1.436278;

		const apiweather = 'cae48bb986ca0b124c0b599662760374';
		let url = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' +  lon + '&appid=' + apiweather + '&units=metric&lang=fr';

		const headers = new Headers();
		headers.append('Accept', 'application/json');
				
		fetch(url, {
			method: 'GET',
			headers: headers,
		})
		.then(res => res.json())
		.then(data => {
			this.setState({
				weather_data: data,
				weather: true
			});
		})
		.catch(err => {
			this.setState({
				weather: false
			}); 
		});
	}
	getTrain() {
        const stop = '87393421';
		const key = 'Jjkbsv6VaA8Euavu';
        const url = 'https://api.mylines.fr/sncf/departure.php?stop=' + stop + '&key=' + key;
        
		fetch(url, {
            method: 'get'
        })
        .then(res => res.json())
        .then(data => {
            if (data.error && data.error == '200') {
                this.setState({
                    error: 'Récupération des trains impossible.'
                }); 
            } else if (data.error) {
                this.setState({
                    error: data.error_message,
                }); 
            } 

            this.setState({
				trains: data.trains
			});
            
        })
        .catch(err => {
            this.setState({
                error: 'Récupération des trains impossible.'
            }); 
        });
	}
		
	render(){
		return(
			<>
				<Clock />
					
				{ this.state.timer < 1000 * 15 ?
					<>
						<Weather 
							weather = {this.state.weather}
							weather_data = {this.state.weather_data}
						/>
						<Home
							weather = {this.state.weather}
							weather_data = {this.state.weather_data}
						/>
					</>
					:
					<>
						{ this.state.timer < 1000 * 30 ?
							<>
								<Weather 
									weather = {this.state.weather}
									weather_data = {this.state.weather_data}
								/>
								<Graph
									weather = {this.state.weather}
									weather_data = {this.state.weather_data}
								/>
							</>
							:
							<>
								{ this.state.timer < 1000 * 45 ?
									<>
										<Trafic_det
											ratp = {this.state.ratp}
											transilien = {this.state.transilien}
										/>
										<Trafic
											ratp = {this.state.ratp}
											transilien = {this.state.transilien}
										/>
									</>
									:
									<>
										{ this.state.timer < 1000 * 60 ?
											<>
												<Trafic_det
													ratp = {this.state.ratp}
													transilien = {this.state.transilien}
												/>
												<Train
													trains = {this.state.trains}
													error = {this.state.error}
												/>
											</>
											:
											<>
												<Webcam />
											</>
										}
									</>
								}
							</>
						}
						
					</>

				}
			</>
			
		);
	}

}


export default App;