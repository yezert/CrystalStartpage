import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { SiMicrosoftbing, SiBaidu, SiGoogle } from "react-icons/si";

import "../assets/stylesheet/index.css";
import suggest from "./suggestions";

function App() {
	const val_search = (SearchVal: any) => {
		if (searchEngine === 0) {
			window.location.href = `https://bing.com/search?q=${SearchVal}`;
		} else if (searchEngine === 1) {
			window.location.href = `https://www.baidu.com/s?=baidu&wd=${SearchVal}`;
		} else {
			window.location.href = `https://google.com/search?q=${SearchVal}`;
		}
	};
	const search = () => {
		if (searchEngine === 0) {
			window.location.href = `https://bing.com/search?q=${Search}`;
		} else if (searchEngine === 1) {
			window.location.href = `https://www.baidu.com/s?=baidu&wd=${Search}`;
		} else {
			window.location.href = `https://google.com/search?q=${Search}`;
		}
	};
	const [searchEngine, setSearchEngine] = useState(0);
	const [Search, SetSearch] = useState("");
	const [sugs, setSugs] = useState([]);

	useEffect(() => {
		suggest(Search).then((sugs) => {
			setSugs(sugs);
		});
	}, [Search]);

	return (
		<div className="flex flex-col items-center">
			<form
				className="flex-acenter opacity-70 bg-gradient-to-r from-indigo-200/40 to-slate-300/40 font-semibold text-slate-900/80 transition rounded-full"
				onSubmit={(event) => {
					event.preventDefault();
					if (searchEngine === 0) {
						window.location.href = `https://bing.com/search?q=${Search}`;
					} else if (searchEngine === 1) {
						window.location.href = `https://www.baidu.com/s?=baidu&wd=${Search}`;
					} else {
						window.location.href = `https://google.com/search?q=${Search}`;
					}
				}}
			>
				<input
					id="searchInput"
					value={Search}
					onChange={(e) => SetSearch(e.target.value)}
					className="bg-transparent mx-6 outline-none w-full"
					placeholder="在此处搜索..."
				/>

				<span onClick={search} className="p-4 transition duration-500 hover:scale-150 mr-4">
					<AiOutlineSearch className="scale-150" />
				</span>
			</form>
			<span className="flex  flex-col items-start mt-4 opacity-70 p-2 bg-slate-300/40 w-512 justify-around rounded-lg px-5">
				{sugs.map((x, index) => (
					<span
						onClick={() => {
							val_search(x);
						}}
						className="cursor-default hover:scale-110 transition duration-500 my-2 text-lg font-semibold text-slate-900/80"
					>
						<span className="p-2 m-2 bg-gray-500/20 rounded-full">{index + 1}</span>
						{x}
					</span>
				))}
				<span className="flex justify-center items-center font-bold m-2">
					链接由 <SiMicrosoftbing />
					Bing提供
				</span>
			</span>
			<span className="mt-16 justify-around flex bg-slate-400/50 w-32 py-2 rounded-lg scale-b">
				<span
					className={`transition hover:scale-125 duration-500 p-1 ${
						searchEngine === 0 ? `bg-slate-400/60` : `bg-transparent`
					}  rounded-md`}
					onClick={() => setSearchEngine(0)}
				>
					<SiMicrosoftbing />
				</span>
				<span
					className={`transition hover:scale-125 duration-500 p-1 ${
						searchEngine === 1 ? `bg-slate-400/60` : `bg-transparent`
					} rounded-md`}
					onClick={() => setSearchEngine(1)}
				>
					<SiBaidu />
				</span>
				<span
					className={`transition hover:scale-125 duration-500 p-1 ${
						searchEngine === 2 ? `bg-slate-400/60` : `bg-transparent`
					} rounded-md`}
					onClick={() => setSearchEngine(2)}
				>
					<SiGoogle />
				</span>
			</span>
		</div>
	);
}

export default App;
