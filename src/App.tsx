import React from "react";
import SearchBox from "./components/search-box";
import IconCrystal from "./assets/icons/icon-text-1x.png";
import DarkImage1 from "./assets/background-image/index.png";
import { useEffect, useState } from "react";
import { IoSettings, IoApps } from "react-icons/io5";
import "./assets/stylesheet/tailwind.css";
import "./assets/stylesheet/index.css";
import Settings from "./components/settings";
import Applist from "./components/applist";

function getTime() {
	function dealTime(num: number) {
		return num > 9 ? num + "" : "0" + num;
	}
	let now = new Date();
	let h = now.getHours(),
		m = now.getMinutes(),
		s = now.getSeconds();
	// let text = h > 12 ? "PM" : "AM";
	return dealTime(h) + ":" + dealTime(m) + ":" + dealTime(s) + " ";
}

function App() {
	const closeSettings = () => setopenSettings(false);
	const closeApps = () => setApps(false);
	const [openSettings, setopenSettings] = useState(false);
	const [openApps, setApps] = useState(false);
	const [show, setShow] = useState("00:00:00");
	useEffect(() => {
		const tk = window.setInterval(() => {
			setShow(getTime());
		}, 1000);
		return () => clearInterval(tk);
	}, []);

	return (
		<div>
			<div
				className={`flex justify-between items-center`}
				style={{
					backgroundImage: `url(${DarkImage1})`,
					height: "100vh",
					flexDirection: "column",
					backgroundSize: "cover",
					transition: ".5s ease-in-out",
				}}
			>
				{openSettings ? (
					<div className="h-screen flex justify-center items-center w-screen bg-slate-800/80">
						<Settings close={closeSettings} />
					</div>
				) : openApps ? (
					<div className="h-screen flex justify-center items-center w-screen bg-slate-800/80">
						<Applist close={closeApps} />
					</div>
				) : (
					<>
						<div className="flex flex-row w-screen justify-between items-center">
							<img src={IconCrystal} />
							<div className="flex">
								<span
									onClick={() => setApps(true)}
									className="hover:scale-125 transition duration-500 flex justify-center items-center bg-slate-500/30 h-24 w-24 mr-16 rounded-lg"
								>
									<IoApps className="scale-b" />
								</span>
								<span
									onClick={() => setopenSettings(true)}
									className="hover:scale-125 transition duration-500 flex justify-center items-center bg-slate-500/30 h-24 w-24 mr-16 rounded-lg"
								>
									<IoSettings className="scale-b" />
								</span>
							</div>
						</div>
						<div className="h-screen flex justify-center items-center flex-col mb-8">
							<span className="text-6xl m-8 text-slate-400/60 drop-shadow-2xl font-semibold">{show}</span>
							<SearchBox />
						</div>
					</>
				)}
			</div>
		</div>
	);
}

export default App;
